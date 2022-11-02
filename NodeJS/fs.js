const { error } = require('console');
const fs = require('fs');

//create
// fs.writeFileSync('createText.text', 'Hello this file create with fs module');
// //append or update
// fs.appendFileSync('createText.text', ' Added some text file create with fs module update.');
// //rename
// fs.renameSync('createText.text', 'CreateAndUpdateByFS.txt');
// //read
// const bufferData = fs.readFileSync('CreateAndUpdateByFS.txt');
// console.log(bufferData.toString());




// CRUD Operation with fs (Sync)
//make folder
// fs.mkdirSync('fs_dir');
// fs.writeFileSync('fs_dir/file.txt', 'Hello create with fs module');
// fs.appendFileSync('fs_dir/file.txt', ' Added Hi CRUD Operation');
// const data = fs.readFileSync('fs_dir/file.txt', 'utf-8');
// console.log(data);
// fs.renameSync('fs_dir/file.txt', 'fs_dir/newFile.txt');
// fs.unlinkSync('fs_dir/newFile.txt');
// fs.rmdirSync('fs_dir');

// CRUD Operation with fs (Async)
// fs.writeFile('write.txt', 'Hello async', (error)=>{
//     console.log('File created');
//     console.log(error);
// });
// fs.readFile('write.txt', 'utf-8', (error, data)=>{
//     console.log(data);
//     console.log(error)
// })
// fs.appendFile('write.txt', 'File appended', (error)=>{
//     console.log('File aapended');
// })
// fs.rename('write.txt', 'renameFile.txt', (error)=>{
//     console.log('My file renamed');
// })
// fs.unlink('renameFile.txt', (error)=>{
//     console.log('My file deleted');
// })
