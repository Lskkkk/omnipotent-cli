const fs = require('fs');
const filePath = `${process.env.PWD}/src/templates.json`;

const readTemplates = (callback) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        try {
            callback(JSON.parse(data));
        } catch (e) {
            callback({});
        }
    });
};

const writeTemplates = (data) => {
    readTemplates((existData) => {
        const exist = { ...existData };
        exist[data.name] = data.url;
        fs.writeFile(filePath, JSON.stringify(exist), () => { });
    });
};

exports.readTemplates = readTemplates;
exports.writeTemplates = writeTemplates;