"use client";
import { Product } from "@/components/product";
import { UPSELL_VALUES_TWO } from "@/lib/values";
import { MdHome, MdAccountCircle, MdAccountBalanceWallet } from "react-icons/md";

export function Upsell2Step1({ nextStep, addCurrency, currency }: { nextStep: () => void; addCurrency: (amount: number) => void; currency: number }) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex flex-col flex-1 items-center px-4 py-8 max-w-md mx-auto w-full font-semibold">
                <Product
                    addCurrency={addCurrency}
                    nextStep={nextStep}
                    value={UPSELL_VALUES_TWO[0]}
                    img={`/assets/upsell2/1.webp`}
                    skipLoading
                />
            </main>
            <footer className="w-full bg-gray-800 border-t border-gray-600 flex justify-around items-center py-5 gap-8">
                <div>
                    <MdHome size={38} className="text-dark" />
                    <span className=" text-dark text-xs">Início</span>
                </div>
                <MdAccountBalanceWallet size={38} className="text-black" />
                <MdAccountCircle size={38} className="text-black" />
            </footer>
        </div>
    );
}

export function Upsell2Step2({ nextStep, addCurrency, currency }: { nextStep: () => void; addCurrency: (amount: number) => void; currency: number }) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex flex-col flex-1 items-center px-4 py-8 max-w-md mx-auto w-full font-semibold">
                <Product
                    addCurrency={addCurrency}
                    nextStep={nextStep}
                    value={UPSELL_VALUES_TWO[1]}
                    img={`/assets/upsell2/2.webp`}
                />
            </main>
            <footer className="w-full bg-gray-800 border-t border-gray-600 flex justify-around items-center py-5 gap-8">
                <div>
                    <MdHome size={38} className="text-dark" />
                    <span className=" text-dark text-xs">Início</span>
                </div>
                <MdAccountBalanceWallet size={38} className="text-black" />
                <MdAccountCircle size={38} className="text-black" />
            </footer>
        </div>
    );
}

export function Upsell2Step3({ nextStep, addCurrency, currency }: { nextStep: () => void; addCurrency: (amount: number) => void; currency: number }) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex flex-col flex-1 items-center px-4 py-8 max-w-md mx-auto w-full font-semibold">
                <Product
                    addCurrency={addCurrency}
                    nextStep={nextStep}
                    value={UPSELL_VALUES_TWO[2]}
                    img={`/assets/upsell2/3.webp`}
                    skipPopup
                />
            </main>
            <footer className="w-full bg-gray-800 border-t border-gray-600 flex justify-around items-center py-5 gap-8">
                <div>
                    <MdHome size={38} className="text-dark" />
                    <span className=" text-dark text-xs">Início</span>
                </div>
                <MdAccountBalanceWallet size={38} className="text-black" />
                <MdAccountCircle size={38} className="text-black" />
            </footer>
        </div>
    );
}
