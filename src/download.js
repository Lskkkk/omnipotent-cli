const download = require('download-git-repo');

const downloadTemplate = (url, projectName) => {
    console.log('......downloading......');
    download(url, projectName, { clone: true }, (err) => {
        if (err) {
            console.error('error, please check github project repository');
        } else {
            console.log('finished!!!');
        }
    });
};

exports.downloadTemplate = downloadTemplate;