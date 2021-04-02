const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class vc_add extends Command {

	constructor (client) {
		super(client, {
			name: "vc_add",
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
        if (message.member.roles.cache.some(role => role.name === 'Server Booster')) {
        var member =  await this.client.resolveMember(args[0], message.guild);

        const channelsend = new Discord.MessageEmbed()
        .setTitle(`${member} is toegevoegd aan het kanaal`)
        .setColor(data.config.embed.color)
  
        var userDiscriminator = message.author.discriminator;
        var userName = message.author.username;
      
        const fetchedChannel = message.guild.channels.cache.find(r => r.name === userName.toLowerCase());
              
       
      
        fetchedChannel.updateOverwrite(member, {
            SPEAK: true,
            VIEW_CHANNEL: true,
            CONNECT: true
        });
        
  
      
            message.channel.send(channelsend)
      
              
  
      }

    }

    }
        module.exports = vc_add;
