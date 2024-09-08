import React from 'react'
import { Nav } from './Nav'
import { LogOut } from 'lucide-react'

export const LeftContainer = () => {
  return (
    <div className="flex flex-col justify-between max-w-[15.625rem] px-px  py-py text-gray-300 shadow-right-side ">
      <div className="flex flex-col justify-center gap-6">
        <span className="text-white font-bold uppercase text-[1.2rem]">.Logo</span>
        <Nav />
      </div>
      
    </div>
  )
}
