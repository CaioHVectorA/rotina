"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MdPhoneIphone, MdAssignmentInd, MdEmail } from "react-icons/md";
import { Loader2 } from "lucide-react";
import { sendPixRequest } from "@/lib/pix";
import { AdsHeader } from "./header";

const formatCPF = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        .slice(0, 14);
};

const formatPhone = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 15);
};

const validatePixKey = (value: string, type: 'cpf' | 'phone' | 'email') => {
    switch (type) {
        case 'cpf':
            const cpfNumbers = value.replace(/\D/g, '');
            return cpfNumbers.length === 11;
        case 'phone':
            const phoneNumbers = value.replace(/\D/g, '');
            return phoneNumbers.length === 11;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        default:
            return false;
    }
};

export function AdsStep4({ currency = 0, nextStep }: { currency?: number; nextStep?: () => void }) {
    const [tab, setTab] = useState<'cpf' | 'phone' | 'email'>('cpf');
    const [pixKey, setPixKey] = useState("");
    const [focused, setFocused] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value;
        if (tab === 'cpf') {
            setPixKey(formatCPF(v));
        } else if (tab === 'phone') {
            setPixKey(formatPhone(v));
        } else {
            setPixKey(v);
        }
    };

    const handleTabChange = (newTab: 'cpf' | 'phone' | 'email') => {
        setTab(newTab);
        setPixKey(""); // Clear input when changing tabs
    };

    const handleRegister = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 700));
        setLoading(false);
        // Navigate to success page
        if (nextStep) {
            nextStep();
        }
    };

    const isFormValid = validatePixKey(pixKey, tab);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <AdsHeader currency={currency} />

            {/* Main Content */}
            <div className="flex-1 pb-6">
                {/* Balance Display */}
                <div className="backdrop-blur-2xl border-white/20 text-center py-11 mb-8">
                    <div className="text-primary font-medium mb-2">Seu saldo</div>
                    <div className="text-secondary text-5xl font-bold mb-1">
                        R$ {(currency / 100).toFixed(2).replace('.', ',')}
                    </div>
                </div>

                {/* PIX Key Selection */}
                <div className="mb-6 px-4">
                    <div className="text-primary font-medium my-4 text-center">Selecione a sua chave PIX</div>

                    <div className="flex gap-4 w-full justify-center mb-6">
                        <button
                            className={`flex flex-col items-center justify-center w-1/3 aspect-square py-4 rounded-md border transition-all duration-200 text-sm font-bold ${tab === 'cpf' ? 'bg-primary text-white' : 'bg-[#e6d7c3] text-gray-700'}`}
                            onClick={() => handleTabChange('cpf')}
                            type="button"
                        >
                            <MdAssignmentInd size={32} className="mb-1" />
                            CPF
                        </button>
                        <button
                            className={`flex flex-col items-center justify-center w-1/3 aspect-square py-4 rounded-md border transition-all duration-200 text-sm font-bold ${tab === 'phone' ? 'bg-primary text-white' : 'bg-[#e6d7c3] text-gray-700'}`}
                            onClick={() => handleTabChange('phone')}
                            type="button"
                        >
                            <MdPhoneIphone size={32} className="mb-1" />
                            Telefone
                        </button>
                        <button
                            className={`flex flex-col items-center justify-center w-1/3 aspect-square py-4 rounded-md border transition-all duration-200 text-sm font-bold ${tab === 'email' ? 'bg-primary text-white' : 'bg-[#e6d7c3] text-gray-700'}`}
                            onClick={() => handleTabChange('email')}
                            type="button"
                        >
                            <MdEmail size={32} className="mb-1" />
                            E-mail
                        </button>
                    </div>

                    {/* PIX Key Input */}
                    <div className="relative w-full mb-8">
                        <input
                            type={tab === 'email' ? 'email' : 'text'}
                            value={pixKey}
                            onChange={handleInput}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            className="block w-full bg-transparent border-0 border-b-2 border-primary text-lg px-0 pt-6 pb-2 focus:outline-none focus:ring-0 focus:border-primary placeholder-transparent"
                            placeholder=" "
                            maxLength={tab === 'cpf' ? 14 : tab === 'phone' ? 15 : 50}
                            inputMode={tab === 'email' ? 'email' : 'numeric'}
                            autoComplete="off"
                        />
                        <label
                            className={`absolute left-0 top-6 text-primary transition-all duration-200 pointer-events-none ${focused || pixKey ? '-translate-y-3 -translate-x-6 scale-70 text-primary' : 'translate-y-2 translate-x-0 scale-100 text-gray-600'}`}
                        >
                            Digite sua chave PIX...
                        </label>
                    </div>

                    {/* Withdraw Button */}
                    <Button
                        color="secondary"
                        animated={isFormValid}
                        style={{ width: '100%', opacity: isFormValid ? 1 : 0.5 }}
                        onClick={handleRegister}
                        disabled={loading || !isFormValid}
                    >
                        {loading && (
                            <Loader2 className="animate-spin opacity-50" />
                        )}
                        Realizar saque
                    </Button>
                </div>
            </div>

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
