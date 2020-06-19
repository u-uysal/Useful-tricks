/* let myPromise = new Promise(function (resolve, reject) {
    if (true) {
        resolve("Succesful");
    } else {
        reject("Failure")
    }
});

myPromise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
}) */



new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    }, 2000);
}).then((num) => { // we use "value of resolve" by writing ".then"

    console.log(num); // 5

    return num * num; // How can I use this return value ?   Answer : second "then" operator

}).then((numSquare) => {

    console.log(numSquare); // 25

})