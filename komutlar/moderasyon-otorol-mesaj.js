const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:yaplandrma:771056975609462854> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
  
  let TimsahTim_Mesaj = args.slice(0).join(' ');
  if(TimsahTim_Mesaj.length < 5) return message.channel.send("╔════════════「 **Slowex | Otorol Sistemi** 」════════════╗ \n║\n║ <a:premiumpartner:771056935449395250>・**Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin.** \n║ <a:hyqued1:770590857509339166>・**Örnek;** \n║ <a:yaplandrma:771056975609462854>・**__-otorol-mesaj -uye- Hoşgeldin. Seninle Beraber -uyesayisi- Kişiyiz.__** \n║\n╚════════════「 **Slowex | Otorol Sistemi** 」════════════╝")
  
 message.channel.send('<a:hyqued3:763032004584538152> **Otorol Mesajı** `'+TimsahTim_Mesaj+'` **Olarak Ayarlandı.**') 
 db.set(`otoRM_${message.guild.id}`, TimsahTim_Mesaj)  

  
};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["otorolmesaj","otorol-mesaj-ayarla","otorolmesaj-ayarla", "otorolmesajayarla"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'otorol-mesaj', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};