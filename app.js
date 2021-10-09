// node app.js add --'Id'="6" --'Name'="Omar" --'Subject'="Arabic" --'Grade'="A+" --'Comment'="This student is perfect in Arabic language"
// node app.js update --'Id'="6" --'Name'="Mosa" --'Subject'="History" --'Grade'="A+" --'Comment'="This student is perfect in History"
// node app.js read --'Id'="6"
// node app.js delete --'Id'="6"
// node app.js list
const m = require('./maintainance.js');
const y = require('yargs');

y.command({
    command: 'add',
    describe: 'This is add describtion',
    builder: {
        Id: {
            describe: 'This is id describtion in the add command',
            demandOption: true,
            type: 'number'
        },
        Name: {
            describe: 'This is name describtion in the add command',
            demandOption: true,
            type: 'string'
        },
        Subject: {
            describe: 'This is subject description in the add command',
            demandOption: true,
            type: 'string'
        },
        Grade: {
            describe: 'This is grade describtion in the add command',
            demandOption: true,
            type: 'string'
        },
        Comment: {
            describe: 'This is comment describtion in the add comment',
            demandOption: false,
            type: 'string'
        }
    },
    handler: function (argv) {
        const o = {
            Id: argv.Id,
            Name: argv.Name,
            Subject: argv.Subject,
            Grade: argv.Grade,
            Comment: argv.Comment
        };
        m.addStudent(o);
    }
});

y.command({
    command: 'delete',
    describe: 'This is delete describtion',
    builder: {
        Id: {
            describe: 'This is delete describtion in the delete command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        m.deleteStudent(argv.Id);
    }
});

y.command({
    command: 'read',
    describe: 'This is read describtion',
    builder: {
        Id: {
            describe: 'This is id describtion in the read command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        m.readStudent(argv.Id);
    }
});

y.command({
    command: 'update',
    describe: 'This is update describtion',
    builder: {
        Id: {
            describe: 'This is Id describtion in update command',
            demandOption: true,
            type: 'number'
        },
        Name: {
            describe: 'This is Name describtion in update command',
            demandOption: true,
            type: 'string'
        },
        Subject: {
            describe: 'This is Subject describtion in update command',
            demandOption: true,
            type: 'string'
        },
        Grade: {
            describe: 'This is Grade describtion in update command',
            demandOption: true,
            type: 'string'
        },
        Comment: {
            describe: 'This is Comment describtion in update command',
            demandOption: false,
            type: 'string'
        }
    },
    handler: function(argv){
        const o = {
            Id: argv.Id,
            Name: argv.Name,
            Subject: argv.Subject,
            Grade: argv.Grade,
            Comment: argv.Comment
        }
        m.updateStudent(o);
    }
});

y.command({
    command: 'list',
    describe: 'This is list describtion',
    handler: function (argv) {
        m.listStudents();
    }
});
y.parse();