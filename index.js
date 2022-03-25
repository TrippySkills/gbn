const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "!info"){
        message.reply("Nothing much right now. Still in development and developments going well!")
    }
})

const welcomeChannelId = "956602407062757437"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `Let's give a warm welcome to <@${member.id}>!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)