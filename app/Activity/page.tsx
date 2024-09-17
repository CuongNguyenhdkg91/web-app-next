//UX for the waiting time of Dang Tai ... no need for server cache 1 use 1 million
// there is exception when show image of last row

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

 interface New{
    title: string,
    subtitle: string,
    figures: string[],
    writing: string
 }

 const News: React.FC<New> = ({title,subtitle,figures,writing}) => {
  return(
      <div>
        <div className="instruction flex flex-row">
          <div>
            <IconWatch />
            <div className="font-awesome"></div>
            <div className="fa fa-spinner fa-3x fa-spin"></div>
          </div>
          <div className="img-writing pr-2">
            <strong>{title}<span>{subtitle}</span></strong>
            <div className="imgBox">
              <img src={figures[0]} />
            </div>
            <p className="text-[white] text-justify">{writing}</p> {/* text-white not effect ? because of p ? */}
          </div>
        </div>
        <hr className="my-2" />
      </div>
  )}

const NewsPage = () =>{
  return (
  <div id="main" className="bg-[#212e3a] text-white flex flex-row justify-between gap-3 flex-wrap">
    <div className="w-[360px] pb-[200px] bg-[aquamarine]">left sidebar
      <ListCert step={1} />
    </div>
    <div className="w-3/5 md:w-full">
      <News
      title = 'KHAI GIẢNG GIÁO LÝ NĂM HỌC 2024-2025'
      subtitle='CHÚA NHẬT 8.9.2024'
      figures={['https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/459114318_828306912811608_291259774935918735_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5unNR8OqLtIQ7kNvgFOF7Ym&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=Aocdzc_HaY-vxlT-GHrnRc3&oh=00_AYCwZO5-Fp23184ux1T3f7Dz2YugnQHzI456ke3cvh2HxQ&oe=66EEAEE0']}
      writing='📍 Dưới sự tham dự của Cha Chánh Xứ, Cha Tuyên Úy, Quý Soeur, Ban Hành Giáo và các anh chị Trưởng cùng các em Thiếu Nhi trong Giáo Xứ. Một năm học giáo lý mới chính thức bắt đầu.
      📢 Chúng con nhận được những lời nhắn nhủ từ Quý Cha và Soeur về tầm quan trọng của việc học Giáo Lý. Chúng con học Giáo Lý để biết Chúa và yêu tha nhân nhiều hơn cũng như biết thực hành những điều Chúa dạy, từ đó chúng con sẽ lớn lên mỗi ngày trong đời sống đức tin của mình.'
     />

      <News
      title = 'THÁNH LỄ RƯỚC LỄ TRỌNG THỂ'
      subtitle='Chúa Nhật 14/7/2024'
      figures={['https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/450957609_794256072883359_8029243879562209243_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=akSzT_KmqMoQ7kNvgEFZyGQ&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYD1H5WVXfCcI3sTTAjvlGF114U_iE1_9M9eN6cMVQuHKA&oe=66EEBF0A']}
      writing='🌱 Nguyện xin Chúa Giêsu Thánh Thể luôn ở mãi trong tâm hồn các em, để các em luôn vững bước trên con đường tình yêu mà Chúa dành riêng cho các em và Người sẽ nuôi sống linh hồn các em bằng của ăn thiêng liêng.
      🪴 Qua việc nhắc lại lời tuyên xưng đức tin và tuyên hứa. Từ nay, các em như những chứng nhân trưởng thành, sẵn sàng sống đức tin mà mình đã tuyên hứa giữa thế giới.'
     />
    </div>
    <div className="max-w-[250px] flex-grow bg-[bisque]">right side bar</div>
  </div>
)}

export default NewsPage


