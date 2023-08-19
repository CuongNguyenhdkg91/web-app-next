'use client'

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import useRentModal from "@/zustand/FormShow";
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
                <div onClick={onCreateNew}
                    className="hidden md:block text-sm font-semibold py-3 px-4 
                    rounded-full hover:bg-neutral-100 transition cursor-pointer
                    ">
                    Action to Do
                </div>

                <div    onClick={toggleOpen}
                        className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 
                        rounded-full border-[1px] border-neutral-200 cursor-pointer hover:shadow-md transition
                        ">
                    <AiOutlineMenu/>
                </div>
            </div>
            {isOpen && (
                <div    className="absolute right-0 top-12 w-[40vw] md:w-full text-sm 
                        rounded-xl shadow-md bg-white overflow-hidden
                        ">
                    <MenuItem
                    onClick={()=>{router.push('/ChatInput')}}
                    label = "Chat to Add" />

                    <MenuItem
                    onClick={()=>{router.push('/CreateNew')}}
                    label = "Create by Form" />
                </div>
            )}
        </div>

    )
}

export default UserMenu