const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 46, 32, 26];
const allAge = ages.concat(ages2).concat([6]).concat(ages3);
const allAge2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAge2);
const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisha)
console.log(maximum);
