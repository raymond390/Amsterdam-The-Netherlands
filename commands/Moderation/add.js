const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class add extends Command {

	constructor (client) {
		super(client, {
			name: "add",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: [],
			memberPermissions: [ "MANAGE_MESSAGES" ],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 3000
		});
	}

	async run (message, args, data) {
        
        const categoryID = "773115115615944705";

        if (message.channel.parentID == categoryID) {
    
    	const member = await this.client.resolveMember(args[0], message.guild);

        const channelsend = new Discord.MessageEmbed()
      .setColor('#e64b0e')
      .setTitle(`Toegevoegde gebruiker`)
      .setDescription(`${message.author} heeft  ${member} toegevoegd`)
	  .setColor(data.config.embed.color)

    
    
        
    
        message.channel.updateOverwrite(member.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
          message.channel.send(channelsend)
		      
	} else {
		

		message.channel.send("Gelieve dit command te doen bij een ticket.");
    
        }
        }  
    }

    

module.exports = add;