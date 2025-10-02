'use client'

import { Button } from "@/components/ui/Button";
import { MdHome, MdAccountBalanceWallet, MdAccountCircle } from "react-icons/md";

interface Step5Props {
    nextStep: () => void;
}

export function Step5({ nextStep }: Step5Props) {
    return (
        <>
            <div className="flex flex-col h-screen items-center gap-4 justify-center flex-1 px-4 py-8 max-w-md mx-auto w-full bg-white font-semibold">
                <h1 className="text-4xl font-bold mb-6 text-center font-rubik text-primary">
                    Parabéns!
                </h1>
                <p className="mb-6 text-center text-xl text-primary">
                    Você acaba de ganhar <span className="text-red-500 font-bold">R$ 365,00!</span>
                </p>
                {/* <p className="text-lg mb-6 text-center leading-tight">
                    Siga um curto passo a passo explicativo para você aprender a cadastrar sua chave <b>PIX</b> e realizar o seu primeiro <b>SAQUE</b>.
                </p> */}
                <p className="text-lg mb-6 text-center leading-tight text-primary">
                    Como forma de pré-validação, será depositado o valor de <span className="text-red-500 font-bold">R$ 0,05</span> em sua conta.
                </p>
                <p className="text-lg mb-8 text-center leading-tight text-primary">
                    Certifique-se de inserir corretamente a chave PIX, pois é por meio dela que você receberá o valor acumulado e os futuros pagamentos do TiktokShop.
                </p>
                <Button
                    animated
                    onClick={nextStep}
                    className="w-full"
                >
                    Continuar
                </Button>
            </div>

        </>
    );
}
