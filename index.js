require('dotenv').config(); // This should be at the very top

const axios = require('axios');

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

const sendMessageToDiscord = async () => {
    try {
        await axios.post(`https://discord.com/api/v10/channels/${CHANNEL_ID}/messages`, 
        {
            content: 'Hello World! This is a message sent every 5 minutes from Vercel.',
        },
        {
            headers: {
                Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
            },
        });
        console.log('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
    }
};

console.log('Bot Token:', DISCORD_BOT_TOKEN);
console.log('Channel ID:', CHANNEL_ID);


sendMessageToDiscord();
