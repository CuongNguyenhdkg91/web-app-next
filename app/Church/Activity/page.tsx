//UX for the waiting time of Dang Tai ... no need for server, cache 1 use 1 million
// there is exception when show image of last row

'use client'
import { News } from '@/components/Writing/News01';
import { ListCert } from '@/components/Listings/CertList/CertList';

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
      figures={['https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/459114318_828306912811608_291259774935918735_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kNzE6SCo0ZcQ7kNvgGZfZt2&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=AL4gDC3p_Yuskn14KR9Yzo0&oh=00_AYAMf9y6ME35bKD5P4VKvRc3DqF0_pz0RLpBSo4yLPGNVA&oe=673A44E0']}
      writing='📍 Dưới sự tham dự của Cha Chánh Xứ, Cha Tuyên Úy, Quý Soeur, Ban Hành Giáo và các anh chị Trưởng cùng các em Thiếu Nhi trong Giáo Xứ. Một năm học giáo lý mới chính thức bắt đầu.
      📢 Chúng con nhận được những lời nhắn nhủ từ Quý Cha và Soeur về tầm quan trọng của việc học Giáo Lý. Chúng con học Giáo Lý để biết Chúa và yêu tha nhân nhiều hơn cũng như biết thực hành những điều Chúa dạy, từ đó chúng con sẽ lớn lên mỗi ngày trong đời sống đức tin của mình.'
     />

      <News
      title = 'THÁNH LỄ RƯỚC LỄ TRỌNG THỂ'
      subtitle='Chúa Nhật 14/7/2024'
      figures={['https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/451638605_794256839549949_3963386532100398940_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0HgshPsWwbIQ7kNvgGMu-Dh&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AfsTvwLCYyxWljN-exe3u9m&oh=00_AYAEejUJClJE54ThGdNa-GomjBnMjMx8JNeAD0I_-SzcXw&oe=673A403A']}
      writing='🌱 Nguyện xin Chúa Giêsu Thánh Thể luôn ở mãi trong tâm hồn các em, để các em luôn vững bước trên con đường tình yêu mà Chúa dành riêng cho các em và Người sẽ nuôi sống linh hồn các em bằng của ăn thiêng liêng.
      🪴 Qua việc nhắc lại lời tuyên xưng đức tin và tuyên hứa. Từ nay, các em như những chứng nhân trưởng thành, sẵn sàng sống đức tin mà mình đã tuyên hứa giữa thế giới.'
     />
    </div>
    <div className="max-w-[250px] flex-grow bg-[bisque]">right side bar</div>
  </div>
)}

export default NewsPage


