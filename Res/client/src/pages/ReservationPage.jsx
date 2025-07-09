import { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TableList from "../components/TableList";
import "../styles/reservation.css"; // <— qo‘shildi

const TIME_SLOTS = [
  "12:00", "12:30", "13:00", "13:30",
  "18:00", "18:30", "19:00", "19:30", "20:00",
];

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
});

export default function ReservationPage() {
  /* ====== Date helpers ====== */
  const today = new Date();
  const minDate = today.toISOString().slice(0, 10);

  /* ====== State ====== */
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(4);
  const [available, setAvailable] = useState([]);
  const [selected, setSelected] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  /* ====== Slot filtering (past => disabled) ====== */
  const slotsForDay = useMemo(() => {
    if (!date) return TIME_SLOTS.map(v => ({ v, disabled: false }));

    const d = new Date(date);
    const isToday =
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate();

    if (!isToday) return TIME_SLOTS.map(v => ({ v, disabled: false }));

    const now = `${today.getHours().toString().padStart(2, "0")}:${today
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    return TIME_SLOTS.map(v => ({ v, disabled: v <= now }));
  }, [date, today]);

  useEffect(() => {
    if (time && slotsForDay.find(s => s.v === time && s.disabled)) setTime("");
  }, [slotsForDay, time]);

  /* ====== API helpers ====== */
  const searchTables = async () => {
    if (!date || !time) {
      setError("Sana va vaqt tanlang.");
      return;
    }
    setLoading(true);
    try {
      const res = await api.post("/api/search-available-tables/", {
        date,
        time,
        people,
      });
      setAvailable(res.data.tables);
      setSelected([]);
      setError(null);
    } catch (e) {
      setError(e.response?.data?.error || "Qidirishda xato.");
    } finally {
      setLoading(false);
    }
  };

  const submit = async () => {
    if (!name || !phone || !selected.length) {
      setError("Ma'lumotlarni to‘ldiring.");
      return;
    }
    const cap = selected.reduce((s, t) => s + t.capacity, 0);
    if (cap < people) {
      setError("Tanlangan stollar kichik.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/api/reserve/", {
        name,
        phone,
        date,
        time,
        people,
        note,
        table_ids: selected.map(t => t.id),
      });
      navigate("/confirm");
    } catch (e) {
      setError(e.response?.data?.error || "Band qilishda xato.");
    } finally {
      setLoading(false);
    }
  };

  /* ====== UI ====== */
  return (
    <div className="max-w-[680px] mx-auto bg-white rounded-md shadow-md p-8 mb-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">
          Reservation at <span className="font-bold">Your Restaurant</span>
        </h1>
        <a href="#" className="text-[13px] text-red-600 hover:underline">
          Sign in
        </a>
      </header>

      {/* Steps */}
      <nav className="border-b mb-6">
        <div className="flex gap-6 text-sm">
          <span className="step-active">1. Find a table</span>
          <span className="step">2. Your details</span>
        </div>
      </nav>

      {/* Filter bar */}
      <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 mb-5">
        {/* people */}
        <select
          value={people}
          onChange={e => setPeople(+e.target.value)}
          className="select"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} {i + 1 === 1 ? "person" : "people"}
            </option>
          ))}
        </select>

        {/* date */}
        <input
          type="date"
          value={date}
          min={minDate}
          onChange={e => setDate(e.target.value)}
          className="select"
        />

        {/* time */}
        <select
          value={time}
          onChange={e => setTime(e.target.value)}
          className="select"
        >
          <option value="">Time</option>
          {slotsForDay.map(({ v, disabled }) => (
            <option
              key={v}
              value={v}
              disabled={disabled}
              className={disabled ? "text-gray-400" : ""}
            >
              {v}
            </option>
          ))}
        </select>

        {/* button */}
        <button
          onClick={searchTables}
          disabled={loading}
          className="btn-primary"
        >
          Find a table
        </button>
      </div>

      {/* Slots row (primary suggestion) */}
      {available.length > 0 && (
        <>
          <div className="slot-row mb-6">
            {TIME_SLOTS.slice(0, 2).map(s => (
              <button
                key={s}
                className="slot-active"
                onClick={() => setTime(s)}
              >
                {s}
              </button>
            ))}
            {[...Array(3)].map((_, i) => (
              <button key={i} className="slot" disabled></button>
            ))}
            <button className="slot-ghost">Notify me</button>
          </div>

          {/* Table selection */}
          <h3 className="text-lg font-semibold mb-4">Mavjud stollar:</h3>
          <TableList
            tables={available}
            selected={selected}
            onSelect={setSelected}
          />
        </>
      )}

      {/* Details form */}
      {selected.length > 0 && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Your details</h3>
          <div className="grid gap-3 mb-4">
            <input
              className="select"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className="select"
              placeholder="Phone (+998..)"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <textarea
              className="select h-24 resize-none"
              placeholder="Note (optional)"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          </div>
          <button
            onClick={submit}
            disabled={loading}
            className="btn-success w-full"
          >
            {loading ? "Sending…" : "Reserve"}
          </button>
        </div>
      )}

      {error && (
        <p className="text-red-600 text-center mt-4 text-sm font-medium">
          {error}
        </p>
      )}
    </div>
  );
}