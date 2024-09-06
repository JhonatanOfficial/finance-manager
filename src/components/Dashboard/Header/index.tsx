"use client"
import { profile } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { Loader } from 'lucide-react'
import { useSession } from 'next-auth/react'

export const Header = () => {

    const { data, status } = useSession()

    const userImage = data?.user?.image || ""
    const userName = data?.user?.name

    return (
        <header className='flex items-center justify-between w-full py-py px-px'>
            <span className='text-white text-[1.5625rem] font-bold'>Dashboard</span>


            {status != "loading" ?

                <div className='center gap-3'>
                    <div className='flex items-center gap-5 relative size-[2.5rem] rounded-full overflow-hidden'>
                        <Image src={userImage || profile} alt='' fill className='object-cover' />
                    </div>
                    <span className='text-white'>{userName}</span>
                </div>
                :

                <div className='animate-spin'>
                    <Loader color='white' />
                </div>
            }


        </header>
    )
}
