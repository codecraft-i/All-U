// TableList.jsx
export default function TableList({ tables, selected, onSelect }) {
  const toggle = (table) => {
    const active = selected.some((t) => t.id === table.id);
    onSelect(
      active ? selected.filter((t) => t.id !== table.id) : [...selected, table]
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {tables.map((tbl) => {
        const active = selected.some((t) => t.id === tbl.id);
        return (
          <button
            key={tbl.id}
            type="button"
            onClick={() => toggle(tbl)}
            className={`border p-2 rounded text-center focus:outline-none ${
              active
                ? "bg-blue-100 border-blue-500 ring-2 ring-blue-300"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="font-semibold">Stol #{tbl.number}</div>
            <div>{tbl.capacity} kishilik</div>
            <div className="text-sm text-gray-600">{tbl.category}</div>
            {Number(tbl.extra_fee) > 0 && (
              <div className="text-sm text-red-600">
                +{Number(tbl.extra_fee).toLocaleString()} so'm
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}