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

function getPreviewString(string, length) {
    return `${string.slice(0, length)}...`;
};

function filterPrivacyAll(entries) {
    return entries.filter(entry => entry.privacy === 0 || entry.privacy === 1);
};

function filterPrivacy(entries, value) {
    return entries.filter(entry => entry.privacy === value);
};

function sortDateAscending(entries) {
    return entries.sort((a, b) => {
        return a.created < b.created ? -1 : a.created > b.created ? 1 : 0;
    });
};

function sortDateDescending(entries) {
    return entries.sort((a, b) => {
        return a.created > b.created ? -1 : a.created < b.created ? 1 : 0;
    });
};

export {
    getLongFormattedEntryTitle,
    getShortFormattedEntryTitle,
    getStringForUTCDate,
    getStringForFeelingValue,
    getStringForPrivacyValue,
    getPreviewString,
    filterPrivacyAll,
    filterPrivacy,
    sortDateAscending,
    sortDateDescending,
};
