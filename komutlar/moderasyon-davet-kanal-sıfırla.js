const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s!";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`<a:yaplandrma:771056975609462854> ・ **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`)
      .setColor("BLUE")
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)     
    message.channel.send(embed);
    return;
  }

  let kanal = await db.fetch(`davetkanal_${message.guild.id}`)

  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<:Yanl:771056893217079357> ・ Davet Kanalı Zaten Ayarlanmamış Olarak Gözüküyor.")
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
        .setColor("BLUE")
    );
  }
  db.delete(`davetkanal_${message.guild.id}`)
  const TimsahTim = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    .setDescription(`<:doru:771056901742919741>  ・Davet Kanalı Başarıyla Sıfırlandı.`);
  message.channel.send(TimsahTim);
return
  
};

module.exports.conf = {
  aliases: ["davetkanalsıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal-sıfırla",
  description: "davet-kanal-sıfırla",
  usage: "davet-kanal-sıfırla"
};
