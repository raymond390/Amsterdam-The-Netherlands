const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class claim extends Command {

	constructor (client) {
		super(client, {
			name: "unclaim",
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
		
		const categoryID = "828587248903389195";

        var claim = message.guild.member(message.mentions.users.first());
    
        
    
        if (message.channel.parentID == categoryID) {
    
        const embed = new Discord.MessageEmbed()
        .setTitle('Unclaim')
        .setDescription(`${message.author} Heeft deze ticket Geunclaimed`)
        .setFooter('unclaim')
        .setColor(data.config.embed.color);
        
        message.channel.setTopic(`Deze ticket is niet geclaimed `)    
    
    return message.channel.send(embed);
    
        } else {
            
    
        message.channel.send("Gelieve dit command te doen bij een ticket.");
        }
    }


}




module.exports = claim;
