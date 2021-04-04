const Command = require("../../base/Command.js"),
	Discord = require("discord.js");


class add extends Command {

	constructor (client) {
		super(client, {
			name: "add",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: ["MANAGE_MESSAGES"],
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
				return message.channel.send(`Incorect gebruikt! Gebruik: ,add <member>`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				}).then(() => {
					message.channel.send(`Succesvol toegevoegd ${member} aan ${message.channel}`);
				});
			}
			catch(e) {
				return message.channel.send('`error`, Probeer op nieuw!');
			}
		}
	}
};



module.exports = add;