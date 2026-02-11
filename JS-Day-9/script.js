// const query = document.querySelectorAll("#content p");
// console.log(query,"query");

// query.textContent="ghcghjgvhjhvj"



// const query2 = document.querySelectorAll("p");
// console.log(query2,"query");

// for(let i=0;i<query2.length;i++){
//     query2[i].textContent="hjcgdthdctxdy"
// }

const query=document.querySelectorAll("#content p");
console.log(query,"query");

for(let i=0;i<query.length;i++){
    if (i % 2 ===0){
        query[i].style.color ="blue";
    }
    else{
        query[i].style.color ="green";
    }
}
 query[query.length-1].style.fontwight="bold"