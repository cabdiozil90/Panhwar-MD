const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ PANHWAR ᴍᴅ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ Ansar Panhwar*

*┌─〈 ${config.BOT_NAME} 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*❖│▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *Panhwar Mᴅ*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *PROxANSAR*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*┬│▸*
*│╰────────────···▸▸*
*└──────────────···▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*

*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
*┋* *.ғʙ <ᴜʀʟ>*
*┋* *.ɪɴꜱᴛᴀ <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋* *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋* *.ᴛᴛ<ᴜʀʟ>*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋* *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*┋* *.ᴘʟᴀʏ <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.ɪᴍɢ <ϙᴜᴇʀʏ>*
*┋* *.ᴀᴘᴋ <ɴᴀᴍᴇ>*
*┋* *.ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*
*┋* *.ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-CMD 🔍* *❒⁠⁠⁠⁠* 
*┋* *.ʏᴛꜱ  <ᴛᴇxᴛ>*
*┋* *.ʟᴏʟɪ <ᴛᴇxᴛ>*
*┋* *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
*┋* *.ɪᴍɢ <ᴛᴇxᴛ>*
*┋* *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🧠 AI-CMD 🧠* *❒⁠⁠⁠⁠* 
*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-CMD 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *👥 GROUP-CMD 👥* *❒⁠⁠⁠⁠* 
*┋* *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *📃 INFO-CMD 📃* *❒⁠⁠⁠⁠* 
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-CMD 🎡* *❒⁠⁠⁠⁠* 
*┋* *.sᴛɪᴄᴋᴇʀ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-CMD ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.ᴋɪɴɢ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-CMD 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.ɪᴍɢ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🌐 OTHER-CMD 🌐* *❒⁠⁠⁠⁠* 
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ᴍᴏᴠɪᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*┕───────────────────❒*


*╭────❒⁠⁠⁠⁠* *🪲 BUGS-CMD 🐛* *❒⁠⁠⁠⁠* 
*┋* *.BUG*
*┋* *.BUG*
*┋* *.BUG*
*┋* *.BUG*
*┋* *.BUG*
*┋* *.BUG*
*┕───────────────────❒*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

┏━━━━━━━━━━━━━━━━━━━
*https://whatsapp.com/channel/0029ValASu1IN9ifummBKW1U*
┗━━━━━━━━━━━━━━━━━━━


> *POWERED BY PANHWAR MD*
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
