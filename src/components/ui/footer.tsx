"use client";
import { MdHome, MdAccountBalanceWallet, MdAccountCircle } from "react-icons/md";

interface FooterProps {
    activeSection: 'home' | 'wallet';
}

export function Footer({ activeSection }: FooterProps) {
    return (
        <footer className="w-full bg-[#f7f7f7] fixed bottom-0 border-t border-[#e6e6e6] flex justify-around items-center py-3 gap-8">
            <div className="flex flex-col items-center">
                <MdHome
                    size={32}
                    className={activeSection === 'home' ? "text-dark" : "text-black"}
                />
                {activeSection === 'home' && (
                    <span className="text-dark text-xs">Início</span>
                )}
            </div>
            <div className="flex flex-col items-center">
                <MdAccountBalanceWallet
                    size={32}
                    className={activeSection === 'wallet' ? "text-dark" : "text-black"}
                />
                {activeSection === 'wallet' && (
                    <span className="text-dark text-xs">Carteira</span>
                )}
            </div>
            <MdAccountCircle size={32} className="text-black" />
        </footer>
    );
}
