/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "hello",
	description: "Hello!",

	async run(message, args, client) {
		message.reply("omg hiiiiii <a:809836713442017280:881013399201390673>");
	}
});
