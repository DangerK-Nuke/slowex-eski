const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "TimsahTim");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'Bu Redakte Edilmiştir...')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'Bu Redakte Edilmiştir...')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'Bu Redakte Edilmiştir...')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\

//--------------------------------AFK SİSTEMİ--------------------------------\\

const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`TimsahTim_AFK`)) return;

  if (await db.fetch(`TimsahTim_AFK_${message.author.id}`)) {
    db.delete(`TimsahTim_AFK_${message.author.id}`);
    db.delete(`TimsahTim_AFK_Pendra_Süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setImage("")
      .setDescription(`**AFK Modundan Tekrar Aktif Olduğunuz İçin Çıkıldı**`);

    message.channel.send(embed);
  }

  var TimsahTim_Kullanıcı = message.mentions.users.first();
  if (!TimsahTim_Kullanıcı) return;
  var TimsahTim_Sebep = await db.fetch(`TimsahTim_AFK_${TimsahTim_Kullanıcı.id}`);

  if (TimsahTim_Sebep) {
    let Pendra_Süre = await db.fetch(`Pendra_Süre_${TimsahTim_Kullanıcı.id}`);
    let timeObj = ms(Date.now() - Pendra_Süre);

    const TimsahTim_AFK = new Discord.MessageEmbed()

      .setColor("BLUE")
      .setImage("")
      .setDescription(
    
       `**Slowex | AFK Sistemi**\n\n\`${TimsahTim_Kullanıcı.tag}\` **Adlı Kullanıcı,\n\n\`${TimsahTim_Sebep}\` Sebebinden Dolayı AFK**\n\n**AFK Süresi :**\n\n\`${timeObj.hours} Saat\` \`${timeObj.minutes} Dakika\` \`${timeObj.seconds} Saniye\``
      );

    message.channel.send(TimsahTim_AFK);
  }
});

//--------------------------------AFK SİSTEMİ--------------------------------\\

