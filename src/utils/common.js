export function generateUniqueUserId(startWith, userList) {
    const generateId = () => {
        const randomNumber = Math.floor(100000 + Math.random() * 900000); // ensures a 6-digit number
        return `${startWith}${randomNumber}`;
    };

    let newUserId;
    let attempts = 0;
    const maxAttempts = 1000; // to avoid potential infinite loop

    do {
        newUserId = generateId();
        attempts++;
        if (attempts > maxAttempts) {
            throw new Error("Unable to generate unique userId after many attempts");
        }
    } while (userList.includes(newUserId));

    return newUserId;
}