const getSleepHours = day => {
    if (day === 'Sunday') {
        return 8;
    } else if (day === 'Monday') {
        return 6;
    } else if (day === 'Tuesday') {
        return 6;
    } else if (day === 'Wednesday') {
        return 7;
    } else if (day === 'Thursday') {
        return 8;
    } else if (day === 'Friday') {
        return 9;
    } else if (day === 'Saturday') { return 6; } else { return 'Please enter a valid day of the week.'; }
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