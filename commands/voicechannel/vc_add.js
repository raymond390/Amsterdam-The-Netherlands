const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class vc_add extends Command {

	constructor (client) {
		super(client, {
			name: "vc_add",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "vc_create"],
			memberPermissions: [],
			botPermissions: [ "" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {
		
        
          
        var opmerking = args.slice(0).join(" ");

        const categoryID = "735815712102416394";

        var userName = message.author.username;
        var userDiscriminator = message.author.discriminator;
    
        var ticketBestaat = false;
    
        message.guild.channels.cache.forEach(channel => {
        
        if (channel.name == userName.toLowerCase()) {
            ticketBestaat = true;

            message.reply("Je hebt al een kanaal aangemaakt");

            return;
        }
    });
    
    
        if (ticketBestaat) return;
    
             const embed = new Discord.MessageEmbed()
            .setTitle("Hoi " + message.author.username)
            .setColor(data.config.embed.color)
            .setFooter("Kanaal word aangemaakt  ");

        message.channel.send(embed);
    
        message.guild.channels.create(userName.toLowerCase(), { type: 'voice' }).then(
            (createdChannel) => {
                createdChannel.setParent(categoryID).then(
                    (settedParent) => {
    
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                            CONNECT: true,
                            VIEW_CHANNEL: true,
                            SPEAK: true,
                            VIDEO: true
                        });



                        setTimeout(function(){
                            const fetchedChannel = (userName.toLowerCase());
                            
                                fetchedChannel.delete();
                        
                            
                        }, 3600000);//wait 2 seconds
                    }
                ).catch(err => {
                    message.channel.send("Er is iets misgelopen");
                });
            }
        ).catch(err => {
            message.channel.send("Er is iets misgelopen");
        });
      
    }
        }
    
    
    




module.exports = vc_add;