var fs = require('fs');

/*fs.writeFile('data.txt','Hello World from Daniel',function(err){
   if (err){
       throw err;
    };
});


fs.readFile('C:/HaxLogs.txt',function(err,data){
   if (err){
       throw err;
   }else{
       console.log(data.toString('utf-8'));
    }
});*/


/*
fs.readdir('.',function(err,files){
    if (err){
        throw err;
    } else{
        for (var file in files){
            console.log(files[file]);
        }
    }
});
*/

fs.readdirSync('.')
    .filter(function(file){
        return (file.endsWith('.js'));
    }).forEach(function(file){
        console.log(file);
});
