const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class hasrole extends Command {

	constructor (client) {
		super(client, {
			name: "heeftrole",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["hasrole"],
			memberPermissions: [ "MANAGE_ROLES" ],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 3000
		});
	}

	async run (message, args, data) {
		const targetUser = message.mentions.users.first()
		if (!targetUser) {
		  message.reply('Specifeer de naam van de persoon')
		  return
		}

		args.shift()

		const roleName = args.join(' ')
		const { guild } = message
	
		const role = guild.roles.cache.find((role) => {
		  return role.name === roleName
		})
		if (!role) {
		  message.reply(`Er is geen rol met die naam "${roleName}"`)
		  return
		}
	
		const member = guild.members.cache.get(targetUser.id)
	
		if (member.roles.cache.get(role.id)) {
		  message.reply(`Deze gebruiker heeft ${roleName} role`)
		} else {
		  message.reply(`Deze gebruiker heeft geen ${roleName} role`)
		}
	  }
	}

    

module.exports = hasrole;