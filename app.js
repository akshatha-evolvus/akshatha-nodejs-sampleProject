const fs = require('chalk');
const note= require('./note.js');
const yargs= require('yargs');


yargs.command({
    command:'add',
    description:'listing a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('inside handler')
        note.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    description:'remove a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        note.removeNote(argv.title)
    
    }
})

yargs.command({
    command:'list',
    description:'list a new note',
    handler:function(argv){
        note.listNote(argv.title)
    
    }
})

yargs.command({
    command:'read',
    description:'read a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        note.readNote(argv.title)
    
    }
})
yargs.parse();
