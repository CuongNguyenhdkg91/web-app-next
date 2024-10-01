
import { Pattaya, Dancing_Script, Pacifico } from "next/font/google"
import classes from './test.module.css'
import Image from "next/image"
import * as fs from 'fs'
import { ReactElement } from "react"

type order = 1|2|3|4|5

interface Mysterious {
    name: string
    No: order
    writing: string
    imgUrl: string
}

interface Rosary {
    Id: number
    Name: string
    Stock: number
    Myths: string[]
}

const file = fs.readFileSync(process.cwd() + '/public/test.json', 'utf8');
const data = JSON.parse(file);
const rosary: Rosary[] = data

function WordOfNo (No: order) :string {
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


const Test = (props: Mysterious) => {
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
    if (writing.length < 74) {
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
            <div className={`max-w-[560px] w-full aspect-[1.78] max-h-[320px] ${classArt} relative`}>
                <div className='absolute top-0 z-50 w-full'>
                    <svg viewBox="0 0 300 40" className="absolute">
                        {/* {path} */}
                        <path id={`curve${Id}`} fill="none" stroke="none" className={classArt}/>
                        <text className={`uppercase text-[12.5pt] font-bold  ${classArt} ${pattaya.className}`}>
                            <textPath href={`#curve${Id}`}>{`năm sự ${name}`}</textPath>
                        </text>
                    </svg>

                    <div className="absolute top-[18px] w-full h-[130px] flex flex-row justify-center" >
                        <img className="h-full" src="/rosary-necklace.png" />
                    </div>

                    <div className='ml-3 mt-1 w-28 h-28 rounded-[56px] overflow-hidden'>
                        <img src={imgUrl} className="w-full" />
                    </div>
                    
                    <p className={`text-[10pt] text-[white] ml-3 ${pacifico.className}`}>{`Thứ ${WordOfNo(No)}:`}</p>

                    <div className={`absolute w-full px-3 font-[700] text-[28pt] text-[3.3vw] leading-[1] ${textClass} ${classWriting} ${dancingScript.className}`}>
                        <p className={`absolute ${classes.Stroke}`}>
                            {writing}
                        </p>
                        <p className={`absolute`}>
                            {writing}
                        </p>
                    </div>

                    {/* <svg viewBox="0 0 300 50">
                        <path id="01" d="M10,18 h280 M10,40 h280" stroke="none" />
                        <text className={`fill-[white] text-[15pt] font-[700] stroke-[blue] stroke-[2.8pt] ${dancingScript.className}`}>
                        <textPath href="#01">
                        Đức Giêsu chịu đội mão gai, ta hãy xincho được chịu mọi sự sỉ nhục bằng lòng
                        </textPath>
                        </text>
                        <text className={`fill-[white] text-[15pt] font-[700] ${dancingScript.className}`}>
                        <textPath href="#01">
                        Đức Giêsu chịu đội mão gai, ta hãy xincho được chịu mọi sự sỉ nhục bằng lòng
                        </textPath>
                        </text>
                    </svg> */}

                </div>
                <img src={'/preview.png'} className="absolute z-0 bottom-0 right-0 opacity-40 h-full"/>
                
            </div>
        </div>
    )
}

const page = () =>
{
    const list = Array(10).fill(1)

    // const response = await fetch('/test.json');
    // const file = await response.json()

    // let Id = 3
    // let data = rosary[Id-1]
    // console.log(rosary[3])

    let index:order = 1

    return(
    <div>
        {rosary.map((data) => {
            return(
            data.Myths.map((myth,j) => {
            index=j+1
            // console.log(data.Myths)
            return(
                <div className="grid grid-cols-2 gap-y-[2px] mx-[1.5px] mb-[13px]">
                    {list.map(() => {
                    return(
                        <div className="w-full px-[1.5px]">
                            <Test 
                            name= {data.Name}
                            No={index}
                            writing={myth}
                            imgUrl={`/rosary/${data.Id}-${index}.jpg`}
                            />
                        </div>
                    )})}
                </div>
            )})
        )})
        }
    </div>
    )
}

export default page