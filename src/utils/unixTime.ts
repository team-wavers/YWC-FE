export const cvtUnixTime = (date: Date) => {
    return Math.floor(date.getTime() / 1000);
};
