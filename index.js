const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "yb!"

client.on('ready', () => {
  client.user.setGame('yb!help and more ', 'https://www.twitch.tv/csruhub')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('YonlyBOT(beta) INFO')
    .setDescription(`•prefix --> yb!
:beginner:YonlyBOT COMMANDS:zap:
• || yb!mass 
  || yb!support 
  || yb!info 
  || yb!say 
  || yb!ping 
  || yb!serverinfo 
  || yb!restart 
  || yb!invite 
  || yb!botinfo  
  || yb!assistance
  || yb!botmode
  || yb!buybot
  ||
  power by yonly (update 03.07.2018)`)
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '300268467322486785') {
    if (message.content.startsWith(`yb!restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor('RANDOM')
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'botinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('BOT INFO')
  embed.addField('Name', 'YonlyBOT(beta)', true)
  embed.addField('Prefix', 'yb!', true)
  embed.addField('Tag:', '6777', true)
  embed.addField('Created at:', '2018-06-13 12:52:59.660000', true)
  embed.addField('ID', '300268467322486785', true)
  embed.addField('Made with:', 'Node')
  embed.addField('Creator', '@Yonly#4995', true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});    
   
  client.on('message', message => {    
    if(message.content.startsWith('e!mass')) {
    if(message.author.id === "300268467322486785" ||
message.author.id === "405337137735663618"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === 'yb!invite') {
      msg.channel.send('Invite **YonlytBOT** https://discordapp.com/api/oauth2/authorize?client_id=463697410707816448&permissions=0&scope=bot  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === 'yb!support') {
      msg.channel.send('support server ---> https://discord.gg/2vwmHNm');
    }
  });

client.on('message', msg => {
    if (msg.content === 'yb!assistance') {
      msg.channel.send('SCRIPTER YONLY ---> @Yonly#4995');
    }
  });
  
client.on('message', msg => {
    if (msg.content === 'yb!botmode') {
      msg.channel.send('This bot is in (beta) mode to review scratches and modify them! #SCRIPTERYONLY!');
    }
  });
    
client.on('message', msg => {
    if (msg.content === 'yb!buybot') {
      msg.channel.send('You can now buy a special bot for you! We accept any order made through PayPal, PaySafeCard, TasumakiCredits! CONTACT @ Yonly # 4995!');
    }
  });
  
client.on('message', msg => {
    if (msg.content === 'yb!info') {
      msg.channel.send('creatorul meu este : @Yonly#4995');
    }
  });

client.on('guildMemberAdd', member => {
    var joinrole = member.guild.roles.find('name', '✅MEMBER');
    member.addRole(joinrole);
    let channel  = member.guild.channels.find('name', 'log-server🤗');
    let memberavatar  = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', `**:v: Bine ai venit pe YonlyServerRo-comunity!:smiley: :heavy_check_mark:**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'log-server🤗');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Bye -', `**A iesit :sob:... Speram sa te mai intorci pe la noi ... Esti mereu bine venit**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.TOKEN);
