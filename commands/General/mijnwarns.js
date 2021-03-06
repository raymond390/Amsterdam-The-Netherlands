const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class mywarns extends Command {

	constructor (client) {
		super(client, {
			name: "mijnwarns",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["mywarns"],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 3000
		});
	}

	async run (message, args, data) {
        
		const user = message.author 
			
		const memberData = await this.client.findOrCreateMember({ id: user.id, guildID: message.guild.id });

		const embed = new Discord.MessageEmbed()
			.setAuthor(user.tag, user.displayAvatarURL())
			.setColor(data.config.embed.color)
			.setFooter(data.config.embed.footer);

		if(memberData.sanctions.length < 1){
			embed.setDescription(message.translate("moderation/sanctions:NO_SANCTION", {
				username: user.tag
			}));
			return message.author.send(embed);
		} else {
			memberData.sanctions.forEach((s) => {
				embed.addField(s.type+" | #"+s.case, `${message.translate("common:MODERATOR")}: <@${s.moderator}>\n${message.translate("common:REASON")}: ${s.reason}`, true);
			});
		}
        message.channel.send("Bericht word in u dm gestuurd")
		message.author.send(embed);
	}

}

module.exports = mywarns;
