const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class transcript extends Command {

	constructor (client) {
		super(client, {
			name: "transcript",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: [],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 3000
		});
	}

	async run (message, args, data) {
          
const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');

        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
		if (channel.name.includes('ticket-')) {
			if (message.member.hasPermission('ADMINISTRATOR') || channel.name === `ticket-${message.author.id}`) {
				channel.messages.fetch().then(async (messages) => {
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
							title: `Transcript voor ${channel.name}`,
							description: ' ',
						});
					}
					catch(e) {
						return message.channel.send('Error, Probeer op nieuw!');
					}

					const embed = new MessageEmbed()
						.setDescription(`[\`📄 View\`](${response.url})`)
						.setColor('GREEN');
					message.reply('Transcript is compleet. Klik op de link hier onder om te bekijken', embed);
				});
			}
		}
		else {
			return message.reply(
				'Je kan deze command hier niet gebruiken. gebruik dit in een open ticket',
			);
		}
	}
};

module.exports = transcript;