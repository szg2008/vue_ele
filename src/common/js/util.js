/**解析url参数
* @example ?id=1234&z=b
* @return Object {id:1234,z:b}
*/
export function urlParse(){
    let url = location.search
    let obj = new Object
    let reg = /[?&][^?&]+=[^?&]+/g
    let arr = url.match(reg)
    if(arr){
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=')
            let key = decodeURIComponent(tempArr[0])
            let val = decodeURIComponent(tempArr[1])
            obj[key] = val
        })

        return obj
    }

    return null
}
