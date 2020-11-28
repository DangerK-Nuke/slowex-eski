const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

  let yas = args.slice(0).join(" ");
  if (!yas)

return message.channel.send(
 "╔════════════「 **Slowex | Profil Sistemi** 」════════════╗ \n║\n║ <a:hyqued3:770590906746142730>・**Yaşınızı Girin.** \n║ <a:premiumpartner:771056935449395250>・**Örnek:** **s!yas-ayarla** `<yaşınız>` \n║ <a:yaplandrma:771056975609462854>・`s!profil-menü` **Yazarak Tüm Komutlara Ulaşa Bilirsiniz.** \n║\n╚════════════「 **Slowex | Profil Sistemi** 」════════════╝"
    );
db.set(`TimsahTim_Yas_${message.author.id}`, yas)
return message.channel.send(
    "╔════════════「 **Slowex | Profil Sistemi** 」════════════╗ \n║\n║ <a:premiumdoru:771057021910384660>・**Profil Yaşınız Başarıyla Ayarlandı.** \n║ <a:premiumpartner:771056935449395250>・**Seçdiğiniz Yaş:** `" +
      yas +
      "` \n║ <a:yaplandrma:771056975609462854>・`s!profil-menü` **Yazarak Tüm Komutlara Ulaşa Bilirsiniz.** \n║\n╚════════════「 **Slowex | Profil Sistemi** 」════════════╝"
  );
 
;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yas-ayarla","yasayarla","yaşayarla"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "yaş-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
