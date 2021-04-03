const Command = require("../../base/Command.js"),
	Discord = require("discord.js");


class close extends Command {

	constructor (client) {
		super(client, {
			name: "close",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {
        const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');


        if(message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if(message.member.hasPermission('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
				message.channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await sourcebin.create([
							{
								name: ' ',
								content: output,
								languageId: 'text',
							},
						], {
							title: `Transcript voor ${message.channel.name}`,
							description: ' ',
						});
					}
					catch(e) {
						return message.channel.send('Error, Probeer op nieuw!');
					}

					const embed = new MessageEmbed()
						.setDescription(`[\`📄 Kijk\`](${response.url})`)
						.setColor('GREEN');
					member.send('Hier is een transcript van jou ticket, Klik op de link hier onder voor de chat', embed);
				}).then(() => {
					try {
						message.channel.updateOverwrite(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send(`Ticket gesloten ${message.channel}`);
						});
					}
					catch(e) {
						return message.channel.send('Error, Probeer op nieuw!');
					}
				});
			}
		}
		else {
			return message.reply('Je kan dit command niet hier gebruiken. Gebruik dit waneer je een ticket wil sluiten.');
		}
		if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
	}
};



module.exports = close;