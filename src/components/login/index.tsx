"use client"

import React, { FormEvent } from 'react'
import Image from 'next/image'
import { bg } from '@/assets/images'
import { useLoginSectionProvider } from '@/context/loginSectionContext'
import { SignInForm } from './signIn'
import { SignUpForm } from './SignUp'

export const LoginSection = () => {

  const { section } = useLoginSectionProvider()

  return (
    <section className="w-full shadow-lg shadow-black flex-wrap flex justify-between">
      <div className="flex-1 min-h-screen bg-primary-color p-px lg:p-[5rem] center gap-5 py-[10rem] lg:py-0">
        <div className='h-full py-10 center flex-col w-max gap-10'>
          <div className='w-full'>
            <span className="font-bold text-[2rem]">{section === "SignIn"? "Bem vindo de volta" : "Cadastre-se" }</span>
          </div>
          {section === "SignIn" && <SignInForm />}
          {section === "SignUp" && <SignUpForm />}
        </div>
      </div>
      <div className="flex-1 hidden md:block relative">
        <Image src={bg} alt='Background' fill className='object-cover brightness-50' />
      </div>
    </section>
  )
}
