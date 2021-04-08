const Command = require("../../base/Command.js"),
	Resolvers = require("../../helpers/resolvers");

class settraining extends Command {

	constructor (client) {
		super(client, {
			name: "settraining",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: [],
			memberPermissions: [ "MANAGE_GUILD" ],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 3000
		});
	}

	async run (message, args, data) {
        
		const areReportsEnabled = Boolean(data.guild.plugins.training);
		const sentChannel = await Resolvers.resolveChannel({
			message,
			search: args.join(" "),
			channelType: "text"
		});

		if (!sentChannel && areReportsEnabled) {
			data.guild.plugins.training = null;
			data.guild.markModified("plugins.training");
			await data.guild.save();
			return message.success(
				"Training kanaal succes vol uitgezet"
			);
		} else {
			const channel = sentChannel || message.channel;
			data.guild.plugins.training = channel.id;
			data.guild.markModified("plugins.training");
			await data.guild.save();
			return message.success(
				"Training kanaal succes vol ingesteld",
				{
					channel: channel.toString()
				}
			);
		}
        
	}

}

module.exports = settraining;
