"use client"

import { LayoutDashboard, ArrowRightLeft, WalletMinimal, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

export const Nav = () => {

  const currentSection = usePathname()
  const sizeIcon = 20;

  const menu_nav = [
    { text: "Dashboard", href: "/dashboard", icon: <LayoutDashboard width={sizeIcon} /> },
    { text: "Transação", href: "/transaction", icon: <ArrowRightLeft width={sizeIcon} /> },
    { text: "Carteira", href: "/mywallet", icon: <WalletMinimal width={sizeIcon} /> },
    { text: "Configuração", href: "/settings", icon: <Settings width={sizeIcon} /> },
  ]

  return (
    <nav className="flex flex-col justify-between py-[1.875rem]" >
      <div className='flex flex-col gap-5'>
        {menu_nav.map((el, index) => {
          return (
            <Link key={index} href={el.href} className={`flex items-center gap-3 rounded-lg px-5 py-3 ${currentSection === el.href ? "bg-primary-color text-black" : "text-gray-300 bg-none"} `}>
              {el.icon}
              <span className="font-bold text-[.875rem] hidden md:block">{el.text}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
