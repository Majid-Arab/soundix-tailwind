import Image, { StaticImageData } from "next/image";

export type ProductProp = {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  price: number;
  rating: number;
};
