const Command = require("../../base/Command.js"),
	Discord = require("discord.js");
const { blacklistedWords } = require("../../models/blacklist");

class ticket extends Command {

	constructor (client) {
		super(client, {
			name: "blacklist",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "bl"],
			memberPermissions: [],
			botPermissions: [ "MANAGE_GUILD" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {
const {blacklistedWords} = require('../../collection')
const Schema = require('../../models/blacklist');





if(!message.member.permissions.has('ADMINISTRATOR')) return;

        const command = args[0]
        const guild = { Guild: message.guild.id}
        if(command === 'add') {
            const word = args[1]?.toLowerCase();
            if(!word) return message.channel.send('Specifiseer een word')
            
            Schema.findOne(guild, async (err, data) => {
                if (data) {
                    if (data.Words.includes(word))
                    return message.reply(
                        "dat woord zit al in de data base"
            );
                    data.Words.push(word);
                    data.save();
                    blacklistedWords.get(message.guild.id).push(word);
                } else {
                new Schema({
                    Guild: message.guild.id,
                    Words: word
                }).save();
            
                blacklistedWords.set(message.guild.id, [ word ])
            

            }
            message.reply(`${word} is nu blacklisted!`);
        });


        } else if(command === 'remove') {
            const word = args[1]?.toLowerCase();
            if(!word) return message.channel.send('Specifiseer een word')
            
            Schema.findOne(guild, async (err, data) => {
                if(!data) return message.reply('De server heeft geen data in de server');

                if(!data.Words.includes(word)) return message.channel.send('Dat woord bestaat niet')

                const filtered = data.Words.filter((target) => target !== word);

                await Schema.findOneAndUpdate(guild, {
                    Guild: message.guild.id,
                    Words: filtered
                })

                blacklistedWords.get(message.guild.id).filter(
                    (target) => target !== word)

        });
        message.reply("Woord is verwijdert");

        } else if(command === 'display') {
            Schema.findOne(guild, async(err, data) => {
                if(!data) return message.reply('er is geen data');
                     message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle(`Blacklist woorden`)
                    .setDescription(data.Words.join(', '))
	                .setColor(data.config.embed.color)
                )
            })
        } else if(command === 'blacklistedWords') {
            const getblacklistedWords = blacklistedWords.get(message.guild.id);
            if (getblacklistedWords)
                return message.channel.send(getblacklistedWords, { code: "js"});
            message.channel.send("geen data");
        } else return message.channel.send("Die command bestaat niet!")

    }


};
module.exports = ticket;