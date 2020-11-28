const Discord = require ("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const TimsahTim = new Discord.MessageEmbed()

.setColor('BLUE')
.setAuthor(`Slowex | Sayaç Menüsü`, client.user.avatarURL())
.setImage("")
.setDescription(`<a:hyqued3:763032004584538152> Slowex Botumuzu Eklemek İçin \`s!davet\` Yazabilirsiniz.`)  
.addField(`__Sayaç Ayarla__`,`<a:krmzbakm:763134536358953020> \`s!sayaç-ayarla\` Sunucunuzda Sayacı Ayarlar.`,true)
.addField(`__Sayaç Mesaj Liste__`,`<a:krmzbakm:763134536358953020> \`s!sayaç-hg-mesaj\` Sunucunuzdaki Sayacın Hoş Geldin Mesajını Ayarlar.`,true)
.addField(`__Sayaç Mesaj Sil__`,`<a:krmzbakm:763134536358953020> \`s!sayaç-bb-mesaj\` Sunucunuzdaki Sayacın Görüşürüz Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`<a:hyqued3:763032004584538152> \`s!davet\` | Slowex'i Sunucunuza Davet Edersiniz\n<a:hyqued3:763032004584538152> \`s!botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hyqued3:763032004584538152> \`s!ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)

.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(TimsahTim)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["sayaç-yardım","sayaç-sistemi"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'sayaç-menü', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};