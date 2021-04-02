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
    	if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
			return message.reply('Je kan deze command hier niet gebruiken. gebruikt deze command als je een ticket wil verwijderen');
		}
	}
};



module.exports = verwijder;