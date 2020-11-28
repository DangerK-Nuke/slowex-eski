const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:yaplandrma:771056975609462854> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
 const TimsahTim_Rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!TimsahTim_Rol) return message.reply(`<:Yanl:771056893217079357>  **Bu Özellik Zaten Kapalı Olarak Gözüküyor.**`)
 
 
  message.channel.send(`<:doru:771056901742919741>  **Otorol Sistemi Başarılı Bir Şekilde Kapatıldı.**`)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["otorol-kapat", "otorolkapat","otorol-sıfırla","otorolsıfırla"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'oto-rol-kapat', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};