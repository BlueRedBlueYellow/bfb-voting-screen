const characters = {
    "Denn1s": {
        "class": "dennis",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1180454397575184515/8-Ball_Pose.webp?ex=657d7ad4&is=656b05d4&hm=85088992867d64a5ec2bea31e6bf1d6acc8236485879d395cab4a7a4602f77cd&=&format=webp&width=587&height=593",
        "color": "#202020"
    },
    "Mikki": {
        "class": "mikki",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1180407055660617798/Tpot_renders0019.webp?ex=657d4ebc&is=656ad9bc&hm=92f5c6e573476d4f11f94797e85c69944c05a829321fcbb525195b90caacb290&=&format=webp&width=380&height=503",
        "color": "#ffffff"
    },
    "Keaton": {
        "class": "keaton",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1180407055891312670/Golf_Ball_Image.webp?ex=657d4ebd&is=656ad9bd&hm=e1955767852484ece509b20ef1d6bf702532adacc6df1688551398dc8f20b2b1&=&format=webp&width=507&height=593",
        "color": "#feb9f3"
    },
    "JL": {
        "class": "jl",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1180407056147161118/Yellowface.webp?ex=657d4ebd&is=656ad9bd&hm=d550d4544c10bd05880f1724a30c0a7a7d900c99e4360299b564a7ec49307760&=&format=webp&width=576&height=593",
        "color": "#ffff00"
    },
    "Ren": {
        "class": "ren",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1180407056839217152/Tpot_renders0031.webp?ex=657d4ebd&is=656ad9bd&hm=17432f71055f3391adc3e517dfc32a0fdeadac68859272f6fcb34422ecd09e65&=&format=webp&width=323&height=465",
        "color": "lightgreen"
    },
    "Joey": {
        "class": "joey",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1180454396925050950/Tpot_renders0027.webp?ex=657d7ad4&is=656b05d4&hm=e5c723dff10d43b4be076950b8a808f613f7ace6a73e6ee0ddee451bda5896f9&=&format=webp",
        "color": "#808080"
    },
    "Nam": {
        "class": "nam",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1180454397885546556/Bubblebfb13.webp?ex=657d7ad4&is=656b05d4&hm=4512e62a54ad95839860e0c660b5039cfe2d8187730cd8137d10a46f69178f67&=&format=webp&width=512&height=593",
        "color": "#76c9e2"
    },
    "Dalt": {
        "class": "dalt",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181481533702422528/Match_book.webp?ex=6581376c&is=656ec26c&hm=bdfb72dbbf4fc3ec0b64cbcba93cb113b1d6d3a77660243064d919eb8c7f3f0c&=&format=webp&width=156&height=593",
        "color": "#e69a6f"
    },
    "Ben": {
        "class": "ben",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181481533945683990/Tpot_renders0040.webp?ex=6581376c&is=656ec26c&hm=aecf179cc90e2a765f5a551c23c2f71ab34333b4e379641fc59909be7fe69ca7&=&format=webp&width=179&height=593",
        "color": "#394755"
    },
    "Captain": {
        "class": "captain",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181481534277029888/Four_intro.webp?ex=6581376c&is=656ec26c&hm=346ca7bc9f0223594d5c858ed961c8d9a794bb7b9a08cd4f8180c33b9e77c87c&=&format=webp&width=560&height=593",
        "color": "#2357a5"
    },
    "Jacob": {
        "class": "jacob",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181481534696472576/Tpot_renders0042.webp?ex=6581376c&is=656ec26c&hm=35b588395d16e5c97bcb61135a5220ca63d2bd75269e79ea17f294978402e54d&=&format=webp",
        "color": "#eea8ff"
    },
    "Cora": {
        "class": "cora",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181506015989092402/350.png?ex=65814e39&is=656ed939&hm=63e32b26cb523ef66e6010fcd844adaa147b342b02cf6c6bbe6d33887d11029e&=&format=webp&quality=lossless",
        "color": "#221918"
    },
    "Alex": {
        "class": "alex",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181506082678517791/350.png?ex=65814e49&is=656ed949&hm=95657b9c4427882fea3a02a31bb0935476d30b9932c6555ef4950da51376277d&=&format=webp&quality=lossless",
        "color": "#324f32"
    },
    "Mandos": {
        "class": "mandos",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181506274848935986/335.png?ex=65814e77&is=656ed977&hm=aa6c5b6fb41758cdf40e1c2782e1248103e589f603e7bc3748a9b38f25ae5209&=&format=webp&quality=lossless",
        "color": "#ff8df5"
    },
    "Kat": {
        "class": "kat",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181506333590163456/latest.png?ex=65814e85&is=656ed985&hm=87a41b02d0e62f793313c111545cd25a16be7e1ea651e1e5f2022a6bd3939047&=&format=webp&quality=lossless&width=385&height=593",
        "color": "#3c1e39"
    },
    "Juls": {
        "class": "juls",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181506416394113055/latest.png?ex=65814e98&is=656ed998&hm=6648c74e637f003b8836547fcdba0041d6b71085f0b7523b9d1eb818e6ad243c&=&format=webp&quality=lossless&width=292&height=593",
        "color": "#bc70fb"
    },
    "Tye": {
        "class": "tye",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181506471633109103/latest.png?ex=65814ea6&is=656ed9a6&hm=38b415c9f4d307ea76ba0f788bf0d05f88b7252b21cbdf3bc718fecdf1a220ab&=&format=webp&quality=lossless",
        "color": "#8e3148"
    },
    "Adrian": {
        "class": "adrian",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181506671927902238/latest.png?ex=65814ed5&is=656ed9d5&hm=ae3d12acc6277dd872843af08a7ad04a773d57edca70c3cf69875e32853df775&=&format=webp&quality=lossless&width=124&height=593",
        "color": "#303030"
    },
    "Shenicicle": {
        "class": "shen",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181506765179846656/latest.png?ex=65814eec&is=656ed9ec&hm=06bd8d0908f03d2f7605112828fc2801de52fe5d171e397dd683d29c3ec98082&=&format=webp&quality=lossless&width=148&height=591",
        "color": "#ef9738"
    },
    "Jadyn": {
        "class": "jadyn",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181507165245149225/latest.png?ex=65814f4b&is=656eda4b&hm=ace40c25100f7498a3716d36005c39693bbf73fb1a63bde025fc51c4b350709d&=&format=webp&quality=lossless",
        "color": "#214774"
    },
    "Brady": {
        "class": "brady",
        "image": "https://media.discordapp.net/attachments/929525276415770684/1181506820167184455/1000.png?ex=65814ef9&is=656ed9f9&hm=54a93ff75492217c1faf37ada73377121f05e355c25aefa3c2b300169b926194&=&format=webp&quality=lossless&width=911&height=593",
        "color": "#fe2336"
    },
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