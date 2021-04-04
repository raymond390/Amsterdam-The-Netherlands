const Command = require("../../base/Command.js"),
	Discord = require("discord.js")

class groep extends Command {

	constructor (client) {
		super(client, {
			name: "groep",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "group" ],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	

	async run (message, args, data) {
		const politie = ("https://www.roblox.com/groups/5682838/politie-assendelft#!/about")
		const ambu = ("https://www.roblox.com/groups/5870708/Ambulance-Assendelft#!/about")
		const brw = ("https://www.roblox.com/groups/5968696/BrandWEERc#!/about")
		const dsi = ("https://www.roblox.com/groups/5957072/DSI-NL#!/about")
		const kmar = ("https://www.roblox.com/groups/5957394/KMar-Assendelft#!/about")
		const gm = ("https://www.roblox.com/groups/5630137/Gemeente-Assendelft")
		const vp = ("https://www.roblox.com/groups/8553748/Dienst-Verkeers-Politie#!/about")
		const rkw = ("https://www.roblox.com/groups/6131079/Rijkswaterstaat-l-Assendelft#!/about")
	

        const embed = new Discord.MessageEmbed()
        .setTitle(":rotating_light: Amsterdam The Netherlands Groepen :rotating_light:")
		

		.setDescription(`[\`Politie\`](${politie})\n[\`Ambulance\`](${ambu})\n[\`Brandweer\`](${brw})\n[\`Dienst speciale interventie\`](${dsi})\n[\`Koninklijke Marechaussee\`](${kmar})\n[\`Verkeers Politie\`](${vp})\n[\`Rijkswaterstaat\`](${rkw})\n[\`Gemeente\`](${gm})`)
		
      .setTimestamp()

        message.channel.send(embed);
        
   
    
    }
}
    module.exports = groep;