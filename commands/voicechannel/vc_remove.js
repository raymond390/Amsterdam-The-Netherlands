const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class vc_remove extends Command {

	constructor (client) {
		super(client, {
			name: "vc_remove",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {

        var member =  await this.client.resolveMember(args[0], message.guild);

        const channelsend = new Discord.MessageEmbed()
        .setTitle(`${member} is verwijdert uit het kanaal`)
        .setColor(data.config.embed.color)
  
        var userDiscriminator = message.author.discriminator;
        var userName = message.author.username;
      
        const fetchedChannel = message.guild.channels.cache.find(r => r.name === userName.toLowerCase());
              
       
      
        fetchedChannel.updateOverwrite(member, {
            SPEAK: false,
            VIEW_CHANNEL: false,
            CONNECT: false
        });
        
  
      
            message.channel.send(channelsend)
      
              
  
      }



    }
        module.exports = vc_remove;
