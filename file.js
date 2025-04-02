const fs = require("fs");

// reading files
// fs.readFile("docs/blog1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("reading file...");

// // writing files
// fs.writeFile("docs/blog2.txt", "This is a newwer blog", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("written to file");
// });

// directory
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    });
} else {
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder removed");
    });     
}   

// deleting files
if (fs.existsSync("./assets/test.txt")) {
    fs.unlink("./assets/test.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file removed");
    });
}   