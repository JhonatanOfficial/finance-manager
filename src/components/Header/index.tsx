"use client"
import { profile } from '@/assets/images'
import Image from 'next/image'
import React, { useState } from 'react'
import { Loader, LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const Header = () => {

    const { data, status } = useSession()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const userImage = data?.user?.image || ""
    const userName = data?.user?.name

    const logout = async () => {
        setIsLoading(true)
        await signOut()
        setIsLoading(false)

    }

    return (
        <header className='flex items-center justify-between flex-1 py-py px-px'>
            <span className='text-white md:text-[1.5625rem] font-bold'>Dashboard</span>


            <div className='center gap-2'>
                {status != "loading" ?

                    <div className='center gap-3'>
                        <div className=' gap-2 hidden md:flex md:items-center md:justify-center'>
                            <div className='flex items-center gap-5 relative size-[2.5rem] rounded-full overflow-hidden'>
                                <Image src={userImage || profile} alt='' fill className='object-cover' />
                            </div>
                            <span className='text-white'>{userName}</span>
                        </div>
                        <div>
                            <button onClick={logout} className='gap-3 bg-[red] p-2 rounded-md center w-[5rem]'>
                                {isLoading ?
                                    <div className='animate-spin'>
                                        <Loader color='white' width={20} />
                                    </div>
                                    :
                                    <>
                                        <LogOut width={20} />
                                        <span className='text-xs text-white font-bold'>Sair</span>
                                    </>
                                }
                            </button>
                        </div>
                    </div>
                    :

                    <div className='animate-spin'>
                        <Loader color='white' />
                    </div>
                }


            </div>


        </header>
    )
}
