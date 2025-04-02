console.log(global);

setTimeout(() => {
    console.log("Hello, World!");
    clearInterval(interval);
}, 5000);

const interval = setInterval(() => {
    console.log("Hello, World!");
}, 1000);

console.log(__filename);
console.log(__dirname);
