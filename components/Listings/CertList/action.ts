'use server'
import { unstable_cache} from "next/cache"

var unidecode = require('unidecode')

export type Post = {
    id?: string;
    title: string;
    content: string;
    grade: string
    published?: boolean;
    authorId?: string;
    note: string[]
  };

async function GetData(){
    let response = await fetch('https://web-app-next-lac.vercel.app/api/GetPost/1')
    let data: Post[] = await response.json()
    let DataFilter = data.filter(item => (item.published === false))
    function CatTen(FullName:string){return unidecode(FullName.split(' ').slice(-1).toString())}
    const funcSort = (a:Post, b:Post) => {
        const lopA = parseInt(a.grade)
        const lopB = parseInt(b.grade)
        if (lopA > lopB) {return 1} else if (lopA == lopB) {return CatTen(a.title) > CatTen(b.title) ?1 :-1} else return -1
    }
    let DataSort = DataFilter.sort(funcSort)
return DataSort
}

export default async function CacheData(): Promise<Post[]>{
    return unstable_cache(GetData)() 
}