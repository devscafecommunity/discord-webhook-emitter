# Discord Webhook Emitter

Este repositório contém uma classe JavaScript para facilitar o envio de webhooks para canais do Discord. A classe `WebhookEmitter` permite enviar mensagens formatadas com facilidade para qualquer canal específico do Discord.

## Uso

Para utilizar esta classe, siga as instruções abaixo:

1. **Instalação das Dependências**

   Certifique-se de ter o pacote `discord.js` instalado. Você pode instalá-lo executando o seguinte comando no terminal:

   ```bash
   npm install discord.js
   ```

2. **Importando a Classe**

   Você pode importar a classe `WebhookEmitter` em seu projeto da seguinte maneira:

   ```javascript
   import WebhookEmitter from './WebhookEmitter.js'; // Certifique-se de ajustar o caminho conforme necessário
   ```

3. **Criação de uma Instância**

   Crie uma instância da classe `WebhookEmitter`, fornecendo o ID do canal, o token do webhook e um objeto `EmbedBuilder` opcional como parâmetros:

   ```javascript
   const webhookEmitter = new WebhookEmitter('123456789012345678', 'SEU_TOKEN_AQUI', new EmbedBuilder());
   ```

4. **Envio de Webhooks**

   Utilize o método `send` da instância criada para enviar webhooks para o canal desejado:

   ```javascript
   webhookEmitter.send('Conteúdo da mensagem', 'Nome do Usuário', 'URL do Avatar');
   ```

   Certifique-se de substituir `'123456789012345678'` pelo ID do canal e `'SEU_TOKEN_AQUI'` pelo token do webhook que deseja usar.

## Exemplo de Uso

```javascript
import { Client, EmbedBuilder, GatewayIntentBits } from 'discord.js';
import WebhookEmitter from './WebhookEmitter.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const embed = new EmbedBuilder().setTitle('Título do Embed').setColor(0x00FFFF);

client.once('ready', async () => {
    const webhookEmitter = new WebhookEmitter('123456789012345678', 'SEU_TOKEN_AQUI', embed);
    webhookEmitter.send('Conteúdo da mensagem', 'Nome do Usuário', 'URL do Avatar');
});

client.login('SEU_TOKEN_AQUI');
```

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).