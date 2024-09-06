
import { WalletMinimal } from "lucide-react"

export const Card = () => {
    return (
        <div className='flex items-center p-5 bg-[#282541] gap-5 min-w-[13.875rem] rounded-lg'>
            <div className="text-primary-color bg-[#353255] p-2 rounded-full">
                <WalletMinimal />
            </div>
            <div className="flex flex-col gap-3 text-white">
                <span>Net Worth</span>
                <span className="font-bold text-[1.6rem]">$524</span>
            </div>
        </div>
    )
}
