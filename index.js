require("http").createServer((req, res) => res.end(process.version)).listen()

const Discord = require('discord.js')
const client = new Discord.Client({ intents: 32767 })

const prefix = '.'

client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`))

client.on('message', async msg => {
  if (msg.startsWith(prefix)) {
    const params = msg.content.slice(prefix.length).trim().split(/ +/)
    const command = params.shift().toLowerCase()
    console.log(command)
    console.log(params)
  }
})

const TOKEN = process.env['TOKEN']
client.login(TOKEN)