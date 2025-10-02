"use client"
import { useEmail } from "@/lib/use-email";
import { Product } from "../product";
import { UPSELL_VALUES } from "@/lib/values";
import { MdHome, MdAccountCircle, MdAccountBalanceWallet } from "react-icons/md";

const INDEX = 1; // For upsell, /assets/upsell/2.webp

export default function UpsellStep4({ nextStep, addCurrency, step = 4, currency = 46738 }: { nextStep: () => void; addCurrency: (amount: number) => void; step?: number; currency?: number; }) {
    return (
        <div className="flex flex-col min-h-screen bg-[#FDFAEB]">
            {/* Content */}
            <main className="flex flex-col flex-1 items-center px-4 py-8 max-w-md mx-auto w-full font-semibold">
                <Product
                    addCurrency={addCurrency}
                    nextStep={nextStep}
                    value={UPSELL_VALUES[INDEX]}
                    img={`/assets/upsell/${INDEX + 1}.webp`}
                />
            </main>
            {/* Footer */}
            <footer className="w-full bg-[#f7f0cf] border-t border-[#e6e6e6] flex justify-around items-center py-5 gap-8">
                <div>
                    <MdHome size={38} className="text-dark" />
                    <span className=" text-dark text-xs">Início</span>
                </div>
                <MdAccountBalanceWallet size={38} className="text-black" />
                <MdAccountCircle size={38} className="text-black" />
            </footer>
            <style jsx>{`
        @keyframes scaleLoop {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
      `}</style>
        </div>
    );
}
