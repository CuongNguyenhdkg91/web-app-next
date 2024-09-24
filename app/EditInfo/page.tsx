"use client";

//the modal should shrink after the edit submit for user to check the screen if they want before edit other records

//import './page.module.css'

import { useRouter } from "next/navigation";
import axios from "axios";

import Input from "../../components/Elements/Input";
import FormTemplate from "../../components/FormCreate/FormTemplate";
import Image from "next/image";

import { toast } from "react-hot-toast";
import { TbPhotoPlus } from "react-icons/tb";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const CreateNew = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      imageSrc:
        "https://f9-zpcloud.zdn.vn/2854632801482053486/a23fb787ca741b2a4265.jpg",
      published: true,
    },
  });

  const imageSrc = watch("content");
//*call api - Submit event
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    //setValue("imageSrc", data.content)
    console.log(data);

    axios
      .post("api/CreateItem", data)
      .then(() => {
        toast.success("New Item Created");
        router.refresh();
        reset();
        //FormShow.onClose() // keep the form open
      })
      .catch(() => {
        toast.error("Check your code");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="content"
        label="Paste the https link"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="title"
        label="write the title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <div className="flex flex-col items-center">
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </div>
  );

  {
    /* insert into for adding the image from computer */
  }
  {
    /* <div
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
            </div> */
  }

  return (
    
    <div>

      <img src ="https://www.ygfamily.com/contents/images/2023/07/artist1.jpg" />
   
      <FormTemplate
        title="Create New Item"
        actionLabel="Create"
        body={bodyContent}
        isOpen={isLoading}
        onSubmit={handleSubmit(onSubmit)}
        onClose={()=>setIsLoading(false)}
      />
    </div>
  );
};

export default CreateNew;
