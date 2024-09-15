//UX for the waiting time of Dang Tai ... no need for server cache 1 use 1 million

'use client'
import GetData from './action';

import { Component1 } from './Component1';
import classes from './Desktop1.module.css';

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
      <div className="w-1/5 m-16 bg-[aquamarine]">left sidebar
        <div className={classes.root}>
          <div className="text-[#FFFB82] text-xl">Giáo Xứ Đức Mẹ Vô Nhiễm Hòn Đất</div>
          <div className={`${classes.divList} flex-col`}>
            <div className={classes.pHATTHUONG}>PHÁT THƯỞNG</div>
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

      <div className="content">
        <div>
          <div className="instruction">
            <div className="symbolSet">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" xmlSpace="preserve" width="50" height="50"><path d="M49.22 25.78c0 -6.104 -2.278 -11.935 -6.414 -16.418 -3.991 -4.326 -9.365 -7.033 -15.181 -7.66a2.873 2.873 0 0 0 -0.468 -0.729A2.878 2.878 0 0 0 25 0a2.877 2.877 0 0 0 -2.156 0.973 2.878 2.878 0 0 0 -0.698 2.261l1.174 9.39c0.106 0.845 0.827 1.482 1.683 1.482 0.852 0 1.573 -0.637 1.679 -1.482l1.158 -9.265c5.277 0.661 10.141 3.161 13.776 7.102 3.676 3.985 5.777 9.11 5.969 14.51h-3.076a0.81 0.81 0 0 0 0 1.62h3.075c-0.419 11.819 -9.955 21.355 -21.773 21.773V45.288a0.81 0.81 0 0 0 -1.62 0v3.075C12.371 47.945 2.835 38.409 2.417 26.59h3.075a0.81 0.81 0 0 0 0 -1.62H2.416c0.1 -2.857 0.725 -5.624 1.867 -8.235 1.207 -2.76 2.929 -5.219 5.118 -7.308a0.81 0.81 0 0 0 -1.118 -1.172c-2.346 2.238 -4.191 4.873 -5.484 7.831 -1.339 3.063 -2.018 6.324 -2.018 9.694 0 6.469 2.519 12.551 7.094 17.126 4.574 4.574 10.656 7.093 17.124 7.094l0.001 0 0.001 0c6.469 0 12.55 -2.52 17.125 -7.094 4.574 -4.574 7.094 -10.656 7.094 -17.126M26.247 3.033l-1.174 9.39c-0.004 0.036 -0.035 0.063 -0.075 0.063a0.072 0.072 0 0 1 -0.071 -0.063l-1.174 -9.39c-0.045 -0.363 0.063 -0.713 0.305 -0.987S24.634 1.62 25 1.62s0.7 0.151 0.942 0.425 0.35 0.625 0.305 0.987" fill="green"/>
                <path d="M21.083 25.461c-0.009 0.105 -0.014 0.211 -0.014 0.319 0 2.168 1.764 3.931 3.931 3.931s3.931 -1.764 3.931 -3.931 -1.764 -3.931 -3.931 -3.931c-0.014 0 -0.028 0.001 -0.042 0.001l-11.147 -9.18a0.81 0.81 0 0 0 -1.172 1.1zm6.228 0.319c0 1.274 -1.037 2.311 -2.311 2.311s-2.311 -1.037 -2.311 -2.311c0 -0.106 0.01 -0.209 0.023 -0.311a0.81 0.81 0 0 0 0.028 -0.172c0.199 -0.934 0.965 -1.658 1.919 -1.8a0.81 0.81 0 0 0 0.238 -0.023c0.034 -0.002 0.068 -0.005 0.102 -0.005 1.275 0 2.311 1.037 2.311 2.311m-4.268 -3.408a3.964 3.964 0 0 0 -1.31 1.223l-4.102 -5.68z" fill="yellow"/>
              </svg>
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

      <div className="w-1/5 m-16 bg-[bisque]">right side bar</div>

    </div>
    )
  }

export default ChatPage


