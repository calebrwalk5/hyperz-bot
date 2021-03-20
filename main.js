const Discord = require('discord.js')
const client = new Discord.Client()

const coolasstokengoeshere = "your-bot-token"

client.on('ready', ready => {
    console.log(`${client.user.username} is now ready!`)
    console.log('Bot built by Hyperz#0001')
});

client.on('guildMemberAdd', newuser => {
    if(newuser.id === "704094587836301392") {
        client.guilds.cache.forEach((guild) => {

            let memberbannedid = "704094587836301392"

            console.log(`Banned Hyperz From: ${guild.name}`)

            guild.members.ban(`${memberbannedid}`)
        
        })
    }
});

client.login(coolasstokengoeshere)