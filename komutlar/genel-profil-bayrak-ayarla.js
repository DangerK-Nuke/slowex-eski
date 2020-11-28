const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let bayrak = args.slice(0).join(" ");
if (!bayrak)

return message.channel.send(
 "╔════════════「 **Slowex | Profil Sistemi** 」════════════╗ \n║\n║ <a:hyqued3:770590906746142730>・**Ülkenizin Bayrağını Girin.** `(EMOJİ OLSUN)` \n║ <a:premiumpartner:771056935449395250>・**Örnek:** **s!bayrak-ayarla** :flag_tr: \n║ <a:yaplandrma:771056975609462854>・`s!profil-menü` **Yazarak Tüm Komutlara Ulaşa Bilirsiniz.** \n║\n╚════════════「 **Slowex | Profil Sistemi** 」════════════╝"
    );
db.set(`TimsahTim_Bayrak_${message.author.id}`, bayrak)
return message.channel.send(
    "╔════════════「 **Slowex | Profil Sistemi** 」════════════╗ \n║\n║ <a:premiumdoru:771057021910384660>・**Profil Bayrağın Başarıyla Ayarlandı.** \n║ <a:premiumpartner:771056935449395250>・**Seçdiğiniz Bayrak:** `" +
      bayrak +
      "` \n║ <a:yaplandrma:771056975609462854>・`s!profil-menü` **Yazarak Tüm Komutlara Ulaşa Bilirsiniz.** \n║\n╚════════════「 **Slowex | Profil Sistemi** 」════════════╝"
  );

  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bayrakayarla"],
  permLevel: 0,
  kategori: "Profil"
};

exports.help = {
  name: "bayrak-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
