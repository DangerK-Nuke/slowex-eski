const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let soyisim = args.slice(0).join(" ");
if (!soyisim)

return message.channel.send(
 "╔════════════「 **Slowex | Profil Sistemi** 」════════════╗ \n║\n║ <a:hyqued3:770590906746142730>・**Soy İsminizi Girin.** \n║ <a:premiumpartner:771056935449395250>・**Örnek:** **!soyisim-ayarla** `<soyisminiz>` \n║ <a:yaplandrma:771056975609462854>・`s!yardım` **Yazarak Tüm Komutlara Ulaşa Bilirsiniz.** \n║\n╚════════════「 **Slowex | Profil Sistemi** 」════════════╝"
    );
db.set(`TimsahTim_Soyisim_${message.author.id}`, soyisim)
return message.channel.send(
    "╔════════════「 **Slowex | Profil Sistemi** 」════════════╗ \n║\n║ <a:premiumdoru:771057021910384660>・**Profil İsminiz Başarıyla Ayarlandı.** \n║ <a:premiumpartner:771056935449395250>・**Seçdiğiniz Soy İsim:** `" +
      soyisim +
      "` \n║ <a:yaplandrma:771056975609462854>・`s!yardım` **Yazarak Tüm Komutlara Ulaşa Bilirsiniz.** \n║\n╚════════════「 **Slowex | Profil Sistemi** 」════════════╝"
  );


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["soyisimayarla"],
  permLevel: 0,
  kategori: "Profil"
};

exports.help = {
  name: "soyisim-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
