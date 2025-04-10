const fs = require('fs');
const path = require('path');

fs.mkdir('./parent/child/grandchild/test',{recursive:true},(err)=>{
    if(err){
        console.log(`Error creating folders`,err);
    }
    console.log('Folders created successfully')
});