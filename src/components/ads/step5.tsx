"use client"
import { Button } from "@/components/ui/Button";
import { AdsHeader } from "./header";
import { MobileNotification } from "./MobileNotification";

export function AdsStep5({ currency, nextStep }: { currency: number; nextStep?: () => void }) {

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <AdsHeader currency={currency} />

            {/* Main Content */}
            <div className="flex-1 pb-6 flex flex-col justify-center items-center">
                {/* Title Section */}
                <div className="text-center py-3 my-4">
                    <h1 className="text-primary text-4xl font-bold" style={{ fontFamily: 'Souvenir, serif' }}>
                        Saque realizado!
                    </h1>
                </div>

                {/* Success Message */}
                <div className="text-center mb-8 px-4 max-w-md w-full flex flex-col items-center">
                    <h2 className="text-primary text-xl font-bold mb-6">Parabéns!</h2>

                    <p className="text-primary text-lg mb-6 leading-relaxed">
                        O seu saque de <span className="font-bold">R$ {currency / 100}</span> foi realizado com sucesso!
                    </p>

                    <p className="text-primary text-base leading-relaxed mb-8">
                        O valor estará disponível na sua conta em breve. Confira suas notificações e extratos bancários.
                    </p>

                    {/* Action Button */}
                    <Button
                        color="secondary"
                        style={{ width: '100%' }}
                        onClick={() => {
                            // Reset to first step or redirect as needed
                            window.location.reload();
                        }}
                    >
                        Realizar mais avaliações
                    </Button>
                </div>
            </div>

            {/* Mobile Notification */}
            <MobileNotification
                amount={(currency / 100).toLocaleString(
                    'pt-BR', { style: 'currency', currency: 'BRL' }
                )} // Convert to BRL
                onComplete={() => {
                    if (nextStep) {
                        nextStep();
                    }
                }}
            />

            {/* Footer Navigation */}
            <footer className="w-full bg-[#f7f7f7] fixed bottom-0 border-t border-[#e6e6e6] flex justify-around items-center py-3 gap-8">
                <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                    <span className="text-dark text-xs">Início</span>
                </div>
                <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                    <span className="text-dark text-xs">Carteira</span>
                </div>
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
            </footer>
        </div>
    );
}
