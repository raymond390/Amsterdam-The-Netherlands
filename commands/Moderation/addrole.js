const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class giverole extends Command {

	constructor (client) {
		super(client, {
			name: "geefrole",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["giverole", "addrole"],
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
		  message.reply('Specifeer iemand om de rol te geven.')
		  return
		}
	
		args.shift()
	
		const roleName = args.join(' ')
		const { guild } = message
	
		const role = guild.roles.cache.find((role) => {
		  return role.name === roleName
		})
		if (!role) {
		  message.reply(`Der is geen rol met de naam "${roleName}"`)
		  return
		}
	
		const member = guild.members.cache.get(targetUser.id)
		member.roles.add(role)
	
		message.reply(`Deze gebruiker heeft nu de "${roleName}" role`)
	  }
	}

     
    

    

module.exports = giverole;