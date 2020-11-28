const Discord = require("discord.js");
const fs = require("fs");
let config = require("../ayarlar.json");

module.exports.noPerms = (message, perm) => {

let TimsahTim = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setTitle("Yetersiz İzin")
    .setColor(config.red)
    .addField("Erişebilmek İçin Yetkili Tarafından İzin Gerekli!", perm);

return message.channel.send(TimsahTim).then(m => m.delete(5000));

};

module.exports.equalPerms = (message, user, perms) => {

let TimsahTim = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setColor(config.red)
    .setTitle("Hata!")
    .addField(`${user} İzinleri Var!`, perms);

return message.channel.send(TimsahTim).then(m => m.delete(5000));

};

module.exports.botuser = message => {

let TimsahTim = new Discord.MessageEmbed()

    .setTitle("Hata!")
    .setDescription("Bir Botu Yasaklayamazsınız!")
    .setColor(config.red);

return message.channel.send(TimsahTim).then(m => m.delete(5000));

};

module.exports.cantfindUser = channel => {

let TimsahTim = new Discord.MessageEmbed()

    .setTitle("Hata!")
    .setDescription("Kullanıcı Bulunamadı!")
    .setColor(config.red);

return channel.send(TimsahTim).then(m => m.delete(5000));

};

module.exports.noReason = channel => {

let TimsahTim = new Discord.MessageEmbed()

    .setTitle("Hata!")
    .setDescription("Bir Neden Belirtin!")
    .setColor(config.red);

return channel.send(TimsahTim).then(m => m.delete(5000));

};
//Pink Code