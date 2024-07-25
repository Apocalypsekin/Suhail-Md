const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/59a5d065af38e5b2e3a7a.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_32_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4LFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgODUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExLFxuICAgICAgICA3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9lWkdGQWRUbFpBTmpzRm1lVWJJcHhGNEJwWjdxdWRGeFU1YTRNSkZxSTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjY5NDMxMzcyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUQxODZCMkNBNkIxQ0ZCMzU1NTc4RjZGMkUwN0FFQzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODQ1MzYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjY5NDMxMzcyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjlEOTA1QUFFNUQ4RjVCODJDNjUzM0Q3MTI2MkEyQzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODQ1MzYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjR4X2cxbFktU0xxcFg1NW5zQjhvbHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGNiMTVkNGUtZWMzMC00MDY4LThkYTItNTQ1NGU0NjgxOGI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgODgsXG4gICAgICAxMDQsXG4gICAgICAxNjgsXG4gICAgICA2MSxcbiAgICAgIDEzMixcbiAgICAgIDIyMixcbiAgICAgIDI2LFxuICAgICAgMTgxLFxuICAgICAgMCxcbiAgICAgIDEwNCxcbiAgICAgIDE3MCxcbiAgICAgIDQ0LFxuICAgICAgMTI5LFxuICAgICAgNyxcbiAgICAgIDE3OCxcbiAgICAgIDIzNCxcbiAgICAgIDk3LFxuICAgICAgMixcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMSxcbiAgICAgIDEzLFxuICAgICAgMTE3LFxuICAgICAgMTMxLFxuICAgICAgMTM1LFxuICAgICAgMjIxLFxuICAgICAgMjQzLFxuICAgICAgMjQ1LFxuICAgICAgMTE3LFxuICAgICAgMTIyLFxuICAgICAgNyxcbiAgICAgIDc0LFxuICAgICAgMTg1LFxuICAgICAgMTQsXG4gICAgICAxOTYsXG4gICAgICAxNTAsXG4gICAgICAyMCxcbiAgICAgIDc5LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTdUUUE4NjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2OTQzMTM3Mjk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY3NjAyOTc4NTU4MDM1OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWMyvzK/NisyEzIrNoc2hzYXMqM2OzKVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNV2I3SXdIRU9PTWhiVUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFjTFdkbUYyTFlWQnQrRjFYbHY2MFFmN2FEMkgwdTU2dDNxQUNwU3d3VEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiclp3VHF6cm9INkR2b2lvV1BsWURxTitIbVNvSUpRa3NMNVhWRVpGZFk3VnVOUTJpY3hXTWI2WDh3WXpzWFVIMW4yUFNUak5uMW1jdTlKa0xVTnV6Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFo3Tm5reUFEbWFPUWJIbk1ncE9NdllJeUJKaFdIeVJwaDN6MVBjbVJrcFhOZHpUTlFvWlk5SjF6U2ZITFpyYy9QUVVIUFJ5c1J0elFXWTFQOTQrQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjY5NDMxMzcyOTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4NDUzNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFNktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUU2Sy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "£",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
