const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

SESSION_ID: process.env.SESSION_ID || "oFE2BZZB#NOdhQC9AI2_l56tXJvkSDeKf7IJG547RGoguE8qkV_I",

// fixed image link
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Hnsk23/hnsk/main/images/HANSA%20md.png",

ALIVE_MSG: process.env.ALIVE_MSG || "*Hello 👋 HANSA-MD Is Alive Now 😍*\n© by HANSAKA NIRMAN 💙",

BOT_OWNER: process.env.BOT_OWNER || "94789706579",

AUTO_READ: process.env.AUTO_READ || "true",

AUTO_TYPING: process.env.AUTO_TYPING || "false",

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",

};
