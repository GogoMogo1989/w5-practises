/* console.log(a);
console.log(c);
 */
//console.log("Hello");
//console.log('Sima');
//console.log(`Backt
//ck`);


//console.log(typeof 2)
//console.log(typeof NaN);
//console.log(0/0);
//console.log(2.14);

//console.log(true);
//console.log(false);

//console.log(undefined);
//console.log(null);

//console.log(typeof undefined);
//console.log(typeof null);

/*     console.log(
    {
    "title": "Start Coding",
    "type": "solo",
    "difficulty": 4.1,
    "usefullnes": 3.2,
    "enjoyability":3.7,
    "materials": 3.4,
    "tasks": [
        {
            "title": "Bank accounts",
            "description": ""
        },
        {
            "title": "100 doors",
            "description": ""
        },
        {
            "title": "World filter",
            "description": ""
        }
    ]
}
) */

/* var a= "Hello1";
let b= "Hello2";
const c= "Hello3";

console.log(a);
console.log(b);
console.log(c);

 */


/* function d() {
    if(1+1 === 2){
       
    }
    var a= "Hello1"
    let b= "Hello2"
    const c= "Hello3"

    console.log(a)
    console.log(b)
    console.log(c)
}
d()

 */

/* let e=1
console.log(e)

e=2
console.log(e)

e=e*2
console.log(e) */




/* function multiplyByTwo(num){
    console.log(num)
    return num*2
}

let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1))
console.log(num)

 */

/* let g={
    myMehtod: function (){
        console.log("Hello")
    }
}
 */
/* g.myMehtod()

let window = { Ez enm fog működni, csak példa
    addEventListener: function (eventName, eventFunction){
        if(eventName === "load"){
            eventFunction()
        }
    }
}/*


/* let h = {
    anOtherMethod: function(text){
        return `You sent following argument to this method: ${text}`
    }
}

let i= h.anOtherMethod("Hello")
console.log(i);
console.log(h.anOtherMethod("An other argument")); */

/* -----------------------------2022.02.16.---------------------------- */

/* let myString = "Mikkamakka";

let mySecondString = myString;

let myThirdString="Mikkamakka";

console.log(mySecondString);
console.log(myString);
console.log(myString === mySecondString);
console.log(myString === myThirdString);

 */

/* let myObject= {
    myString: "mikkamakka"
}

let mySecondObject = myObject;



let myThirdObject = {
    myString: "mikkamakka"
}

mySecondObject.myString = "dömdödöm";



let myFourthObject = {...myObject};

myFourthObject.myString = "Vacskamati";

console.log(myObject.myString);
console.log(myFourthObject.myString); */

/* console.log(myObject === myThirdObject);
console.log(myObject === mySecondObject); */

/* console.log(""==="");  //stringet stringgel
console.log({} === {}); //objektumot az objektummal: Azért lett false, mert ha új objektumot            hozunk részre, egyből egy új, külön objektum lesz. */


/* -------------------------filmes gyakorlás------------------ */

/* window.addEventListener("load", function()){
    console.log("My first function");

} */

function loadEvent() {
    
    let rootElement = document.getElementById("root")

    let cardElement2 = function(title, year, rate) {
        return`
            <div class="card">
                <h3>${title}</h1>
                <div class="time">${year}</div>
                <div class="rate">${rate}</div>
            </div>
            `;
        }

    let renderAllCardElements = function (cardsArray) {
        let renderCardList = "";
        for(const inComingMovie of cardsArray ){
            renderCardList += `
            <div class="card">
                <h3>${inComingMovie.title}</h1>
                <div class="time">${inComingMovie.year}</div>
                <div class="rate">${inComingMovie.rate}</div>
            </div>
            `
        }  
        console.log(renderCardList);    

        return renderCardList;
         //for ciklus minden lépcsőjénél hozzáadja a render card lsithez az adott elemet a megfelelő div cardban.
        //return-öli az elkészült  elemekkel a feltöltött card listet
    }

    /* movies.sort(function(a, b){return a.year - b.year}); */

    let newGoodMovies = [];

    for (const movieSend of movies) {
/*          let neverThan2000 = false;
        if(movieSend.year > 2000) {
            neverThan2000 = true;
        } */
      /*  if (neverThan2000){
  /*       rootElement.insertAdjacentHTML("beforeend", cardElement2(movieSend.title, movieSend.year, movieSend.rate)); */ 
        }  
        //let floorRate = Math.floor(movieSend.rate);

        if(movieSend.year > 2000 && movieSend.rate >= 8){
            newGoodMovies.push(movieSend);
           // rootElement.insertAdjacentHTML("beforeend", cardElement2(movieSend.title, movieSend.year,(floorRate)));
        }

        

        /* points.sort(function(a, b){return a - b});*/
    }
    newGoodMovies.sort(function(a, b){return a.year - b.year});

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));
}

 window.addEventListener("load", loadEvent); 
