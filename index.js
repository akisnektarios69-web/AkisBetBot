const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('❌ BOT_TOKEN δεν βρέθηκε');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    `🤖 Καλωσήρθες στο AkisBetBot!

Διαθέσιμες επιλογές:
⚽ /live - Live προτάσεις
📊 /over - Over επιλογές
ℹ️ /help - Βοήθεια

📌 Πρωταθλήματα: Ελλάδα & Ευρώπη`
  );
});


console.log('✅ AkisBetBot τρέχει...');
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot is running');
}).listen(process.env.PORT || 3000);
