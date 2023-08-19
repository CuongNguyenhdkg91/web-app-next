'use client';
import {useForm} from 'react-hook-form'
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import Button from "../Elements/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const FormTemplate: React.FC<ModalProps> = ({ 
    isOpen, 
    onClose, 
    onSubmit, 
    title, 
    body, 
    actionLabel, 
    disabled,
    secondaryAction,
    secondaryActionLabel
  }) => {

    const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
  
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);
  
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [secondaryAction, disabled]);

  
  if (!isOpen) {
    return null;
  }

    return(
        <>
      <div id ="bao ngoai" 
          className="fixed inset-0 z-50 justify-center items-center flex bg-neutral-800/70
                  overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      >
        <div id ="bao trong" 
              className="relative w-full
                        md:w-4/6 lg:w-3/6 xl:w-2/5
                        my-6 mx-auto h-full lg:h-auto md:h-auto"
        >
          {/*content*/}
          <div id ='user form'
                className={`translate duration-300 h-full
                       ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                `}
          >
            <div className="relative flex flex-col translate
              w-full h-full lg:h-auto md:h-auto
              border-0 rounded-lg shadow-lg bg-white outline-none focus:outline-none
            ">
              
              {/*header*/}
              <div className="relative flex items-center p-2 rounded-t justify-center border-b-[1px]">
                <button className="absolute p-1 border-0 hover:opacity-70 transition left-9"
                  onClick={handleClose}
                >
                  <IoMdClose size={20} />
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>

              {/*body*/}
              <div className="relative p-3 flex-auto">
                {body}
              </div>

              {/*Form Buttons*/}
              <div className="flex flex-col gap-2 p-1">
                <div className="flex flex-row items-center gap-4 w-full">
                  <Button 
                    disabled={disabled} 
                    label={actionLabel} 
                    onClick={handleSubmit}
                  />
                </div>
                  {/* insrt to add more button */}
                  {/*{secondaryAction && secondaryActionLabel && (
                    <Button 
                      disabled={disabled} 
                      label={secondaryActionLabel} 
                      onClick={handleSecondaryAction}
                      outline
                    />  
                  )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}


export default FormTemplate