/** @format */

console.clear();

const Client = require("./Structures/Client.js");

const Command = require("./Structures/Command.js");

const config = require("./Data/config.json");

const client = new Client();

const fs = require("fs");

const cooldown = new Set();

fs.readdirSync("./src/Commands")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {Command}
		 */
		const command = require(`./Commands/${file}`);
		console.log(`Command ${command.name} loaded`);
		client.commands.set(command.name, command);
	});
	const arrayOfStatus = [
		'meow',
		'mew',
		'purrrr',
		'meowww',
		':p'
	]
	
	client.on("ready", () => console.log("Bot is ready!"))
		setInterval(() => {
			client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], type: "WATCHING" })
		}, 3000);

client.on("messageCreate", message => {
	if (message.author.bot) return;

	if (!message.content.startsWith(config.prefix)) return;

	if(cooldown.has(message.author.id)) {
		message.reply('Please wait 5 seconds! <a:770262897493540904:881013400942022687>')
	} else {
		
	const args = message.content.substring(config.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`__${args[0]}__ is not a valid command! <a:770262897493540904:881013400942022687>`);

	command.run(message, args, client);
	}
	cooldown.add(message.author.id);
	setTimeout(() => {
		cooldown.delete(message.author.id)
	}, 10000);

});


client.login(config.token);
