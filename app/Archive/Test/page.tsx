
import { Pattaya, Dancing_Script, Pacifico } from "next/font/google"

type order = 1|2|3|4|5

interface Mysterious {
    name: string,
    No: order,
    writing: string
}

function WordOfNo (No: order) :string {
    switch (No){
        case 1: return 'nhat'; break;
        case 2: return 'hai'; break;
        case 3: return 'ba'; break;
        case 4: return 'tu'; break;
        case 5: return 'nam'; break;
        default: return ''
    }

}

const pattaya = Pattaya({
    weight:['400'],
    subsets: ['vietnamese']
})

const dancingScript = Dancing_Script({
    weight:['400','500','600','700'],
    subsets: ['vietnamese']
})

const pacifico = Pacifico({
    weight:['400'],
    subsets: ['vietnamese']
  })


const Test = (props: Mysterious) => {
    const {name,No,writing} = props
    return(
        <div className="flex flex-row">
            {/* <div className="w-32 h-32 bg-gradient-to-r from-[cyan] to-[blue]"> </div> */}
            <div className="w-[560px] h-[250px] radial-gradient relative">
                <div className='absolute top-0 z-50 w-full'>
                    <svg viewBox="0 0 300 40" className="absolute">
                        <path id="curve" d="M80,35 a 150 150 0 0 1 134 0" fill="none" stroke="none"/>
                        <text className={`wordArt uppercase text-[14pt] font-bold  fill-[#ec8eff] ${pattaya.className}`}>
                            <textPath href="#curve">{`năm sự ${name}`}</textPath>
                        </text>
                    </svg>

                    <div className={`ml-4 my-1 w-28 h-28 rounded-[56px] bg-center bg-contain bg-[url('/GloriousMys02.jpg')]`}>
                    </div>
                    <p className={`text-[10pt] text-[white] ml-3 ${pacifico.className}`}>{`Thu ${WordOfNo(No)}:`}</p>

                    <div className={`absolute w-full px-3 text-[28pt] font-[700] text-[white] leading-none ${dancingScript.className}`}>
                    <p className={`absolute blueStroke`}>
                        {writing}
                    </p>
                    <p className={`absolute`}>
                        {writing}
                    </p>
                    </div>

                    {/* <svg viewBox="0 0 300 50">
                        <path id="01" d="M10,18 h280 M10,40 h280" stroke="none" />
                        <text className={`fill-[white] text-[15pt] font-[700] stroke-[blue] stroke-[2.8pt] ${dancingScript.className}`}>
                        <textPath href="#01">
                        Đức Giêsu chịu đội mão gai, ta hãy xincho được chịu mọi sự sỉ nhục bằng lòng
                        </textPath>
                        </text>
                        <text className={`fill-[white] text-[15pt] font-[700] ${dancingScript.className}`}>
                        <textPath href="#01">
                        Đức Giêsu chịu đội mão gai, ta hãy xincho được chịu mọi sự sỉ nhục bằng lòng
                        </textPath>
                        </text>
                    </svg> */}

                </div>
                <img src={'/preview.png'} className="absolute z-0 bottom-0 right-0 opacity-40"/>
                
            </div>
        </div>
    )
}

const page = () =>
{
    return(
        <Test 
        name= "Thuong"
        No={1}
        writing="Đức Giêsu chịu đội mão gai, ta hãy xin cho được chịu mọi sự sỉ nhục bằng lòng" 
        />
    )
}

export default page