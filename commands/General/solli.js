const Command = require("../../base/Command.js"),
	Discord = require("discord.js")

class solli extends Command {

	constructor (client) {
		super(client, {
			name: "sollicitatie",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "solli" ],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message, args, data) {
        
const categoryID = "804717995569446942";
var staff = "790291727889858570";
var person = message.author;

var userName = message.author.username;
var userDiscriminator = message.author.discriminator;

var ticketBestaat = false;

message.guild.channels.cache.forEach(channel => {



});

if (ticketBestaat) return;

const embed = new Discord.MessageEmbed()
    .setTitle("Hoi " + message.author.username)
    .setFooter("Sollicitatie kanaal wordt aangemaakt")
    .setColor(data.config.embed.color);

message.channel.send(embed);

message.guild.channels.create(userName.toLowerCase()+ "- sollicitatie", { type: 'text' }).then(
    (createdChannel) => {
        createdChannel.setParent(categoryID).then(
            (settedParent) => {

                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                });

                settedParent.updateOverwrite(message.author.id, {
                    CREATE_INSTANT_INVITE: false,
                    READ_MESSAGES: true,
                    SEND_MESSAGES: true,
                    ATTACH_FILES: true,
                    CONNECT: true,
                    ADD_REACTIONS: true,
                    VIEW_CHANNEL: true,
                    READ_MESSAGE_HISTORY: true
                });

            const embedParent = new Discord.MessageEmbed()
                .setTitle("Hoi" +  message.author.username)
                .setColor("#00BFFF")
                .setDescription("Hier is u Sollictatie ")
                .setColor(data.config.embed.color);
                

            const vraag0 = new Discord.MessageEmbed()
            .setTitle("sollicitatie vraag 1")
            .setColor("#00BFFF")
            .setDescription("Wat is je Roblox naam?")
            .setColor(data.config.embed.color);
            
            const vraag1 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 2")
                .setColor("#00BFFF")
                .setDescription("Hoe oud bent u?")
                .setColor(data.config.embed.color);    
            
            const vraag2 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 3")
                .setColor("#00BFFF")
                .setDescription("Waarom wilt u HR worden bij Maastricht?")
                .setColor(data.config.embed.color); 
                
            const vraag3 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 4")
                .setColor("#00BFFF")
                .setDescription("Wat is uw motivatie? (minimaal 75 woorden)")
                .setColor(data.config.embed.color); 
            
            const vraag4 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 5")
                .setColor("#00BFFF")
                .setDescription("Hoeveel trainingen gaat u per week kunnen geven?")
                .setColor(data.config.embed.color);
            
            const vraag5 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 6")
                .setColor("#00BFFF")
                .setDescription("Hoe gaat u de trainingen geven?")
                .setColor(data.config.embed.color); 

            const vraag6 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 7")
                .setColor("#00BFFF")
                .setDescription("Heeft u al ervaring?")
                .setColor(data.config.embed.color); 

            const vraag7 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 8")
                .setColor("#00BFFF")
                .setDescription("Wat is AA?")
                .setColor(data.config.embed.color);

            const vraags = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 9")
                .setColor("#00BFFF")
                .setDescription("Wat gaat u doen als je een HR ziet abusen?")
                .setColor(data.config.embed.color);

            const vraag8 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 10 ")
                .setColor("#00BFFF")
                .setDescription("Wat gaat u doen als je een HC ziet abusen?")
                .setColor(data.config.embed.color);

            const vraag9 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 11")
                .setColor("#00BFFF")
                .setDescription("Wat gaat u doen als een speler met kkr scheld?")
                .setColor(data.config.embed.color)

            const vraag10 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 12")
                .setColor("#00BFFF")
                .setDescription("Wat gaat u doen als een speler met k*t scheld?")
                .setColor(data.config.embed.color);
                
            const vraag11 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 13")
                .setColor("#00BFFF")
                .setDescription("Gaat u luisteren als een hogere rank je aanspreekt?")
                .setColor(data.config.embed.color);

            const vraag12 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 14")
                .setColor("#00BFFF")
                .setDescription("Gaat u een hogere aanspreken?")
                .setColor(data.config.embed.color);

                const vraag13 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 15")
                .setColor("#00BFFF")
                .setDescription("Bij welk team wilt u Moderator worden?")
                .setColor(data.config.embed.color);
                
                const vraag14 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 16")
                .setColor("#00BFFF")
                .setDescription("Noem minimaal 3 begrippen op van uw dienst, geen Prio's.")
                .setColor(data.config.embed.color);
                
                const vraag15 = new Discord.MessageEmbed()
                .setTitle("sollicitatie vraag 17")
                .setColor("#00BFFF")
                .setDescription("Ga jij je gedragen?")
                .setColor(data.config.embed.color);   

                settedParent.send(message.author.id);
                settedParent.send(embedParent);
                settedParent.send(vraag0);


                settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                    var antwoord0 = antwoord.first();;
                    settedParent.send(vraag1);

                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                     var antwoord1 = antwoord.first();;
                     settedParent.send(vraag2);

                     settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                         var antwoord2 = antwoord.first();;
                         settedParent.send(vraag3);

                         settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                             var antwoord3 = antwoord.first();;
                             settedParent.send(vraag4);

                             settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                 var antwoord4 = antwoord.first();;
                                 settedParent.send(vraag5);

                                 settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                     var antwoord5 = antwoord.first();;
                                     settedParent.send(vraag6);

                                     settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                        var antwoord6 = antwoord.first();;
                                        settedParent.send(vraag7);
                                        
                                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                            var antwoord7 = antwoord.first();;
                                            settedParent.send(vraags);

                                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                var antwoord8 = antwoord.first();;
                                                settedParent.send(vraag8);
                                     
                                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                    var antwoord9 = antwoord.first();;
                                                    settedParent.send(vraag9);

                                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                        var antwoord10 = antwoord.first();;
                                                        settedParent.send(vraag10);

                                                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                            var antwoord11 = antwoord.first();;
                                                            settedParent.send(vraag11);

                                                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                                var antwoord12 = antwoord.first();;
                                                                settedParent.send(vraag12);

                                                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                                    var antwoord13 = antwoord.first();;
                                                                    settedParent.send(vraag13);

                                                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                                        var antwoord14 = antwoord.first();;
                                                                        settedParent.send(vraag14);

                                                                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                                            var antwoord15 = antwoord.first();;
                                                                            settedParent.send(vraag15);

                                                                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                                                var antwoord16 = antwoord.first();;
                                                                            
                                                        
                                                            
                                                

                                     

                                     const uitkomst = new Discord.MessageEmbed()
                                     .setTitle("Bedankt voor het solliciteren")
                                     .setColor(data.config.embed.color)
                                     .setTimestamp()
                                     .setDescription(`**Wat is je Roblox naam?**: \n${antwoord0}\n\n**Hoe oud bent u?**: \n${antwoord1}\n\n** Waarom wilt u HR worden bij Maastricht?**: \n${antwoord2}\n\n**Wat is uw motivatie? (minimaal 75 woorden)**: \n${antwoord3}\n\n**Hoeveel trainingen gaat u per week kunnen geven?**:\n${antwoord4}\n\n**Hoe gaat u de trainingen geven?**: \n${antwoord5}\n\n**heeft u al ervaring**: \n${antwoord6}\n\n**Wat is AA?**\n${antwoord7}\n\n**Wat gaat u doen als je een HR ziet abusen?**\n${antwoord8}\n\n**Wat gaat u doen als je een HC ziet abusen?**\n${antwoord9}\n\n**Wat gaat u doen als een speler met kkr scheld?**\n${antwoord10}\n\n**Wat gaat u doen als een speler met k*t scheld?**\n${antwoord11}\n\n**Gaat u luisteren als een hogere rank je aanspreekt?**\n${antwoord12}\n\n**Gaat u een hogere aanspreken?**\n${antwoord13}\n\n**Bij welk team wilt u Moderator worden?**\n${antwoord14}\n\n**Noem minimaal 3 begrippen op van uw dienst, geen Prio's.**\n${antwoord15}\n\n**Ga jij je gedragen?**\n${antwoord16}`)

                                     settedParent.bulkDelete(34).then(
                                         settedParent.send(uitkomst)
                                     )
                                 })
                             })
                         })
                     })
                 })
             })     
         })

    })
  })
})
})
})
})
})
})
})
                })

            }
            
        ).catch(err => {
            message.channel.send("Er is iets misgelopen");
        });
    }
).catch(err => {
    message.channel.send("Er is iets misgelopen");
});
}
}

module.exports = solli;
