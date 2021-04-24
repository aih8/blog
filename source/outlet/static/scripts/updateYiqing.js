var https = require('https');
var fs = require('fs');
var path = require('path');

function getRemoteData(url) {
  return new Promise(function (resolve, reject) {
    https.get(url, function (res) {
      var html = '';

      res.on('data', function (data) {
        html += data;
      });

      res.on('end', function () {
        writeFile(path.resolve(__dirname, './yiqing.json'), html, {flag: 'w+'});
      });
    }).on('error', function () {
      console.log('出错！');
    });
  });
}

function writeFile(pathInfo, data, options = {flag: 'w+'}) {
  fs.writeFileSync(pathInfo, data, options);
}

getRemoteData('https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5');