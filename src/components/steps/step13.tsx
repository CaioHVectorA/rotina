'use client'

import { Button } from "@/components/ui/Button";
import Lottie from "lottie-react";
import moneyAnimation from "@/animation/money.json";

interface Step13Props {
    nextStep: () => void;
    currency: number;
}

export function Step13({ nextStep, currency }: Step13Props) {
    return (
        <div className="flex flex-col h-screen items-center justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full bg-white font-semibold">
            <div className="w-32 h-32 mx-auto mb-2">
                <Lottie animationData={moneyAnimation} loop={true} />
            </div>
            <h1 className="text-3xl font-bold mb-3 text-center font-souvenir leading-[24px] text-primary">
                Quase lá!
            </h1>
            <p className="text-lg mb-2 text-center font-bold leading-[24px] my-2 text-primary">
                Você acumulou <span className="text-[var(--color-secondary)] font-bold">R$ {(currency / 100).toFixed(2).replace('.', ',')}!</span>
            </p>
            <p className="mb-4 text-center text-base font-bold leading-[24px] my-2 text-[var(--color-secondary)]">
                Mas precisará pagar uma pequena taxa para cobrir os custos de servidores e suporte técnico. É rápido e seguro!
            </p>
            <Button
                animated
                onClick={nextStep}
                className="w-full text-white text-lg font-bold rounded-full py-2 shadow-md mt-2"
            >
                Pagar taxa e continuar
            </Button>
        </div>
    );
}
