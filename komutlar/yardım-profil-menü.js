const Discord = require ("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const TimsahTim = new Discord.MessageEmbed()

.setColor('BLUE')
.setAuthor(`Slowex | Profil Menüsü`, client.user.avatarURL())
.setImage("")
.setDescription(`<a:hyqued3:763032004584538152> Slowex Botumuzu Eklemek İçin \`s!davet\` Yazabilirsiniz.`)  
.addField(`__Bayrak Ayarla__`,`<a:yaplandrma:771056975609462854> \`s!bayrak-ayarla\` İstediğiniz Profil Bayrağı Ayarlarsınız.`,true)
.addField(`__Cinsiyet Ayarla__`,`<a:yaplandrma:771056975609462854> \`s!cinsiyet-ayarla\` İstediğiniz Profil Cinsiyetini Ayarlarsınız.`,true)
.addField(`__İsim Ayarla__`,`<a:yaplandrma:771056975609462854> \`s!isim-ayarla\` İstediğiniz Profil İsminizi Ayarlarsınız.`,true)
.addField(`__Soyisim Ayarla__`,`<a:yaplandrma:771056975609462854> \`!soyisim-ayarla\` İstediğiniz Profil Soy İsiminizi Ayarlarsınız.`,true)
.addField(`__Yaş Ayarla__`,`<a:yaplandrma:771056975609462854> \`s!yaş-ayarla\` İstediğiniz Profil Yaşınızı Ayarlarsınız.`,true)
.addField(`__Profil__`,`<a:yaplandrma:771056975609462854> \`s!profilim\` Profilinize Bakarsınız.`,true)
.addField(`__Bilgilendirme__`,`<a:hyqued3:763032004584538152> \`s!davet\` | Slowex'i Sunucunuza Davet Edersiniz\n<a:hyqued3:763032004584538152> \`s!botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hyqued3:763032004584538152> \`s!ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)

.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(TimsahTim)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["profil-yardım","profil-sistemi"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'profil-menü', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};