import aiohttp
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton
from datetime import datetime

BOT_TOKEN = '8078632105:AAF_Mo_AkruTv0WZkmG91G_7HBObofHRwTM'
BASE_API_URL = 'jklhgfr676tfyghjvbkjhvgfxdfgrsw43e56rt787y65r47ew3sredhgcfjgkhgvjfchdtruytiugyfcdhftgutfyurdytrfyjgvcghdtrfuytgiuyhiulyugityfurtfjgk'
API_URL = f"http://127.0.0.1:8000/{ BASE_API_URL }"

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(bot)

logging.basicConfig(level=logging.INFO)

phone_button = ReplyKeyboardMarkup(resize_keyboard=True).add(
    KeyboardButton("📞 Raqamni yuborish", request_contact=True)
)

async def send_active_files(user_id: int):
    async with aiohttp.ClientSession() as session:
        async with session.get(f"{API_URL}/files/active_files/") as resp:
            if resp.status == 200:
                files = await resp.json()
                if files:
                    for file in files:
                        file_id = file.get("file_id")
                        if file_id:
                            await bot.send_document(chat_id=user_id, document=file_id)
                else:
                    await bot.send_message(user_id, "📂 Hozircha hech qanday faollashtirilgan fayl mavjud emas.")
            else:
                await bot.send_message(user_id, "❌ Fayllarni olishda xatolik yuz berdi.")


@dp.message_handler(commands=["start", "restart", "resend"])
async def start_handler(message: types.Message):
    tg_user_id = message.from_user.id
    username = message.from_user.username
    first_name = message.from_user.first_name
    last_name = message.from_user.last_name

    async with aiohttp.ClientSession() as session:
        async with session.get(f"{API_URL}/isuser/{tg_user_id}/") as resp:
            result = await resp.json()
            user_exists = result.get("exists", False)

    if user_exists:
        user_data = {
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
        }
        async with aiohttp.ClientSession() as session:
            await session.patch(f"{API_URL}/bot-users/{tg_user_id}/", json=user_data)

        await message.answer("✅ Ma'lumotlar yangilandi!", reply_markup=types.ReplyKeyboardRemove())

        await send_active_files(message.chat.id)

    else:
        await message.answer("📌 Iltimos, telefon raqamingizni yuboring!", reply_markup=phone_button)


@dp.message_handler(content_types=types.ContentType.CONTACT)
async def contact_handler(message: types.Message):
    tg_user_id = message.from_user.id
    username = message.from_user.username
    first_name = message.from_user.first_name
    last_name = message.from_user.last_name
    phone_number = message.contact.phone_number
    joined_at = datetime.now().isoformat()

    user_data = {
        "tg_user_id": tg_user_id,
        "username": username,
        "first_name": first_name,
        "last_name": last_name,
        "phone_number": phone_number,
        "joined_at": joined_at,
    }

    async with aiohttp.ClientSession() as session:
        async with session.post(f"{API_URL}/bot-users/", json=user_data) as resp:
            if resp.status == 201:
                await message.answer("✅ Siz muvaffaqiyatli ro‘yxatdan o‘tdingiz!", reply_markup=types.ReplyKeyboardRemove())

                await send_active_files(message.chat.id)

            else:
                await message.answer("❌ Xatolik yuz berdi, keyinroq urinib ko‘ring.")

if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)