const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:yaplandrma:771056975609462854> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
 const TimsahTim_Rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!TimsahTim_Rol) return message.reply(`<:Yanl:771056893217079357>  **Bu Özellik Zaten Ayarlanmamış Olarak Gözüküyor.**`)
 
 
  message.channel.send(`<:doru:771056901742919741>  **Otorol Mesajı Başarılı Bir Şekilde Sıfırlandı.**`)

 
 db.delete(`otoRM_${message.guild.id}`)  

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["otorolmesajsıfırla"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'otorol-mesaj-sıfırla', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};