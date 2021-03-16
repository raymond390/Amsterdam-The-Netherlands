const Command = require("../../base/Command.js"),
	Discord = require("discord.js");


class bug extends Command {

	constructor (client) {
		super(client, {
			name: "bug",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "pong", "latency" ],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args) {
           
            var opmerking = args.slice(0).join(" ");
            const user = message.mentions.users.first() || message.member.user
        
            if (!args[0]) return message.reply("Geen Bug gegeven");
            
        
                // Create embed.
                var embedParent = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}`, user.displayAvatarURL())
                    .setTitle('🚨 Bugreport')
                    .setDescription(`${opmerking}`)
                    .setFooter(`Bug ${user.username}`)
                    .setColor("#ed0909");
        
                // Channel voor logging
                var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "bugs");
        
                ticketChannel.send(embedParent)
           
                
        
        
            
        
        
        }
      
        }
        
	


module.exports = bug;