const Command = require("../../base/Command.js"),
	Discord = require("discord.js"),
	

class loop extends Command {

	constructor (client) {
		super(client, {
			name: "loop",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: [],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 5000
		});
	}

	async run (message, args, data) {
    const serverQueue =  this.client.player.getQueue(message);
    
if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
if(!serverQueue) return msg.channel.send('Not playing anything right now');
if(serverQueue.voiceChannel.id !== msg.member.voiceChannel.id) return msg.channel.send(`You must be in **${serverQueue.voiceChannel.name}** to loop the queue`);
serverQueue.loop = !serverQueue.loop;
client.queue.set(msg.guild.id, serverQueue);
if(serverQueue.loop) return msg.channel.send('**🔁 Repeated current queue!**');
return msg.channel.send('**🔁 Unrepeated current queue!**');
}
}
module.exports = loop;