"use strict";

console.log("Բարև Ձեզ․․․Կարող եմ ծանոթանալ ձեր տեսականու հետ․․․");
const clientResponse = 200;

const client = new Promise((resolve, reject) => {
    setTimeout(() => {
        const coffeeHouse = {
           item1:"Capuchino",
           item2: "Espresso",
           item3:"Hot Chocolate",
           item4:"Black Coffee",
           item5: "dddd"

        };        

        if (clientResponse === 200) {
            resolve(coffeeHouse)
        } else {
            reject()
        }
    }, 1000)
    });


     client.then(data => {
        console.log(data);
		console.log("Վաճառված է․․․");
    }).catch(() => {
		console.log("Նշված սուրճի տեսակը ցուցակում չկա․․․");
        throw new Error("server error");
    }).finally(() => {
        console.log("Hello I'm an finnaly");
    });



    //2

const timeinArmenia = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Հայաստանում ժամը 10։00–ն է")
		}, 3000);
    
    });

const timeinUsa = new Promise((resolve, reject) => {
  setTimeout(() => {
        resolve("22:00 Tuesday, in Washington, DC,")
      }, 2000);

      });

const timeinGermany = new Promise((resolve, reject) => {
  setTimeout(() => {
        resolve("12:55 Uhr։ Dienstag, Zeit in Deutschland:")
      }, 1000);

      });

let result = Promise.race([timeinArmenia,timeinUsa,timeinGermany])
.then( result => console.log(result));

