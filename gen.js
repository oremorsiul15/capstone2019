
var fs = require("fs");
var name = require("node-random-name");


var json = [];
//{err,data} = await read('db1.json');
//fs.readFileSync('db1.json', function (err, data) {
for(let i=0; i < 200;i++ ){
//json = JSON.parse(data)
        json.push({
        nombre:name({gender:"male"}),
        sexo:"M",
        studentNum:"80218"+(1000+i).toString(),
        history:[],
        hasAccess:false,
        image:"none"
        })

}

for(let i=0; i < 200;i++ ){
//json = JSON.parse(data)
        json.push({
        nombre:name({gender:"female"}),
        sexo:"F",
        studentNum:"80218"+(3000+i).toString(),
        history:[],
        hasAccess:false,
        image:"none"
        })

}

//});

 fs.writeFileSync("db1.json", JSON.stringify(json,null, 4));

