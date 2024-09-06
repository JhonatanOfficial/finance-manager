
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
import { useRouter } from 'next/navigation'


export const SignUpForm = () => {

    const router = useRouter()
    const { setSection } = useLoginSectionProvider()
    const [isLoading, setIsLoading] = useState(false)


    const signInCredentials = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        const form = e.currentTarget;
        const name = form.elements.namedItem("name") as HTMLInputElement
        const email = form.elements.namedItem("email") as HTMLInputElement
        const password = form.elements.namedItem("password") as HTMLInputElement
        const confirmPassword = form.elements.namedItem("confirm-password") as HTMLInputElement

        if (!email.value || !password.value) {
            toast.error("Por favor, preencha todos os campos")
            setIsLoading(false)
            return null;
        } else if (password.value !== confirmPassword.value) {
            toast.error("As senhas não são iguais")
            setIsLoading(false)

            return null;
        }

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value,
            }),
        });

        const res = await response.json()

        if (response.ok) {
            toast.success(res.message)
            setIsLoading(false)


        } else {
        
            toast.error(res.message)
            setIsLoading(false)

        }
    }

    return (
        <form onSubmit={signInCredentials} className='center flex-col gap-5 w-max'>

            <Input htmlFor='name' labelText='Name' type='text' />
            <Input htmlFor='email' labelText='Email' type='email' />
            <Input htmlFor='password' labelText='Senha' type='password' />
            <Input htmlFor='confirm-password' labelText='Confirmar senha' type='password' />

            <button className='w-full bg-black text-white p-4 rounded-lg center'>
                {isLoading ?
                    <div className='animate-spin'>
                        <Loader />
                    </div>
                    :
                    <span>{"Cadastrar"}</span>
                }
            </button>
            <div className='w-full center gap-3 px-2'>
                <div className='w-full h-[2px] bg-black'></div>
                <span>Or</span>
                <div className='w-full h-[2px] bg-black'></div>
            </div>
            {/* BUTTON GOOGLE */}
            <button onClick={() => signIn('google')} type='button' className='w-full p-4 border-2 border-black center gap-4 rounded-lg'>
                <Image src={googleIcon} alt='Google Icon' width={25} height={25} />
                <span>Continue com Google</span>
            </button>

            <div className='flex justify-end items-center gap-4 w-full text-sm'>

                <span>Já possui uma conta? <button onClick={() => setSection("SignIn")} type="button" className='text-[blue]'>Faça login</button></span>

            </div>

            <Toaster />

        </form>
    )
}
