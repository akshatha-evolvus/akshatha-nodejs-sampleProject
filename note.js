const fs= require('fs')
const chalk = require('chalk')
//http://api.weatherstack.com/current?access_key=de21e290e1015bb212a07d101dd7cbfc&query=12.311827,76.652985

const addNote = (title,body)=>{
    const Notes = loadNotes()
    const duplicateNote = Notes.filter((note) => note.title===title )
    if(duplicateNote.length === 0)
    {
        Notes.push({
            title: title,
            body: body
        })
        saveNotes(Notes)
        console.log(chalk.green.inverse.bold('new Note added'))
    }else
    console.log(chalk.red.inverse.bold('No Note added'))
}


const removeNote = (title) =>
{
    const Notes = loadNotes()
    const NoteToKeep = Notes.filter((note) =>   note.title !==title
     )
    if(Notes.length > NoteToKeep.length)
    {
        console.log(chalk.green.inverse.bold('Note removed'))
        saveNotes(NoteToKeep)
    }else
    console.log(chalk.red.inverse.bold('No Note to remove'))

}

const listNote = () =>
{
    const Notes = loadNotes()
    console.log(chalk.green.inverse('Your Notes'))
    
    Notes.forEach((note) => {
        console.log(note.title)
    });
   
}

const readNote = (title) =>
{
    const Notes = loadNotes()
    const readNote = Notes.find((note) => note.title===title)
    if(readNote )
    {
        console.log(chalk.green.inverse(readNote.title))
        console.log(chalk.white.inverse(readNote.body))

    }else
    console.log(chalk.red.inverse.bold('No Note find'))

}

const saveNotes =(Notes) => {
    const saveJSON=JSON.stringify(Notes)
    fs.writeFileSync('note.json',saveJSON)

}
const loadNotes = () =>
{
    try{
    const dataBuffer=fs.readFileSync('note.json')
    const dataJSON=dataBuffer.toString();
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

module.exports={
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}