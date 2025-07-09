// /client/src/pages/ConfirmPage.jsx
import { Link } from "react-router-dom";

export default function ConfirmPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-3xl font-bold text-green-600">Bron qilindi!</h1>
      <p className="text-gray-700">Biz siz bilan tez orada aloqaga chiqamiz.</p>
      <Link
        to="/"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}