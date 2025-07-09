import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "@/api";
import FoodCard from "@/components/FoodCard";

export default function Home() {
  const [cats, setCats] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    api.get("categories/").then((r) => setCats(r.data));
    api.get("foods/?page_size=8").then((r) => setFoods(r.data.results ?? r.data));
  }, []);

  return (
    <section className="container mx-auto space-y-8 p-4">
      <h2 className="text-2xl font-bold">Kategoriyalar</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cats.map((c) => (
          <Link key={c.id} to={`/menu/${c.slug}`} className="rounded bg-muted p-4 text-center hover:bg-muted/80">
            {c.name}
          </Link>
        ))}
      </div>
      <h2 className="text-2xl font-bold">Mashhur taomlar</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {foods.map((f) => (
          <FoodCard food={f} key={f.id} />
        ))}
      </div>
    </section>
  );
}
