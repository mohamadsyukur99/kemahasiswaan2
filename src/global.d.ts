/// <reference types="svelte" />

export interface IMenu {
    id: number,
    name:string,
    icon?:string,
    code: string
    grup?:string,
    ket:string,
    child?:Imenu[]
}