const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class vc_open extends Command {

	constructor (client) {
		super(client, {
			name: "vc_open",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: [],
			memberPermissions: [ "" ],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 3000
		});
	}

	async run (message, args, data) {
        
        if (message.member.roles.cache.some(role => role.name === 'Server Booster')) {
    
        const channelsend = new Discord.MessageEmbed()
      .setColor('#e64b0e')
      .setTitle(`Kanaal Geopend`)
	  .setColor(data.config.embed.color)

      var userDiscriminator = message.author.discriminator;
      var userName = message.author.username;
    
      const fetchedChannel = message.guild.channels.cache.find(r => r.name === userName.toLowerCase() + "-" + userDiscriminator);
            
     
    
      fetchedChannel.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
        SPEAK: true,
        VIEW_CHANNEL: true,
        CONNECT: true

    })
          message.channel.send(channelsend)
    
            

    }
}
}

module.exports = vc_open;