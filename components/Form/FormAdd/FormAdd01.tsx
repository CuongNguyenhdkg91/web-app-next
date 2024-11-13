import { IoMdClose } from "react-icons/io";

import { FocusEventHandler, MouseEventHandler, useState } from "react";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

const Button:React.FC<{label:string, action?:MouseEventHandler}> = ({label, action}) => {
  return(
      <button className="relative h-10 w-20 bg-[#ff66c4] rounded-lg 
      disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition"
      onClick = {action}
      // disabled={disabled}
      >
          {/* {Icon && ( <Icon size={24} className="absolute left-4 top-3" />)} */}
          {label}
    </button>
  )
}

interface InputProps {
  id: string
  label: string;
  register: UseFormRegister<FieldValues>
  action?: FocusEventHandler
}

const Input: React.FC<InputProps> = ({id,label,register,action}) => {
  return (
    <div className="w-full">
        <label className="font-['AmsterdamOne'] pointer-events-none">{label}</label>            
        <input id = {id} placeholder="text" {...register(id)} onBlur={action}
            className="w-full p-2 pb-0.5 pt-5 bg-white border rounded-2xl border-[#ff66c4] outline-none transition 
                    disabled:opacity-70 disabled:cursor-not-allowed peer"
        />
    </div>
   );
}

export const FormAdd01: React.FC<{title:string, defaultImg: string}> = ({title, defaultImg}) => {

    const [imgSrc,setUrl] = useState(defaultImg)
    const {watch, register} = useForm()

    return(
    <>
        <div id ="OutsideBox-blur" className="absolute top-16 bg-neutral-800/70 inset-0 z-50 justify-center items-start flex gap-3
                    overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            
            <button className="border-0 hover:opacity-70 transition">
                <IoMdClose color="white" size={30} />
            </button>

            <div id="WrapForm" className="flex gap-3 translate w-full max-w-[1000px] h-full max-h-[500px] font-['RocaOne'] text-[#004aad] focus:outline-none
                                          bg-gradient-to-r from-[#cdffd8] to-[#94b9ff]">
                <div id="WrapInput" className="p-5 w-1/2 shrink-0 flex flex-col justify-between">

                  {/*header*/}
                  <div className="w-fit justify-center rounded-t border-b-4 border-[#ff3131]">
                    <div className="text-[24px]">
                      {title}
                    </div>
                  </div>
  
                  {/*body*/}
                  <div className="">
                      <div className='flex flex-col gap-8'>
                          <Input id = 'url' label = 'Url' register={register} action= {()=>setUrl(watch("url"))}/>
                          <Input id = 'name' label = 'Description' register={register}/>
                          <div className="flex items-center gap-2">
                              <div className="fa fa-check-square fa-2x"></div>
                              <div className="text-[18px]">Option or not ?</div>
                          </div>
                      </div>
                  </div>

                  {/*Form Buttons*/}
                  <div className=" w-full flex flex-row-reverse items-center justify-between gap-4">
                      <Button 
                        label="Add"
                        action = {()=>setUrl(watch("url"))}
                      />
                      <Button 
                        label="Update"
                      //   action = {actSave}
                      />
                      <Button 
                        label="Delete"
                      //   action = {actSave}
                      />
                  </div>
                </div>

                <div id="WrapImage" className="grow">
                    <img className="h-full object-cover" src={imgSrc} />
                </div>
             </div>
        </div>

    </>
    )
}