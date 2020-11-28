
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let config = require("../utils/errors.js");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] TimsahTim_Sistem : Aktif Komutlar Yüklendi.`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] TimsahTim_Sistem : ${client.user.username} İsmi İle Giriş Yapıldı.`
  );
  client.user.setStatus("online");
  var oyun = [
    `timsahtim.com`
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], ``);
  }, 2 * 2500);
};

// Coder İs DangerK