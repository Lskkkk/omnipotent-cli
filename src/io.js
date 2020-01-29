const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'templates.json');

const readTemplates = (callback) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        try {
            callback(JSON.parse(data));
        } catch (e) {
            callback({});
        }
    });
};

const writeTemplates = (template) => {
    readTemplates((existData) => {
        const exist = { ...existData };
        exist[template.name] = template.url;
        fs.writeFile(filePath, JSON.stringify(exist), () => { });
    });
};

const deleteTemplates = (name) => {
    readTemplates((data) => {
        const deleted = { ...data };
        deleted[name] = undefined;
        fs.writeFile(filePath, JSON.stringify(deleted), () => { });
    });
};

exports.readTemplates = readTemplates;
exports.writeTemplates = writeTemplates;
exports.deleteTemplates = deleteTemplates;