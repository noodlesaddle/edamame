"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverEffect } from "@/components/ui/text-hover-effect";

const products = [
  {
    id: 1,
    name: "Tenderloin",
    description: "The most tender part in the center of the horse's body",
    price: 3500,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1603052871077-4a74c1b51e8b",
    badge: "Luxury Cut",
  },
  {
    id: 2,
    name: "Sirloin",
    description: "The tender part behind the back. A delicate part",
    price: 2500,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1561948951-5f4b5b1c4b7d",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Loin",
    description: "Front part of the back. It has a moderate amount of fat.",
    price: 2200,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1571599322509-3b8f90c7c8d5",
    badge: "Premium Cut",
  },
  {
    id: 4,
    name: "Shoulder Loin",
    description:
      "Meat from the shoulder area. A good balance of lean meat and fat.",
    price: 2000,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1571791030624-9cc9f9e3e2f7",
    badge: "Winter Favorite",
  },
  {
    id: 5,
    name: "Futaego (Premium Belly)",
    description:
      "Parts of short ribs. The meat along the rib bone, with a layer of fat and lean meat.",
    price: 1800,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1613471399514-d5e64c4a0f2f",
    badge: "Traditional",
  },
  {
    id: 6,
    name: "Shoulder Ribs",
    description:
      "Shoulder meat near the stomach side. It has more fat than the shoulder loin.",
    price: 1700,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1614345292534-70f62e8c1f45",
    badge: "Premium",
  },
  {
    id: 7,
    name: "Belly",
    description: "Meat from the belly of a horse. It has a lot of fat.",
    price: 1600,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1603052871077-4a74c1b51e8b",
    badge: "Luxury",
  },
  {
    id: 8,
    name: "Haraobi",
    description:
      "The belly meat of the horse is particularly fatty. It is a particularly high-quality part of the belly meat.",
    price: 2800,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1571791030624-9cc9f9e3e2f7",
    badge: "Premium Cut",
  },
  {
    id: 9,
    name: "Koune",
    description: "The fat at the base of a horse's mane.",
    price: 1500,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1613471399514-d5e64c4a0f2f",
    badge: "Specialty",
  },
  {
    id: 10,
    name: "Cheek",
    description: "Meat from both cheeks of a horse. A part with little fat.",
    price: 1800,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1614345292534-70f62e8c1f45",
    badge: "Unique",
  },
  {
    id: 11,
    name: "Tongue",
    description: "Horse tongue. Cut it off from the base.",
    price: 1600,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1613471399514-d5e64c4a0f2f",
    badge: "Specialty",
  },
  {
    id: 12,
    name: "Heart",
    description: "Horse heart.",
    price: 2000,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1603052871077-4a74c1b51e8b",
    badge: "Healthy Choice",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-transparent dark:bg-gray-800  p-6">
        <h1 className="text-3xl font-bold mt-12 text-center">
          Our Premium Horse Meat Products
        </h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {products.map((product) => (
            <Card className="w-full h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{product.name}</CardTitle>
                  <Badge variant="secondary">{product.badge}</Badge>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-2xl font-bold">
                  ¥{product.price.toLocaleString()} {product.unit}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
