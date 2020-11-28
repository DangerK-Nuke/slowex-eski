const Discord = require ("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const TimsahTim = new Discord.MessageEmbed()

.setColor('BLUE')
.setAuthor(`Slowex | Yardım Menüsü`, client.user.avatarURL())
.setImage("")
.setDescription(`<a:hyqued3:763032004584538152> Slowex Botumuzu Eklemek İçin \`s!davet\` Yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:yaplandrma:771056975609462854> \`s!genel-menü\``,true)
.addField(`__Moderasyon Komutları__`,`<a:yaplandrma:771056975609462854> \`s!moderasyon-menü\` `,true)
.addField(`__Koruma Komutları__`,`<a:yaplandrma:771056975609462854> \`s!koruma-menü\`  `,true)
.addField(`__Seviye Komutları__`,`<a:yaplandrma:771056975609462854> \`s!seviye-menü\`  `,true)
.addField(`__Destek Komutları__`,`<a:yaplandrma:771056975609462854> \`s!destek-menü\`  `,true)
.addField(`__Kayıt Komutları__`,`<a:yaplandrma:771056975609462854> \`s!kayıt-menü\`  `,true)
.addField(`__Bilgilendirme__`,`<a:hyqued3:763032004584538152> \`s!davet\` | Slowex'i Sunucunuza Davet Edersiniz\n<a:hyqued3:763032004584538152> \`s!botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hyqued3:763032004584538152> \`s!ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)

.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(TimsahTim)
.then; 

};
exports.conf = {
  aliases: ["yardım-menü","yardım-sistemi"],
  permLevel: 0
};
exports.help = {
  name: 'yardım'
}; 
