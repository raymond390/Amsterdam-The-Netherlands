const Command = require("../../base/Command.js"),
	Discord = require("discord.js")

class game extends Command {

	constructor (client) {
		super(client, {
			name: "gamelink",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "gml" ],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {
		
        const embed = new Discord.MessageEmbed()
        .setTitle("Amsterdam Game link")
		.setImage('')
        .setColor(data.config.embed.color)
        .setFooter(data.config.embed.footer)
        .setDescription("https://www.roblox.com/games/5255398651/Amsterdam-The-Nederlands-V2?refPageId=4c151abc-29a8-4d63-939f-9744c1b5e2b8#")
        message.channel.send(embed);
    }

}


module.exports = game;