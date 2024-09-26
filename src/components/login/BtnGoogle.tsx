import { googleIcon } from "@/assets/images"
import Image from "next/image"


interface BtnGoogleProps{
    onClick: () => void
}

export const BtnGoogle = (props: BtnGoogleProps) => {
    return (
        <button onClick={props.onClick} type='button' className='w-full p-4 border-2 border-black center gap-4 rounded-lg hover:scale-[1.02] transition-all duration-[.5s]'>
            <Image src={googleIcon} alt='Google Icon' width={25} height={25} />
            <span>Continue com Google</span>
        </button>
    )
}
