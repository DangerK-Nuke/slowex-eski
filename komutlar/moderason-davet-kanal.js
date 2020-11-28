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

  let kanal = message.mentions.channels.first();

  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<:Yanl:771056893217079357> ・ Bir Davet Kanalı Belirtin.")
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
        .setColor("BLUE")
    );
  }
  const TimsahTim = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    .setDescription(`<:doru:771056901742919741> ・ Davet Kanalı; ${kanal} Olarak Ayarlandı.`);
  message.channel.send(TimsahTim);

  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["davetkanal"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal",
  description: "davet-kanal",
  usage: "davet-kanal"
};
