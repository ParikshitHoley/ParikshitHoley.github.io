export function getFromLs(key){
    let arr=localStorage.getItem(key)
    if(arr===null){
        return undefined
    }
    return JSON.parse(arr)
}
export function setInLs(key,data){
    let arr=localStorage.getItem(key)
    if(arr===null){

        localStorage.setItem(key,JSON.stringify(data))
    }
}