const characters = {
    "Aidan": {
        "class": "aidan",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203770345295843379/cropped_aidan.png?ex=65d24d7f&is=65bfd87f&hm=c52390d032234adb8d96b53e322ffb0dfb8d16c5a8149b0a6c90b803a90132b1&=&quality=lossless",
        "color": "#f8f3da"
    },
    "Anabel": {
        "class": "anabel",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563408679768134/Anabel_-_Dora.png?ex=65d18cc5&is=65bf17c5&hm=67de96f60accbfbede150265d1a0a3ae7a11998156f944069e4d4ce37fe754a1&=&quality=lossless",
        "color": "#061726"
    },
    "Ari": {
        "class": "ari",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563408901804042/Ari_-_Price_Tag.png?ex=65d18cc5&is=65bf17c5&hm=6b3c4e458a6a03a7d17e0e697f2eac0a7d045429673e92b5ce9532a864507805&=&quality=lossless",
        "color": "#df2a2b"
    },
    "Borto": {
        "class": "borto",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563409153458187/Borto_-_Basketball.png?ex=65d18cc5&is=65bf17c5&hm=5884de5add3d8332deeb51a47634a0379a7a42e0cf05d825aff2596d6c85ae8f&=&quality=lossless",
        "color": "#f47a46"
    },
    "Bread": {
        "class": "bread",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563409409450015/Bread_-_Bread.png?ex=65d18cc5&is=65bf17c5&hm=b44e3f0717ef808fe0f910edcb232adaa48bc70d46dc9b6c7a70e505d5ae5f75&=&quality=lossless",
        "color": "#25190d"
    },
    "Casey": {
        "class": "casey",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563409652842607/Casey_-_Inkwell.png?ex=65d18cc5&is=65bf17c5&hm=29826505475af4332b83203b9ec2d6214e89e1a7e3bec1a0cf838bd90ac18cc8&=&quality=lossless",
        "color": "#4d23c2"
    },
    "Chim": {
        "class": "chim",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1208589198144311357/bomby_purple.png?ex=65e3d567&is=65d16067&hm=ade73ad1c4dc9b6c9e0ad20f166932636b931d9db171a293d332c82d7637e003&=&quality=lossless",
        "color": "#4e3a78"
    },
    "Chroma": {
        "class": "chroma",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563410416074772/Chroma_-_Candle.png?ex=65d18cc6&is=65bf17c6&hm=036cdd059fecb6caeb154e4691fdf89f4b487fc469dcba093da7f9969ab0ae74&=&quality=lossless",
        "color": "#4d1874"
    },
    "Damion": {
        "class": "damion",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563410625929259/Damion_-_Mouse.png?ex=65d18cc6&is=65bf17c6&hm=d6f864df2f67dc9ba00daf512543a660754508a52a657e49b3f78f37c59ab1cd&=&quality=lossless",
        "color": "#162055"
    },
    "Dan": {
        "class": "dan",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563462865981440/Dan_-_Donut.png?ex=65d18cd2&is=65bf17d2&hm=77ef0ce5b0fe36ee92b3934e9764d2f95b881f3de1749d4881a7805464055434&=&quality=lossless",
        "color": "#f5dfb1"
    },
    "Dimitrius": {
        "class": "dimitrius",
        "image": "https://media.discordapp.net/attachments/1161361808393785563/1208196366346756196/image.png?ex=65e2678c&is=65cff28c&hm=d34ee96d7f48894282c1b5daae5de3d4e75a163392678c4a2537e968a040e036&=&quality=lossless",
        "color": "#6b81aa"
    },
    "Dom": {
        "class": "dom",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563463109115944/Dom_-_Bowling_Ball.png?ex=65d18cd2&is=65bf17d2&hm=1700ae5753b22ab29a0565f5a7fc6c78f83c5a8841214fa42bcfaf239ca51479&=&quality=lossless",
        "color": "#03182d"
    },
    "Drey": {
        "class": "drey",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563463335485470/Drey_-_Amethyst.png?ex=65d18cd2&is=65bf17d2&hm=d0a794dc34e9cd5238a286dd8b8fc78709da947b43adcb829c9bb3b502ba52c3&=&quality=lossless",
        "color": "#9046b7"
    },
    "Eris": {
        "class": "eris",
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563463566168095/Eris_-_Firey.png?ex=65d18cd2&is=65bf17d2&hm=e9fe0d016f98d42df181d2ae78a2971c649de1debdb39c45a8d2fa3561e8cde7&=&quality=lossless",
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
        "image": "https://media.discordapp.net/attachments/1202142151102959626/1203563465088962580/Oak_-_VBuckCoin.png?ex=65d18cd3&is=65bf17d3&hm=51af97478e52c51f4d97e38d6f98e1ed86a86dcb435c9a312ac509ad8302f9be&=&quality=lossless",
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