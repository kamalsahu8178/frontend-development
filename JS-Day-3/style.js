// let x = ["a","b","c","d"]
// let y=x.push("e")
// console.log(y)

// let x = ["a","b","c","d"]
// let y=x.pop()
// console.log(y)

// let x = ["a","b","c","d"]
// let y=x.shift()
// console.log(y)

// let x = ["a","b","c","d"]
// let y=x.unshift("alphabet")
// console.log(y)



// let x = ["a","b","c","d"]
// let y=x.push(pop())
// // let z=y.push()
// console.log(y)
// console.log(z)
// // for i in x:
// //     console.log(i)

//reverse
// let x = ["a","b","c","d"]
// let result = []
// while(x.length>0){
//     result.push(x.pop());
// }
// console.log(result)

// remove all negative no
// let x =[1,2,-3,2,-1,4]
// let result = []
// while(x.length>0){
//     let val = x.shift();
//     if (val >=0){
//         result.push(val)
//     }
// }
// console.log(result)

let arr = [1,2,3,2,]
let orginal = []
let temp=[]
for(let i=0;i<arr.length;i++){   
    orginal.push(arr[i])
}
console.log(orginal)
while (arr.length>0){
    temp.push(arr.pop())
}
for(let i=0;i<orginal.length;i++){
    if(orginal[i]!==temp[i]){
        console.log("not pertrom")
    }
}
console.log(temp)

