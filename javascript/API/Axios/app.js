// axios.get("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("RESPONSE: ", res)
//     })


const getStarWarsPerson = async (id) => {
    if (id > 83) {
        console.log(`${id} is out of range (max: 83)`)
        id = 83;
    }
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }
    catch (e) {
        console.log("ERROR!", e)
    }
};

getStarWarsPerson(82);