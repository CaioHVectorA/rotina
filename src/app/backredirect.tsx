"use client";

import { Button } from "@/components/ui/Button";

export default function BackRedirect() {
  return (
    <div className="flex flex-col h-screen items-center justify-center px-4 py-8 max-w-md mx-auto w-full text-primary bg-primary font-semibold animate-fadeIn">
      <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2 text-center text-[#FF2772]">Fique nessa página</h2>
        <p className="text-center text-[#183B56] mb-4">Sua compra ainda não foi 100% finalizada</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div className="bg-[#00D9E2] h-4 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-center text-[#888] mb-4 text-sm">Se o seu plano não for ativado nessa página o aplicativo não funcionará corretamente</p>
        <div className="w-full flex flex-col gap-4 mt-4">
          <PlanCard
            title="Plano Gold"
            oldPrice="R$97,00"
            price="R$57,00"
            features={["20 vídeos prontos todos os dias", "Saques de até R$350,00 por dia"]}
            link="https://checkout.perfectpay.com.br/pay/PPU38CQ1PSU"
          />
          <PlanCard
            title="Plano Diamond"
            oldPrice="R$297,00"
            price="R$67,00"
            features={["50 vídeos prontos todos os dias", "Suporte exclusivo 24h por dia 7 dias semana", "Saques de até R$1.790,90 por dia"]}
            link="https://checkout.perfectpay.com.br/pay/PPU38CQ1PT3"
          />
          <PlanCard
            title="Plano Silver"
            oldPrice="R$429,00"
            price="R$97,00"
            features={["150 vídeos prontos todos os dias", "Suporte exclusivo 24h por dia 7 dias semana", "Grupo exclusivo de networking com mais de 70 mil alunos lucrando todos os dias com a gente", "Saque de até R$2.990,00 por dia"]}
            link="https://checkout.perfectpay.com.br/pay/PPU38CQ1PT1"
            recommended
          />
        </div>
      </div>
    </div>
  );
}

function PlanCard({ title, oldPrice, price, features, link, recommended }: { title: string; oldPrice: string; price: string; features: string[]; link: string; recommended?: boolean }) {
  return (
    <div className={`border-2 rounded-xl p-4 shadow-md ${recommended ? 'border-[#FF2772] bg-[#FFF0F6]' : 'border-[#00D9E2] bg-[#F0FCFF]'}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-lg text-[#00D9E2]">{title}</span>
        {recommended && <span className="bg-[#FF2772] text-white text-xs px-2 py-1 rounded-full ml-2">Recomendado</span>}
      </div>
      <ul className="mb-2 text-sm text-[#183B56] list-disc pl-5">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <div className="flex items-center gap-2 mb-2">
        <span className="line-through text-[#888] text-sm">De: {oldPrice}</span>
        <span className="font-bold text-[#FF2772] text-lg">Por: {price}</span>
      </div>
      <Button animated color="secondary" className="w-full mt-2" onClick={() => window.location.href = link}>
        Quero esse plano
      </Button>
    </div>
  );
}
