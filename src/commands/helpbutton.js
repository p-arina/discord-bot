const Command = require("../Structures/Command.js");
const { pagination } = require("reconlx");
const Discord = require("discord.js");

module.exports = new Command({
	name: "help",
	description: "little pages",

	async run(message, args, client) {
        const embed1 = new Discord.MessageEmbed()
        .setTitle('૮₍ ˃ ⤙ ˂ ₎ა ˖⁺♡  **helpdesk**')
        .setDescription(`#%how may i help u ?
        
        ⁺ .つ 🍮﹕__*page 1*__,, 
        > commands

        ╰╮︰🌿﹕__*page 2*__,, 
        > moderation

        ꮺ︰🐇﹕__*page 3*__,, 
        > fun commands
        
        ❁︰press the buttons below to *navigate*`)
        .setColor('#ffb3b3');
        const embed2 = new Discord.MessageEmbed().setTitle("✦ 𓂃 commands 🜸 ! ")
        .setDescription(`:basket:˒ % __*nuke*__
        > delete all current channel's messages
        *permissions required*,, ~~everyone~~, ~~mod~~, **admin**
        
        ❛❛🍙♡︰__*ping*__ˎˊ˗
        > shows bot + client ping
        *permissions required*,, **everyone**, **mod**, **admin**
        
        ୨🍵★◞__*help*__
        > command you're using now
        *permissions required*,, **everyone**, **mod**, **admin**
        
        ❁︰press the buttons below to navigate`)
        .setColor('#ffb3b3');
        const embed3 = new Discord.MessageEmbed().setTitle("𓂃★ __[moderation]__・✦")
        .setDescription(`wip
        kick, ban, purge, role, addrole, welcomemsg,`)
        .setColor('#ffb3b3');
        const embed4 = new Discord.MessageEmbed().setTitle("fun")
        .setImage("https://cdn.discordapp.com/attachments/737079998678171731/881397348331298867/cat-orange-orange-cat.gif")
        .setDescription(``)
        .setColor('#ffb3b3');

        const embeds = [embed1, 
            embed2, 
            embed3, 
            embed4
        ];

        pagination({
            embeds: embeds,
            channel: message.channel,
            author: message.author,
            time: 30000,
            fastSkip: true,
        });
	}
});