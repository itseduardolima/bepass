"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import Buildings from "@/public/assets/images/buildings.webp";
import PassLogo from "@/public/assets/images/logo.svg";
import InstagramIcon from "@/public/assets/icons/instagram.png";
import TwitterIcon from "@/public/assets/icons/twitter.svg";
import YouTubeIcon from "@/public/assets/icons/youtube.svg";
import LinkedInIcon from "@/public/assets/icons/linkedin.svg";

export default function Footer() {
  const t = useTranslations("footer");
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  return (
    <motion.footer
      ref={footerRef}
      className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
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
        <motion.div
          className="text-center mt-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={PassLogo}
            alt="PASS"
            width={120}
            height={40}
            className="mx-auto mb-4 invert"
          />
          <p className="text-base text-white">{t("be_pass")}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <h3 className="text-base font-semibold mb-4">{t("address")}</h3>
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
            <h3 className="text-white font-semibold mb-4">{t("follow_us")}</h3>
            <div className="flex gap-6">
              <motion.a
                href="#"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={InstagramIcon}
                  alt="logo instagram"
                  width={20}
                  height={20}
                />
              </motion.a>
              <motion.a
                href="#"
                aria-label="Twitter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={TwitterIcon}
                  alt="logo x"
                  width={20}
                  height={20}
                  className="invert"
                />
              </motion.a>
              <motion.a
                href="#"
                aria-label="YouTube"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={YouTubeIcon}
                  alt="logo youtube"
                  width={20}
                  height={20}
                />
              </motion.a>
              <motion.a
                href="#"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={LinkedInIcon}
                  alt="logo linkedIn"
                  width={20}
                  height={20}
                  className="invert"
                />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm">{t("copyright")}</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
