'use client'

import { FormAdd } from '@/components/Form/FormAdd/FormAdd';
import slideImages from  './Images.js'
import css from './gallery.module.css'
import { useState } from 'react';

export default function page(){

    const [index,setIndex] = useState(0);
    const [urlImg, setUrl] = useState('default.png')

    function moveSlide(n: number) {
        if (index+n >= slideImages.length) {setIndex(0); return}
        if (index+n < 0){setIndex(slideImages.length-1); return}
        setIndex(index+n)
    }

    function setSlide(e){
        console.log(e.target.style)
        // const urlImg = this.src
        // console.log(urlImg)
        if (e.target.src) {setUrl(e.target.src)}
        const dive: HTMLDivElement = e.target
        if (dive.style.backgroundImage) {console.log(dive.style.backgroundImage)}
    }

    return(
<>

<div className='bg-[darkblue] h-[100vh]'>

    <div className="relative m-auto w-fit h-[80vh]" >
        <div className={css.numbertext}>{index+1} / {slideImages.length}</div>
        
        <img className="h-full object-cover"
        src={slideImages[index]} alt={slideImages[index]}
        />

        <div className={css.caption}>Điện Mặt Trời</div>

        <div className="absolute bottom-0 left-[50%] text-center">
            <span className={css.dot} ></span> 
            <span className={css.dot} ></span> 
            <span className={css.dot} ></span> 
        </div>

        <a className={css.prev} onClick = {() => moveSlide(-1)} >&#10094;</a>
        <a className = {css.next} onClick = {() => moveSlide(1)} >&#10095;</a>
    </div>
    <div>
        <div className={css.column} >
            <img src="Slide-1\Img_nature.jpg" alt="Nature"  />
        </div>
        <div className={css.column}>
            <img src="Slide-1\img_snow.jpg" alt="Snow"  />
        </div>
        <div className={css.column}>
            <img src="Slide-1\img_mountains.jpg" alt="Mountains"  />
        </div>
        <div className={css.column}>
            <img src="Slide-1\img_lights.jpg" alt="Lights" />
        </div>
    </div>
</div>

<div className='bg-[brown] h-[100vh]'>

    <div className="relative m-auto w-fit h-[80vh]" >
       
        <img className="h-full object-cover"
        src={urlImg} alt={'check'}
        />

        <div className={css.caption}>Slide show screen</div>
    </div>

    <div onClick={(e) => setSlide(e)} className='mt-4'>
        <div className={css.column}>
            <img className='w-full h-full'
            src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/367982536_248233284790666_4461109477353531170_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=BjymDvfRTdUQ7kNvgFx4AzA&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=A37rI628vnU-7QP5aMI4M70&oh=00_AYDglLpXlTKiM0iKlJ_FFYDFp1FYBOo3iijog40Q3DrsDQ&oe=672EA1E7" alt="Certs" />
        </div>
        <div className={css.column}>
            <img className='object-cover w-full h-full'
            src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/367982536_248233284790666_4461109477353531170_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=BjymDvfRTdUQ7kNvgFx4AzA&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=A37rI628vnU-7QP5aMI4M70&oh=00_AYDglLpXlTKiM0iKlJ_FFYDFp1FYBOo3iijog40Q3DrsDQ&oe=672EA1E7" alt="Certs" />
        </div>
        <div className={css.column}>
            <img className='object-cover w-full h-full'
            src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/366975883_2472519879584544_968380719839894564_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=Azkup3TfgBkQ7kNvgEOu-3H&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=AhiBEy7QoeJymURfgQ0cDQp&oh=00_AYDtj2X7sEEDW-Gtgd_TBLX9rOxmUdtZUe2MsHYkU3pwtw&oe=672EA91C" alt="Certs" />
        </div>
        <div className={css.column}>
            <img className='object-cover w-full h-full'
            src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/367086751_304125555523637_8194885128922172606_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=yVB_IF78wdoQ7kNvgHrb6xm&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=AroPZykzGpIHiyXrXu_RI9K&oh=00_AYCBKagXLF-37JAxY85RR3KMKDhHPgBIhuOD3agY8y2MEw&oe=672EBA6A" alt="Certs" />
        </div>
        <div className={css.column} 
        style={{
            backgroundImage: 'url(https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/367086751_304125555523637_8194885128922172606_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=yVB_IF78wdoQ7kNvgHrb6xm&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=AroPZykzGpIHiyXrXu_RI9K&oh=00_AYCBKagXLF-37JAxY85RR3KMKDhHPgBIhuOD3agY8y2MEw&oe=672EBA6A)',
        }}
        >
        </div>

    </div>

</div>

<div>
    <FormAdd />
</div>

</>
    )
}