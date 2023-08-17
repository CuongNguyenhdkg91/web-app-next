'use client'

import Image from 'next/image'
import useRentModal from "@/zustand/useRenModal"
import FormTemplate from "./FormTemplate"

import { toast } from 'react-hot-toast' 
import Heading from "../Elements/Heading"
import Input from '../Elements/Input'
import { TbPhotoPlus } from 'react-icons/tb'

import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const CreateNew  = () => {
    const router = useRouter()
    const CreateNew = useRentModal()
    const [isLoading, setIsLoading] = useState(false)
    const { 
        register, 
        handleSubmit,
        setValue,
        watch,
        formState: {
          errors,
        },
        reset,
      } = useForm<FieldValues>({
        defaultValues:{
            imageSrc: 'https://f9-zpcloud.zdn.vn/2854632801482053486/a23fb787ca741b2a4265.jpg',
            published: true
        }
      })

      const imageSrc = watch('imageSrc')

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue("imageSrc",data.content)
        console.log(data)

        axios.post('api/CreateItem',data)
        .then(() => {
            toast.success('New Item Created')
            router.refresh()
            reset();
            CreateNew.onClose()
        })

        .catch(()=> {
            toast.error('Check your code')
        })

        .finally(() =>{
            setIsLoading(false)
        })

    }

    const bodyContent = (
        <div className="flex flex-col gap-8">

{/*             <Heading
                title="Add the image of the item"
                subtitle="Put the address of the available image"
            /> */}
            
             <Input
                id="content"
                label="Paste the https link"
                disabled = {isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="title"
                label="write the title"
                disabled = {isLoading}
                register={register}
                errors={errors}
                required
            />

            {/* <div
                onClick={() => open?.()}
                className="
                relative
                cursor-pointer
                hover:opacity-70
                transition
                border-dashed 
                border-2 
                p-3
                border-neutral-300
                flex
                flex-col
                justify-center
                items-center
                gap-2
                text-neutral-600
                "
            >
                <TbPhotoPlus
                size={25}
                />
                <div >
                click to paste the link
                </div>
            </div> */}

            <div className="
                flex
                flex-col
                items-center"
                >
                <Image
                    src={imageSrc}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />
            </div>

        </div>
        )

    return(
        <FormTemplate 
        title = 'Create New Item'
        actionLabel='Create'
        body={bodyContent}
        isOpen = {CreateNew.isOpen}
        onSubmit={handleSubmit(onSubmit)}
        onClose={CreateNew.onClose}
        />
    )
}


export default  CreateNew