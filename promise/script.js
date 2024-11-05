function readFile(callback) {
    // Simulate reading a file and invoking callback with data or error
    setTimeout(() => {
        const error = false;
        const data = "File contents here";

        if (error) {
            callback(new Error("Failed to read file"));
        } else {
            callback(null, data);
        }
    }, 1000);
}







function promisifyReadFile() {
    return new Promise((resolve, reject) => {
        readFile((error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

// Usage
promisifyReadFile()
    .then((data) => {
        console.log("File content:", data);
    })
    .catch((err) => {
        console.error("Error:", err);
    });
