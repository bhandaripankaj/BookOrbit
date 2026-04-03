import cover1 from "@/assets/book-cover-1.jpg";
import cover2 from "@/assets/book-cover-2.jpg";
import cover3 from "@/assets/book-cover-3.jpg";
import cover4 from "@/assets/book-cover-4.jpg";
import cover5 from "@/assets/book-cover-5.jpg";
import cover6 from "@/assets/book-cover-6.jpg";

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  cover: string;
  category: string;
}

export const books: Book[] = [
  { id: "1", title: "The Silent Algorithm", author: "Maya Chen", price: 24.99, rating: 4.8, cover: cover1, category: "Tech" },
  { id: "2", title: "Desert Bloom", author: "Amir Khalil", price: 18.99, rating: 4.5, cover: cover2, category: "Fiction" },
  { id: "3", title: "The Green Path", author: "Luna Verde", price: 21.99, rating: 4.7, cover: cover3, category: "Self-help" },
  { id: "4", title: "Cosmic Horizons", author: "Dr. Stella Nova", price: 29.99, rating: 4.9, cover: cover4, category: "Science" },
  { id: "5", title: "Summit Echoes", author: "Jack Ridgeway", price: 16.99, rating: 4.3, cover: cover5, category: "Fiction" },
  { id: "6", title: "Tidal Minds", author: "Cora Seaswell", price: 19.99, rating: 4.6, cover: cover6, category: "Self-help" },
];

export const categories = [
  { name: "Fiction", icon: "📖", count: 3420 },
  { name: "Technology", icon: "💻", count: 1850 },
  { name: "Self-help", icon: "🌱", count: 2100 },
  { name: "Science", icon: "🔬", count: 1200 },
  { name: "Business", icon: "📊", count: 980 },
  { name: "Art & Design", icon: "🎨", count: 760 },
];
