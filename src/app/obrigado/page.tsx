"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function Obrigado() {
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rotinamonetizada@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center px-4 py-8 max-w-md mx-auto w-full font-semibold animate-fadeIn flex-1">
        <div className="bg-white p-6 py-8 rounded-xl w-full text-center border border-gray-200">
          <h1 className="text-2xl font-bold text-[#FF2772] mb-6">
            PARABÉNS PELO GRANDE PASSO QUE VOCÊ DEU EM SUA VIDA
          </h1>

          <p className="text-[#183B56] mb-2 font-bold text-lg">
            CLIQUE AQUI ⬇️
          </p>

          <Button
            animated
            color="secondary"
            onClick={() => window.open("https://rotinamonetizada.academy.perfectpay.com.br/login/", "_blank")}
            className="w-full text-white text-lg font-bold rounded-md py-4 shadow-md mb-6"
          >
            ACESSAR PLATAFORMA
          </Button>

          <div className="text-center w-full">
            <div className="flex items-center justify-center gap-2 mb-4">
              <input
                type="text"
                value="rotinamonetizada@gmail.com"
                disabled
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 text-sm"
              />
              <Button
                onClick={copyEmail}
                className="px-4 py-2 bg-[#00D9E2] text-white text-sm font-bold rounded-md hover:bg-[#00B8C8]"
              >
                {copied ? "Copiado!" : "Copiar"}
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#183B56] text-sm">Senha:</span>
              <input
                type={showPassword ? "text" : "password"}
                value="Aluno123"
                disabled
                className="px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 text-sm flex-1"
              />
              <Button
                onClick={() => setShowPassword(!showPassword)}
                className="px-4 py-2 bg-[#00D9E2] text-white text-sm font-bold rounded-md hover:bg-[#00B8C8]"
              >
                {showPassword ? "Ocultar" : "Revelar"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
