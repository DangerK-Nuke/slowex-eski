const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const TimsahTim = require("TimsahTim.js");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix     
let TimsahTim_Rol = message.mentions.roles.first() 
let TimsahTim_Kanal = message.mentions.channels.first()
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:yaplandrma:771056975609462854> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
 
 if(!TimsahTim_Rol) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bir Rol Belirtin.**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 
 if(!TimsahTim_Kanal) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bir Kanal Belirtin.** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
 
  message.channel.send(`╔════════════「 **Slowex | Otorol Sistemi** 」════════════╗
║ <:doru:771056901742919741> Otorol Sistemi Başarıyla Aktif Edildi.
║ <a:yaplandrma:771056975609462854> **${TimsahTim_Rol}** Olarak Güncellendi.
║ <a:yaplandrma:771056975609462854> Otorol Kayıt Kanalı **${TimsahTim_Kanal}** Olarak Güncellendi.
╚════════════「 **Slowex | Otorol Sistemi** 」════════════╝`)

 
  db.set(`otoRL_${message.guild.id}`, TimsahTim_Rol.id)  
  db.set(`otoRK_${message.guild.id}`, TimsahTim_Kanal.id) 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["otorolayarla"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'otorol-ayarla', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};