var stdin = process.openStdin();
var fs = require('fs');

stdin.addListener("data", function(d) {
    var obj = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    console.log("you entered: [" + 
        d.toString().trim() + "]");

    let access = false;
    obj.forEach((x)=>{
        if(x.studentNum == d.toString().trim() && x.hasAccess){
            console.log("access granted!");
            console.log("Welcome "+x.nombre+"!")
            access = true;
        }
    });

    if(!access){
        console.log("you shall not pass! L.R.");
    }

  });
