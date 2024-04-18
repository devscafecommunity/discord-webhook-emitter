const { Client, EmbedBuilder, GatewayIntentBits } = require('discord.js');

class WebhookSender {
    constructor(channelId, token, embed) {
        this.channelId = channelId;
        this.client = new Client({ intents: [GatewayIntentBits.Guilds] });
        this.embed = embed || new EmbedBuilder();
        this.token = token;
    }

    async send(content, username, avatarURL) {
        try {
            await this.client.login(this.token);
            const channel = await this.client.channels.fetch(this.channelId);
            const webhooks = await channel.fetchWebhooks();
            const webhook = webhooks.find(wh => wh.token);

            if (!webhook) {
                console.log('No webhook was found that I can use!');
                return;
            }

            await webhook.send({
                content,
                username,
                avatarURL,
                embeds: [this.embed],
            });
        } catch (error) {
            console.error('Error trying to send a message: ', error);
        } finally {
            await this.client.destroy();
        }
    }
}

// Exemplo de uso:
// const webhookSender = new WebhookSender('', "");
// webhookSender.send('Webhook test', 'some-username', '');

export default WebhookSender;