const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
 
exports.run = function(client, message, args) {
 
  var TimsahTim_K = message.author;
  var TimsahTim_S = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setImage("")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`**AFK Olmak İçin Bir Sebep Belirtin.**\n\n**AFK Örnek Kullanım :** \`${prefix}afk <sebep>\``)
  if(!TimsahTim_S) return message.channel.send(embed)
 
  db.set(`TimsahTim_AFK_${TimsahTim_K.id}`, TimsahTim_S);
  db.set(`TimsahTim_AFK_süre_${TimsahTim_K.id}`, Date.now());
  const TimsahTim_AFK = new Discord.MessageEmbed()
 .setColor('BLUE')
  .setImage("")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`**AFK Moduna Başarıyla Girildi**\n\n**AFK Olma Sebebi :** \`${TimsahTim_S}\``)
  message.channel.send(TimsahTim_AFK)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["AFK","Afk"],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'afk komutu',
  usage: 'afk'
};