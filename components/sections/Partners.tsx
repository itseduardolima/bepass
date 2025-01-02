import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PassBuilding from '@/public/assets/images/pass-building.webp';

export default function Partners() {
  const t = useTranslations('partners');

  return (
    <section className="bg-[#EAE7E5] pt-24 h-[750px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-text mb-8">
            {t('description')}
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-primary rounded-full text-primary text-base font-medium hover:bg-primary hover:text-white transition-colors duration-300">
            {t('how_it_works')}
          </button>
        </div>
        <div className="w-full max-w-3xl rounded-lg overflow-hidden">
          <Image
            src={PassBuilding}
            alt={t('building_alt')}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}