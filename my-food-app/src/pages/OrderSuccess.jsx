import { useParams, Link } from "react-router-dom";

export default function OrderSuccess() {
  const { id } = useParams();
  return (
    <section className="grid min-h-[60vh] place-items-center p-4 text-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Rahmat!</h1>
        <p>Buyurtmangiz #{id} qabul qilindi.</p>
        <Link to="/" className="text-primary underline">Bosh sahifaga qaytish</Link>
      </div>
    </section>
  );
}
