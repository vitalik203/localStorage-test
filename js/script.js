document.addEventListener("DOMContentLoaded", function(){
    const carInput = document.querySelector(".diller");
    const carYear = document.querySelector(".year")
    const carColor = document.querySelector(".color")
    const carImg = document.querySelector(".img")
    const addButton = document.querySelector(".button");
    const wrapper = document.querySelector(".wrapper");
    let from = document.querySelector(".from")
    let to = document.querySelector(".to")
    const filterBtn = document.querySelector(".filter")
    const reset = document.querySelector(".reset")
    const btnClose = document.querySelector(".btnClose")
    const carNumberFromInput = document.querySelector(".carNumber")
    let cardCounter = 0;

    addButton.addEventListener("click", function(){
        // let valueFromInput = carInput.value
        // let carYearValue = carYear.value
        // let carColorValue = carColor.value
        // let carImgValue = carImg.value
        // if(valueFromInput!=""){
        //     const cardCover = document.createElement("div")
        //     cardCover.classList.add("card__container")
        //     wrapper.appendChild(cardCover)
        //     cardCover.innerHTML = `<br><h1>${valueFromInput}</h1>
        //     <h2>${carYearValue}</h2>
        //     Колір: <div style="width: 50px;
        //     height: 20px; border: 0;background-color: ${carColorValue};border: 1px solid black"></div><br>
        //     <img src="${carImgValue}">`
        //     cardCover.classList.add(`card_${cardCounter}`)
        //     cardCover.classList.add(`${carYear.value}`)
            
        //     carInput.value=""
        //     carYear.value=""
        //     carColor.value=""
        //     carImg.value=""
        //     cardCounter++
        // }else{
        //     alert("Будь ласка введідь параметри!")
        // }
        let url = `https://baza-gai.com.ua/nomer/${carNumberFromInput.value}`
        const api = "df32c59d9cbe985b78dd6404568630ed"

        let request = fetch(url, {headers: {"Accept": "application/json", "X-Api-Key": api}})
            .then(response=>{
                if(!response){
                    throw new Error("Error!")
                }
                return response.json()
            })
            .then(data=>{
                console.log(data);
                wrapper.innerHTML = `<h1 style="display:block">${data.vendor} ${data.model} </h1>
                <div class="carNumber">
                <div class="col1">
                <img src="img/Flag_of_Ukraine.svg.webp">
                <p>UA</p>
                </div>
                <div class="col2">
                <span>${data.digits}</span>
                </div>
                </div><br>
                <img class="carPhoto" src="${data.photo_url}">
                <br>
                <div class="infoBlock">
                Рік авто: <b>${data.model_year}</b><br>
                Місце реєстрації: <b>${data.region.name_ua}</b><br>
                VIN-КОД: <b>${data.vin}</b>
                </div><br>
                `
            })
        })
        
    });
//     filterBtn.addEventListener("click", function(){
//         let fromValue = from.value
//         let toValue = to.value
//         let arr = document.querySelectorAll(".card__container")
//         arr.forEach(elem=>{
//             let valueEl = parseInt(elem.querySelector("h2").textContent)
//         if((valueEl>=fromValue)&&(valueEl<=toValue)){
//             elem.classList.add("block")
//             elem.classList.remove("hidden")
//         }else{
//             elem.classList.add("hidden")
//             elem.classList.remove("block")
//         }
//     })
    
//     })
//     reset.addEventListener("click", function(){
//         let arr = document.querySelectorAll(".card__container")
//         arr.forEach(element=>{
//         element.classList.remove("hidden")
//         element.classList.add("block")
//     })
// })




