export function chekInclude(strChek:string, searchChek:string):boolean {
    return strChek.toLocaleLowerCase().includes(searchChek.toLocaleLowerCase()) 
}