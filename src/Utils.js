export function calculateConsumption(car, distance, speed, format = true) {
    let consumption = null;
    if (car && distance && speed) {
        const consumptionDict = { "A": 3.0, "B": 3.5, "C": 4.0 };
        const consumptionPer100km = consumptionDict[car];
        consumption = distance / 100 * 1.009 ** (speed - 1) * consumptionPer100km;
        if(format){
            consumption = formatConsumption(consumption);
        }
    }
    return (consumption);
}

export function calculateConsumptionDifference(car, distance, speed1, speed2) {
    let consumptionDifference = null;
    const consumption1 = calculateConsumption(car, distance, speed1, false);
    const consumption2 = calculateConsumption(car, distance, speed2, false);
    if (consumption1 && consumption2) {
        consumptionDifference = consumption1 - consumption2;
        consumptionDifference = formatConsumption(consumptionDifference);
    }
    return (consumptionDifference)
}


export function calculateTime(distance, speed, format = true) {
    let time = null;
    if (distance && speed) {
        time = distance / speed;
        if (format) {
            time = formatTime(time);
        }
    }
    return (time)
}

export function calculateTimeDifference(distance, speed1, speed2) {
    let timeDifference = null;
    const time1 = calculateTime(distance, speed1, false);
    const time2 = calculateTime(distance, speed2, false);
    if (time1 && time2) {
        timeDifference = time1 - time2;
        timeDifference = formatTime(timeDifference);
    }
    return (timeDifference)
}

function formatConsumption(consumption) {
    consumption = consumption.toFixed(2);
    const literSuffix = (consumption === 1 ? "litra" : "litraa");
    const result = consumption + " " + literSuffix;
    return(result);
}

function formatTime(hours) {
    hours = Math.abs(hours);
    let result = "";
    const roundedHours = Math.floor(hours);
    const minutes = (hours - roundedHours) * 60;
    const roundedMinutes = Math.round(minutes);

    if (roundedHours > 0) {
        const hourSuffix = (roundedHours === 1 ? "tunti" : "tuntia");
        result += roundedHours + " " + hourSuffix + " ";
    }
    if (roundedMinutes > 0) {
        const minuteSuffix = (roundedMinutes === 1 ? "minuutti" : "minuuttia");
        result += roundedMinutes + " " + minuteSuffix;
    }
    return (result)
}

// export function formatTimeComparison(timeDifference) {
//     const timeSuffix = (timeDifference > 0 ? "vähemmän" : "kauemmin")
//     if (timeDifference == 0) {
//         const timeSuffix = "yhtä kauan"
//     }
// }