const Command = require("../../base/Command.js");

class addball extends Command {

	constructor (client) {
		super(client, {
			name: "addball",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["addbalance"],
			memberPermissions: ["ADMINISTRATOR"],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 10000
		});
	}

	async run (message, args, data) {

		const member = message.author.id
	
		
		const sentAmount = args[0];
		

		const amount = Math.ceil(parseInt(sentAmount, 10));



		data.memberData.money = data.memberData.money + parseInt(amount, 10);
		data.memberData.save();

	

		// Send a success message
		message.success("bedrag op rekening gezet", {
			amount,
			username: message.author.tag
		});

	}

}

module.exports = addball; 