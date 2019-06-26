var express = require('express');
var app     = express();
app.use('/public',express.static('./public'));
app.use('/static',express.static('./static'));
app.use('/node_modules',express.static('./node_modules'));
// app.use('/private',express.static('./private'));
app.get('/about',function (req,res) {
    console.log(req.query);
    res.send('你好,我是Express....');
});
app.get('/',function (req,res) {
    res.send(`
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
<body>
  <h1>hello Express！你好</h1>
</body>
</html>
    `);
});
app.listen(3000,function () {
   console.log('app is running at point 3000')
});