export const formatTimeToHHMM = (date) => {
    if (!(date instanceof Date) || isNaN(date)) return '';

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
};

export const timeStringToDate = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
};


export const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date);
};