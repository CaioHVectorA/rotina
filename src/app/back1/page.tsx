"use client";

import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

export default function Back1() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Marca que o usuário chegou na página de back
      localStorage.setItem('newAppBack1Visited', 'true');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center px-4 py-8 max-w-md mx-auto w-full font-semibold animate-fadeIn flex-1">
        {/* Main Content */}
        <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full text-center border border-gray-200">
          <h1 className="text-2xl font-bold text-[#FF2772] mb-4">ÚLTIMA CHANCE!</h1>
          <p className="text-[#183B56] mb-6 font-bold">Oferta Especial por Tempo Limitado</p>


          <div className="mb-6">
            <p className="text-lg mb-2">
              <span className="line-through text-red-500">de R$ 99,00</span>{" "}
              <span className="text-[#00D9E2] font-bold text-2xl">por R$ 69,00</span>
            </p>
            <p className="text-[#183B56] text-sm">
              Acesso completo ao TikTok Shop que está<br />transformando vidas financeiramente
            </p>
          </div>

          {/* Highlight Box */}
          <div className="bg-[#E6FCFF] border-2 border-[#00D9E2] rounded-lg p-6 mb-6">
            <h2 className="text-[#00D9E2] font-bold text-2xl mb-2">
              Por apenas R$<br />69,00
            </h2>
            <p className="text-[#183B56] text-sm">
              Desconto de R$99,00 por R$69,00 - Válido<br />apenas hoje!
            </p>
          </div>

          {/* CTA Button */}
          <Button
            animated
            color="secondary"
            onClick={() => window.location.href = "https://go.cinqpay.com.br/cdniw"}
            className="w-full text-white text-lg font-bold rounded-md py-4 shadow-md"
          >
            GARANTIR ACESSO AGORA
          </Button>
        </div>
      </div>
    </div>
  );
}
