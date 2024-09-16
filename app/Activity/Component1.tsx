'use client'

import { memo, useState } from 'react';
import type { FC, ReactNode } from 'react';

import classes00 from './Component1.module.css';
import classesDesktop1 from './Desktop1.module.css';

import Image from 'next/image';
import { IconArrowCollapse, IconImageSearch, IconSearchIconIcon } from './IconIcon';

import {Searching} from '@/zustand/Search';


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

//add memo but not understand how to use cause some problem of the image show
//export const Component1: FC<Props> = memo(function Component1(props) {

export const Component1: FC<Props> = (props) => {
  const classes = props.format !=null ? classes00 : classes00 //define class
  const {text} = props
  
  const SearchName = Searching((state) => state.text)
  const checkName = text.maiHan.toLowerCase().includes(SearchName.toLowerCase())

  //const Show = useRentModal((state) => state.isOpen)
  //const ShowToggle = useRentModal((state) => state.toggle)

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
    <div className={classes._1}>{text._1}</div>
    <div className='flex flex-col text-left'>
      <div className={classes.maiHan}>{text.maiHan}</div>
      <div className={classes.lop1}>{text.lop1}</div>
    </div>
    <div className='flex flex-col items-end grow'>
      <div className={classes.xuatSac} onClick={() => {ToggleLocal(!ShowLocal)}}>{text.xuatSac}</div>
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
      {/* <IconSearchIconIcon className={classes.icon} />, */}      
      {ShowLocal && <Image src={text.content} width={320} height={240} alt='Giấy khen'></Image>}
      {/* {ShowLocal && <div className="w-80 h-60 bg-[url('/../../public/logoTNTT.jpg')]"></div>} */}
      {/* {ShowLocal && <div className={`${classesDesktop1.image3}`}></div>} */}
    </>
  );
};

Component1.defaultProps ={
  text: {
    maiHan: 'Mai Hân1',
    lop1: 'Lớp 1',
    _1: 1,
    xuatSac: 'Giỏi',
    content:''
  }
}

