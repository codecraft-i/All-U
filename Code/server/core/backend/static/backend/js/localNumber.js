const countries = [
    { name: "Afghanistan (افغانستان)", code: "+93", flag: "af" },
    { name: "Albania (Shqipëri)", code: "+355", flag: "al" },
    { name: "Algeria (الجزائر)", code: "+213", flag: "dz" },
    { name: "Andorra", code: "+376", flag: "ad" },
    { name: "Angola", code: "+244", flag: "ao" },
    { name: "Antigua and Barbuda", code: "+1-268", flag: "ag" },
    { name: "Argentina", code: "+54", flag: "ar" },
    { name: "Armenia (Հայաստան)", code: "+374", flag: "am" },
    { name: "Australia", code: "+61", flag: "au" },
    { name: "Austria (Österreich)", code: "+43", flag: "at" },
    { name: "Azerbaijan (Azərbaycan)", code: "+994", flag: "az" },
    { name: "Bahamas", code: "+1-242", flag: "bs" },
    { name: "Bahrain (البحرين)", code: "+973", flag: "bh" },
    { name: "Bangladesh (বাংলাদেশ)", code: "+880", flag: "bd" },
    { name: "Barbados", code: "+1-246", flag: "bb" },
    { name: "Belarus (Беларусь)", code: "+375", flag: "by" },
    { name: "Belgium (België)", code: "+32", flag: "be" },
    { name: "Belize", code: "+501", flag: "bz" },
    { name: "Benin (Bénin)", code: "+229", flag: "bj" },
    { name: "Bhutan (འབྲུག)", code: "+975", flag: "bt" },
    { name: "Bolivia (Bolivia)", code: "+591", flag: "bo" },
    { name: "Bosnia and Herzegovina (Bosna i Hercegovina)", code: "+387", flag: "ba" },
    { name: "Botswana", code: "+267", flag: "bw" },
    { name: "Brazil (Brasil)", code: "+55", flag: "br" },
    { name: "Brunei", code: "+673", flag: "bn" },
    { name: "Bulgaria (България)", code: "+359", flag: "bg" },
    { name: "Burkina Faso", code: "+226", flag: "bf" },
    { name: "Burundi (Uburundi)", code: "+257", flag: "bi" },
    { name: "Cambodia (កម្ពុជា)", code: "+855", flag: "kh" },
    { name: "Cameroon (Cameroun)", code: "+237", flag: "cm" },
    { name: "Canada", code: "+1", flag: "ca" },
    { name: "Cape Verde (Cabo Verde)", code: "+238", flag: "cv" },
    { name: "Chad (Tchad)", code: "+235", flag: "td" },
    { name: "Chile", code: "+56", flag: "cl" },
    { name: "China (中国)", code: "+86", flag: "cn" },
    { name: "Colombia", code: "+57", flag: "co" },
    { name: "Costa Rica", code: "+506", flag: "cr" },
    { name: "Croatia (Hrvatska)", code: "+385", flag: "hr" },
    { name: "Cuba", code: "+53", flag: "cu" },
    { name: "Cyprus (Κύπρος)", code: "+357", flag: "cy" },
    { name: "Czech Republic (Česko)", code: "+420", flag: "cz" },
    { name: "Denmark (Danmark)", code: "+45", flag: "dk" },
    { name: "Dominican Republic (República Dominicana)", code: "+1-809", flag: "do" },
    { name: "Ecuador", code: "+593", flag: "ec" },
    { name: "Egypt (مصر)", code: "+20", flag: "eg" },
    { name: "El Salvador", code: "+503", flag: "sv" },
    { name: "Estonia (Eesti)", code: "+372", flag: "ee" },
    { name: "Ethiopia (ኢትዮጵያ)", code: "+251", flag: "et" },
    { name: "Fiji", code: "+679", flag: "fj" },
    { name: "Finland (Suomi)", code: "+358", flag: "fi" },
    { name: "France", code: "+33", flag: "fr" },
    { name: "Gabon", code: "+241", flag: "ga" },
    { name: "Georgia (საქართველო)", code: "+995", flag: "ge" },
    { name: "Germany (Deutschland)", code: "+49", flag: "de" },
    { name: "Ghana", code: "+233", flag: "gh" },
    { name: "Greece (Ελλάδα)", code: "+30", flag: "gr" },
    { name: "Guatemala", code: "+502", flag: "gt" },
    { name: "Haiti (Haïti)", code: "+509", flag: "ht" },
    { name: "Honduras", code: "+504", flag: "hn" },
    { name: "Hungary (Magyarország)", code: "+36", flag: "hu" },
    { name: "Iceland (Ísland)", code: "+354", flag: "is" },
    { name: "India (भारत)", code: "+91", flag: "in" },
    { name: "Indonesia", code: "+62", flag: "id" },
    { name: "Iran (ایران)", code: "+98", flag: "ir" },
    { name: "Iraq (العراق)", code: "+964", flag: "iq" },
    { name: "Ireland (Éire)", code: "+353", flag: "ie" },
    { name: "Israel (ישראל)", code: "+972", flag: "il" },
    { name: "Italy (Italia)", code: "+39", flag: "it" },
    { name: "Jamaica", code: "+1-876", flag: "jm" },
    { name: "Japan (日本)", code: "+81", flag: "jp" },
    { name: "Jordan (الأردن)", code: "+962", flag: "jo" },
    { name: "Kazakhstan (Қазақстан)", code: "+7", flag: "kz" },
    { name: "Kenya", code: "+254", flag: "ke" },
    { name: "Kuwait (الكويت)", code: "+965", flag: "kw" },
    { name: "Kyrgyzstan (Кыргызстан)", code: "+996", flag: "kg" },
    { name: "Laos (ລາວ)", code: "+856", flag: "la" },
    { name: "Latvia (Latvija)", code: "+371", flag: "lv" },
    { name: "Lebanon (لبنان)", code: "+961", flag: "lb" },
    { name: "Libya (ليبيا)", code: "+218", flag: "ly" },
    { name: "Lithuania (Lietuva)", code: "+370", flag: "lt" },
    { name: "Luxembourg (Lëtzebuerg)", code: "+352", flag: "lu" },
    { name: "Madagascar (Madagasikara)", code: "+261", flag: "mg" },
    { name: "Malawi", code: "+265", flag: "mw" },
    { name: "Malaysia", code: "+60", flag: "my" },
    { name: "Maldives (ދިވެހި)", code: "+960", flag: "mv" },
    { name: "Mali", code: "+223", flag: "ml" },
    { name: "Malta", code: "+356", flag: "mt" },
    { name: "Mauritius", code: "+230", flag: "mu" },
    { name: "Mexico (México)", code: "+52", flag: "mx" },
    { name: "Mongolia (Монгол)", code: "+976", flag: "mn" },
    { name: "Morocco (المغرب)", code: "+212", flag: "ma" },
    { name: "Netherlands (Nederland)", code: "+31", flag: "nl" },
    { name: "New Zealand", code: "+64", flag: "nz" },
    { name: "Norway (Norge)", code: "+47", flag: "no" },
    { name: "Pakistan (پاکستان)", code: "+92", flag: "pk" },
    { name: "Philippines", code: "+63", flag: "ph" },
    { name: "Poland (Polska)", code: "+48", flag: "pl" },
    { name: "Portugal", code: "+351", flag: "pt" },
    { name: "Qatar (قطر)", code: "+974", flag: "qa" },
    { name: "Romania (România)", code: "+40", flag: "ro" },
    { name: "Russia (Россия)", code: "+7", flag: "ru" },
    { name: "Saudi Arabia (السعودية)", code: "+966", flag: "sa" },
    { name: "South Africa", code: "+27", flag: "za" },
    { name: "South Korea (대한민국)", code: "+82", flag: "kr" },
    { name: "Spain (España)", code: "+34", flag: "es" },
    { name: "Sweden (Sverige)", code: "+46", flag: "se" },
    { name: "Switzerland (Schweiz)", code: "+41", flag: "ch" },
    { name: "Syria (سوريا)", code: "+963", flag: "sy" },
    { name: "Tajikistan (Тоҷикистон)", code: "+992", flag: "tj" },
    { name: "Thailand (ประเทศไทย)", code: "+66", flag: "th" },
    { name: "Turkey (Türkiye)", code: "+90", flag: "tr" },
    { name: "Turkmenistan (Türkmenistan)", code: "+993", flag: "tm" },
    { name: "Ukraine (Україна)", code: "+380", flag: "ua" },
    { name: "United Arab Emirates (الإمارات)", code: "+971", flag: "ae" },
    { name: "United Kingdom", code: "+44", flag: "gb" },
    { name: "United States", code: "+1", flag: "us" },
    { name: "Uzbekistan (O'zbekiston)", code: "+998", flag: "uz" },
    { name: "Vietnam (Việt Nam)", code: "+84", flag: "vn" },
    { name: "Yemen (اليمن)", code: "+967", flag: "ye" }
];


