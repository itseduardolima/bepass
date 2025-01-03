"use client";

import { motion } from "framer-motion";

interface ServiceCard {
  title: string;
  description: string;
}

interface MegaMenuProps {
  isOpen: boolean;
}

export default function MegaMenu({ isOpen }: MegaMenuProps) {

  const services: ServiceCard[] = [
    {
      title: "Pesquisa de Mercado",
      description: "Identifique tendências e insights do mercado",
    },
    {
      title: "Estratégia de Mídia",
      description: "Desenvolva e implemente planos de mídia personalizados",
    },
    {
      title: "Social Pago",
      description: "Alcance públicos-alvo em plataformas sociais",
    },
    {
      title: "Anúncios Nativos",
      description: "Integre conteúdo com experiência do usuário para gerar engajamento",
    },
    {
      title: "Programático",
      description: "Automatize a compra de anúncios para entregar mídia eficiente e orientada por dados",
    },
    {
      title: "Busca Paga",
      description: "Capture clientes com alta intenção através de anúncios direcionados",
    },
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="relative top-full left-0 right-0 bg-white shadow-lg border-t z-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex gap-16">
          
          <div className="w-72 border-r pr-8">
            <div className="space-y-4">
              <h3 className="text-3xl text-primary">Serviços de mídia</h3>
              <h3 className="text-3xl text-text/60">Serviços de dados</h3>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-primary mb-2">Visão Geral dos Serviços de Mídia</h2>
              <p className="text-text">Impulsione o crescimento da marca através de mídia direcionada e orientada por performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-primary mb-3 group-hover:text-text transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}