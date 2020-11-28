const Discord = require ("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const TimsahTim = new Discord.MessageEmbed()

.setTitle(`Slowex | Komut Sayısı`)
.setDescription('**\n Slowex | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
.setColor("BLUE")
.setThumbnail('https://cdn.discordapp.com/attachments/568831784024801316/764403158037299220/Slowex.png')
.setImage('')
.setTimestamp()
.setFooter("Slowex" , client.user.avatarURL())

return message.channel.send(TimsahTim)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["komutlar","komut-sayısı"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'komutlar', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};