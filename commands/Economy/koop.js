const Command = require("../../base/Command.js");


class koop extends Command {

	constructor (client) {
		super(client, {
			name: "koop",
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
const inventory = require("../../models/inv");
const items = require("../../shoplist");
let member = await this.client.resolveMember(args[0], message.guild);
if(!member) member = message.member;
const user = member.user;




        if(!args[0]) return message.channel.send("Speceificeer een item!");
        const itemToBuy = args[0].toLowerCase();

        const validItem = !!items.find((val) => val.item.toLowerCase() === itemToBuy);
        if(!validItem) return message.reply('Dit item bestaat niet');

        const itemPrice = items.find((val) => (val.item.toLowerCase()) === itemToBuy).price;

        const userBalance =  (data.memberData.money);
        if (userBalance < itemPrice)
        return message.reply(
            `Je hebt maar ${data.memberData.money} credits de prijs van dit item is ${itemPrice} credits! Je moet het geld contant hebben`

        );
            const params = {
                Guild: message.guild.id,
                User: message.author.id
            }
        inventory.findOne(params, async(err, data) => {
            if (data) {
            const hasItem = Object.keys(data.Inventory).includes(itemToBuy);
            if (!hasItem) {
                data.Inventory[itemToBuy] = 1;
            } else {
                data.Inventory[itemToBuy]++;
            }
            console.log(data);
            await inventory.findOneAndUpdate(params, data);
        } else {
            new inventory({
            Guild: message.guild.id,
            User: message.author.id,
            Inventory: {
                [itemToBuy]: 1, 
            },
            }).save();

            

        } 
        
    });
    
    message.reply(`je hebt een ${itemToBuy} gekocht`);
    data.memberData.money = data.memberData.money - itemPrice;
    data.memberData.save();

    }
}

module.exports = koop; 