'use client'

import { Oswald, Pacifico } from 'next/font/google';
import classes from './CertList.module.css';

import type { FC, ReactNode} from 'react';

import Image from 'next/image';
import { SVGProps } from 'react';

import { useEffect, useState, memo } from 'react';
import {Searching} from '@/zustand/Search';
import GetData from './action';

const IconSearchIconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.0007 15.7077C13.4083 17.1332 11.3054 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 11.3054 17.1332 13.4083 15.7078 15.0006L21.0104 20.3033C21.2057 20.4986 21.2057 20.8151 21.0104 21.0104C20.8152 21.2057 20.4986 21.2057 20.3033 21.0104L15.0007 15.7077ZM17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z'
      fill='#521517'
    />
  </svg>
);

const Memo = memo(IconSearchIconIcon);

const IconImageSearch = (props:any) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M19 13a1 1 0 00-1 1v.39l-1.48-1.48a2.79 2.79 0 00-3.93 0l-.7.7-2.48-2.49a2.87 2.87 0 00-3.93 0L4 12.61V7a1 1 0 011-1h4a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.89a.79.79 0 011.09 0l3.17 3.17L15.45 20zm13-1a1 1 0 01-.18.54L13.31 15l.7-.69a.77.77 0 011.1 0L18 17.22zm3.71-8.71L20 8.57a4.31 4.31 0 10-6.72.79 4.27 4.27 0 003 1.26 4.34 4.34 0 002.29-.62l1.72 1.73a1 1 0 001.42 0 1 1 0 000-1.44zM18 8a2.32 2.32 0 110-3.27A2.32 2.32 0 0118 8z" />
    </svg>
  );
}

function IconArrowCollapse(props:any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M19.5 3.09L15 7.59V4h-2v7h7V9h-3.59l4.5-4.5-1.41-1.41M4 13v2h3.59l-4.5 4.5 1.41 1.41 4.5-4.5V20h2v-7H4z" />
    </svg>
  );
}


interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text: {
    maiHan: string;
    lop1?: string;
    _1?: number;
    xuatSac?: string;
    content: string;
  };
  
  format?: {
    maiHan?: ReactNode;
    lop1?: ReactNode;
    _1?: ReactNode;
    xuatSac?: ReactNode;
  };
}
/* @figmaId 5:9 */

export const pacifico = Pacifico({
  weight:['400'],
  subsets: ['vietnamese']
})
const oswald = Oswald({
  subsets: ['vietnamese']
})


//export const Component1: FC<Props> = memo(function Component1(props) {

const Component1: FC<Props> = memo(function Component1(props){

  const {text} = props
  
  const SearchName = Searching((state) => state.text)
  const checkName = text.maiHan.toLowerCase().includes(SearchName.toLowerCase())

  const [ShowLocal, ToggleLocal] = useState(false)

  //const keyArray = Object.keys(text) //cannot build with vercel because the type of text not allow a string as index although dev mode is OK
    //const keyArray =["maiHan", "lop1", "_1", "xuatSac"]
/*     const DivSet = keyArray.map(key => {
    const a = Object.keys(text)[0]
    console.log(a.valueOf())   
    return <div key = {key} className={classes[key]} onClick={() => ToggleLocal(!ShowLocal)}>{text[key]}</div>
  })  */

const DivSet =
  <div className='flex flex-row gap-2 items-center'>
    <div className={`${classes._1} ${oswald.className}`}>{text._1}</div>
    <div className='flex flex-col text-left'>
      <div className={`${classes.maiHan} ${pacifico.className}`}>{text.maiHan}</div>
      <div className={`text-lg ${pacifico.className} text-[white]`}>{text.lop1}</div>
    </div>
    <div className='flex flex-col items-end grow'>
      <div className={`${classes.xuatSac} ${oswald.className}`} onClick={() => {ToggleLocal(!ShowLocal)}}>{text.xuatSac}</div>
      <div className="" >
        <div onClick={() => {ToggleLocal(!ShowLocal)}}>
          {(!ShowLocal) && <IconImageSearch className="text-[#f713ffff]" width={25} height = {25} />}
          {(ShowLocal) &&<IconArrowCollapse className="text-[#f713ffff]" width={25} height = {25} />} 
        </div>
      </div>
    </div>
  </div>


  return ( checkName &&
    <> 
      {DivSet}
      <div className={classes.line1}></div>  
      {ShowLocal && <Image src={text.content} width={320} height={240} alt='Giấy khen'></Image>}
    </>
  );
});

interface SidebarProps {
  step: number
}

const ListCert: React.FC<SidebarProps> = ({step}) => {
    
    const Search = Searching((state) => state.setText) 

    const sampleItem = {title: 'Đang tải .......', grade: '', note:[''],content:'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/371247798_816837566567791_1883408416639496517_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HuWOowtD7NIAX_Wa2JV&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdTJQ5xTA_F9F5-KFDXU-7hJoU3V3jo5JZrdf0coBEaKpg&oe=651A9252'}
    const sampleList = Array(10).fill(sampleItem)

    
    const  [DataStore, UpdateData] = useState(sampleList)
    useEffect(() => {
      GetData().then(data => UpdateData(data))
   },[step])

    return (
        <div className="mt-[150px] bg-[#155250] text-center overflow-hidden">
          <div className="text-[#FFFB82] text-xl font-['Oswald']">Giáo Xứ Đức Mẹ Vô Nhiễm Hòn Đất</div>
          <div className={classes.pHATTHUONG}>PHÁT THƯỞNG</div>
          <div className="bg-[#ffffff29] flex-col">
            <div className='flex flex-row justify-center gap-2'>
              <IconSearchIconIcon width="25" height="25" />
              <input className = {classes.TimTen} placeholder='Tìm theo tên' onChange={(e)=>Search(e.target.value)} />
            </div>
            
            {DataStore.map((item , index) => {
              //const switcher_result = ['Giỏi','XS:Xuất sắc','TB: Tiêu biểu']
              //const i = switcher_result.findIndex(item.note)
              const decodeDanhHieu = () => {
                if (item.note.includes('XS')) return 'Xuất sắc'
                else if (item.note.includes('TB')) return 'Tiêu biểu'
                else return 'Giỏi'
              }

              const text = {
                maiHan: item.title,
                lop1: 'Lớp ' + item.grade,
                _1: index+1,
                xuatSac: decodeDanhHieu(),
                content: item.content
              }
              return <Component1 key = 'maiHan' text ={text}/>
            })}
          </div>
          <div className={classes.image2}></div>
        </div>
 )}

 export {ListCert}

