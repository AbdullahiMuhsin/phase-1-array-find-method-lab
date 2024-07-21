function superbowlWin(record) {
    // Find the entry where the result is 'W' (win)
    const broncosWin = record.find(entry => entry.result === 'W');

    // Log the found win object for debugging purposes
    console.log('Broncos win object:', broncosWin);

    // Return the year if a win object is found, otherwise return undefined
    return broncosWin ? broncosWin.year : undefined;
}

