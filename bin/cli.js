#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const io = require('../src/io');
const download = require('../src/download');

const addTemplate = () => inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'please input template name:'
    },
    {
        type: 'input',
        name: 'url',
        message: 'please input github project repository:'
    }
]);

const newTemplate = (choices = []) => inquirer.prompt([
    {
        type: 'list',
        name: 'name',
        message: 'please input template name:',
        choices
    },
    {
        type: 'input',
        name: 'project',
        message: 'please input project name:'
    }
]);

program
    .version('0.0.1')
    .option('-a, --add', 'add new template')
    .option('-n, --new', 'new project by template')
    .option('-l, --list', 'list all templates')
    .on('-h, --help', () => { });

program.parse(process.argv);

if (program.add) {
    addTemplate().then(answer => {
        io.writeTemplates(answer);
    });
} else if (program.new) {
    io.readTemplates(templates => {
        const templateNames = Object.keys(templates);
        newTemplate(templateNames).then(answer => {
            if (answer.project !== '') {
                download.downloadTemplate(templates[answer.name], answer.project);
            } else {
                console.error('project name empty, please check your input');
            }
        });
    });
} else if (program.list) {
    io.readTemplates(templates => {
        let lists = 'all templates: \n';
        for (let key in templates) {
            lists += `- ${key}: ${templates[key]}\n`;
        }
        console.log(lists);
    });
} else {
    program.help();
}