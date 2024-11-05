require("./all/module")

global.owner = "254796519826" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "ткм ѕℓαуєя" //NAMA BOT GANTI
global.namaCreator = "ℓσя∂ ткм" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = '1.0.0' //NOT CHANGE / JANGAN GANTI
global.sessionName = 'session'
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/5c11f9a445e2a5e426925.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://whatsapp.com/channel/0029VaKjSra9WtC0kuJqvl0g' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.packname = "ℓσя∂ ткм" //GANTI AJ
global.author = "ℓσя∂ ткм" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
