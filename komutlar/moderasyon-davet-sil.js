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

  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<:Yanl:771056893217079357> ・ Daveti Silinecek Kullanıcıyı Etiketleyin.")
        .setColor("BLUE")
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<:Yanl:771056893217079357> ・ Silinecek Davet Sıyısını Girin.")
        .setColor("BLUE")
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    );
  }
  const TimsahTim = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${u} Adlı Şahıstan; ${m} Davet Silindi!`)
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
  message.channel.send(TimsahTim);

  db.add(`davet_${message.author.id}_${message.guild.id}`, -m);
};

module.exports.conf = {
  aliases: ["davetsil"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sil",
  description: "davet-sil",
  usage: "davet-sil"
};
