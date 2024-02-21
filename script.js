const characters = {
    "Aidan": {
        "class": "aidan",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203770345295843379/cropped_aidan.png?ex=65d24d7f&is=65bfd87f&hm=c52390d032234adb8d96b53e322ffb0dfb8d16c5a8149b0a6c90b803a90132b1&=&quality=lossless",
        "color": "#f8f3da"
    },
    "Anabel": {
        "class": "anabel",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658820708663296/bAEU2rS.png?ex=65e7b991&is=65d54491&hm=bb1964ff0b7453e42645b3109abf94035caee495a4b39cec960b3ca6dd7d23f3&=&quality=lossless",
        "color": "#061726"
    },
    "Ari": {
        "class": "ari",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209660257631084624/bkMHnf2q_o.png?ex=65e7bae7&is=65d545e7&hm=ca5a0efe40490f3e8a50839f50aca87170653ab03cb3b6113d2a86bfd5a657b5&=&quality=lossless",
        "color": "#df2a2b"
    },
    "Borto": {
        "class": "borto",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658820985360464/9F1bkWs.png?ex=65e7b991&is=65d54491&hm=5ee29e784b494699cb55681f80b9c942ceb667ef4b2b287135c8cd57e92b6660&=&quality=lossless",
        "color": "#f47a46"
    },
    "Bread": {
        "class": "bread",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658821254057994/eL2LNk3.png?ex=65e7b991&is=65d54491&hm=b0167ace02fd3755ce8f34b546ff6d66e6544d55eb19ea04fa7077cbcb7afc63&=&quality=lossless",
        "color": "#25190d"
    },
    "Casey": {
        "class": "casey",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658821513838612/PDdpEL4.png?ex=65e7b991&is=65d54491&hm=f975221a0559efd40c650a93ef5dd4dd22da771f9a596ba095f3ab367ac2ff7e&=&quality=lossless",
        "color": "#4d23c2"
    },
    "Chim": {
        "class": "chim",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658822000386069/aGvJyzp.png?ex=65e7b991&is=65d54491&hm=05c9483d2321501d23ec644b5f991d78eb6cad732acd1f29f6c3d0d0db8d28eb&=&quality=lossless",
        "color": "#4e3a78"
    },
    "Chroma": {
        "class": "chroma",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658822373810247/tD8igbV.png?ex=65e7b991&is=65d54491&hm=6cf6d238308d7fbe44d506005c3edf2f808943647da9282bc15786dc8b81ec2d&=&quality=lossless",
        "color": "#4d1874"
    },
    "Damion": {
        "class": "damion",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658822650630174/AHWHAcw.png?ex=65e7b991&is=65d54491&hm=9678cd51e2045e83a735566eed25059a16c63d8b1d1dc6dbf79e92bb9b8193cb&=&quality=lossless",
        "color": "#162055"
    },
    "Dan": {
        "class": "dan",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563462865981440/Dan_-_Donut.png?ex=65d18cd2&is=65bf17d2&hm=77ef0ce5b0fe36ee92b3934e9764d2f95b881f3de1749d4881a7805464055434&=&quality=lossless",
        "color": "#f5dfb1"
    },
    "Dimitrius": {
        "class": "dimitrius",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658823011475456/eTgENvm.png?ex=65e7b991&is=65d54491&hm=f6a1d03e7b26cdb1d3469bbb71ed0e697b0bb7fac32010fcac51d640019ced11&=&quality=lossless",
        "color": "#6b81aa"
    },
    "Dom": {
        "class": "dom",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658823242154064/7J9fYDZ.png?ex=65e7b991&is=65d54491&hm=0ec2c6f9dd8ab4378af943b1de38628e75f7239e5f15af40fc07cee05e728242&=&quality=lossless",
        "color": "#03182d"
    },
    "Drey": {
        "class": "drey",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658853038489641/BNk1QPX.png?ex=65e7b998&is=65d54498&hm=5bd92cb240d8f471933e296f3aa3a1beb60a8f5effa2f1b7ec8307a987c3c1b1&=&quality=lossless",
        "color": "#9046b7"
    },
    "Eris": {
        "class": "eris",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658853348872252/ZwsdoQ9.png?ex=65e7b999&is=65d54499&hm=651eedebbd8b13a7bb7d7639be099b6b3b9a5296d2872c2328c17f55bcfcca90&=&quality=lossless",
        "color": "#ff0167"
    },
    "Gabe": {
        "class": "gabe",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563463797112832/Gabe_-_Drum.png?ex=65d18cd2&is=65bf17d2&hm=f28b277c40816e3d764503eb13479a1f2b37d06b9fb2947915f8a9ef3f7a14dc&=&quality=lossless",
        "color": "#00024e"
    },
    "Jasper": {
        "class": "jasper",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563464103305257/Jasper_-_Nickel.png?ex=65d18cd2&is=65bf17d2&hm=13f562e7cee52016fff7178957e99d31554088e435dc0b38023dbade6123af63&=&quality=lossless",
        "color": "#7c7e7e"
    },
    "Jayson": {
        "class": "jayson",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563464556019732/Jayson_-_Coiny.png?ex=65d18cd3&is=65bf17d3&hm=f1c1e1d13a6fcfbd7c3a897bffd6b56c9ef5b99ca72af0791ea835a686d4e1d0&=&quality=lossless",
        "color": "#ffad03"
    },
    "Mini": {
        "class": "mini",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563464824594472/Mini_-_Dice.png?ex=65d18cd3&is=65bf17d3&hm=5e38eba886fee05833e382b8cab0ea5a7ffb15c42ddae03955f16f9356788dc5&=&quality=lossless",
        "color": "#d32033"
    },
    "Oak": {
        "class": "oak",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1209658853629632572/Wpi9IAh.png?ex=65e7b999&is=65d54499&hm=584238952941dc7748d79e5cb967f3e53997227989546410224f16c22abf67f6&=&quality=lossless",
        "color": "#7fa1de"
    },
    "Wyatt": {
        "class": "wyatt",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563465378234419/Wyatt_-_8Ball.png?ex=65d18cd3&is=65bf17d3&hm=d3c1783b5990b48c420f9b1ed2328db06e7a9ca8f3b14305cd194f2eaa38db04&=&quality=lossless",
        "color": "#000000"
    }
};

