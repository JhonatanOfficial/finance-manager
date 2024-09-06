

interface InputProps {
  htmlFor: string
  type: string
  labelText: string
}

export const Input = (props: InputProps) => {
  return (
    <div className='flex flex-col gap-2 '>
      <label htmlFor={props.htmlFor}>{props.labelText}</label>
      <input
        id={props.htmlFor}
        type={props.type}
        className='outline-none rounded-md p-2 w-[20rem] md:w-[25rem]'
      />
    </div>
  )
}
