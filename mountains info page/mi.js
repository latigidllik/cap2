// function loadMountainsInfo() {
//     const selectElement = document.querySelector("#mountain");
//     selectElement.onchange = mountainSelect;

//     for (const mountainData of mountainsArray) {
//         // creates a new tag for options
//         const option = document.createElement("option");

//         option.value = mountainData.name;
//         option.innerText = mountainData.name;

//         selectElement.append(option);
//     }
// }

// function mountainChange() {
//     const selectElement = document.querySelector("#mountain");
//     const mountainInfo = document.querySelector("main");
//     const currentMountain = selectElement.value;

//     for (const mountainData of mountainsArray) {
//         if (currentMountain === mountainData.name) {
//             mountainInfo.innerHTML = `<img src="mountain-images/${mountain.img}"> ${mountain.desc}
//                 The effort for this hike is < strong > ${mountain.effort}</strong > ! <br><br>Latitude: ${mountain.coords.lat}
//                 <br>Longitude: ${mountain.coords.lng}`;

//         }
//     }
// }

// window.onload = main;

// function main() {
//     loadMountainsInfo()
// }
// function loadMountainsInfo() {
//     const selectElement = document.querySelector("#mountain");
//     selectElement.onchange = mountainChange;

//     for (const mountainData of mountainsArray) {
//         const option = document.createElement("option");
//         option.value = mountainData.name;
//         option.innerText = mountainData.name;
//         selectElement.append(option);
//     }
// }

// function mountainChange() {
//     const selectElement = document.querySelector("#mountain");
//     const mountainInfo = document.querySelector("main");
//     const currentMountain = selectElement.value;

//     for (const mountainData of mountainsArray) {
//         if (currentMountain === mountainData.name) {
//             mountainInfo.innerHTML = `<img src="images/${mountainData.img}"> ${mountainData.desc}
//                 Hike difficulty <strong>${mountainData.effort}</strong>! <br><br>Latitude: ${mountainData.coords.lat}
//                 <br>Longitude: ${mountainData.coords.lng}`;
//         }
//     }
// }

window.onload = main;

function main() {
    loadMountainsInfo();
}

function loadMountainsInfo() {
    const selectElement = document.querySelector("#mountain");
    selectElement.onchange = mountainChange;

    for (const mountainData of mountainsArray) {
        const option = document.createElement("option");
        option.value = mountainData.name;
        option.innerText = mountainData.name;
        selectElement.append(option);
    }
}

function mountainChange() {
    const selectElement = document.querySelector("#mountain");
    const mountainInfo = document.querySelector("main");
    const currentMountain = selectElement.value;

    for (const mountainData of mountainsArray) {
        if (currentMountain === mountainData.name) {
            mountainInfo.innerHTML = `
                <div class="card transparent-card" >
                    <img src="images/${mountainData.img}" class="card-img-top" alt="Mountain Image">
                    <div class="card-body">
                        <h5 class="card-title">${mountainData.name}</h5>
                        <p class="card-text">${mountainData.desc}</p>
                        <p class="card-text">Hike difficulty: <strong>${mountainData.effort}</strong></p>
                        <p class="card-text">Latitude: ${mountainData.coords.lat}</p>
                        <p class="card-text">Longitude: ${mountainData.coords.lng}</p>
                    </div>
                </div>
            `;
        }
    }
}
