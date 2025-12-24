const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('❌ BOT_TOKEN δεν βρέθηκε');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === '/start') {
    bot.sendMessage(chatId, '🤖 AkisBetBot ενεργό!\nΣτείλε μου μήνυμα.');
  } else {
    bot.sendMessage(chatId, '📩 Πήρα το μήνυμά σου!');
  }
});

console.log('✅ AkisBetBot τρέχει...');
