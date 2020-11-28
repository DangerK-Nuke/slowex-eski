const Discord = require('discord.js');

exports.run = (client, message, args) => {

  if (message.author.id != "550303519530418186") return message.reply('Bu Komutu Sadece Asıl Sahibim Kullanabilir.');

  if (!message.guild) {

  const ozelmesajuyari = new Discord.MessageEmbed()

  .setColor("BLUE")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Bu Komutu Özel Mesajlarda Kullanamazsın.');

  return message.author.sendEmbed(ozelmesajuyari); }

  let guild = message.guild;

  let reason = args.slice(1).join(' ');

  let user = message.mentions.users.first();

  if (reason.length < 1) return message.reply('**__Sayın Yapımcım Yazacağınız Mesajı Giriniz.__**');

  if (message.mentions.users.size < 1) return message.reply('**__Sayın Yapımcım Mesajı İleteceğim Kullanıcıyı Etiketlermisiniz.__**').catch(console.error);

  message.delete();

  message.reply('**__Sayın Yapımcım Mesajınız Kullanıcıya İletilmiştir.__**')

  const embed = new Discord.MessageEmbed()

  .setColor('RANDOM')
  .setTitle('TimsahTim [⌭] Yönetim')
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','dm'],
  permlevel: 4
};
exports.help = {
  name: 'bottan dm at',
  description: 'Bir kişiye dm atar.',
  usage: 'prefix <etiket> <mesaj>'
};