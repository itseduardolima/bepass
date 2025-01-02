import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import ComputerFrame from '@/public/assets/images/computer.png';
import WebsiteScreen from '@/public/assets/images/website.webp';

export default function VirtualStore() {
  const t = useTranslations('virtual_store');

  return (
    <section className="pt-32 md:pt-80 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32">
        <div className="w-full md:w-[460px] flex flex-col">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-base md:text-lg text-text mb-8">
            {t('description')}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-5 py-2 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300 w-fit group"
          >
            <span className="font-medium">{t('schedule_demo')}</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative flex-1">
          <div className="relative w-full max-w-[600px] mx-auto">
            <Image
              src={ComputerFrame}
              alt=""
              className="w-full h-auto"
              priority
            />
            <div className="absolute top-[3%] left-[11.5%] w-[82%] h-[60%] overflow-hidden rounded-sm">
              <Image
                src={WebsiteScreen}
                alt={t('interface_alt')}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
