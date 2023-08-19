'use client'

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import useRentModal from "@/zustand/useRenModal";
import { useRouter } from "next/navigation";


const  UserMenu = () => {

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)
    
    const CreateNew = useRentModal()

    const toggleOpen = useCallback(() => {
        setIsOpen((state) => !state)
    },[])

    const onCreateNew = useCallback(() => {
        CreateNew.onOpen()
    },[CreateNew])

    return(
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                onClick={onCreateNew}
                 className="
                 hidden
                 md:block
                 text-sm 
                 font-semibold 
                 py-3 
                 px-4 
                 rounded-full 
                 hover:bg-neutral-100 
                 transition 
                 cursor-pointer"
               >
                    Action to Do
                </div>
                <div 
                    onClick={toggleOpen}
                    className="
                    p-4
                    md:py-1
                    md:px-2
                    border-[1px] 
                    border-neutral-200 
                    flex 
                    flex-row 
                    items-center 
                    gap-3 
                    rounded-full 
                    cursor-pointer 
                    hover:shadow-md 
                    transition
                    "
                 >
                    <AiOutlineMenu/>
                 </div>

            </div>
            {isOpen && (
                <div className="
                absolute 
                rounded-xl 
                shadow-md
                w-[40vw]
                md:w-3/4 
                bg-white 
                overflow-hidden 
                right-0 
                top-12 
                text-sm
              ">
                    <div >
                        <>
                            <MenuItem
                            onClick={()=>{}}
                            label = "Edit" />

                            <MenuItem
                            onClick={()=>{router.push('/CreateNew')}}
                            label = "Create" />
                        </>
                    </div>
                </div>
            )}
        </div>

    )
}


export default UserMenu