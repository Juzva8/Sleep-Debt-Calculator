getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 8;
    } else if (day === 'wednesday') {
        return 8;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 10;
    } else if (day === 'sunday') {
        return 10;
    }
};

const getActualSleepHours = () =>
    getSleepHours('Sunday') +
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday');


const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

let actualSleepHours = getActualSleepHours();
let idealSleepHours = getIdealSleepHours();

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
};

if (actualSleepHours === idealSleepHours) {
    console.log('Congrats! You are getting ' + actualSleepHours + ' hours of sleep per week which is the perfect amount.');
} else if (actualSleepHours >
    idealSleepHours) {
    console.log('Congrats! You are getting ' + (actualSleepHours - idealSleepHours) + ' more hours than the ideal amount of sleep per week.');
} else { console.log('Looks like you need more rest! You are getting ' + (idealSleepHours - actualSleepHours) + ' less hours than the ideal amount of sleep per week.'); };

calculateSleepDebt();