function convertTimeFormat(hours) {
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    if (rhours > 0) {
        return rhours + " tunti(a) ja " + rminutes + " minuutti(a).";
    } else {
        return rminutes + " minuutti(a)."
    }
}

// to-do: why is distance not used?
export function calculateConsumption(car, distance, speed){
    const consumptionDict = { "A": 3.0, "B": 3.5, "C": 4.0 };
    const consumptionPer100km = consumptionDict[car];
    const consumption = 1.009 ** (speed-1) * consumptionPer100km;
    return(consumption)
}

export function calculateConsumptionDifference(car, distance, speed1, speed2){
    const consumption1 = calculateConsumption(car, distance, speed1);
    const consumption2 = calculateConsumption(car, distance, speed2);
    const consumptionDifference = consumption1 - consumption2;
    return(consumptionDifference)
}


export function calculateTime(distance, speed){
    const time = distance / speed;
    return(time)
}

export function calculateTimeDifference(distance, speed1, speed2){
    const time1 = calculateTime(distance, speed1);
    const time2 = calculateTime(distance, speed2);
    const timeDifference = time1 - time2;
    return(timeDifference)
}