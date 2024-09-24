
import { Pattaya, Dancing_Script } from "next/font/google"


interface props{
    link: string
}

const pattaya = Pattaya({
    weight:['400'],
    subsets: ['vietnamese']
})

const dancingScript = Dancing_Script({
    weight:['400'],
    subsets: ['vietnamese']
})

const Test = (props: props) => {
    const {link} = props
    const bglink = '/GloriousMys02.jpg'
    return(
        <div className="flex flex-row">
            <div className="w-64 h-64 bg-gradient-to-r from-[cyan] to-[blue]">
            </div>
            {/* <img src={`${bglink}`} /> */}
            <div className="w-[600px] h-64 radial-gradient relative">
                <div className={`absolute m-1 w-28 h-28 rounded-[56px] bg-center bg-contain bg-[url('/GloriousMys02.jpg')]`}>
                </div>
                <img src={'/preview.png'} className="absolute bottom-0 right-0 opacity-40"/>
                <svg className="orgin-center rotate-45 translate-x-[150px] translate-y-[-45px] text-[red]">
                    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="none" />
                        <text className={`wordArt absolute left-[40%] uppercase text-[18.5px] font-bold  fill-[#ec8eff] ${pattaya.className}`}>
                            <textPath href="#curve">năm sự thương</textPath>
                        </text>
                </svg>
                <p className={`text-[white] text-[35px] blueStroke ${dancingScript.className}`}>Đức Giêsu chịu đội mão gai, ta hãy xin cho được chịu mọi sự sỉ nhục bằng lòng</p>
            </div>
        </div>
    )
}

const page = () =>
{
    return(
        <Test link={'GloriousMys02'}/>
    )
}

export default page