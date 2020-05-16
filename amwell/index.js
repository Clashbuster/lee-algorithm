let outputDiv = document.querySelector("#return-statement")
var storedText
var url = "https://www.iwillfearnoevil.com/screen/string.txt"

// function getText(){
//     // read text from URL location
//     var request = new XMLHttpRequest();
//     request.open('GET', url, true);
//     request.send(null);
//     request.onreadystatechange = function () {
//         if (request.readyState === 4 && request.status === 200) {
//             var type = request.getResponseHeader('Content-Type');
//             if (type.indexOf("text") !== 1) {
//                 return request.responseText;
//             }
//         }
//     }
// }

// console.log(getText())

async function getData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  console.log(getData())

