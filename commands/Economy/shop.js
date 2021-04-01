const Command = require("../../base/Command.js");

class shop extends Command {

	constructor (client) {
		super(client, {
			name: "shop",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: [],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 10000
		});
	}

	async run (message, args, data) {
        const items = require("../../shoplist")
        if (items.length === 0) return message.reply("Alles is uit verkocht");

        const shoplist = items.map((value, index) => {
            return `**${index+1})** ${value.item} -> ${value.price} credits!`
        });
    
        message.channel.send(shoplist)

	}

}

module.exports = shop; 