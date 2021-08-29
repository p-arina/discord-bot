const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "cat",
	description: "cute cat images",

	async run(message, args, client) {
        images = [
    "https://media2.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://c.tenor.com/uzWDSSLMCmkAAAAM/cute-cat-oh-yeah.gif",
    "https://i.pinimg.com/originals/25/89/d8/2589d8a0607358fc4f2678fb7fcd71c3.gif",
    "https://i.pinimg.com/originals/fd/6c/07/fd6c079e840fb1fe34e91856bb5d2b0d.gif",
    "https://executiveponies.files.wordpress.com/2017/03/funny-cat-gifs13.gif?w=479"
]
const cat = new Discord.MessageEmbed()
.setColor("#ffb3b3")
.setImage(images[Math. floor(Math. random()*images. length)])
.setTitle(':smirk_cat:')
.setFooter('Awww! How cute', 'https://media.discordapp.net/attachments/866900609083637771/874789891282702396/image4.gif')
.setTimestamp();
message.reply({ embeds: [cat] });
    }
});

