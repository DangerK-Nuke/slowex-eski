const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz!");
  
  let bayrak = db.fetch(`TimsahTim_Bayrak_${user.id}`) || `Ayarlanmamış` 
  let cinsiyet = db.fetch(`TimsahTim_Cinsiyet_${user.id}`) || `Ayarlanmamış`
  let isim = db.fetch(`TimsahTim_İsim_${user.id}`) || `Ayarlanmamış`
  let soyisim = db.fetch(`TimsahTim_Soyisim_${user.id}`) || `Ayarlanmamış`
  let yas = db.fetch(`TimsahTim_Yas_${user.id}`) || `Ayarlanmamış`
  
  
const Slowex_Profil = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor(`${user.username} Adlı Kullanıcının Profili`)
.setThumbnail(user.avatarURL())
.setDescription(`
╔════════════════╗
║**Bayrak:** ${bayrak}
║════════════════
║**Cinsiyet:** ${cinsiyet}
║════════════════
║**İsim:** ${isim}
║════════════════
║**Soy İsim:** ${soyisim}
║════════════════
║**Yaş:** ${yas}
╚════════════════╝
`)

return message.channel.send(Slowex_Profil);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Profilim","profil"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "",
  usage: "",
  kategori: "Profil"
};