export function utcDateFormat(utcTimestamp) {
  const utcDate = new Date(utcTimestamp);

  // Validate input
  if (isNaN(utcDate.getTime())) {
    throw new Error("Invalid UTC timestamp");
  }

  // Format date (YYYY-MM-DD)
  const dateStr = utcDate.toLocaleDateString('en-CA', {
    timeZone: 'Asia/Kolkata'
  });

  // Format time (HH:MM AM/PM)
  const timeStr = utcDate.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return {
    date: dateStr,
    time: timeStr
  };
}