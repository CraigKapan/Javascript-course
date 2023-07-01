// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {

//     let max = temps[0];
//     letmin = temps[0]
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i]
//         if (typeof curTemp !== "number") continue
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max);
//     console.log(min);
//     return max - min;
// }
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0]
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== "number") continue
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max);
    console.log(min);
    return max - min;
}
const amplitudeNew = calcTempAmplitudeNew(temperatures);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());


const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);

    let max = 0;
    let min = 0;
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== "number") continue
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max);
    console.log(min);
    return max - min;
}
const amplitudeBug = calcTempAmplitudeBug([3, 4, 7], [7, 9, 1]);
console.log(amplitudeBug);
*/

const temperatures = [17, 21, 23];

const printForecast = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`[${arr}] will print "... ${arr[i]}℃ in ${i + 1} days`);
    }
}

printForecast(temperatures)