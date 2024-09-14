var b = [0,2,2,0]
var value
var k=0
var iCheck=b.length

console.log (b)

const recursFunc = () =>{
    k++
    value = b[iCheck]
    b[iCheck]=0
    if (iCheck>0){
        iCheck--
        while (b[iCheck]==0 && iCheck>0){iCheck--}
        if (b[iCheck]==value){
            b[b.length-k]=2*value
            b[iCheck]=0
        } else {
            b[b.length-k]=value
            recursFunc()
        }
    } else {
        b[b.length-k]=value
    }
}

while (iCheck>=0){
    if (b[iCheck]>0){
        recursFunc()
    }
    iCheck--
}

console.log(b)



