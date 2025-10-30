export const test = (input) => {
    let roman = "";
    if (input === 5) return "";
    for (let i = 0; i < input; i++) {
        roman += "I";
    }
    return roman;
};
