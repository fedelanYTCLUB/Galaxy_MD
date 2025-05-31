let handler = async (m, { conn, usedPrefix }) => {
    const menu = `
👥 *COLABORADORES DEL BOT* 👥

╭─────────────────────╮
┃ 🎖️ *CREADOR PRINCIPAL* 🎖️
╰─────────────────────╯

👑 **CREADOR DEL BOT**
┌──────────────────┐
│ 📱 +54 911 5617 8758
│ 🌐 github.com/sexo
│ ⭐ *Rol:* Fundador
└──────────────────┘

🤖 **ASTA_CLOVER-BOT FEDE XD**
┌──────────────────┐
│ 📱 +54 911 6435 2241
│ 🎯 *Rol:* Bot oficial
└──────────────────┘


╭─────────────────────╮
┃ 🌟 *RESUMEN* 🌟
╰─────────────────────╯

📊 *Equipo:*
• 👑 1 Creador
• 🤖 1 Bot oficial
• 💻 4 Desarrolladores

🌍 *Países:*
🇦🇷 Argentina - 🇺🇸 USA

╭─────────────────────╮
┃ 🚀 *¿SER DEVELOPER?* 🚀
╰─────────────────────╯

💡 *¡Únete al equipo!*

📝 *Aplica aquí:*
https://surveyheart.com/form/6835fa3f543db626e9bdd8a2

⚠️ *IMPORTANTE:*
• Usa información REAL
• El creador te contactará
• Buscamos talento comprometido

_Desarrollado con ❤️ por el equipo_
    `
    m.reply(menu)
}

handler.tags = ['info', 'staff']
handler.help = ['colaboradores', 'staff', 'equipo']
handler.command = ['colaboradores', 'staff', 'equipo', 'team', 'devs']
handler.group = false

export default handler

