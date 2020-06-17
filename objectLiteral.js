function addressMaker(city, state) {
    const newAdress = {
        city: city, // if key-value pair are same , you can write one of them .
        state: state
    };
    //const newAdress = {city, state};
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');