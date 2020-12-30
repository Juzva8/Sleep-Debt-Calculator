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