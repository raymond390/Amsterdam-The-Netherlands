const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class rank extends Command {

	constructor (client) {
		super(client, {
			name: "rank",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: [],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 10000
		});
	}

	async run (message, args, data) {
        
const canvaCord = require('canvacord')
const fs = require('fs')

const level = parseInt(data.memberData.level);

        const levelFile = data.memberData.level;

        const member = message.member.id;

        var nextLevelXP = 5 * (level * level) + 80 * level + 100;

        if (nextLevelXP == 0) nextLevelXP = 100;

        if(levelFile) {

            const rank = new canvaCord.Rank()
            .setAvatar(message.author.displayAvatarURL({dynamic: false, format: 'png'}))
            .setCurrentXP(data.memberData.exp)
            .setLevel(levelFile)
            .setRequiredXP(nextLevelXP)
            .setStatus(message.author.presence.status)
            .setProgressBar("#FFA500", 'COLOR' )
            .setUsername(message.author.username)
            .setDiscriminator(message.author.discriminator)

            rank.build().then(data => {
                const attachment = new Discord.MessageAttachment(data, "amsterdam.png")
                message.channel.send(attachment);
            })
        }
        
 



    }
}

module.exports = rank; 