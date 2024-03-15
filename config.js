const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "919526718775"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '919526718775' 
global.devs = '919526718775';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0V6Y3QzM2RSRzU3KzBGNWxvNDN0bGVpd01SdzZFTDJKWXdXZG0vVEQxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2pTWHlQMEJSZFI5d1ZDQ0d4Ym9FaFRVZmljR3Z2S2l5NXFhNG9CK2x4VT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T3VRZFRUM0daRSs0aG5tbGYwNDFsSThqMlU5b2dGUzErQmt5VUpKSG1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCRGQvSjFreGJzV1dNSjl4TVZnSks5N2sxYWRkUTRRNUlpcndTQXRZYlJ3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FU2k1a0VneXdkTG42dVpNT0xINi9yaks3bENpSDJERmVJN1BkQm40WHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FZHZ0SUlLbFNqQkZUdmp5V3IvVzcwTnZzVHZ4YXc2azU5ZGhRVGRkMm89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaRlJWQTMxWWZQMDVBT0JxU0FWOVdxYU9HNSszZ0ZHaTBDSlhhcXFYSW1HeEhBVlorYWNpSE5VMDNMUzU1UjVzbVNGbk8wUzg5SWhFeWx4WC9xc3loZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM5LCJhZHZTZWNyZXRLZXkiOiIrRm5jWU5wakkwMnZOZWdseTFldjZsM3k2U0l1VkF0SWR5QkxpWkpmei80PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIakxqTnpfb1RndU8wN3MxMG94X2lBIiwicGhvbmVJZCI6Ijc1NWEyNjE5LWQyOTUtNGRlYi05ZTAyLTIyM2FmMTMyNWM2MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VDdIZXBXSWwrM1VUZ2UzdnBlL1I0QTNkd0k9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxtRlpqZ3pwdlcvMk96bzhkWHBUemNRcGFpRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05iVC92TUJFSlBCejY4R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJISjRPcElNQ2QxUXFLMTlaVExva1l6ZVZvVVhNZDJaeXhXYkxOd2h5eHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVKOUZDOFNuQWFyVzNUWkZhWEo5c3RobkV4UkMxSUJlMmdSSG5pcTNmVlpLTng1Ly9lU2VxeWhtc2dzc21mN1ZhOVozRUhveGpMbHBLUlNkT0QzWkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGUzN2RCtra00vcFJqYUkxbm9DMmphT25sdE5DRHE3UTFYMGlYY0NJMGRKNW9FWGdCSGdHQnljQXJjdm1ncnBXU1RWdit2Z3FhU01kYmp2N21PTlJpUT09In0sIm1lIjp7ImlkIjoiOTE5NTI2NzE4Nzc1OjQ3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTUyNjcxODc3NTo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXeHllRHFTREFuZFVLaXRmV1V5NkpHTTNsYUZGekhkbWNzVm15emNJY3NjIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEwNDgxNTU4fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'ibeei',
  packname:  process.env.PACK_NAME || 'ibeei',
   
  botname:   process.env.BOT_NAME === undefined ? "ibei-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'iberi' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'ANNAK JEEVAN INDA' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
