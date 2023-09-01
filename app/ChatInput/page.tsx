'use client'
import { Component1 } from './Component1';


import classes from './Desktop1.module.css';
import classes1 from './Component1.module.css';
import resets from './_resets.module.css';
import { IconSearchIconIcon } from './IconSearchIconIcon';
import { Searching } from '@/zustand/Search';
import { useEffect, useState } from 'react';

export type Post = {
  id?: string;
  title: string;
  content: string;
  grade: string
  published?: boolean;
  authorId?: string;
  note: string[]
};

const ChatPage = () => {
    
    const Search = Searching((state) => state.setText) 

    // const GetData = async () => {
    //   try {
    //       const response = await fetch('localhost:3000/api/GetPost')
    //       const json = await response.json()
    //       console.log(json)
    //       return json 
    //       /* const GetData = json.filter(item =>{
    //         return item.published === false
    //     }) */
    //       }
    //   catch (error){
    //         console.log(error)
    //       }
    //     }

    // const StoreData = GetData()
    const [DataStore, GetData] = useState([{title: 'Mèo', grade: '12',content:''}])

    useEffect(() =>  {
          fetch("https://web-app-next-lac.vercel.app/api/GetPost/1")
          .then(response => response.json())
          .then((data: Post[]) =>  {
            //console.log(data)
            const DataFilter = data.filter(item =>{
                     return item.published === false
             }) 
            GetData(DataFilter)
          })
        },[]);

    //console.log(StoreData)
    
    // const item = DataStore[0]   
/*     const text = {
      maiHan: item.title,
      lop1: 'Lớp ' + item.grade,
      _1: 1,
      xuatSac: 'giỏi',
    }    */   
    return (
    //  <div className = "w-full h-p784  bg-[#155250] p-30 flex-1 flex-wrap items-center">
    <div className={`${resets.storybrainResets} ${classes.root}`}>
        <div className={`${classes.divList} flex-col`}>
          <div className={classes.chuaThanhLinh1}></div>
          <div className={classes.gIAOXUUcMeVoNhiemHonAt}>GIÁO XỨ Đức Mẹ Vô Nhiễm Hòn Đất</div>
          <div className={classes.pHATTHUONG}>PHÁT THƯỞNG</div>
          <input onChange={(e)=>Search(e.target.value)} />
          
          {DataStore.map(item => {
            const text = {
              maiHan: item.title,
              lop1: 'Lớp ' + item.grade,
              _1: 1,
              xuatSac: 'giỏi',
              content: item.content
            }
            return <Component1 text ={text}/>
          })}


          {/* <Component1
            text={{
              maiHan: 'Mai Mèo',
              lop1: 'Lớp 12',
              _1: 2,
              xuatSac: 'giỏi',
            }}
          />
          <Component1
          text={{
            maiHan: 'Phạm Trần Thiên Đăng',
            lop1: 'Lớp 8',
            _1: 3,
            xuatSac: 'tiêu biểu',
          }}
          /> */}
          {/* <div className={classes.line1}></div> */}
        </div>
        <div className={classes.divAvatar}>
          <div className={classes.image2}></div>
          <div className={classes.image1}></div>
        </div>
     </div>
    )
  }

export default ChatPage