const Command = require("../../base/Command.js"),
	Discord = require("discord.js");


class removee extends Command {

	constructor (client) {
		super(client, {
			name: "removee",
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
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`Incorrect Gebruikt! Gebruik:,remove <member>`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: false,
					SEND_MESSAGES: false,
					ATTACH_FILES: false,
					READ_MESSAGE_HISTORY: false,
				}).then(() => {
					message.channel.send(`Succes vol verwijdert ${member} uit ${message.channel}`);
				});
			}
			catch(e) {
				return message.channel.send('Error, Probeer opnieuw!');
			}
		}
	}
};



module.exports = remov;