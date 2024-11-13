
import { Rosary } from '@/components/Card/Rosary'
import * as fs from 'fs'
import { ReactElement } from "react"


interface Rosary {
    Id: number
    Name: string
    Stock: number
    Myths: string[]
}

const file = fs.readFileSync(process.cwd() + '/public/test.json', 'utf8');
const data = JSON.parse(file);
const rosary: Rosary[] = data

const page20 = () =>
{
    const list = Array(10).fill(1)
    let index = 1

    return(
    <div>
        {rosary.map((data) => {
            return(
            data.Myths.map((myth,j) => {
            index=j+1
            return(
                <div key = {`${data.Id}-${j}`}className="grid grid-cols-2 gap-y-[2px] mx-[1.5px] mb-[13px]">
                    {list.map((item,k) => {
                    return(
                        <div key = {k} className="w-full px-[1.5px]">
                            <Rosary
                            name= {data.Name}
                            No={index}
                            writing={myth}
                            imgUrl={`/rosary/${data.Id}-${index}.jpg`}
                            />
                        </div>
                    )})}
                </div>
            )})
        )})
        }
    </div>
    )
}

const page4 = () =>
    {
        const list = Array(10).fill(1)

        let index = 1
    
        return(
        <div>
            {rosary.map((data) => {
                return(
                <div key = {data.Id} className="grid grid-cols-2 gap-y-[2px] mx-[1.5px] pt-[12px] break-after-page">
                {data.Myths.map((myth,j) => {
                index=j+1
                return(
                        <>
                            <div key={j} className="w-full px-[1.5px]">
                                <Rosary
                                name= {data.Name}
                                No={index}
                                writing={myth}
                                imgUrl={`/rosary/${data.Id}-${index}.jpg`}
                                />
                            </div>
                            <div key={j} className="w-full px-[1.5px]">
                                <Rosary
                                name= {data.Name}
                                No={index}
                                writing={myth}
                                imgUrl={`/rosary/${data.Id}-${index}.jpg`}
                                />
                            </div>
                        </>
                )})}
                </div>
            )})
            }
        </div>
        )
    }

export default page4