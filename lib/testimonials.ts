export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  quote: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Meera Nair",
    designation: "Homemaker",
    quote: "The Inji Curry tastes exactly like what my grandmother used to make. Authentic and delicious! A must-have with every meal.",
    avatarUrl: "/images/avatar.png"
  },
  {
    id: "2",
    name: "Rahul Menon",
    designation: "Food Blogger",
    quote: "Haritham Kitchen has captured the true essence of Kerala tradition. The balance of spice and sweetness is absolute perfection.",
    avatarUrl: "/images/avatar.png"
  },
  {
    id: "3",
    name: "Anjali Varghese",
    designation: "Loyal Customer",
    quote: "I've tried many store-bought pickles, but nothing comes close to this homemade quality. No artificial taste, just pure goodness.",
    avatarUrl: "/images/avatar.png"
  }
];
