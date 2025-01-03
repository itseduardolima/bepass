import Image from "next/image";
import { useTranslations } from "next-intl";
import LaptopUser from "@/public/assets/images/laptop-user.webp";
import { Button } from "../ui/button";

export default function Management() {
  const t = useTranslations("management");

  return (
    <section className="relative w-full min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src={LaptopUser}
          alt="Laptop"
          fill
          className="object-cover object-left-center scale-x-[-1]"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto min-h-[600px] flex items-center px-5">
        <div className="max-w-[500px] relative z-10 p-2 rounded-lg md:p-0">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-text mb-8">
            {t("description")}
          </p>
          <Button variant="outline">{t("see_our_products")}</Button>
        </div>
      </div>
    </section>
  );
}
