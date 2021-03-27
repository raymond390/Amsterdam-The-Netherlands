const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class remove extends Command {

	constructor (client) {
		super(client, {
			name: "remove",
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
        
		const ticket1 = "825265915032633374";
     
		const ticket2 = "773115115615944705";
   
		   const categoryID = ticket1;
   
		   if (message.channel.parentID == categoryID, ticket2) {
    
        const member = await this.client.resolveMember(args[0], message.guild);
    
        const channelsend = new Discord.MessageEmbed()
      .setColor('#e64b0e')
      .setTitle(`Gebruiker vewijderd`)
      .setDescription(`${message.author} Heeft ${member} verwijdert`)
	  .setColor(data.config.embed.color)

    
    
        
    
        message.channel.updateOverwrite(member.id, {'VIEW_CHANNEL': false, 'SEND_MESSAGES': false, 'MENTION_EVERYONE': false})
          message.channel.send(channelsend)
    
            
	} else {
		

		message.channel.send("Gelieve dit command te doen bij een ticket.");
        }  
    }
}
    

module.exports = remove;