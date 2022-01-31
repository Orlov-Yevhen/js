/* const a = 17545;
const b = 103276;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
 */

/* let value = 140;
value += 70;
console.log(value);
 */

/* console.log(0.17 + 0.24);
console.log((0.17 * 100 + 0.24 * 100) / 100);
console.log((0.17 + 0.24).toFixed(2)); */

/* console.log((Math.random() * (50 - 1) + 1).toFixed(0)); */

/* console.log(1 + "2"); // "12"
console.log(1 + "2" + 4 + 1); // "1241"
console.log(1 + 2 + "4"); // "34" */

/* const guestName = "Манго";
const roomNumber = 207;
const greeting = `${guestName}, your room number is ${roomNumber}. Welcome!`;
console.log(greeting); // "Welcome Mango, your room number is 207!" */

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".max.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
