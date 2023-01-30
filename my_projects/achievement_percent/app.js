const achPercent = [
    { achName: "malenia", encountered: 49.2, defeated: 33.5 },
    { achName: "mohg", encountered: 41.8, defeated: 36.5 },
    { achName: "margit", encountered: 89.3, defeated: 73.7 }
];

const calculated = {};

function calcPercent(achievements) {
    for (let i = 0; i < achPercent.length; i++) {
        calculated[i] = {
            achName: achievements[i].achName,
            succesRate: Math.round(achievements[i].defeated
                / achievements[i].encountered * 100)
        };

        console.log(`Succes rate of "${calculated[i].achName
            }" achievement is ${calculated[i].succesRate}%`)
    }
}

calcPercent(achPercent);