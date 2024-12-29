import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Phone from "@/public/assets/images/phone.svg"
import Logo from "@/public/assets/images/logo.svg"
import HeroBg from "@/public/assets/images/hero-bg.webp"

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <>
      <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white/10 to-white/30">
        <Image
          src={HeroBg}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="relative z-10 bottom-32 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-primary">
              {t('title')}
            </h1>
          </div>
        </div>
      </section>
    
      <div className="relative w-full">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-sm mx-auto px-4">
          <div className="relative aspect-[380/514]">
            <Image
              src={Phone}
              alt="Phone mockup"
              fill
              className="object-contain z-10"
            />
            <div className="absolute inset-[18%] inset-y-1 rounded-[35px] bg-white flex items-center justify-center">
              <Image
                src={Logo}
                alt="PASS logo"
                width={100}
                height={33}
                className="w-1/2 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}