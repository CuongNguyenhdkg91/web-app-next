'use client'

import Head from 'next/head';
import { Component1 } from './Component1';
var unidecode = require('unidecode')


import classes from './Desktop1.module.css';
import resets from './_resets.module.css';

import { IconImageSearch, IconSearchIconIcon } from './IconIcon';
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

    const sampleItem = {title: 'Mạng dữ liệu đang chờ tải xuống', grade: '', note:[''],content:'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/371247798_816837566567791_1883408416639496517_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HuWOowtD7NIAX_Wa2JV&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdTJQ5xTA_F9F5-KFDXU-7hJoU3V3jo5JZrdf0coBEaKpg&oe=651A9252'}
    const sampleList = Array(10).fill(sampleItem)
    const [DataStore, GetData] = useState(sampleList)

    useEffect(() =>  {
          fetch("https://web-app-next-lac.vercel.app/api/GetPost/1")
          .then(response => response.json())
          .then((data: Post[]) =>  {
            console.log(data)
            const DataFilter = data.filter(item =>{
                     return item.published === false
             })
            const CatTen = (FullName:string) => {
              return unidecode(FullName.split(' ').slice(-1).toString())
            } 
            const DataSort = DataFilter.sort((a:Post,b:Post) => 
              //CatTen(a.title) > CatTen(b.title) ? 1 : -1 //not good in UX
              parseInt(a.grade) > parseInt(b.grade) ? 1: -1
            )
            GetData(DataSort)
          })
          .catch(error => {console.log('Rất tiếc, không tải được dữ liệu vào lúc này!')})
        },[]);

    return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
    <div className={`${resets.storybrainResets} ${classes.root}`}>
        <div className={`${classes.divList} flex-col`}>
          <div className={classes.chuaThanhLinh1}></div>
          <div className={classes.gIAOXUUcMeVoNhiemHonAt}>Giáo Xứ Đức Mẹ Vô Nhiễm Hòn Đất</div>
          <div className={classes.pHATTHUONG}>PHÁT THƯỞNG</div>
          <input className = {classes.TimTen} placeholder='Tìm theo tên' onChange={(e)=>Search(e.target.value)} />
          
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
          {/* <div className={classes.image1}></div> */}
        </div>
     </div>
     </>
    )
  }

export default ChatPage


