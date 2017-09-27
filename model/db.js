const mongoose = require('mongoose');
const settings = require("../config/settings.js");
mongoose.Promise = global.Promise;

const db = mongoose.createConnection(settings.dburl);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('数据库连接成功');
});

module.exports = db;