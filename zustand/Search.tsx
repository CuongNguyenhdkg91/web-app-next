import { create } from 'zustand';

interface SearchKey {
    text: string,
    setText: (text:string) => void

}

export const Searching = create<SearchKey>((set)=>(
    {
    text: '',
    setText: (text) => set({text:text})
    }
))