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

        const categoryID = "828587248903389195";
		const staff = (message.member.roles.cache.some(role => role.name === 'Support Team'));

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
    
		if (ticketBestaat) return;
    
        message.guild.channels.create(`ticket-${message.author.id}`, { type: 'text' }).then(
            (createdChannel) => {
                createdChannel.setParent(categoryID).then(
                    (settedParent) => {
    
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });

                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@Support Team'), {
                            READ_MESSAGES: true,
                            SEND_MESSAGES: true,
                            ATTACH_FILES: true,
                            CONNECT: true,
                            ADD_REACTIONS: true,
                            VIEW_CHANNEL: true,
                            READ_MESSAGE_HISTORY: true,
                            MANAGE_MESSAGES: true
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
						
						message.channel.send(`Je hebt succes vol een ticket gemaakt! klik op ${settedParent} om je ticket te zien.`)
					
       
						
						

					settedParent.send(` Hoi ${message.author}, Welkom in je ticket! Heb even gedult, We zullen binnenkort komen. Wil je de ticket sluiten gebruik \`,close\``);
					
					
				}
                ).catch(err => {
                    message.channel.send("Er is iets misgelopen");
                });
            }
        ).catch(err => {
            message.channel.send("Er is iets misgelopen");
        
    

			const logchannel = message.guild.channels.cache.find(channel => channel.name === `bot-setup`)
			if(logchannel) {
				logchannel.send(`Ticket ${message.author.id} gemaakt. Klik hier om te kijken <#${settedParent}>`);
			}
                    })
				}
			
        ;
    
    }




module.exports = ticket;
