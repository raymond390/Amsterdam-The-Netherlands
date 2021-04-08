const Command = require("../../base/Command.js"),
	Discord = require("discord.js");
const { blacklistedWords } = require("../../models/blacklist");

class training extends Command {

	constructor (client) {
		super(client, {
			name: "training",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: ["MANAGE_CHANNELS"],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data, client) {
const {blacklistedWords} = require('../../collection')
const Schema = require('../../models/blacklist');

const embed = new Discord.MessageEmbed()
.setTitle("Training plannen ")
.setColor(data.config.embed.color)
.setDescription("Hier onder staat het commando uitgelegd\n\n training <DIENSTNUMMER> <TYPE> <CO-HOST> <SUPERVISOR> <DATUM> <TIJD> <OPMERKINGEN>\n\n\n 1 Politie\n2 Ambulance\n 3 Brandweer\n 4 Koninklijke Marechaussee\n 5 dienst speciale interventie\n 6 Verkeers politie\n 7 Rijkswaterstaat ")
.setFooter("");
if (!args[0]) return message.channel.send(embed);

const training = message.guild.channels.cache.get(data.guild.plugins.training);
        const command = args[0]
        const guild = { Guild: message.guild.id}
        if(command === '2') {
            const check = '✅'
           const type = args[1];
            const co = args[2];
           const supervisor = args[3];
           const datum = args[4];
            const tijd = args[5];
            const opmerking = args.slice(6).join(" ");

            const embed = new Discord.MessageEmbed()
            .setTitle("Training plannen ")
            .setColor(data.config.embed.color)
            .setDescription("Hier onder staat het commando uitgelegd\n\n ,training <DIENSTNUMMER> <TYPE> <CO-HOST> <SUPERVISOR> <DATUM> <TIJD> <OPMERKINGEN>\n\n 1 Politie\n2 Ambulance\n 3 Brandweer\n 4 Koninklijke Marechaussee\n 5 dienst speciale interventie\n 6 Verkeers politie\n 7 Rijkswaterstaat ")
            .setFooter("");
           if (!args[0]) return message.channel.send(embed);
           if (!args[1]) return message.channel.send(embed);
           if (!args[2]) return message.channel.send(embed);
           if (!args[3]) return message.channel.send(embed);
           if (!args[4]) return message.channel.send(embed);
           if (!args[5]) return message.channel.send(embed);
          
          
           const channelsend = new Discord.MessageEmbed()
           
           .setTitle('Ambulance Training')
           .setColor("#ffff00")
           .setTimestamp()
           .addFields(
               {name:" **Type-Training **" , value: (type) },
               {name:" **Host **" , value:` ${message.author} `},
               {name:" **Co-Host **" , value: (co) },
               {name:" **Supervisor **" , value: (supervisor) },
               {name:" **Datum **" , value: (datum) },
               {name:" **Tijd **" , value: (tijd) },
               {name:" **Opmerking **" , value:` ${opmerking}`},
                       
           )
           .setThumbnail('https://www.logolynx.com/images/logolynx/87/87ce0c7ed02801e216a34732603d6433.jpeg')
           .setImage('')
           .setFooter('', '');
       
       
           
    
           training.send(channelsend)
           .then((ticketMessage) => {
               ticketMessage.react(check)
           })
       

        } else if(command === '1') {
            const training = message.guild.channels.cache.get(data.guild.plugins.training);
            const check = '✅'
            const type = args[1];
             const co = args[2];
            const supervisor = args[3];
            const datum = args[4];
             const tijd = args[5];
             const opmerking = args.slice(6).join(" ");
   
    const embed = new Discord.MessageEmbed()
            .setTitle("Training plannen ")
            .setColor(data.config.embed.color)
            .setDescription("Hier onder staat het commando uitgelegd\n\n ,training <DIENSTNUMMER> <TYPE> <CO-HOST> <SUPERVISOR> <DATUM> <TIJD> <OPMERKINGEN>\n\n 1 Politie\n2 Ambulance\n 3 Brandweer\n 4 Koninklijke Marechaussee\n 5 dienst speciale interventie\n 6 Verkeers politie\n 7 Rijkswaterstaat ")
            .setFooter("");
           if (!args[0]) return message.channel.send(embed);
           if (!args[1]) return message.channel.send(embed);
           if (!args[2]) return message.channel.send(embed);
           if (!args[3]) return message.channel.send(embed);
           if (!args[4]) return message.channel.send(embed);
           if (!args[5]) return message.channel.send(embed);
   
    const popo = new Discord.MessageEmbed()
    
    .setTitle('Politie Training')
    .setColor("#0033cc")
    .setTimestamp()
    .addFields(
        {name:" **Type-Training **" , value: (type) },
        {name:" **Host **" , value:` ${message.author} `},
        {name:" **Co-Host **" , value: (co) },
        {name:" **Supervisor **" , value: (supervisor) },
        {name:" **Datum **" , value: (datum) },
        {name:" **Tijd **" , value: (tijd) },
        {name:" **Opmerking **" , value:` ${opmerking}`},
                
    )
    .setThumbnail('http://www.kejara.nl/wp-content/uploads/2018/10/politie-logo.png')
    .setImage('')
    .setFooter('', '');

    

   

    training.send(popo)
    .then((ticketMessage) => {
        ticketMessage.react(check)
    })

        } else if(command === '4') {
            const training = message.guild.channels.cache.get(data.guild.plugins.training);
            const check = '✅'
           const type = args[1];
            const co = args[2];
           const supervisor = args[3];
           const datum = args[4];
            const tijd = args[5];
            const opmerking = args.slice(6).join(" ");
          
            const embed = new Discord.MessageEmbed()
            .setTitle("Training plannen ")
            .setColor(data.config.embed.color)
            .setDescription("Hier onder staat het commando uitgelegd\n\n ,training <DIENSTNUMMER> <TYPE> <CO-HOST> <SUPERVISOR> <DATUM> <TIJD> <OPMERKINGEN>\n\n 1 Politie\n2 Ambulance\n 3 Brandweer\n 4 Koninklijke Marechaussee\n 5 dienst speciale interventie\n 6 Verkeers politie\n 7 Rijkswaterstaat ")
            .setFooter("");
           if (!args[0]) return message.channel.send(embed);
           if (!args[1]) return message.channel.send(embed);
           if (!args[2]) return message.channel.send(embed);
           if (!args[3]) return message.channel.send(embed);
           if (!args[4]) return message.channel.send(embed);
           if (!args[5]) return message.channel.send(embed);
          
          
           var botEmbed = new Discord.MessageEmbed()
           
           .setTitle('Kmar Training')
           .setColor("#000099")
           .setTimestamp()
           .addFields(
               {name:" **Type-Training **" , value: (type) },
               {name:" **Host **" , value:` ${message.author} `},
               {name:" **Co-Host **" , value: (co) },
               {name:" **Supervisor **" , value: (supervisor) },
               {name:" **Datum **" , value: (datum) },
               {name:" **Tijd **" , value: (tijd) },
               {name:" **Opmerking **" , value:` ${opmerking}`},
                       
           )
           .setThumbnail('https://www.deltahouten.nl/media/image/2e/49/64/coin-Kmar_600x600.png')
           .setImage('')
           .setFooter('', '');
       
          
       
       
           training.send(botEmbed)
           .then((ticketMessage) => {
               ticketMessage.react(check)
           })
  
        } else if(command === '5') {
            const training = message.guild.channels.cache.get(data.guild.plugins.training);
            const check = '✅'
           const type = args[1];
            const co = args[2];
           const supervisor = args[3];
           const datum = args[4];
            const tijd = args[5];
            const opmerking = args.slice(6).join(" ");
            const embed = new Discord.MessageEmbed()
            .setTitle("Training plannen ")
            .setColor(data.config.embed.color)
            .setDescription("Hier onder staat het commando uitgelegd\n\n ,training <DIENSTNUMMER> <TYPE> <CO-HOST> <SUPERVISOR> <DATUM> <TIJD> <OPMERKINGEN>\n\n 1 Politie\n2 Ambulance\n 3 Brandweer\n 4 Koninklijke Marechaussee\n 5 dienst speciale interventie\n 6 Verkeers politie\n 7 Rijkswaterstaat ")
            .setFooter("");
           if (!args[0]) return message.channel.send(embed);
           if (!args[1]) return message.channel.send(embed);
           if (!args[2]) return message.channel.send(embed);
           if (!args[3]) return message.channel.send(embed);
           if (!args[4]) return message.channel.send(embed);
           if (!args[5]) return message.channel.send(embed);

           var botEmbed = new Discord.MessageEmbed()
           
           .setTitle('DSI Training')
           .setColor("#000000")
           .setTimestamp()
           .addFields(
               {name:" **Type-Training **" , value: (type) },
               {name:" **Host **" , value:` ${message.author} `},
               {name:" **Co-Host **" , value: (co) },
               {name:" **Supervisor **" , value: (supervisor) },
               {name:" **Datum **" , value: (datum) },
               {name:" **Tijd **" , value: (tijd) },
               {name:" **Opmerking **" , value:` ${opmerking}`},
                       
           )
           .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Insigne_du_Dienst_Speciale_Interventies_(DSI).svg/1200px-Insigne_du_Dienst_Speciale_Interventies_(DSI).svg.png')
           .setImage('')
           .setFooter('', '');
       
           
       
         
       
           training.send(botEmbed)
           .then((ticketMessage) => {
               ticketMessage.react(check)
           })
       
       
        }else if(command === '6') { 
            const training = message.guild.channels.cache.get(data.guild.plugins.training);
            const check = '✅'
            const type = args[1];
             const co = args[2];
            const supervisor = args[3];
            const datum = args[4];
             const tijd = args[5];
             const opmerking = args.slice(6).join(" ");
          
         const embed = new Discord.MessageEmbed()
            .setTitle("Training plannen ")
            .setColor(data.config.embed.color)
            .setDescription("Hier onder staat het commando uitgelegd\n\n ,training <DIENSTNUMMER> <TYPE> <CO-HOST> <SUPERVISOR> <DATUM> <TIJD> <OPMERKINGEN>\n\n 1 Politie\n2 Ambulance\n 3 Brandweer\n 4 Koninklijke Marechaussee\n 5 dienst speciale interventie\n 6 Verkeers politie\n 7 Rijkswaterstaat ")
            .setFooter("");
           if (!args[0]) return message.channel.send(embed);
           if (!args[1]) return message.channel.send(embed);
           if (!args[2]) return message.channel.send(embed);
           if (!args[3]) return message.channel.send(embed);
           if (!args[4]) return message.channel.send(embed);
           if (!args[5]) return message.channel.send(embed);
          
          
           var botEmbed = new Discord.MessageEmbed()
           
           .setTitle('Verkeers Politie Training')
           .setColor("#03078a")
           .setTimestamp()
           .addFields(
               {name:" **Type-Training **" , value: (type) },
               {name:" **Host **" , value:` ${message.author} `},
               {name:" **Co-Host **" , value: (co) },
               {name:" **Supervisor **" , value: (supervisor) },
               {name:" **Datum **" , value: (datum) },
               {name:" **Tijd **" , value: (tijd) },
               {name:" **Opmerking **" , value:` ${opmerking}`},
                       
           )
           .setImage('')
           .setFooter('', '');
       
           
       
          
       
           training.send(botEmbed)
           .then((ticketMessage) => {
               ticketMessage.react(check)
           })
        }else if(command === '3') { 
            const training = message.guild.channels.cache.get(data.guild.plugins.training);
            const check = '✅'
            const type = args[1];
             const co = args[2];
            const supervisor = args[3];
            const datum = args[4];
             const tijd = args[5];
             const opmerking = args.slice(6).join(" ");
          
             const embed = new Discord.MessageEmbed()
             .setTitle("Training plannen ")
             .setColor(data.config.embed.color)
             .setDescription("Hier onder staat het commando uitgelegd\n\n training <DIENSTNUMMER> <TYPE> <CO-HOST> <SUPERVISOR> <DATUM> <TIJD> <OPMERKINGEN>\n\n\n 1 Politie\n2 Ambulance\n 3 Brandweer\n 4 Koninklijke Marechaussee\n 5 dienst speciale interventie\n 6 Verkeers politie\n 7 Rijkswaterstaat ")
             .setFooter("");
            if (!args[0]) return message.channel.send(embed);
            if (!args[1]) return message.channel.send(embed);
            if (!args[2]) return message.channel.send(embed);
            if (!args[3]) return message.channel.send(embed);
            if (!args[4]) return message.channel.send(embed);
            if (!args[5]) return message.channel.send(embed);
          
           var botEmbed = new Discord.MessageEmbed()
           
           .setTitle('Brandweer Training')
           .setColor("#cc0000")
           .setTimestamp()
           .addFields(
               {name:" **Type-Training **" , value: (type) },
               {name:" **Host **" , value:` ${message.author} `},
               {name:" **Co-Host **" , value: (co) },
               {name:" **Supervisor **" , value: (supervisor) },
               {name:" **Datum **" , value: (datum) },
               {name:" **Tijd **" , value: (tijd) },
               {name:" **Opmerking **" , value:` ${opmerking}`},
                       
           )
           .setThumbnail('https://i.ytimg.com/vi/vvR-x2CTc2g/hqdefault.jpg')
           .setImage('')
           .setFooter('', '');
       
           
       
       
           training.send(botEmbed)
           .then((ticketMessage) => {
               ticketMessage.react(check)
           })
       
       } else if(command === '7') { 
        const training = message.guild.channels.cache.get(data.guild.plugins.training);
        const check = '✅'
        const type = args[1];
         const co = args[2];
        const supervisor = args[3];
        const datum = args[4];
         const tijd = args[5];
         const opmerking = args.slice(6).join(" ");
      
         const embed = new Discord.MessageEmbed()
         .setTitle("Training plannen ")
         .setColor(data.config.embed.color)
         .setDescription("Hier onder staat het commando uitgelegd\n\n training <DIENSTNUMMER> <TYPE> <CO-HOST> <SUPERVISOR> <DATUM> <TIJD> <OPMERKINGEN>\n\n\n 1 Politie\n2 Ambulance\n 3 Brandweer\n 4 Koninklijke Marechaussee\n 5 dienst speciale interventie\n 6 Verkeers politie\n 7 Rijkswaterstaat ")
         .setFooter("");
        if (!args[0]) return message.channel.send(embed);
        if (!args[1]) return message.channel.send(embed);
        if (!args[2]) return message.channel.send(embed);
        if (!args[3]) return message.channel.send(embed);
        if (!args[4]) return message.channel.send(embed);
        if (!args[5]) return message.channel.send(embed);
      
      
       var botEmbed = new Discord.MessageEmbed()
       
       .setTitle('Rijkswaterstaat Training')
       .setColor("#f7df00")
       .setTimestamp()
       .addFields(
           {name:" **Type-Training **" , value: (type) },
           {name:" **Host **" , value:` ${message.author} `},
           {name:" **Co-Host **" , value: (co) },
           {name:" **Supervisor **" , value: (supervisor) },
           {name:" **Datum **" , value: (datum) },
           {name:" **Tijd **" , value: (tijd) },
           {name:" **Opmerking **" , value:` ${opmerking}`},
                   
       )
       .setThumbnail('https://www.informatiehuismarien.nl/publish/pages/113902/rijkswaterstaat.png')
       .setImage('')
       .setFooter('', '');
   
       
   

   
       training.send(botEmbed)
       .then((ticketMessage) => {
           ticketMessage.react(check)
       })
        
        }
       
        }
    }
    



module.exports = training;