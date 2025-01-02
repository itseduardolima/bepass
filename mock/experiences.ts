import ParkImage from "@/public/assets/images/park.webp";
import HotelImage from "@/public/assets/images/hotel.webp";
import BarImage from "@/public/assets/images/bar.webp";
import BusinessImage from "@/public/assets/images/negocios.jpg";
import { StaticImageData } from "next/image";

export interface Experience {
  titleKey: string;
  image: StaticImageData;
}

export const experiences: Experience[] = [
  { titleKey: "parks_agencies", image: ParkImage },
  { titleKey: "hotels_resorts", image: HotelImage },
  { titleKey: "bars_restaurants", image: BarImage },
  { titleKey: "business_companies", image: BusinessImage },
];