require("./helpers/extenders");

const Sentry = require("@sentry/node"),
	util = require("util"),
	fs = require("fs"),
	readdir = util.promisify(fs.readdir),
	mongoose = require("mongoose"),
	chalk = require("chalk");
	Discord = require('discord.js')
const config = require("./config");
if(config.apiKeys.sentryDSN){
	try {
		Sentry.init({ dsn: config.apiKeys.sentryDSN });
	} catch (e) {
		console.log(e);
		console.log(chalk.yellow("Looks like your Sentry DSN key is invalid. If you do not intend to use Sentry, please remove the key from the configuration file."));
	}
}

// Load Atlanta class
const Atlanta = require("./base/Atlanta"),
	client = new Atlanta();

const init = async () => {

	// Search for all commands
	const directories = await readdir("./commands/");
	client.logger.log(`Loading a total of ${directories.length} categories.`, "log");
	directories.forEach(async (dir) => {
		const commands = await readdir("./commands/"+dir+"/");
		commands.filter((cmd) => cmd.split(".").pop() === "js").forEach((cmd) => {
			const response = client.loadCommand("./commands/"+dir, cmd);
			if(response){
				client.logger.log(response, "error");
			}
		});
	});

	// Then we load events, which will include our message and ready event.
	const evtFiles = await readdir("./events/");
	client.logger.log(`Loading a total of ${evtFiles.length} events.`, "log");
	evtFiles.forEach((file) => {
		const eventName = file.split(".")[0];
		client.logger.log(`Loading Event: ${eventName}`);
		const event = new (require(`./events/${file}`))(client);
		client.on(eventName, (...args) => event.run(...args));
		delete require.cache[require.resolve(`./events/${file}`)];
	});
    
	client.login(process.env.token); // Log in to the discord api

	// connect to mongoose database
	mongoose.connect(client.config.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
		client.logger.log("Connected to the Mongodb database.", "log");
	}).catch((err) => {
		client.logger.log("Unable to connect to the Mongodb database. Error:"+err, "error");
	});

	const languages = require("./helpers/languages");
	client.translations = await languages();
    
	const autoUpdateDocs = require("./helpers/autoUpdateDocs.js");
	autoUpdateDocs.update(client);

};

init();


client.on('messageDelete', message => {
    if (message.channel.type == 'text') {
      var logger = message.member.guild.channels.cache.find(channel => channel.name === "logs");
      if (logger) {
		const embed = new Discord.MessageEmbed()
          .setTitle('Bericht Verwijdert')
          .addField('Persoon', message.author.username)
          .addField('Bericht', message.cleanContent)
          .addField("Locatie", message.channel)
          .setThumbnail(message.author.avatarURL)
          .setColor('0x00AAFF');
        logger.send({ embed });
      }
    }
  });

   client.on("messageUpdate", async(oldMessage, newMessage) =>{
	if(oldMessage.content === newMessage.content){
		return;
	}

	const logembed = new Discord.MessageEmbed()
	.setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
	.setThumbnail(oldMessage.author.avatarURL)
	.setDescription("Een bericht is berwerkt")
	.addField("Voor", oldMessage.content, true)
	.addField("Na", newMessage.content, true)
	.addField("Locatie",newMessage.channel)
	.setTimestamp()
	.setColor('0x00AAFF');

	
	let loggingChannel = newMessage.member.guild.channels.cache.find(channel => channel.name === "logs");
	if(!loggingChannel) return;

	loggingChannel.send(logembed)

  })

client.on('ready', () => {
	var logger = client.channels.cache.get('735815032029315192');
      if (logger) {
		const embed = new Discord.MessageEmbed()
          .setTitle('Systeem Herstart')
		  .setDescription("De bot is opnieuw opgestart door de Bot\ndeveloper of automatisch\n\n zijn er problemen meld het dan bij **Raymond#1362**")
          .setColor('#265491');
        logger.send({ embed });
      }
    }
  );

const channelName = "🔒 Prive 1"
  


  const getVoiceChannels = (guild) => {
	return guild.channels.cache.filter((channel) => {
	  return channel.type === 'voice' && channel.name === channelName
	})
  }

  client.on('voiceStateUpdate', (oldState, newState) => {
    const { guild } = oldState
    const joined = !!newState.channelID

    const channelId = joined ? newState.channelID : oldState.channelID
    let channel = guild.channels.cache.get(channelId)

    console.log(
      `${newState.channelID} vs ${oldState.channelID} (${channel.name})`
    )

    if (channel.name === channelName) {
      if (joined) {
        const channels = getVoiceChannels(guild)

        let hasEmpty = false

        channels.forEach((channel) => {
          if (!hasEmpty && channel.members.size === 0) {
            hasEmpty = true
          }
        })

        if (!hasEmpty) {
          const {
            type,
            userLimit,
            bitrate,
            parentID,
            permissionOverwrites,
            rawPosition,
          } = channel

          guild.channels.create(channelName, {
            type,
            bitrate,
            userLimit,
            parent: parentID,
            permissionOverwrites,
            position: rawPosition,
          })
        }
      } else if (
        channel.members.size === 0 &&
        getVoiceChannels(guild).size > 1
      ) {
        channel.delete()
      }
    } else if (oldState.channelID) {
      channel = guild.channels.cache.get(oldState.channelID)
      if (
        channel.name === channelName &&
        channel.members.size === 0 &&
        getVoiceChannels(guild).size > 1
      ) {
        channel.delete()
      }
    }
  })

// if there are errors, log them
client.on("disconnect", () => client.logger.log("Bot is disconnecting...", "warn"))
	.on("reconnecting", () => client.logger.log("Bot reconnecting...", "log"))
	.on("error", (e) => client.logger.log(e, "error"))
	.on("warn", (info) => client.logger.log(info, "warn"));

// if there is an unhandledRejection, log them
process.on("unhandledRejection", (err) => {
	console.error(err);
});
