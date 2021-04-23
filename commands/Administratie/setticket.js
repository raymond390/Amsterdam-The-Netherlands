const Command = require("../../base/Command.js"),
	Resolvers = require("../../helpers/resolvers");

class setticket extends Command {

	constructor (client) {
		super(client, {
			name: "setticket",
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
        
		const areSuggestsEnabled = Boolean(data.guild.plugins.ticket);
		const sentChannel = await Resolvers.resolveChannel({
			message,
			search: args.join(" "),
			channelType: "category"
		});

		if (!sentChannel && areSuggestsEnabled) {
			data.guild.plugins.ticket = null;
			data.guild.markModified("plugins.ticket");
			await data.guild.save();
			return message.success(
				"administration/setsuggests:SUCCESS_DISABLED"
			);
		} else {
			const channel = sentChannel || message.channel;
			data.guild.plugins.ticket = channel.id;
			data.guild.markModified("plugins.ticket");
			await data.guild.save();
			return message.success(
				"ticket kanaal ingesteld! in",  channel.toString()
				
			);
		}
        
	}

}

module.exports = setticket;