module.exports = function toReadable(number) {
    let n = number.toString();
    let result = '';

    const words = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (n.length === 1) {
        if (n !== words[n]) result = words[n];

    } else if (n.length === 2) {
        if (n === '10') result = dozens[1];
        if (n === '11') result = teens[1];
        if (n === '12') result = teens[2];
        if (n === '13') result = teens[3];
        if (n === '14') result = teens[4];;
        if (n === '15') result = teens[5];
        if (n === '16') result = teens[6];
        if (n === '17') result = teens[7];
        if (n === '18') result = teens[8];
        if (n === '19') result = teens[9];

        if (n === '20') result = dozens[2];
        if (n === '30') result = dozens[3];
        if (n === '40') result = dozens[4];
        if (n === '50') result = dozens[5];
        if (n === '60') result = dozens[6];
        if (n === '70') result = dozens[7];
        if (n === '80') result = dozens[8];
        if (n === '90') result = dozens[9];
        if (n[0] !== dozens[n[0]] && n[1] !== words[n[1]]) {
            result = dozens[n[0]] + ' ' + words[n[1]];
        }
    }
    if (n.length === 3) {
        if (n % 100 === 0 && n >= 100) result = words[n[0]] + ' hundred ten';
        if (n[0] !== words[n[0]] && n[1] == 0 && n[2] !== words[n[2]]) {
            result = words[n[0]] + ' hundred ' + words[n[2]];
        }
        if (n[0] !== words[n[0]] && n[2] == 0) {
            result = words[n[0]] + ' hundred ' + dozens[n[1]];
        }
        if (n[1] == 1) {
            result = words[n[0]] + ' hundred ' + teens[n[2]];
        }
        if (n[1] > 1) {
            result = words[n[0]] + ' hundred ' + dozens[n[1]] + ' ' + words[n[2]];
        }
    }

    return `${result}`;
};


