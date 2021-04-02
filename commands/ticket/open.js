const Command = require("../../base/Command.js"),
	Discord = require("discord.js");


class verwijder extends Command {

	constructor (client) {
		super(client, {
			name: "verwijder",
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
        if (message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			try {
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				})
					.then(() => {
						message.channel.send(`Succesvol her-opent ${message.channel}`);
					});
			}
			catch (e) {
				return message.channel.send('Error, Probeer op nieuw!');
			}
		}
		else {
			return message.reply(
				'Je kan dit niet gebruiken hier. gebruikt dit een geclosde ticket.',
			);
		}
	}
};



module.exports = verwijder;