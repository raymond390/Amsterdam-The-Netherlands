const Command = require("../../base/Command.js"),
	Discord = require("discord.js"),
	fetch = require("node-fetch");

class verify extends Command {

	constructor (client) {
		super(client, {
			name: "verify",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "ui" ],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 5000
		});
	}

	async run (message, args, data) {
        
  const noblox = require('noblox.js');
  const db = require('quick.db');
		let roles = require('../../roles.json');
		roles = roles.roles;
	
		function SendVerificationMessage(Title, Description, Color) {
		  const Embed = new Discord.MessageEmbed()
			.setAuthor('Roblox verificatie')
			.setTitle(Title)
			.setDescription(Description)
			.setColor(Color)
			.setFooter('Deze promt eindigt in 2 min')
			.setTimestamp()
		  message.channel.send(Embed);
		}
	
		message.channel.send('**Start verificatie proces.**').then(editedMsg => {
		  editedMsg.edit('**Wachten op promt**');
		  editedMsg.delete();
	
		  function Generate() {
			let text = '';
			let randomstuff = ['amsterdam verificatie', 'amsterdam verificatie 2', 'amsterdam verificatie 3'];
			text += randomstuff[Math.floor(Math.random() * randomstuff.length)];
			return text;
		  }
		  const filter = m => m.author.id === message.author.id;
		  const collector = message.channel.createMessageCollector(filter, {
			max: '1',
			maxMatches: '1',
			time: '120000',
			errors: ['time']
		  })
		  const embed = new Discord.MessageEmbed()
			.setTitle('Roblox verificatie')
			.setDescription('❓ Wat is je roblox naam?')
			.setColor('BLUE')
			.setFooter('Deze promt stopt over 2 minuten.')
			.setTimestamp()
		  message.channel.send(embed);
		  collector.on('collect', m => {
			if (m.content.toLowerCase() === 'cancel') {
			  SendVerificationMessage('Prompt', 'Verificatie promt geanuleert.', 'RED')
			  return;
			}
			noblox.getIdFromUsername(m.content).then(foundUser => {
			  const UserId = foundUser;
			  const string = Generate()
			  SendVerificationMessage(`Hallo, ${m.content}!`, 'Om te verifiëren dat u de eigenaar bent van dit account, plaats dit in je ROBLOX blurb of status:\n\n`' + string + '`\n\nWaneer je dit hebt gedaan, zeg `done`.\nAls je dit proces wil beeindigen, zeg `cancel`.', 'BLUE')
			  const collector2 = message.channel.createMessageCollector(filter, {
				max: '1',
				maxMatches: '1',
				time: '120000',
				errors: ['time']
			  })
			  collector2.on('collect', async msg => {
				if (msg.content.toLowerCase() === 'done' && msg.author.id === message.author.id) {
				  message.channel.send(`**Zoekt naar ${string} on ${m.content}**`).then(async message1 => {
					setTimeout(function () {
					  noblox.getStatus(UserId).then(async status => {
						noblox.getBlurb(UserId).then(async blurb => {
						  if (status.includes(string) || blurb.includes(string)) {
							await db.set(`${message.author.id}.username`, m.content)
							message1.edit('**Je bent nu geverifieerd als `' + m.content + '`!**\nWacht op u verfied rol')
							let verifiedRole = await message.guild.roles.cache.find(role => role.name === 'Verified')
							await message.member.roles.add(verifiedRole)
							await message.member.setNickname(m.content)
	
							// Get Roles
							
	
							
	
							message1.edit('**Je bent nu geverifieerd als `' + m.content + '`!**')
						  } else {
							message.channel.send(`**Ik kon de tekst niet vinden in je status of blurb. Probeer het a.u.b. opnieuw.**`);
						  }
						})
					  })
					}, 5000);
				  })
				} else if (msg.content.toLowerCase() === 'cancel' && msg.author.id === message.author.id) {
				  SendVerificationMessage('Prompt', 'Prompt geanuleert.', 'RED')
				}
			  })
			})
		  })
		})
	  }
	}

module.exports = verify;
