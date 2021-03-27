const Command = require("../../base/Command.js"),
	Discord = require("discord.js");


class close extends Command {

	constructor (client) {
		super(client, {
			name: "close",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: ["MANAGE_CHANNELS"],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {
	
    const ticket1 = "825265915032633374";
     
     const ticket2 = "773115115615944705";

        const categoryID = ticket1;

        var opmerking = args.slice(0).join(" ");

        if (message.channel.parentID == categoryID, ticket2) {
    
            message.channel.delete();
    
            // Create embed.
            const embed = new Discord.MessageEmbed()
                .setTitle("Ticket, " + message.channel.name)
                .setDescription(`ticket gesloten door${message.author}\n Reden: ${opmerking} `)
                .setColor(data.config.embed.color)
                .setFooter("Ticket gesloten");
    
            // Channel voor logging
            var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "logs");
            if (!ticketChannel) return message.reply("Kanaal bestaat niet");
    
            ticketChannel.send(embed);
    
        } else {
    
            message.channel.send("Gelieve dit command te doen bij een ticket.");
    
        }
    
    
    
    }

}



module.exports = close;