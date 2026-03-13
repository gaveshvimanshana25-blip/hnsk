const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "https://raw.githubusercontent.com/gaveshvimanshana25-blip/hnsk/refs/heads/main/images/HANSA%20md.png",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Hnsk23/hnsk/blob/main/images/HANSA%20md.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello👋 HANSA-MD Is Alive Now😍            © by HANSAKA NIRMAN 💙",
BOT_OWNER: '94789706579',  // Replace with the owner's phone number

};
