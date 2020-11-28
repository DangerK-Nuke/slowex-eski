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
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<:Yanl:771056893217079357> ・ Daveti Sıfırlanacak Kullanıcıyı Etiketleyin.")
        .setColor("BLUE")
        .setAuthor(`Slowex | Davet Sistemi`, message.author.avatarURL)  
         );
        }

  const TimsahTim = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(
      `${u} Adlı Şahsın Davetlerinin Sıfırlanmasını Onaylıyor Musunuz?`
    )
  .setAuthor(`Onaylama İsteği`, message.author.avatarURL)
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()     
  message.channel.send(TimsahTim).then(async function(sentEmbed) {
    const emojiArray = ["☑️"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("<:Yanl:771056893217079357> ・ İşlem İptal Edildi!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "☑️") {
        message.channel.send(
          `<:doru:771056901742919741> ・ İşlem Onaylandı! ${u} Adlı Şahsın Davetleri Sıfırlandı.`
        );

        db.delete(`davet_${message.author.id}_${message.guild.id}`);
      }
    });
  });
};

module.exports.conf = {
  aliases: ["davetsıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sıfırla",
  description: "davet-sıfırla",
  usage: "davet-sıfırla"
};
