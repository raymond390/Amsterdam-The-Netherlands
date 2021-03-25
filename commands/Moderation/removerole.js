const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class removerole extends Command {

	constructor (client) {
		super(client, {
			name: "verwijderrole",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["removerole"],
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
		  message.reply('specificeer iemand ')
		  return
		}
	
		args.shift()
	
		const roleName = args.join(' ')
		const { guild } = message
	
		const role = guild.roles.cache.find((role) => {
		  return role.name === roleName
		})
		if (!role) {
		  message.reply(`Er is geen rol met de naam "${roleName}"`)
		  return
		}
	
		const member = guild.members.cache.get(targetUser.id)
	
		if (member.roles.cache.get(role.id)) {
		  member.roles.remove(role)
		  message.reply(`Deze gebruiker heeft de  ${roleName} role niet meer`)
		} else {
		  message.reply(`Deze gebruiker heeft de role ${roleName} niet!`)
		}
	  }
	}    
    

    

module.exports = removerole;