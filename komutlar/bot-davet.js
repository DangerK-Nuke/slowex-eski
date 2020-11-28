const Discord = require ("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const TimsahTim = new Discord.MessageEmbed()

.setColor("BLUE")
.setAuthor(`Slowex | Bağlantılar`, client.user.avatarURL())
.setDescription('**<a:760133335447240735:763031713345175554> • [ Slowex`i Ekleyin ](https://discord.com/oauth2/authorize?client_id=769956002627452940&scope=bot&permissions=805314750)**\n\n**<a:760133335447240735:763031713345175554> • [ Slowex Web Sitesi ](https://timsahtim.com/)**\n\n**<a:760133335447240735:763031713345175554> • [ Slowex Destek Sunucusu ](https://discord.gg/KYaqshk)**')
.setFooter(`${message.author.username} Tarafından İstendi.`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())

return message.channel.send(TimsahTim)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["davet-et","bot-ekle"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'davet', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};