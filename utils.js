const fs = require("fs");

module.exports.COMPONENTS_FILE_PATH = "./components.json";
module.exports.PAGES_FILE_PATH = "./pages.json";
module.exports.getDataFromFile = (filePath) => {
    const dataFromFile = [];

    try {
        dataFromFile = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }) || '[]');
    } catch {
        console.log('Error reading from file', filePath);
    }

    return dataFromFile;
}