function getLongFormattedEntryTitle(title, date) {
    let newTitle = title || 'Untitled Entry';
    let newDate = new Date(date);
    let properDate = newDate.toDateString();
    
    return `${newTitle} on ${properDate}`
};

function getShortFormattedEntryTitle(title) {
    return title || 'Untitled Entry'
};

function getStringForUTCDate(date) {
    if(!date) {
        return `Improper date`
    }

    return new Date(date).toDateString();
};

function getStringForFeelingValue(feeling) {
    let stringValue;

    switch(feeling) {
        case 1:
            stringValue = `Very down`;
            break;
        case 2:
            stringValue = `Down`;
            break;
        case 3:
            stringValue = `Normal / Even`;
            break;
        case 4:
            stringValue = `Happy`;
            break;
        case 5:
            stringValue = `Very happy`;
            break;
        default:
            stringValue = `Unknown`;
            break;
    }

    return stringValue;
};

function getStringForPrivacyValue(privacy) {
    return privacy === 0 ? `private` : `public`;
}

export {
    getLongFormattedEntryTitle,
    getShortFormattedEntryTitle,
    getStringForUTCDate,
    getStringForFeelingValue,
    getStringForPrivacyValue,
};
