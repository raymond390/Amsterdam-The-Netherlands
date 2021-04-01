const Command = require("../../base/Command.js");

class inv extends Command {

	constructor (client) {
		super(client, {
			name: "inv",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["inventory"],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 10000
		});
	}

	async run (message, args, data) {
        const inventory = require("../../models/inv");
    
        inventory.findOne(
            { Guild: message.guild.id, User: message.author.id},
            async (err, data) => {
                if (!data) return message.channel.send("je inv is leeg!");
                const mappedData = Object.keys(data.Inventory)
                .map((key) => {
                    return `${key}(${data.Inventory[key]})`;
                })
                .join(", ");

                message.channel.send(mappedData)
            }
        )

    }
}

module.exports = inv; 