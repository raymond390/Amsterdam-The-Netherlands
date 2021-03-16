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
        .setDescription("https://www.roblox.com/games/6046894829/Amsterdam-The-Netherlands-V1?refPageId=6b060fe1-9e88-451c-90a3-9a1d6d32289f#!/game-instances")
        message.channel.send(embed);
    }

}


module.exports = game;