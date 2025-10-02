import Image from "next/image"

interface PixReceiptProps {
    currency?: number;
    onClose?: () => void;
}

export function PixReceipt({ currency = 27000, onClose }: PixReceiptProps) {
    const date = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase();
    const formattedCurrency = `R$ ${(currency / 100).toFixed(2).replace('.', ',')}`;
    const currentDateTime = new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).toUpperCase() + " - " + new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    return (
        <div className="bg-white min-h-screen">
            {/* Header with close button */}
            <div className="flex justify-start p-4">
                <button
                    className="p-2"
                    onClick={onClose}
                    type="button"
                >
                    <Image src="/assets/nuicons/close.svg" alt="Close" width={24} height={24} className="w-6 h-6" />
                </button>
            </div>

            {/* Main content */}
            <div className="px-6 h-full pb-6">
                {/* Pix icon */}
                <div className="flex justify-start mb-8">
                    <button className="w-16 h-16 bg-green-100/60 rounded-full flex items-center justify-center mb-2 hover:bg-gray-200 transition-colors">
                        <Image src="/assets/nuicons/payment.svg" alt="Receipt" width={24} height={24} className="w-6 h-6" />
                    </button>
                </div>

                {/* Merchant name */}
                <h1 className="text-2xl font-bold text-gray-900 mb-2">TIKTOK SHOP</h1>

                {/* Amount */}
                <div className="text-3xl font-bold text-gray-900 mb-6">{formattedCurrency}</div>

                {/* Date and time */}
                <div className="text-gray-600 text-sm mb-6">{currentDateTime}</div>

                {/* Status badges */}
                <div className="flex gap-2 mb-12">
                    <div className="bg-green-100 text-green-800 hover:bg-green-100">
                        Transferência recebida
                    </div>
                    <div className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                        Pix
                    </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                    <div className="flex flex-col items-center">
                        <button className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 hover:bg-gray-200 transition-colors">
                            <Image src="/assets/nuicons/extract.svg" alt="Receipt" width={24} height={24} className="w-6 h-6" />
                        </button>
                        <span className="text-xs text-center text-gray-700 leading-tight">Abrir comprovante</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <button className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 hover:bg-gray-200 transition-colors">
                            <Image src="/assets/nuicons/mail.svg" alt="Email" width={24} height={24} className="w-6 h-6" />
                        </button>
                        <span className="text-xs text-center text-gray-700 leading-tight">Enviar comprovante por email</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <button className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 hover:bg-gray-200 transition-colors">
                            <Image src="/assets/nuicons/money.svg" alt="Refund" width={24} height={24} className="w-6 h-6" />
                        </button>
                        <span className="text-xs text-center text-gray-700 leading-tight">Fazer um reembolso</span>
                    </div>
                </div>

                {/* Institution info */}
                <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-1">Instituição</div>
                    <p className="font-semibold text-gray-900 mt-2">TiktokShop</p>
                </div>
                <hr className=" my-2" />
                {/* Refund info */}
                <div className="text-sm text-gray-600 mb-2">Precisa fazer um reembolso? <br /> <span className="font-bold text-black">Faça um reembolso e devolva até o dia {date}</span></div>
            </div>
        </div>
    )
}
