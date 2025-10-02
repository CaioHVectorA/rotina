"use client"
import { Button } from "@/components/ui/Button";
import { AdsHeader } from "./header";
import { PixReceipt } from "../pix-receipt";

export function AdsStep6({ currency, goToStep }: { currency: number; goToStep?: (step: number) => void }) {
    const handleClose = () => {
        if (goToStep) {
            goToStep(4); // Go back to withdrawal page (step4)
        }
    };

    return <PixReceipt currency={currency} onClose={handleClose} />
}
