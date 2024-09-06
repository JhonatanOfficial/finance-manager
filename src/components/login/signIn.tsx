
"use client"
import React, { FormEvent } from 'react'
import { Input } from './Input'
import Image from 'next/image'
import { googleIcon } from '@/assets/images'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'
import { Loader } from 'lucide-react'
import { useLoginSectionProvider } from '@/context/loginSectionContext'
import toast, { Toaster } from 'react-hot-toast'

export const SignInForm = () => {

    const { status } = useSession()
    const [error, setError] = useState<string | null>(null)
    const { setSection } = useLoginSectionProvider()

    const setErrorNull = () => {
        setTimeout(() => {
            setError(null)
        }, 3000)
    }

    const signInCredentials = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget;
        const email = form.elements.namedItem("email") as HTMLInputElement
        const password = form.elements.namedItem("password") as HTMLInputElement

        if (!email.value || !password.value) {
            toast.error("Por favor, preencha todos os campos")
            setErrorNull()
            return null;
        }

        const response = await signIn("credentials", {
            email: email.value,
            password: password.value,
            redirect: false
        })

        if(!response?.ok) {
            toast.error("Email ou senha inválido")
        }
      
    }

    return (
        <form onSubmit={signInCredentials} className='center flex-col gap-5 w-max'>

            <Input htmlFor='email' labelText='Email' type='email' />
            <Input htmlFor='password' labelText='Senha' type='password' />

            <div className='w-full'>
                <span className='text-[red] text-sm'>{error}</span>
            </div>
            <button type="submit" className='w-full bg-black text-white p-4 rounded-lg center'>
                {status === "loading" ?
                    <div className='animate-spin'>
                        <Loader />
                    </div>
                    :
                    <span>{"Entrar"}</span>
                }
            </button>
            <div className='w-full center gap-3 px-2'>
                <div className='w-full h-[2px] bg-black'></div>
                <span>Or</span>
                <div className='w-full h-[2px] bg-black'></div>
            </div>
            {/* BUTTON GOOGLE */}
            <button  onClick={() => signIn('google')} type='button' className='w-full p-4 border-2 border-black center gap-4 rounded-lg'>
                <Image src={googleIcon} alt='Google Icon' width={25} height={25} />
                <span>Continue com Google</span>
            </button>

            <div className='flex justify-end items-center gap-4 w-full text-sm'>

                <span>Não possui uma conta? <button onClick={() => setSection("SignUp")} type="button" className='text-[blue]'>Cadastre-se</button></span>

            </div>
            <Toaster />
        </form>


    )
}
