'use client';

import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister 
} from "react-hook-form";

import { ChangeHandler } from "react-hook-form";

import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text", 
  disabled, 
  formatPrice,
  register,
  required,
  errors,
}) => {

  const inputOnblur:ChangeHandler = async (event) => {
    console.log(event.target.value)
    
    //return true //no need to return
  }
  const registerInput = register(id, { required })
  registerInput.onBlur = inputOnblur  
   
  return (
    <div className="w-full relative">
      <input
        {...registerInput} //to assign value id into name field of input
       // id={id} //really no need id field
        disabled={disabled}
        placeholder=" "
        type={type}
        className={`w-full p-2 pb-0.5 pt-5 font-light bg-white border-2 rounded-2xl outline-none
                  transition disabled:opacity-70 disabled:cursor-not-allowed
                  peer
                  ${errors[id] ? 'border-rose-500 focus:border-rose-500' : 'border-neutral-300 focus:border-black'}
        `}
      />
      <label className={`absolute text-sm left-4 duration-150 top-4 z-10 origin-[0] transform -translate-y-3
                        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75 peer-focus:-translate-y-4
                        pointer-events-none
                        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
                        `}
      >
        {label}
      </label>
    </div>
   );
}
 
export {Input};

