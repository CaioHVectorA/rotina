"use client";

import { Button } from "@/components/ui/Button";

// Novos links gerais de checkout
const FRONT_CHECKOUT = "https://go.perfectpay.com.br/PPU38CQ1PRB";
const BACK_CHECKOUT = "https://go.perfectpay.com.br/PPU38CQ1PT6";

export default function Upsell() {
  const plans = [
    {
      title: "Plano Gold",
      oldPrice: "R$97,00",
      price: "R$57,00",
      features: ["20 vídeos prontos todos os dias", "Saques de até R$350,00 por dia"],
      link: FRONT_CHECKOUT,
      color: "#FFD700"
    },
    {
      title: "Plano Diamond",
      oldPrice: "R$297,00",
      price: "R$67,00",
      features: ["50 vídeos prontos todos os dias", "Suporte exclusivo 24h por dia 7 dias semana", "Saques de até R$1.790,90 por dia"],
      link: FRONT_CHECKOUT,
      color: "#00D9E2"
    },
    {
      title: "Plano Silver",
      oldPrice: "R$429,00",
      price: "R$97,00",
      features: ["150 vídeos prontos todos os dias", "Suporte exclusivo 24h por dia 7 dias semana", "Grupo exclusivo de networking com mais de 70 mil alunos lucrando todos os dias com a gente", "Saque de até R$2.990,00 por dia"],
      link: BACK_CHECKOUT,
      recommended: true,
      animate: false,
      buttonAnimate: true,
      color: "#C0C0C0"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col items-center px-4 py-8 max-w-md mx-auto w-full font-semibold animate-fadeIn flex-1">
        <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full flex flex-col items-center mb-6">
          <h2 className="text-xl font-bold mb-2 text-center text-[#FF2772]">Fique nessa página</h2>
          <p className="text-center text-[#183B56] mb-4 font-bold leading-normal">Sua compra ainda não foi 100% finalizada</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div className="bg-[#00D9E2] h-4 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
          </div>

          <p className="text-center text-[#888] mb-6 text-sm">
            Se o seu plano não for ativado nessa página o aplicativo não funcionará corretamente
          </p>

          {/* Plans */}
          <div className="w-full flex flex-col gap-4">
            {plans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ title, oldPrice, price, features, link, recommended, color, animate, buttonAnimate }: {
  title: string;
  oldPrice: string;
  price: string;
  features: string[];
  link: string;
  recommended?: boolean;
  color: string;
  animate?: boolean;
  buttonAnimate?: boolean;
}) {
  return (
    <div className={`border-2 rounded-xl p-4 shadow-md relative ${recommended ? 'border-[#FF2772] bg-[#FFF0F6]' : 'border-[#00D9E2] bg-[#F0FCFF]'} ${animate ? 'animate-pulse' : ''}`}>
      {recommended && (
        <div className="absolute top-8 left-[60%] transform -translate-x-1/2">
          <span className="bg-[#FF2772] text-white text-xs px-3 py-1 rounded-full font-bold">
            Recomendado
          </span>
        </div>
      )}

      <div className="flex items-center justify-between mb-2 mt-2">
        <span className="font-bold text-lg" style={{ color }}>{title}</span>
      </div>

      <ul className="mb-3 text-sm text-[#183B56] list-disc pl-5 space-y-1">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>

      <div className="text-center mb-3">
        <p className="text-sm text-[#183B56] mb-1">Com desconto da influenciadora por apenas...</p>
        <div className="flex items-center justify-center gap-2">
          <span className="font-bold text-[#FF2772] text-xl">Por: {price}</span>
        </div>
      </div>

      <Button
        {...(buttonAnimate ? { animated: true } : {})}
        color="secondary"
        className="w-full mt-2 rounded-md"
        onClick={() => { if (link) window.location.href = link; }}
      >
        SIM, EU ACEITO ESSA OFERTA
      </Button>
    </div>
  );
}
