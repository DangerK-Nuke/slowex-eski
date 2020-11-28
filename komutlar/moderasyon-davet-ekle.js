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
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)    
        .setDescription("<:Yanl:771056893217079357>  ・ Davet Eklenecek Kullanıcıyı Etiketleyin.")
        .setColor("BLUE")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)     
        .setDescription("<:Yanl:771056893217079357>  ・ Eklenecek Davet Sayısını Girin.")
        .setColor("BLUE")
    );
  }
  const TimsahTim = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
    .setDescription(`<:doru:771056901742919741> ・  ${u} Adlı Şahsa; ${m} Davet Eklendi.`);
  message.channel.send(TimsahTim);

  db.add(`davet_${message.author.id}_${message.guild.id}`, +m);
};

module.exports.conf = {
  aliases: ["davetekle"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-ekle",
  description: "davet-ekle",
  usage: "davet-ekle"
};
