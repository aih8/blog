var https = require('https');
var fs = require('fs');
var path = require('path');

https.get('https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5', function(res){
    var html = '';

    res.on('data', function (data) {
        html  += data;
    });

    res.on('end', function () {
        fs.writeFileSync(path.resolve(__dirname, './yiqing.json'), html, {flag: 'w+'});
    });
}).on('error',function(){
    console.log('出错！');
});