const voting = document.querySelector(".voting");
const characterTemplate = document.querySelector(".template");

for (character in characters) {
    let newCharacterTemplate = characterTemplate.cloneNode(true);
    let newCharacterText = newCharacterTemplate.querySelector(".character-text");
    let newCharacterColor = characters[character]["color"];
    voting.appendChild(newCharacterTemplate);

    newCharacterTemplate.classList.remove("template");
    newCharacterTemplate.classList.add(characters[character]["class"]);
    newCharacterTemplate.querySelector(".character-image").src = characters[character]["image"];

    newCharacterTemplate.style.backgroundColor = newCharacterColor;
    newCharacterTemplate.style.backgroundImage = `url('./backgrounds/${getRandomInt(0, 5)}.png')`;
    newCharacterTemplate.style.backgroundSize = "cover;";
    newCharacterText.querySelector(".name").textContent = character.toUpperCase();
    newCharacterText.querySelectorAll(".name, .small").forEach((text) => {
        let randomBrightness = getRandomArbitrary(-40, -70);
        text.style.color = isDark(newCharacterColor) ? changeBrightness(newCharacterColor, 80) :
                                                       changeBrightness(newCharacterColor, randomBrightness);
    });
};

characterTemplate.remove();

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getPercentageOf(newWidth, width) {
    return newWidth / width;
}

function changeBrightness(color, percent) {
    var ctx = document.createElement('canvas').getContext('2d');

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);

    var color = ctx.getImageData(0, 0, 1, 1);
    var r = color.data[0] + Math.floor(percent / 100 * 255);
    var g = color.data[1] + Math.floor(percent / 100 * 255);
    var b = color.data[2] + Math.floor(percent / 100 * 255);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function isDark(hex) {
    if (!/^#[0-9A-F]{6}$/i.test(hex)) return;
    const hexCode = hex.charAt(0) === '#' ?
        hex.substr(1, 6) :
        hex;

    const hexR = parseInt(hexCode.substr(0, 2), 16);
    const hexG = parseInt(hexCode.substr(2, 2), 16);
    const hexB = parseInt(hexCode.substr(4, 2), 16);

    const contrastRatio = (hexR + hexG + hexB) / (255 * 3);
    return contrastRatio < 0.5;
}

function generateLetters() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letters = document.querySelectorAll(".letter");
    for (let i = 0; i < letters.length; i++) {
        letters[i].textContent = `[${alphabet[i]}]`;
    }
}

let characterBoxes = document.querySelectorAll(".character");
characterBoxes.forEach((character) => {
    character.addEventListener("click", () => {
        character.remove();
        characterBoxes = document.querySelectorAll(".character");
        updateCharacters();
    })
})

function evenlyDistributeBoxes(characters) {
    const rows = 2;
    minCharacterBoxWidth = (characters.length > 8) ? `${(100 / (characters.length / rows)) * 0.90}vw` :
                                                     "";
    characters.forEach((character) => {
        character.style.minWidth = minCharacterBoxWidth;
    });
}

function updateTextSizes() {
    if (characterBoxes.length > 16) {
        characterBoxes.forEach((character) => {
            character.classList.add("shrink-text-size");
        });
    } else {
        characterBoxes.forEach((character) => {
            character.classList.remove("shrink-text-size");
        });
    }

    const characterNames = document.querySelectorAll(".name");
    characterNames.forEach((name) => {
        name.style.transform = `scale(1)`;
        let characterBoxWidth = name.parentElement.parentElement.getBoundingClientRect().width;
        let nameWidth = name.getBoundingClientRect().width;
        let newTextWidth = getPercentageOf(characterBoxWidth, nameWidth) * 0.9;
        if (newTextWidth > 2) newTextWidth = 2;
        name.style.transform = `scale(${newTextWidth}, 1.5)`;
    })
}

let windowSizeSettings = false;
const preserveWindowSize = document.querySelector(".preserve-window-size");
preserveWindowSize.addEventListener("click", () => {
    windowSizeSettings = !windowSizeSettings;
    if (windowSizeSettings) {
        preserveWindowSize.textContent = "(Preserve Window Size: ON )";
        preserveWindowSize.style.color = "lime";
    } else {
        preserveWindowSize.textContent = "(Preserve Window Size: OFF)";
        preserveWindowSize.style.color = "red";
    }
})

const screenshot = document.querySelector(".screenshot");
screenshot.addEventListener("click", () => {
    const options = document.querySelector(".options");
    options.style.display = "none";
    let canvasOptions = windowSizeSettings ? {
        allowTaint: true,
        useCORS: true
    } : {
        allowTaint: true,
        useCORS: true,
        windowWidth: 1920,
        windowHeight: 1080
    };
    html2canvas(voting, canvasOptions).then(canvas => {
        saveAs(canvas.toDataURL(), 'voting_screen.png');
    });
    options.style.display = "flex";
})

function updateCharacters() {
    generateLetters();
    evenlyDistributeBoxes(characterBoxes);
    updateTextSizes();
}

updateCharacters();