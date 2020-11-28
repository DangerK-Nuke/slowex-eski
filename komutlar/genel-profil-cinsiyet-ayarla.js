const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let cinsiyet = args[0]
if (!cinsiyet) return message.channel.send(
      "╔════════════「 **Slowex | Profil Sistemi** 」════════════╗ \n║\n║ <a:hyqued3:770590906746142730>・**Cinsiyetinizi Girin.** \n║ <a:premiumpartner:771056935449395250>・**Örnek:** **s!cinsiyet-ayarla** `<cinsiyetiniz>` \n║ <a:yaplandrma:771056975609462854>・`s!yardım` **Yazarak Tüm Komutlara Ulaşa Bilirsiniz.** \n║\n╚════════════「 **Slowex | Profil Sistemi** 」════════════╝"
    );

 db.set(`TimsahTim_Cinsiyet_${message.author.id}`, cinsiyet)
  message.channel.send("╔════════════「 **Slowex | Profil Sistemi** 」════════════╗ \n║\n║ <a:premiumdoru:771057021910384660>・**Profil Cinsiyetiniz Başarıyla Ayarlandı.** \n║ <a:premiumpartner:771056935449395250>・**Seçdiğiniz Cinsiyet:** `" + cinsiyet +"` \n║ <a:yaplandrma:771056975609462854>・`s!yardım` **Yazarak Tüm Komutlara Ulaşa Bilirsiniz.** \n║\n╚════════════「 **Slowex | Profil Sistemi** 」════════════╝");


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cinsiyet-ayarla"],
  permLevel: 0,
  kategori: "Profil"
};

exports.help = {
  name: "cinsiyetayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
