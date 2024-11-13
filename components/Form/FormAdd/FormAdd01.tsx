import { IoMdClose } from "react-icons/io";
import { IconType } from "react-icons";

const Button:React.FC<{label:string}> = ({label}) => {
  return(
      <button className="relative h-10 w-20 bg-[#ff66c4] rounded-lg font-['RocaOne'] text-[#004aad]
      disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition"
      // onClick = {action}
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
}

const Input: React.FC<InputProps> = ({id,label,}) => {
  return (
    <div className="w-full">
        <label className="font-['AmsterdamOne'] text-[#004aad] pointer-events-none">{label}</label>            
        <input id = {id} placeholder="text"
          className="w-full p-2 pb-0.5 pt-5 font-light bg-white border rounded-2xl border-[#ff66c4] outline-none transition 
                    disabled:opacity-70 disabled:cursor-not-allowed peer"
        />
    </div>
   );
}

export const FormAdd01: React.FC<{title:string, defaultImg: string}> = ({title, defaultImg}) => {

    const imgSrc = defaultImg

    return(
    <>
        <div id ="OutsideBox-blur" className="absolute top-16 bg-neutral-800/70 inset-0 z-50 justify-center items-start flex gap-3
                    overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            
            <button className="border-0 hover:opacity-70 transition">
                <IoMdClose color="white" size={30} />
            </button>

            <div id="WrapForm" className="flex gap-3 translate w-full max-w-[1000px] bg-[#cdffd8]
                                          md:h-screen focus:outline-none">
                <div id="WrapInput" className="p-5 w-1/2 flex flex-col justify-between gap-24">
                  {/*header*/}
                  <div className="w-fit justify-center rounded-t border-b-4 border-[#ff3131]">
                    <div className="text-[24px] font-['RocaOne'] text-[#004aad]">
                      {title}
                    </div>
                  </div>
  
                  {/*body*/}
                  <div className="">
                      <div className='flex flex-col gap-4'>
                          <Input id = 'url' label = 'Url' />
                          <Input id = 'name' label = 'Description' />
                      </div>
                  </div>

                  {/*Form Buttons*/}
                  <div className=" w-full flex flex-row-reverse items-center justify-between gap-4">
                      <Button 
                        label="Add"
                      //   action = {actSave}
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