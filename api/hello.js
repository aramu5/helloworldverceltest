const axios = require('axios');

module.exports = async (req, res) => {
    const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
    const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

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
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
        res.status(500).send('Failed to send message');
    }
};
