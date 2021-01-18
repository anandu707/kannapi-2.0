let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 Fidha Fathima 〙 ═
╠➥  Made in javascript via NodeJs
╠➥ Rec: ʀᴀɴᴊɪᴛʜ [ᴍʀ.ʀᴀᴠᴀɴᴀɴ]
╠➥ Script: ᴍʀ.ʀᴀᴠᴀɴᴀɴ

╠➥ instagram: https://instagram.com/__fidha.fathima._?igshid=fxepqajvqd9p

╠═〘 Thanks To 〙 ═
╠➥ ᴍʀ.ʀᴀᴠᴀɴᴀɴ ™ 
╠➥ ™ ɪɴᴅᴏɴᴇsɪᴀ
            ʙʀᴜᴛᴀʟ
            ᴍᴀʀᴋɪᴠ
            ʀᴀᴠᴀɴᴀɴ
            ᴄʏʙᴇʀ ᴋᴀʟʟᴀɴ
            ʜɪᴛʟᴇʀ ᴛʜᴇ ɴᴀᴢɪ
            ᴄʏʙᴇʀ ᴄᴏᴍᴍᴀɴᴅᴏ
            sʜᴀʀɪᴋ
            ᴠɪsʜɴᴜ
            ᴡʜ173 5ᴘ1ᴅ3ʀ
             ʟᴏʀᴅ ᴏsɪʀɪs
╠➥ 
║
╠═〘 Fidha Fathima  〙 ═
╠➥ MAKE GROUP ADMIN 
╠➥ TURN ON YOUR DATA
╠➥ CONTACT : wa.me//+919495528065
║
║>Request? wa.me//+919495528065
║
╠═〘Fidha Fathima〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

