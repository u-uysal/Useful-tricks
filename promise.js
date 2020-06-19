let myPromise = new Promise(function (resolve, reject) {
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
})