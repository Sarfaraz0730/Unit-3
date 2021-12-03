

async function getdata(url){

    try{ 
let res = await fetch(url)
let data = await res.json()
return data
}
catch(err){
    console.log("error: ",err)
}
}


function appenData(data,location){
    data.forEach(el => {
        
        let div =document.createElement("div")

        let p= document.createElement("p");
        p.innerHTML=
                     
        let img = document.createElement("img")

        img.src=el.image;

        div.append(img, p)
        location.append(div)


   

    });
}
export {getdata,appenData}