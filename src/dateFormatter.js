export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
    let date = new Date(dateToFormatTimeMillis).toLocaleDateString("en-GB",{timeZone:"UTC"});
    let today = new Date(systemDateTimeMillis).toLocaleDateString("en-GB",{timeZone:"UTC"});

    if (dateToFormatTimeMillis === null || systemDateTimeMillis === null) {
        return 'Invalid Date';
    }

    if (date === 'Invalid Date' || today === 'Invalid Date') {
        return 'Invalid Date';
    } else if ( date === today ) {
        return 'TODAY';
    } else {
        return date;
    }
};
