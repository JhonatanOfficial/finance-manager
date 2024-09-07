"use client"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

interface InputProps {
  htmlFor: string
  type: "text" | "email" | "password"
  labelText: string
}

export const Input = (props: InputProps) => {

  const [showPass, setShowPass] = useState(false)
  return (
    <div className='flex flex-col gap-2 '>
      <label htmlFor={props.htmlFor}>{props.labelText}</label>
      <div className="bg-white rounded-md p-2 flex items-center justify-between w-[20rem] md:w-[25rem]">
        <input
          id={props.htmlFor}
          type={showPass ? "text" : props.type}
          className='outline-none p-1 w-full'
        />
        {props.type === "password" && (
          <button type="button" onClick={()=> setShowPass(!showPass)}>
            {showPass ? <EyeOff /> : <Eye/> }
          </button>
        )}
      </div>
    </div>
  )
}
