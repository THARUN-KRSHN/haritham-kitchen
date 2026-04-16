export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  quote: string;
  avatarUrl: string;
  bgColor: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Meera Nair",
    designation: "Homemaker",
    quote: "Actually, there's a certain comfort in knowing that every jar is made with the same love and care as my own kitchen. It's truly homemade.",
    avatarUrl: "",
    bgColor: "#253B1F" // brand-dark
  },
  {
    id: "2",
    name: "Rahul Menon",
    designation: "Food Blogger",
    quote: "Haritham Kitchen has captured the true essence of Kerala tradition. The balance of spice and sweetness is absolute perfection in every bite.",
    avatarUrl: "",
    bgColor: "#735C35" // brand-brown
  },
  {
    id: "3",
    name: "Anjali Varghese",
    designation: "Loyal Customer",
    quote: "It's the only brand I trust for authentic ginger curry. The quality of ingredients shines through, making every meal special and grounded.",
    avatarUrl: "",
    bgColor: "#42A236" // brand-primary
  }
];