let selectedCountryLength = null;

function toggleDropdown() {
    const list = document.getElementById("countryList");
    list.style.display = list.style.display === "block" ? "none" : "block";
    event.stopPropagation();
}

function selectCountry(code, flag, length) {
    document.getElementById("code").innerText = code;
    document.getElementById("flag").src = `https://flagcdn.com/w40/${flag}.png`;
    document.getElementById("countryList").style.display = "none";
    selectedCountryLength = code === "+998" ? 9 : length;
    updateFullPhone();
}

window.onload = function() {
    const list = document.getElementById("countryList");
    countries.forEach(country => {
        let div = document.createElement("div");
        div.innerHTML = `<span class="country-name">${country.name}</span> <span>${country.code}</span> <img src="https://flagcdn.com/w40/${country.flag}.png" class="flag" style="margin-left: 5px;">`;
        div.onclick = () => selectCountry(country.code, country.flag, country.length);
        list.appendChild(div);
    });
}

function updateFullPhone() {
    const countryCode = document.getElementById("code").innerText.trim();
    const phoneNumber = document.getElementById("phone").value.trim().replace(/\s/g, '');
    const fullPhone = countryCode + phoneNumber;
    document.getElementById("fullPhone").value = fullPhone;

    let errorDiv = document.getElementById("submitError");
    if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.id = "submitError";
        errorDiv.style.color = "red";
        document.getElementById("phone").parentNode.appendChild(errorDiv);
    }

    let submitErrorDiv = document.getElementById("submitError");
    if (!submitErrorDiv) {
        submitErrorDiv = document.createElement("div");
        submitErrorDiv.id = "submitError";
        submitErrorDiv.style.color = "red";
        submitErrorDiv.style.marginTop = "10px";
        document.getElementById("registrationForm").appendChild(submitErrorDiv);
    }

    if (countryCode === "+998") {
        if (phoneNumber.length > 9) {
            document.getElementById("phone").value = phoneNumber.slice(0, 9);
            errorDiv.innerText = "Telefon raqami 9 raqamdan iborat bo‘lishi kerak!";
        } else if (phoneNumber.length < 9 && phoneNumber.length > 0) {
            errorDiv.innerText = "Telefon raqami 9 raqamdan iborat bo‘lishi kerak!";
        } else {
            errorDiv.innerText = "";
        }
    } else {
        if (phoneNumber.length > 20) {
            document.getElementById("phone").value = phoneNumber.slice(0, 20);
            errorDiv.innerText = "Telefon raqami 20 raqamdan oshmasligi kerak!";
        } else if (phoneNumber.length < 1 && phoneNumber.length > 0) {
            errorDiv.innerText = "Telefon raqami kamida 1 raqamdan iborat bo‘lishi kerak!";
        } else {
            errorDiv.innerText = "";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    phoneInput.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        updateFullPhone();
    });

    document.addEventListener("click", function(event) {
        const countryList = document.getElementById("countryList");
        if (countryList.style.display === "block") {
            countryList.style.display = "none";
        }
    });

    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        updateFullPhone();
        const phoneNumber = document.getElementById("phone").value.trim().replace(/\s/g, '');
        const countryCode = document.getElementById("code").innerText.trim();
        const submitErrorDiv = document.getElementById("submitError");

        if (countryCode === "+998" && phoneNumber.length !== 9) {
            event.preventDefault();
            submitErrorDiv.innerText = "Telefon raqami 9 raqamdan iborat bo‘lishi kerak!";
            return;
        } else if (countryCode !== "+998" && (phoneNumber.length < 1 || phoneNumber.length > 20)) {
            event.preventDefault();
            submitErrorDiv.innerText = "Telefon raqami 1 dan 20 gacha raqamdan iborat bo‘lishi kerak!";
            return;
        } else {
            submitErrorDiv.innerText = "";
        }

        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
        if (!csrfToken || csrfToken.value === "") {
            event.preventDefault();
            submitErrorDiv.innerText = "Xatolik: CSRF token topilmadi!";
        }
    });
});