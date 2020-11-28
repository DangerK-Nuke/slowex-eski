const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`Oylama Sunabilmen İçin Bir Metin Girmelisin.`)).then(m => m.delete(5000));

     console.log("Oylama Komutu " + message.author.username + '#' + message.author.discriminator + " Tarafından Kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("BLUE")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Slowex', client.user.avatarURL)

       .addField(`**Slowex  | Oylama**`, `<:oylama:774199547378270218>`, `**${question}**`)).then(function(message) {

         message.react('<:doru:771056901742919741>');

         message.react('<:Yanl:771056893217079357>');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};