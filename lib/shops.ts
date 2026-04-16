export interface Shop {
  id: string;
  name: string;
  address: string;
  phone: string;
  imageUrl: string;
  category: string;
}

export const shops: Shop[] = [
  {
    id: "1",
    name: "Kerala Store",
    address: "MG Road, Kochi, Kerala",
    phone: "+91 98765 43210",
    imageUrl: "/images/product.png",
    category: "RETAIL PARTNER"
  },
  {
    id: "2",
    name: "Fresh Market",
    address: "Palayam, Trivandrum, Kerala",
    phone: "+91 98765 43211",
    imageUrl: "/images/product.png",
    category: "PREMIUM STOCKIST"
  },
  {
    id: "3",
    name: "Spice Route",
    address: "SM Street, Kozhikode, Kerala",
    phone: "+91 98765 43212",
    imageUrl: "/images/product.png",
    category: "LOCAL DELI"
  }
];
