"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Logo from "@/public/assets/images/logo.svg";
import Translate from "@/public/assets/icons/translate.svg";
import Bars from "@/public/assets/icons/bars.svg";
import RegionModal from "./RegionModal";

const menuItems = [
  { href: "'/#'", translationKey: "about" },
  { href: "'/#plans'", translationKey: "plans" },
  { href: "'/#'", translationKey: "products" },
  { href: "'/#payments'", translationKey: "payment" },
  { href: "'/#contact'", translationKey: "contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <header className="relative z-10 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-5">
        <nav className="flex items-center justify-between">
          <Link href="/" className="mr-8" aria-label="PASS">
            <Image src={Logo} width={120} height={40} alt="PASS logo" />
          </Link>

          <ul className="hidden gap-8 lg:flex">
            {menuItems.map((item) => (
              <li key={item.translationKey}>
                <Link
                  href={item.href}
                  className="text-neutral-900 hover:text-primary-dark transition-colors dark:text-neutral-50"
                >
                  {t(item.translationKey)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <button
                className="flex items-center gap-2"
                aria-label="Selecionar idioma e região"
                onClick={() => setIsRegionModalOpen(true)}
              >
                <Image
                  src={Translate}
                  width={35}
                  height={35}
                  alt="Bandeira do Brasil"
                  className="rounded-full object-cover"
                />
              </button>
            </div>
            <Link
              href="#"
              className="hidden rounded-full bg-neutral-900 px-4 py-2 font-semibold text-white transition-colors hover:bg-transparent hover:text-neutral-900 hover:ring-2 hover:ring-neutral-900 lg:block dark:bg-neutral-50 dark:hover:text-neutral-50 dark:hover:ring-neutral-50"
            >
              {t('login')}
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 p-1 text-gray-400 border rounded-full dark:text-neutral-50" />
              ) : (
                <Image
                  src={Bars}
                  width={25}
                  height={25}
                  alt="Menu"
                  className="rounded-full object-cover"
                />
              )}
            </button>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white px-4 pt-16 lg:hidden dark:bg-neutral-900">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="h-8 w-8 p-1 text-gray-400 border rounded-full dark:text-neutral-50" />
          </button>
          <ul className="mt-20 space-y-6">
            {menuItems.map((item) => (
              <li key={item.translationKey}>
                <Link
                  href={item.href}
                  className="text-4xl font-semibold text-neutral-900 transition-transform hover:translate-x-2 dark:text-neutral-50"
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
              className="rounded-full bg-neutral-900 px-4 py-2 font-semibold text-white dark:bg-neutral-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('login')}
            </Link>
            <button
              className="flex items-center gap-2"
              aria-label="Selecionar idioma e região"
              onClick={() => {
                setIsMenuOpen(false);
                setIsRegionModalOpen(true);
              }}
            >
              <Image
                src={Translate}
                width={35}
                height={35}
                alt="Bandeira do Brasil"
                className="rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      )}

      <RegionModal isOpen={isRegionModalOpen} onClose={() => setIsRegionModalOpen(false)} />
    </header>
  );
}