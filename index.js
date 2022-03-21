const Discord = require("discord.js")

const TOKEN = "OTQ4MjY5MjU0MzA4OTQxODI0.Yh5WkA.Gp5PUrVwJTYXoCnIZkUj03HamMo"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "is mel a shawty?"){
        message.reply("Yeah ;))")
    }
})

client.login(TOKEN)