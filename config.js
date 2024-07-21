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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_50_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU3LFxuICAgICAgICA4NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgNSxcbiAgICAgICAgODksXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk2LFxuICAgICAgICA4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidWF6TVA3OW9SUmhKcndoVkU3SzJUcHJiNk1VY1NUTHFpQkt4L0hvcTFyYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTERXUmtRTWlRcjZvZHV6WWpwNXRZd1wiLFxuICBcInBob25lSWRcIjogXCI0NjIxMDQ0ZC1iNDhkLTQwMTMtODAyMy00YzJlMDVkN2JjODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMTEzLFxuICAgICAgMjA1LFxuICAgICAgMjQyLFxuICAgICAgMTEzLFxuICAgICAgMjAyLFxuICAgICAgNjcsXG4gICAgICAxNjQsXG4gICAgICAxNzYsXG4gICAgICAxNzIsXG4gICAgICA2MSxcbiAgICAgIDI0MyxcbiAgICAgIDE0NCxcbiAgICAgIDIxNSxcbiAgICAgIDY5LFxuICAgICAgMjEsXG4gICAgICAxMTYsXG4gICAgICAxODYsXG4gICAgICAxMCxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDkyLFxuICAgICAgMTgxLFxuICAgICAgNDQsXG4gICAgICA2MixcbiAgICAgIDE4OSxcbiAgICAgIDUzLFxuICAgICAgNCxcbiAgICAgIDEzMyxcbiAgICAgIDE0NSxcbiAgICAgIDAsXG4gICAgICAxMTQsXG4gICAgICAxMzYsXG4gICAgICAxMTIsXG4gICAgICAxMTEsXG4gICAgICAyMzksXG4gICAgICAxNSxcbiAgICAgIDIzNixcbiAgICAgIDIxOCxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlI5TkZLMVlMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3NjI0NDU3Njk6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWv8J2WivCdlpsn8J2WmCDwnZWu8J2Wl/CdlpEg4oG24oKG4oG3XCIsXG4gICAgXCJsaWRcIjogXCIzMDk3OTkwMTE0OTMzNzo1NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT24xK0VGRU1haDlyUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9mNk96QmdVYWVHQ2dxVlpBWFRqak5vUHpOTzZvc0t4cE9QTFdtcVFpZ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaGNOM3Y2czExK0M3Q1phbU56SWo3cktjQzQ2ejFFK3ZldkFZcHRCZlp1VU1zcGNvM1ZOTGkxdExyNFZ6eUFxNHA1TzViYlE5azlLYmtscEltTVdVQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibzcrb2wyR0YvS1VLU3NHRi9ENVd4d01IZlhMc3JLeTd3TGlOelpEVU8wZnhlUGNOb1QydndTZmF5ZFVVK1UxTExzV0tPRUtWYW44ZENkNkpETkpoaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzYyNDQ1NzY5OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2MDIyNDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQWmxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBabC5qc29uIjogIntcImtleURhdGFcIjpcInJRUVdIR3lzdExxRWc3MC9zZjVUcFplUlh0NENHamdONGwybTlibmpiUTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU0NzAzMTQyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTc1Mjc2NDAzXCJ9Igp9"  // PUT your SESSION_ID 


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
