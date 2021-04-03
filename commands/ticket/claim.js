const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class claim extends Command {

	constructor (client) {
		super(client, {
			name: "claim",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: ["MANAGE_MESSAGES"],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {
		
        const ticket1 = "825265915032633374";
     
        const ticket2 = "825265915032633374";
   
           const categoryID = ticket1;
   
           
   
           if (message.channel.parentID == categoryID, ticket2) {
    
        const embed = new Discord.MessageEmbed()
        .setTitle('Claim')
        .setDescription(`${message.author} Heeft deze ticket Geclaimed`)
        .setThumbnail('')
        .setImage('')
        .setTimestamp()
        .setFooter('claim', '')
        .setColor(data.config.embed.color);
        
        message.channel.setTopic(`${message.author}: Heeft deze ticket geclaimed`)    
    
    return message.channel.send(embed);
    
        } else {
            
    
        message.channel.send("Gelieve dit command te doen bij een ticket.");
        }
    }


}




module.exports = claim;