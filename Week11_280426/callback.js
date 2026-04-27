function processStudent(name, callback) {
    console.log("Processing student...");
    callback(name);
}

function display(name) {
    console.log("Student Name:", name);
}

processStudent("Sahil", display);