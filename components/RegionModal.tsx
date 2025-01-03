"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Globe, Languages, DollarSign } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { useCurrency } from '@/contexts/CurrencyContext';

interface RegionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegionModal({ isOpen, onClose }: RegionModalProps) {
  const t = useTranslations('region');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState(currentLocale);
  const { currency, setCurrency } = useCurrency();

  const handleSave = () => {
    if (selectedLanguage !== currentLocale) {
      router.push(pathname, { locale: selectedLanguage });
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center text-primary gap-2">
                <Languages className="h-5 w-5" />
                <span className="font-medium ">{t('language.label')}</span>
              </div>
              {selectedLanguage !== 'en' && (
                <button 
                  className="text-blue-500 text-sm"
                  onClick={() => setSelectedLanguage('en')}
                >
                  {t('language.switchToEnglish')}
                </button>
              )}
            </div>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t('language.label')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pt">{t('language.options.pt')}</SelectItem>
                <SelectItem value="en">{t('language.options.en')}</SelectItem>
                <SelectItem value="es">{t('language.options.es')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-primary gap-2">
              <Globe className="h-5 w-5" />
              <span className="font-medium">{t('country.label')}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('country.helper')}
            </p>
            <Select defaultValue="BR">
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t('country.label')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BR">{t('country.options.BR')}</SelectItem>
                <SelectItem value="US">{t('country.options.US')}</SelectItem>
                <SelectItem value="ES">{t('country.options.ES')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-primary gap-2">
              <DollarSign className="h-5 w-5" />
              <span className="font-medium">{t('currency.label')}</span>
            </div>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t('currency.label')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BRL">{t('currency.options.BRL')}</SelectItem>
                <SelectItem value="USD">{t('currency.options.USD')}</SelectItem>
                <SelectItem value="EUR">{t('currency.options.EUR')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            onClick={handleSave}
            className="w-full rounded-xl bg-neutral-900 font-semibold text-white hover:bg-neutral-800"
          >
            {t('buttons.save')}
          </Button>
          <Button
            onClick={onClose}
            variant="secondary"
            className="w-full bg-neutral-200 font-semibold rounded-xl hover:bg-neutral-200"
          >
            {t('buttons.cancel')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}