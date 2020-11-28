const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let talkedRecently = new Set();
let config = require("../utils/errors.js");

module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (cmd.conf.enabled === false) {
      if (
        !ayarlar.sahip.includes(message.author.id) &&
        !ayarlar.sahip.includes(message.author.id)
      ) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `:x: **${cmd.help.name}** İsimli Komut Şuanda Geçici Olarak Kullanıma Kapalıdır!`
          )
          .setColor("BLUE");
        message.channel.send({ embed });
        return;
      }
    }

    if (cmd.conf.permLevel === 1) {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `Bu Komutu Kullanabilmek İçin [ **__Mesajları_Yönet__** ] Yetkisine Sahip Olmalısın.`
          )
          .setColor("BLUE");
        message.channel.send({ embed });
        return;
      }
    }
    if (cmd.conf.permLevel === 2) {
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `Bu Komutu Kullanabilmek İçin [ **__Üyeleri_At__** ] Yetkisine Sahip Olmalısın.`
          )
          .setColor("BLUE");
        message.channel.send({ embed });
        return;
      }
    }
    if (cmd.conf.permLevel === 3) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `Bu Komutu Kullanabilmek İçin [ **__Üyeleri_Yasakla__** ] Yetkisine Sahip Olmalısın.`
          )
          .setColor("BLUE");
        message.channel.send({ embed });
        return;
      }
    }
    if (cmd.conf.permLevel === 4) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `Bu Komutu Kullanabilmek İçin [ **__Yönetici__** ] Yetkisine Sahip Olmalısın.`
          )
          .setColor("BLUE");
        message.channel.send({ embed });
        return;
      }
    }
    if (cmd.conf.permLevel === 5) {
      if (!ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
          .setDescription(`Bu Komutu Sadece  [ **__DangerK__** ]  Adlı Sayın Yapımcım Kullanabilir.`)
          .setColor("BLUE");
        message.channel.send({ embed });
        return;
      }
    }
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
