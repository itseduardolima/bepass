import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Buildings from '@/public/assets/images/buildings.webp';
import PassLogo from '@/public/assets/images/logo.svg';
import InstagramIcon from '@/public/assets/icons/instagram.png';
import TwitterIcon from '@/public/assets/icons/twitter.svg';
import YouTubeIcon from '@/public/assets/icons/youtube.svg';
import LinkedInIcon from '@/public/assets/icons/linkedin.svg';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2/5 overflow-hidden">
        <Image
          src={Buildings}
          alt="Modern buildings"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-96 pb-20 w-full flex flex-col gap-80">
        <div className="text-center mt-8">
          <Image
            src={PassLogo}
            alt="PASS"
            width={120}
            height={40}
            className="mx-auto mb-4 invert"
          />
          <p className="text-base text-white">{t('be_pass')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base font-semibold mb-4">{t('address')}</h3>
            <p className="text-sm mb-2">Canela, Rio Grande do Sul</p>
            <p className="text-sm mb-2">Porto Alegre, Rio Grande do Sul</p>
            <p className="text-sm mb-2">São Paulo, São Paulo</p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">E-mail</h3>
            <p className="text-sm mb-2">comercial@pass.business</p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Website</h3>
            <p className="text-sm mb-2">pass.business</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('follow_us')}</h3>
            <div className="flex gap-6">
              <a href="#" aria-label="Instagram">
                <Image src={InstagramIcon} alt="" width={20} height={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Image src={TwitterIcon} alt="" width={20} height={20} className="invert" />
              </a>
              <a href="#" aria-label="YouTube">
                <Image src={YouTubeIcon} alt="" width={20} height={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Image src={LinkedInIcon} alt="" width={20} height={20} className="invert" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}