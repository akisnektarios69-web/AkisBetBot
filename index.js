const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('❌ BOT_TOKEN δεν βρέθηκε');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    bot.sendMessage(
      chatId,
      'Καλώς ήρθες!\n\n' +
      'Διαθέσιμες επιλογές:\n' +
      '1️⃣ LIVE ΠΡΟΤΑΣΕΙΣ\n' +
      '2️⃣ OVER ΕΠΙΛΟΓΕΣ\n' +
      '3️⃣ HELP\n\n' +
      '📌 Πρωταθλήματα: Ελλάδα & Ευρώπη'
    );
else if (text === '1') {
  bot.sendMessage(
    chatId,
    '🔥 LIVE ΠΡΟΤΑΣΕΙΣ (δοκιμαστικό)\n' +
    'Παναθηναϊκός - Ολυμπιακός\n' +
    'Over 2.5 ⚽\n\n' +
    'Ρεάλ - Βαλένθια\n' +
    'GG ✅'
  );
}


else if (text === '/live') {
  bot.sendMessage(
    chatId,
    '🔥 LIVE ΠΡΟΤΑΣΕΙΣ (δοκιμαστικό)\n' +
    'Παναθηναϊκός - Ολυμπιακός\n' +
    'Over 2.5 ⚽'
  );
}


  else if (text === '2') {
    bot.sendMessage(chatId, '⚽ OVER ΕΠΙΛΟΓΕΣ (δοκιμαστικό)');
  }
  else if (text === '3') {
    bot.sendMessage(chatId, 'ℹ️ HELP: Γράψε 1, 2 ή 3');
  }
  else {
    bot.sendMessage(chatId, '❓ Δεν κατάλαβα. Γράψε 1, 2 ή 3');
  }
});




console.log('✅ AkisBetBot τρέχει...');
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot is running');
}).listen(process.env.PORT || 3000);
