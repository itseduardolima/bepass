"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Logo from "@/public/assets/images/logo.svg";
import Bars from "@/public/assets/icons/bars.svg";
import RegionModal from "./RegionModal";
import MegaMenu from "./MegaMenu";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { href: "/#", translationKey: "products" },
  { href: "/#", translationKey: "about" },
  { href: "/#plans", translationKey: "plans" },
  { href: "/#payments", translationKey: "payment" },
  { href: "/#contact", translationKey: "contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <motion.header
      className={`absolute top-0 left-0 right-0 z-50 ${
        isMegaMenuOpen ? "bg-white" : ""
      }`}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-5">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href="/" className="mr-8" aria-label="PASS">
              <Image src={Logo} width={120} height={40} alt="PASS logo" />
            </Link>

            <motion.ul
              className="hidden gap-8 lg:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >
              {menuItems.map((item) => (
                <motion.li
                  key={item.translationKey}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => {
                      if (item.translationKey === "products") {
                        setIsMegaMenuOpen(!isMegaMenuOpen);
                      }
                    }}
                    className={`text-primary hover:text-text transition-colors inline-flex items-center gap-1 ${
                      item.translationKey === "products" && isMegaMenuOpen
                        ? "text-text"
                        : ""
                    }`}
                  >
                    {t(item.translationKey)}
                    {item.translationKey === "products" && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isMegaMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="flex items-center gap-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="relative hidden lg:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="flex items-center gap-2 text-primary"
                aria-label="Selecionar idioma e região"
                onClick={() => setIsRegionModalOpen(true)}
              >
                {t("language")}
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="hidden text-primary rounded-full bg-[#6c697d0d] border border-[#bdbbc9] px-8 py-4 lg:block"
              >
                {t("login")}
              </Link>
            </motion.div>
            <motion.button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 p-1 text-gray-400 border rounded-full" />
              ) : (
                <Image
                  src={Bars}
                  width={25}
                  height={25}
                  alt="Menu"
                  className="rounded-full object-cover"
                />
              )}
            </motion.button>
          </motion.div>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-white px-4 pt-16 lg:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-4 right-4 p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="h-8 w-8 p-1 text-gray-400 border rounded-full" />
            </button>
            <ul className="mt-20 space-y-6">
              {menuItems.map((item) => (
                <li key={item.translationKey}>
                  <Link
                    href={item.href}
                    className="text-4xl font-semibold text-neutral-900 transition-transform hover:translate-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pb-8">
              <Link
                href="#"
                className="rounded-full bg-[#6c697d0d] border border-[#bdbbc9] px-8 py-4 text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("login")}
              </Link>
              <button
                className="flex items-center gap-2"
                aria-label="Selecionar idioma e região"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsRegionModalOpen(true);
                }}
              >
                {t("language")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMegaMenuOpen && <MegaMenu isOpen={isMegaMenuOpen} />}
      </AnimatePresence>

      <RegionModal
        isOpen={isRegionModalOpen}
        onClose={() => setIsRegionModalOpen(false)}
        key={locale}
      />
    </motion.header>
  );
}
