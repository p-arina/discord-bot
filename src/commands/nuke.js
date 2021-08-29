const Command = require("../Structures/Command.js");

const Discord = require('discord.js')

module.exports = new Command({
	name: "nuke",
	description: "nuke the channel!",
    async run(message, args, client) {
        if(!message.member.permissions.has('MANAGE_CHANNELS')) return;
        if(!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply("<a:770262897493540904:881013400942022687> You don't have the permissions for this!")

        message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id)
            ch.setPosition(message.channel.position);
            message.channel.delete();

            ch.send("NUKED MUAHAHAHHAHA <a:809836850852266044:881013400803614751>")
        })


	}
});