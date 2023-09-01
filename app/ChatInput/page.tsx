'use client'
import { Component1 } from './Component1';


import classes from './Desktop1.module.css';
import classes1 from './Component1.module.css';
import resets from './_resets.module.css';
import { IconSearchIconIcon } from './IconSearchIconIcon';
import { Searching } from '@/zustand/search';
import { useEffect } from 'react';



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

    //const [DataStore, GetData] = useState()

    useEffect(() =>  {
          fetch("https://web-app-next-lac.vercel.app/api/GetPost/1")
          .then(response => response.json())
          .then(data => console.log(data))
          
        },[]);

    //console.log(StoreData)


    return (
    //  <div className = "w-full h-p784  bg-[#155250] p-30 flex-1 flex-wrap items-center">
    <div className={`${resets.storybrainResets} ${classes.root}`}>
        <div className={`${classes.divList} flex-col`}>
          <div className={classes.chuaThanhLinh1}></div>
          <div className={classes.gIAOXUUcMeVoNhiemHonAt}>GIÁO XỨ Đức Mẹ Vô Nhiễm Hòn Đất</div>
          <div className={classes.pHATTHUONG}>PHÁT THƯỞNG</div>
          <input onChange={(e)=>Search(e.target.value)} />
          

          <Component1 />
          <Component1
            // className={classes.component1}
            text={{
              maiHan: 'Mai Mèo',
              lop1: 'Lớp 12',
              _1: 2,
              xuatSac: 'giỏi',
            }}
          />
          <Component1 />
          {/* <div className={classes.image3}></div> */}
          <Component1
          text={{
            maiHan: 'Phạm Trần Thiên Đăng',
            lop1: 'Lớp 8',
            _1: 3,
            xuatSac: 'tiêu biểu',
          }}
        />
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