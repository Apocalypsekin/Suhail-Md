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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_14_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICA1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgODksXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc2LFxuICAgICAgICA4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhyNTNmYVl1UW1UWGpRaWtoUTJIdUNqZE91L0FWRFl3R3Nla2I2UFdWbE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInM1Z2JKcTFKVF9hYXF3ZURjLWgxTFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzIwZDc3OTctNmM4ZC00MTE1LTk3YTgtMjZkN2M1NzQzYWNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgNzgsXG4gICAgICAxMDAsXG4gICAgICAyMjIsXG4gICAgICAyMTMsXG4gICAgICAxNjEsXG4gICAgICAxMTMsXG4gICAgICA0LFxuICAgICAgMjUwLFxuICAgICAgMTY3LFxuICAgICAgMTcwLFxuICAgICAgNDgsXG4gICAgICA0NSxcbiAgICAgIDE0MyxcbiAgICAgIDc2LFxuICAgICAgMjUwLFxuICAgICAgMjA2LFxuICAgICAgMTQ4LFxuICAgICAgMjMwLFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTI5LFxuICAgICAgMTEyLFxuICAgICAgNDEsXG4gICAgICAxNDAsXG4gICAgICAyMDYsXG4gICAgICAzOSxcbiAgICAgIDExOCxcbiAgICAgIDE5LFxuICAgICAgMTEsXG4gICAgICA5OCxcbiAgICAgIDc5LFxuICAgICAgNDEsXG4gICAgICAzNyxcbiAgICAgIDE2NyxcbiAgICAgIDEyMixcbiAgICAgIDQzLFxuICAgICAgNzYsXG4gICAgICA5OSxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXVVLyt3SEVOTGJrTFVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTd2xGVStHVCtXZ3krUVFERVAvQnRiRXcyWTltKy9aT1lrc2toSFFsZ2xZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIit2a0JJMWcwamsvc3BBNStVdk4yVTliOXdTSlN0RXU1SUZZYWd3TlJmS2dnR0RlYUo4N1NpcnVRdUYvZ1hhdzJvUmdSaDdwQ2F3ck5hQlozNklkK0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldycEhidnh5VlQ4OFo2NDE0WUhtdE9nZis2aFJzMVNYZTVuS1lLY1E5N1BDSUN2aXNjUW5VeUtqN0lxaWN0VzZsSU9PUG5uSXhlWmpCN0kwL1g3ZGpBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjU0MTAwMjg1OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDU1MjM1MDQ1NDE4OTg6MjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTQxMDAyODU6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwMzU2NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOaHFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5ocS5qc29uIjogIntcImtleURhdGFcIjpcImtOUW9sZjRVekJSS0JpNTJ4ZjRDM2ZQN3BQM2pHUFFHazE3VU01blRucXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwNzYyMzk0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmhyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUE1mOFVla044dGVXOTJHYmc5N2c5WE95aTFxRXF5L3NVUDl1a2RSTUlRVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA3NjIzOTQ3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmhzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSmlXVzQ4V3RKZko0dnJYMWNUa3U1c0RKL0RJWlNDcDJURXdkTmI4Vkt1WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA3NjIzOTQ3LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwzLDQsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmh0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibFkwdHNQWXEyR3Q1bGRuQmR3MXk3VFRYbkRDOEJLVFFRR3B5SjVtblJQVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTA3NjIzOTQ3LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwzLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5odS5qc29uIjogIntcImtleURhdGFcIjpcIk9SSytoOFBVb1FyWmNkam5Hc3RwVmphSHBCNHp6c2g0c1VRMUJNcm9hcFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwNzYyMzk0NyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzIyMDI3MDU5ODE4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "£",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "tyler",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "TYLER"  ).toUpperCase(),



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
