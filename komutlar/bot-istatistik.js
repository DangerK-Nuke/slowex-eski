const Discord = require ("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const TimsahTim = new Discord.MessageEmbed()

.setThumbnail(`https://cdn.discordapp.com/attachments/568831784024801316/764403158037299220/Slowex.png`)
.addField("__**Bot Verileri**__", `<a:760146789877153832:763032006699253800>  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:760146789877153832:763032006699253800>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:760146789877153832:763032006699253800>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:760133335447240735:763031713345175554> **Bot Sahibi**  <@550303519530418186> \n **⌭ DangerK#9999** \n\n <a:760133335447240735:763031713345175554> **Bot Sahibi**  <@336450004585545729> \n **Zéuss⌭cuK#9999** \n`)
.addField("__**Sürümler**__", `<a:kumuz:770589510031376384> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:kumuz:770589510031376384> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:760150931169607700:763032009131819038>  **${client.ws.ping}** ms`,true)
.setImage(`https://cdn.discordapp.com/attachments/568831784024801316/764214278600654888/Slowex_Wallpaper.png`)
.setColor("BLUE")

.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(TimsahTim)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["bot-istatistik","istatistik"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'istatistikler', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};