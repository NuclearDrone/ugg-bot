require('dotenv').config()
const Discord = require('discord.js')
const token = process.env.TOKEN
const client = new Discord.Client()

client.on('ready', () => {
  console.log('Bot online')
  client.user.setPresence({
    status: 'online',
    game: {
      name: 'me getting developed',
      type: 'WATCHING'
    }
  })
})
client.on('message', async (message) => {
  const prefix = '/u.gg'
  const msg = message.content
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  if(msg.startsWith(prefix)) {
    if (msg === prefix) {
      try {
        await message.channel.send('Help command')
      } catch (e) {
        console.error(e)
      }
    }
    switch (args[0]) {
      case 'build':
        if(args.length === 3) {
          const reply = `Heres your ${args[2]} build for ${args[1]}! https://u.gg/lol/champions/${args[1]}/build?role=${args[2]}`
          await message.channel.send(reply)
        }
        if(args.length === 2) {
          const reply = `Heres your build for ${args[1]}! https://u.gg/lol/champions/${args[1]}/build`
          await message.channel.send(reply)
        }
        break;
    
      default:
        return
    }
  }
})

client.login(token)