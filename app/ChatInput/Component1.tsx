'use client'

import { memo, useState } from 'react';
import type { FC, ReactNode } from 'react';

import classes00 from './Component1.module.css';
import classesDesktop1 from './Desktop1.module.css';
import resets from './_resets.module.css';
import { IconSearchIconIcon } from './IconSearchIconIcon';

import useRentModal from '@/zustand/FormShow';
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
  };
  format?: {
    maiHan: ReactNode;
    lop1?: ReactNode;
    _1?: ReactNode;
    xuatSac?: ReactNode;
  };
}
/* @figmaId 5:9 */

export const Component1: FC<Props> = memo(function Component1(props) {
  const classes = props.format !=null ? classes00 : classes00
  const {text} = props
  
  const SearchName = Searching((state) => state.text)
  const checkName = text.maiHan.toLowerCase().includes(SearchName.toLowerCase())

  const Show = useRentModal((state) => state.isOpen)
  const ShowToggle = useRentModal((state) => state.toggle)

  const [ShowLocal, ToggleLocal] = useState(false)
  //console.log(text)
  const DivSet = Object.keys(text).map(key => {
    // console.log(text[key])
    return <div key = {key} className={classes[key]} onClick={() => ToggleLocal(!ShowLocal)}>{text[key]}</div>
  }) 
    
  return ( checkName &&
    <>
      <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root} flex-row`}>
        {/* <div className="absolute right-0 left-0 botto/m-[10px] border-b border-solid border-white"></div> */}
        <div className={classes.line1}></div>  
        <>
          {DivSet}
        </>
        {/* <IconSearchIconIcon className={classes.icon} />, */}
      </div>
      {ShowLocal && <div className={classesDesktop1.image3}></div>}
    </>
  );
});

Component1.defaultProps ={
  text: {
    maiHan: 'Mai Hân1',
    lop1: 'Lớp 1',
    _1: 1,
    xuatSac: 'Giỏi',
  }
}

