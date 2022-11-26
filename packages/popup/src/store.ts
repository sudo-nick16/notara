import { atom } from "jotai";

export type Bookmark = {
    id: string;
    title: string;
    url: string;
} 

export type Note = {
    id: string;
    title: string;
    text: string;
} 

export const newNote  = atom<Note>({} as Note)
export const Notes  = atom<Note[]>([] as Note[])
