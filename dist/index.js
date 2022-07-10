let dollar = document.getElementById('dollar')
let yevro = document.getElementById('yevro')

const url = 'https://cbu.uz/uz/arkhiv-kursov-valyut/json/'
async function valyuta(url){
// url.map((cur)=>{
//     console.log(cur.id);
// })
const data  = JSON.parse(url)
console.log(data);
}
valyuta(url)
