import Image from 'next/image';
import PassCard from '@/public/assets/images/pass-card.webp';

export default function PassCardShowcase() {
  return (
    <section className="relative w-full pb-16 h-[50vh] md:h-[90vh] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={PassCard}
          alt="PASS Card"
          fill
          className="object-cover object-center sm:object-[center_30%]"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-[rgba(173,216,230,0.2)]" />
      </div>
    </section>
  );
}