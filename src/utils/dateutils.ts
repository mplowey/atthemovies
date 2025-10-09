export const dateCalc = (dayIndex: number) => {
    const today = new Date();
    const daysDiff = dayIndex - today.getDay();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysDiff);

    return targetDate;
}