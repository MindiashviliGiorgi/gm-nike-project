export interface MensData {
  men: {
    [key: string]: {
      id: number;
      avatar: string;
      name: string;
      category: string;
      color: string;
      price: number;
      images: { imageSrc: string }[];
    };
  };
}

export interface MensShoes {
  id: number;
  avatar: string;
  name: string;
  category: string;
  color: string;
  price: number;
  images: { imageSrc: string }[];
}
