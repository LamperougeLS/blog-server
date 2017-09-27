const mongoose = require('mongoose');
const db = require('./db.js');
//创建一个schema结构。
const Schema = mongoose.Schema;
const giftSchema = new Schema({
    code : {type : String},
    bool : {type : Boolean},
    date : {type : Date}
});

var GiftModel=db.model('Gift', giftSchema);
module.exports = GiftModel;