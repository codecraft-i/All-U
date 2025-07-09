import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "@/api";
import FoodCard from "@/components/FoodCard";

export default function Menu() {
  const { slug } = useParams();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const url = slug ? `foods/?categories__slug=${slug}` : "foods/";
    api.get(url).then((r) => setFoods(r.data.results ?? r.data));
  }, [slug]);

  return (
    <section className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">{slug || "Barcha Taomlar"}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {foods.map((f) => (
          <FoodCard key={f.id} food={f} />
        ))}
      </div>
    </section>
  );
}
