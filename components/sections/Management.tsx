import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LaptopUser from '@/public/assets/images/laptop-user.webp';

export default function Management() {
  const t = useTranslations('management');

  return (
    <section className="relative w-full min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src={LaptopUser}
          alt=""
          fill
          className="object-cover object-left-center scale-x-[-1]"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto min-h-[600px] flex items-center px-5">
        <div className="max-w-[500px] relative z-10 bg-white/30 p-6 rounded-lg backdrop-blur-sm md:bg-transparent md:p-0 md:backdrop-blur-none">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-base md:text-lg text-text mb-8">
            {t('description')}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            {t('see_our_products')}
          </a>
        </div>
      </div>
    </section>
  );
}