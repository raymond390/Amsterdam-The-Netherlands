const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class ticket extends Command {

	constructor (client) {
		super(client, {
			name: "ticket",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: ["new"],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {
		
        var opmerking = args.slice(0).join(" ");

        const categoryID = "825265915032633374";

        var userName = message.author.username;
        var userDiscriminator = message.author.discriminator;
    
        var ticketBestaat = false;
    
        message.guild.channels.cache.forEach(channel => {
    
            if (channel.name == `ticket-${message.author.id}`) {
                ticketBestaat = true;
    
                message.reply("Je hebt al een ticket aangemaakt");
    
                return;
            }
    
        });
    
	
    
        message.guild.channels.create(`ticket-${message.author.id}`, { type: 'text' }).then(
            (createdChannel) => {
                createdChannel.setParent(categoryID).then(
                    (settedParent) => {
    
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });
    
                        settedParent.updateOverwrite(message.author.id, {
                            CREATE_INSTANT_INVITE: false,
                            READ_MESSAGES: true,
                            SEND_MESSAGES: true,
                            ATTACH_FILES: true,
                            CONNECT: true,
                            ADD_REACTIONS: true,
                            VIEW_CHANNEL: true,
                            READ_MESSAGE_HISTORY: true
                        });
						if (ticketBestaat) return;
						var eng = new Discord.MessageEmbed()
					
						.setDescription(`Je hebt succes vol een ticket gemaakt! klik op ${settedParent} om je ticket te zien.`)
						message.channel.send(eng)
					
       
						var embedParent = new Discord.MessageEmbed()
					
						.setDescription(`Hoi ${message.author}, Welkom in je ticket! Heb even gedult, We zullen binnenkort komen. Wil je de ticket sluiten gebruik \`,close\``)
						

					settedParent.send(embedParent);
					
		
    

			const logchannel = message.guild.channels.cache.find(channel => channel.name === `bot-setup`)
			if(logchannel) {
				logchannel.send(`Ticket ${message.author.id} gemaakt. Klik hier om te kijken <#${settedParent}>`);
			}
                    })
				}
			
        );
    
    }


}

module.exports = ticket;