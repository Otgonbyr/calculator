function text() {
    let niilber = '7 + 8'
    let array = niilber.split(" ")
    let result
    if(array[1] === "+"){
        result = array[0] + array[2]
    } 
    return result
}

console.log(result);