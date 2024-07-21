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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_07_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MixcbiAgICAgICAgMjEyLFxuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNixcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxiMzdHMjhrYVVkRjRHWWUreDU2emNqMm93eEpxcC9xZEliOTlrNVFSNXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNibEczLWl6VEF5X01GaXlOQ3dYOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmZjMTljMzMtM2FkNy00MTBkLWJjZmEtYTQxYmQ0ODk4NGMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDIyNyxcbiAgICAgIDE0NixcbiAgICAgIDMxLFxuICAgICAgMTIwLFxuICAgICAgMTI0LFxuICAgICAgNTcsXG4gICAgICA5OSxcbiAgICAgIDIxNixcbiAgICAgIDIyLFxuICAgICAgMTE0LFxuICAgICAgMjI5LFxuICAgICAgMTQxLFxuICAgICAgMzAsXG4gICAgICAxOTAsXG4gICAgICA2MixcbiAgICAgIDE4MCxcbiAgICAgIDE0OCxcbiAgICAgIDY3LFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgNCxcbiAgICAgIDQ1LFxuICAgICAgNDAsXG4gICAgICAyMCxcbiAgICAgIDIwLFxuICAgICAgNTMsXG4gICAgICA3NSxcbiAgICAgIDEwNCxcbiAgICAgIDE1MSxcbiAgICAgIDIzMSxcbiAgICAgIDQ3LFxuICAgICAgMjMzLFxuICAgICAgMTc2LFxuICAgICAgODcsXG4gICAgICAxMjYsXG4gICAgICAxODIsXG4gICAgICAxOTEsXG4gICAgICAyMTMsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUeXBad0NFS09OOXJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRWRYTkNuQ3ZJOTdLQWh4a3dGMGtRSWgyVHNJZGhEWisyeWIyNldZdGdubz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxWVFidUZ5Rk42Mzd5OUo3QUlBdFFEK1l0TkFyN2ZDdnA3UkwzWnZwSFJVQ0doTUp1YkpZMGlzWE9hVWpLMElZM1JFaVE2alBuU25GMytUNVMxMDhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDQlZ4VE12Mi8rSHlNUHJ2KzJOL2lvd3VNWlgvSzRUeldwcVdHYlp3Z3JscW9sNkNQUEIyQWVsSjgxRG1VcHlBSDkrUVBPeEY0dXpSUVZuN3pBV3NoZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1NDEwMDI4NToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA1NTIzNTA0NTQxODk4OjIyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjU0MTAwMjg1OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU5OTY1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBlRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGVGLmpzb24iOiAie1wia2V5RGF0YVwiOlwib3JuWGt3RmVoL3NjN2p1TFEvd3hTMHVxNGdEc0ovWmZKbWJOM1U4Q2I1VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTYyMTIwMDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU5OTQ4NDcwMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
