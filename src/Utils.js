export function calculateConsumption(car, distance, speed) {
    let consumption = null;
    if (car & distance & speed) {
        const consumptionDict = { "A": 3.0, "B": 3.5, "C": 4.0 };
        const consumptionPer100km = consumptionDict[car];
        consumption = 1.009 ** (speed - 1) * consumptionPer100km;
    }
    return (consumption);
}

export function calculateConsumptionDifference(car, distance, speed1, speed2) {
    let consumptionDifference = null;
    const consumption1 = calculateConsumption(car, distance, speed1);
    const consumption2 = calculateConsumption(car, distance, speed2);
    if (consumption1 & consumption2) {
        consumptionDifference = consumption1 - consumption2;
    }
    return (consumptionDifference)
}


export function calculateTime(distance, speed, format = true) {
    let time = null;
    if (distance & speed) {
        time = distance / speed;
        if (format) {
            time = convertTimeFormat(time);
        }
    }
    return (time)
}

export function calculateTimeDifference(distance, speed1, speed2) {
    let timeDifference = null;
    const time1 = calculateTime(distance, speed1, false);
    const time2 = calculateTime(distance, speed2, false);
    if (time1 & time2) {
        timeDifference = time1 - time2;
        timeDifference = convertTimeFormat(timeDifference);
    }
    return (timeDifference)
}

function convertTimeFormat(hours) {
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