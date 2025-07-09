import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

export default function FoodCard({ food }) {
  const { dispatch } = useCart();

  return (
    <motion.div whileHover={{ y: -4 }}>
      <Card className="w-full overflow-hidden">
        <img src={food.image} alt={food.name} className="h-40 w-full object-cover" />
        <CardContent className="space-y-2">
          <h3 className="line-clamp-1 text-lg font-semibold">{food.name}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{food.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-medium">{food.price} soʻm</span>
            <Button size="sm" onClick={() => dispatch({ type: "ADD", item: { food, qty: 1 } })}>Savatga</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
