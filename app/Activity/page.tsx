//UX for the waiting time of Dang Tai ... no need for server cache 1 use 1 million

'use client'
import GetData from './action';

import { Component1 } from './Component1';
import classes from './Desktop1.module.css';

import { IconImageSearch, IconSearchIconIcon, IconWatch } from './IconIcon';
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

function ChatPage() {
    
    // const Search = Searching((state) => state.setText) 

    const sampleItem = {title: 'Đang tải .......', grade: '', note:[''],content:'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/371247798_816837566567791_1883408416639496517_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HuWOowtD7NIAX_Wa2JV&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdTJQ5xTA_F9F5-KFDXU-7hJoU3V3jo5JZrdf0coBEaKpg&oe=651A9252'}
    const sampleList = Array(10).fill(sampleItem)

    const  [DataStore, UpdateData] = useState(sampleList)
    useEffect(() => {
      GetData().then(data => UpdateData(data))
   },[])

    return (
    <div id="main" className="bg-[#212e3a] text-white flex flex-row justify-around">
      <div className="w-[360px] mx-4 pb-[200px] bg-[aquamarine]">left sidebar
        <div className="mt-[150px] bg-[#155250] text-center overflow-hidden">
          <div className="text-[#FFFB82] text-xl font-['Oswald']">Giáo Xứ Đức Mẹ Vô Nhiễm Hòn Đất</div>
          <div className={classes.pHATTHUONG}>PHÁT THƯỞNG</div>
          <div className="bg-[#ffffff29] flex-col">
            {/* <input className = {classes.TimTen} placeholder='Tìm theo tên' onChange={(e)=>Search(e.target.value)} /> */}

            
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
      </div>

      <div className="w-3/5">
        <div>
          <div className="instruction flex flex-row">
            <div>
              <IconWatch />
              <div className="font-awesome"></div>
              <div className="fa fa-spinner fa-3x fa-spin"></div>
            </div>
            <div className="img-writing">
              <strong>Write down the action<span>Advance Element</span></strong>
              <div className="imgBox">
                <img src="https://i.ytimg.com/vi/dgYsObJXif4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHYZivV8P813509Dez3eE77w81GA" />
              </div>
              <p>prepare the excel file and word script to modify directly the html source. ref VCS create script. This solution shrink the tedious actions of copy the data form html table and parsing the table and copy reversely to the html source file to just the two clicks. prepare the excel file and word script to modify directly the html source. ref VCS create script. This solution shrink the tedious actions of copy the data form html table and parsing the table and copy reversely to the html source file to just the two clicks</p>
            </div>
          </div>
          <hr/>
        </div>
      </div>

      <div className="w-[200px] mx-4 bg-[bisque]">right side bar</div>

    </div>
    )
  }

export default ChatPage


