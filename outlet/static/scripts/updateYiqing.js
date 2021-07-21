var https = require('https');
var fs = require('fs');
var path = require('path');

// 疫情json数据的路径
var staticYiqingJsonPathInfo = path.resolve(__dirname, '../yiqing.json');
// 获取疫情数据的接口
var httpUrl = 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5';

function getRemoteData(url, filePath) {
  httpsGet(url).then(function (res) {
    writeFile(filePath, res, { flag: 'w+' });
  }, function() {
    console.log('出错！');
  });
}

function httpsGet(url) {
  return new Promise(function (resolve, reject) {
    https.get(url, function (res) {
      var html = '';

      res.on('data', function (data) {
        html += data;
      });

      res.on('end', function () {
        resolve(html);
      });
    }).on('error', function () {
      reject();
    });
  });
}

function writeFile(pathInfo, data, options = { flag: 'w+' }) {
  fs.writeFileSync(pathInfo, data, options);
}

getRemoteData(httpUrl, staticYiqingJsonPathInfo);
