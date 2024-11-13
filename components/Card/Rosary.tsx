
import { Pattaya, Dancing_Script, Pacifico } from "next/font/google"
import classes from './rosary.module.css'
import Image from "next/image"
import * as fs from 'fs'
import { ReactElement } from "react"

type order = 1|2|3|4|5

interface Mysterious {
    name: string
    No: number //use order meet error in build when assign order = number
    writing: string
    imgUrl: string
}


function WordOfNo (No: number) :string {
    switch (No){
        case 1: return 'nhất'; break;
        case 2: return 'hai'; break;
        case 3: return 'ba'; break;
        case 4: return 'tư'; break;
        case 5: return 'năm'; break;
        default: return ''
    }

}

const pattaya = Pattaya({
    weight:['400'],
    subsets: ['vietnamese']
})

const dancingScript = Dancing_Script({
    weight:['400','500','600','700'],
    subsets: ['vietnamese']
})

const pacifico = Pacifico({
    weight:['400'],
    subsets: ['vietnamese']
  })


const Rosary = (props: Mysterious) => {
    const {name,No,writing,imgUrl} = props
    let classArt:string =''
    let classWriting: string =''
    let path: ReactElement
    let Id: number
    switch(name.toLowerCase()){
        case 'vui':
            classArt = classes.joy
            path = <path id="curve1" fill="none" stroke="none" d='M105,23 a 180 180 0 0 1 90 0'/>
            Id=1
            break
        case 'thương': 
            classArt = classes.sorrow
            path = <path id="curve2" fill="none" stroke="none" d='M95,30 a 150 150 0 0 1 121 0'/>
            Id=2
            break
        case 'mừng':
            classArt = classes.glorious
            path = <path id="curve3" fill="none" stroke="none" d='M100,26 a 150 150 0 0 1 105 0'/>
            Id=3
            break
        case 'sáng':
            classArt = classes.luminous
            path = <path id="curve4" fill="none" stroke="none" d='M100,26 a 150 150 0 0 1 105 0'/>
            Id=4
            break
        default:
            path=<></>
            Id=0
    }

    switch(name.toLowerCase()){
        case 'sáng':
            classWriting = classes.whiteStroke
            break
        default:
            classWriting = classes.blueStroke
    }

    let textClass = ''
    if (writing.length < 76) {
        textClass = classes.writingS
    }
    if (writing.length > 110) {
        textClass = classes.writingL
    }
    if (writing.length > 140) {
        textClass = classes.writingXL
    }
   
    return(
        <div className="flex flex-row">
            {/* <div className="w-32 h-32 bg-gradient-to-r from-[cyan] to-[blue]"> </div> */}
            <div className={`max-w-[560px] w-full aspect-[1.82] max-h-[320px] ${classArt} relative`}>
                <div className='absolute top-0 z-50 w-full'>
                    <svg viewBox="0 0 300 40" className="absolute">
                        {/* {path} */}
                        <path id={`curve${Id}`} fill="none" stroke="none" className={classArt}/>
                        <text className={`uppercase text-[12.5pt] font-bold  ${classArt} ${pattaya.className}`}>
                            <textPath href={`#curve${Id}`}>{`năm sự ${name}`}</textPath>
                        </text>
                    </svg>

                    <div className="absolute top-[18px] w-full h-[120px] flex flex-row justify-center" >
                        <img className="h-full" src="/rosary-necklace.png" />
                    </div>

                    <div className='ml-3 mt-1 w-[108px] h-[108px] rounded-[54px] overflow-hidden'>
                        <img src={imgUrl} className="w-full" />
                    </div>
                    
                    <p className={`text-[10pt] text-[white] ml-3 ${pacifico.className}`}>{`Thứ ${WordOfNo(No)}:`}</p>

                    <div className={`absolute w-full pl-2 font-[700] text-[28pt] text-[3.3vw] leading-[1] ${textClass} ${classWriting} ${dancingScript.className}`}>
                        <p className={`pr-1 absolute ${classes.Stroke}`}>
                            {writing}
                        </p>
                        <p className={`pr-1 absolute`}>
                            {writing}
                        </p>
                    </div>
                </div>
                <img src={'/preview.png'} className="absolute z-0 bottom-0 right-0 opacity-40 h-full"/>
                
            </div>
        </div>
    )
}


export {Rosary}