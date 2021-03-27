const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class vc_delete extends Command {

	constructor (client) {
		super(client, {
			name: "vc_delete",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "vc_delete"],
			memberPermissions: [],
			botPermissions: [ "" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {
		
   
          
        var opmerking = args.slice(0).join(" ");

        const categoryID = "821445670082576456";

        var userName = message.author.username;
        var userDiscriminator = message.author.discriminator;
    
        var ticketBestaat = false;
    
    
    
        
    
        if (ticketBestaat) return;
    
             const embed = new Discord.MessageEmbed()
            .setTitle("Hoi " + message.author.username)
            .setColor(data.config.embed.color)
            .setFooter("Kanaal word verwijdert ");

        message.channel.send(embed);
    
        setTimeout(function(){
            const fetchedChannel = message.guild.channels.cache.find(r => r.name === userName.toLowerCase());
            
                fetchedChannel.delete();
           
        }            
        );


                
            }
      
        }
    

    
    





module.exports = vc_delete;