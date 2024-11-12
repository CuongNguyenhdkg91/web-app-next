import { IoMdClose } from "react-icons/io";
import { IconType } from "react-icons";


export const FormAdd01: React.FC<{title:string, defaultImg: string}> = ({title, defaultImg}) => {

    const imgSrc = defaultImg

    const Button:React.FC<{label:string}> = ({label}) => {
        return(
            <button className="relative h-10 w-20 text-white font-semibold bg-rose-500 rounded-lg 
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
      
    const Input: React.FC<InputProps> = ({
        id,
        label,
      }) => {
      
        return (
          <div className="w-full relative">
            <input
              id = {id}        
              placeholder="text"
              className="w-full p-2 pb-0.5 pt-5 font-light bg-white border-2 rounded-2xl outline-none transition 
                        disabled:opacity-70 disabled:cursor-not-allowed
                        peer"
            />
            
            <label className="absolute text-sm left-4 top-4 z-10 origin-[0] transform -translate-y-3 duration-150 pointer-events-none
                              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              {label}
            </label>

          </div>
         );
      }

    return(
    <>
        <div id ="OutsideBox-blur" className="fixed bg-neutral-800/70 inset-0 z-50 justify-center items-center flex
                    overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div id="ContentBox" className="relative flex flex-col translate w-full h-full max-w-[1000px] lg:h-auto md:h-screen
                border-0 rounded-lg shadow-lg bg-white outline-none focus:outline-none">

                {/*header*/}
                <div className="relative flex items-center p-2 rounded-t justify-center border-b-[1px]">

                  <button className="absolute p-1 border-0 hover:opacity-70 transition left-9">
                    <IoMdClose size={20} />
                  </button>

                  <div className="text-lg font-semibold">
                    {title}
                  </div>

                </div>
  
                {/*body*/}
                <div className="relative p-3 flex-none">
                    <div className='flex flex-col gap-4'>
                        <Input id = 'url' label = 'Paste the https link' />
                        <Input id = 'name' label = 'write the title' />
                        <img className="h-[500px] object-cover" src={imgSrc}></img>
                    </div>
                </div>

  
                {/*Form Buttons*/}
                <div className="flex flex-row-reverse items-center gap-4 w-full">
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
        </div>

    </>
    )
}