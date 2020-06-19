let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {
    title,
    width,
    height
} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200


//example 2

const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {
    firstName: fn, // you can use abbreviation
    lastName: ln // get "lastName" field from "personalInformation"  object and assign "ln" variable
} = personalInformation;

console.log(`${fn} ${ln}`);


const LOCAL_FORECAST = {
    today: {
        min: 72,
        max: 83
    },
    tomorrow: {
        min: 73.3,
        max: 84.6
    }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const {
        tomorrow: {
            max: maxOfTomorrow
        }
    } = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));