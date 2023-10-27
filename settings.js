/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = '75ac91f6e3c1eac92cb5ad84' // https://api.lolhuman.xyz
global.xzn = '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' // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6281332905229' // Owner Utama
global.owner = ['6281332905229', '6281332905229'] // Owner Lainnya
global.namaowner = 'Rangga プラセチョ' // Nama Owner
global.premium = ["6281332905229"] // Premium User
global.nobot = '6281909030708'
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'Rann - MD' // NickBot
global.typemenu = 'v2' // 'v1' > 'v2' > 'v3' > 'v4'
global.typereply = 'v1' // 'v1' > 'v2'
global.autoread = true // ReadChat
global.autobio = true // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.packname = 'Created By Rann - MD Corp' // Watermark Sticker
global.author = 'Rann - MD ダ' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: 'Done ✅',
    prem: 'Feature Only For User _*PREMIUM*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Wait a Moment, for Process',    
    error: '_*Sorry Features Error*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://chat.whatsapp.com/KhNWEPoIXWyKTcaafmGTZu'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
