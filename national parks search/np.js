// window.onload = main

// function main() {
//     nationParksInfo()
//     parkStateData()
// }
// // this array is for pulling parkTypesArray and passing it to the options menue on the page
// function nationParksInfo() {
//     const selectElement = document.querySelector("#parks")

//     for (const nationalPark of parkTypesArray) {

//         const option = document.createElement("option")

//         option.value = nationalPark
//         option.innerText = nationalPark

//         selectElement.appendChild(option)
//         selectElement.onchange = selectedPark
//     }

// }

// //same thing here but for a different select box
// function parkStateData() {
//     const selectElement = document.querySelector("#state")

//     for (const stateData of locationsArray) {

//         const option = document.createElement("option")

//         option.value = stateData
//         option.innerText = stateData

//         selectElement.appendChild(option)
//     }

// }

// function selectedPark(changeEvent) {
//     let selectedEvent = changeEvent.target.value
//     let parkDisplayData = filterParkData(selectedEvent)
//     for (const element of parkDisplayData) {
//         // assigned variables from array
//         let localName = element.LocationName != null ? element.LocationName : "";
//         let localCity = element.City != null ? element.City : "";
//         let localState = element.State != null ? element.State : "";
//         let localAddress = element.Address != null ? element.Address : "";
//         let localVisit = element.Visit != null ? element.Visit : "";
//         let locationItem = document.createElement("p");

//         // style p tags with css
//         locationItem.classList.add('parks');

//         const out = document.getElementById("main");
//         const args = [localName, localCity, localState, localAddress, localVisit];

//         function parkFormat() {
//             for (const arg of args) {
//                 locationItem.appendChild(document.createTextNode(arg));
//                 locationItem.appendChild(document.createElement("br"));
//             }
//         }
//         parkFormat(args);
//         out.appendChild(locationItem);
//     }
// }

// function filterParkData(selectedEvent) {
//     const filterByParkData = nationalParksArray.filter((parkData) =>
//         parkData.LocationName.includes(selectedEvent)
//     );
//     return filterParkData;
// }

// window.onload = main;

// function main() {
//     nationParksInfo();
//     parkStateData();
// }

// function nationParksInfo() {
//     const selectElement = document.querySelector("#parks");

//     for (const nationalPark of parkTypesArray) {
//         const option = document.createElement("option");
//         option.value = nationalPark;
//         option.innerText = nationalPark;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedPark;
// }

// function parkStateData() {
//     const selectElement = document.querySelector("#state");

//     for (const stateData of locationsArray) {
//         const option = document.createElement("option");
//         option.value = stateData;
//         option.innerText = stateData;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedState;
// }

// function selectedPark(changeEvent) {
//     const selectedEvent = changeEvent.target.value;
//     const parkDisplayData = filterParkData(selectedEvent);

//     // Clear previous results
//     const out = document.getElementById("main");
//     out.innerHTML = "";

//     for (const element of parkDisplayData) {
//         let localName = element.LocationName != null ? element.LocationName : "";
//         let localCity = element.City != null ? element.City : "";
//         let localState = element.State != null ? element.State : "";
//         let localAddress = element.Address != null ? element.Address : "";
//         let localVisit = element.Visit != null ? element.Visit : "";
//         let locationItem = document.createElement("p");

//         locationItem.classList.add("parks");

//         const args = [localName, localCity, localState, localAddress, localVisit];

//         function parkFormat() {
//             for (const arg of args) {
//                 locationItem.appendChild(document.createTextNode(arg));
//                 locationItem.appendChild(document.createElement("br"));
//             }
//         }
//         parkFormat(args);
//         out.appendChild(locationItem);
//     }
// }

// function filterParkData(selectedEvent) {
//     const filterByParkData = nationalParksArray.filter((parkData) =>
//         parkData.LocationName.includes(selectedEvent)
//     );
//     return filterByParkData;
// }

// window.onload = main;

// function main() {
//     nationParksInfo();
//     parkStateData();
// }

// function nationParksInfo() {
//     const selectElement = document.querySelector("#parks");

//     for (const nationalPark of parkTypesArray) {
//         const option = document.createElement("option");
//         option.value = nationalPark;
//         option.innerText = nationalPark;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedPark;
// }

// function parkStateData() {
//     const selectElement = document.querySelector("#state");

//     for (const stateData of locationsArray) {
//         const option = document.createElement("option");
//         option.value = stateData;
//         option.innerText = stateData;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedState;
// }

// function selectedPark(changeEvent) {
//     const selectedEvent = changeEvent.target.value;
//     const parkDisplayData = filterParkData(selectedEvent);

//     displayData(parkDisplayData);
// }

// function selectedState(changeEvent) {
//     const selectedEvent = changeEvent.target.value;
//     const stateDisplayData = filterStateData(selectedEvent);

//     displayData(stateDisplayData);
// }

// function displayData(data) {
//     // Clear previous results
//     const out = document.getElementById("main");
//     out.innerHTML = "";

//     for (const element of data) {
//         let localName = element.LocationName != null ? element.LocationName : "";
//         let localCity = element.City != null ? element.City : "";
//         let localState = element.State != null ? element.State : "";
//         let localAddress = element.Address != null ? element.Address : "";
//         let localVisit = element.Visit != null ? element.Visit : "";
//         let locationItem = document.createElement("p");

//         locationItem.classList.add("parks");

//         const args = [localName, localCity, localState, localAddress, localVisit];

//         function parkFormat() {
//             for (const arg of args) {
//                 locationItem.appendChild(document.createTextNode(arg));
//                 locationItem.appendChild(document.createElement("br"));
//             }
//         }
//         parkFormat(args);
//         out.appendChild(locationItem);
//     }
// }

// function filterParkData(selectedEvent) {
//     const filterByParkData = nationalParksArray.filter((parkData) =>
//         parkData.LocationName.includes(selectedEvent)
//     );
//     return filterByParkData;
// }

// function filterStateData(selectedEvent) {
//     const filterByStateData = nationalParksArray.filter((parkData) =>
//         parkData.State.includes(selectedEvent)
//     );
//     return filterByStateData;
// }

// window.onload = main;

// function main() {
//     nationParksInfo();
//     parkStateData();
// }

// function nationParksInfo() {
//     const selectElement = document.querySelector("#parks");

//     for (const nationalPark of parkTypesArray) {
//         const option = document.createElement("option");
//         option.value = nationalPark;
//         option.innerText = nationalPark;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedPark;
// }

// function parkStateData() {
//     const selectElement = document.querySelector("#state");

//     for (const stateData of locationsArray) {
//         const option = document.createElement("option");
//         option.value = stateData;
//         option.innerText = stateData;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedState;
// }

// function selectedPark(changeEvent) {
//     const selectedEvent = changeEvent.target.value;
//     const parkDisplayData = filterParkData(selectedEvent);

//     displayData(parkDisplayData);
// }

// function selectedState(changeEvent) {
//     const selectedEvent = changeEvent.target.value;
//     const stateDisplayData = filterStateData(selectedEvent);

//     displayData(stateDisplayData);
// }

// function displayData(data) {
//     // Clear previous results
//     const out = document.getElementById("main");
//     out.innerHTML = "";

//     for (const element of data) {
//         let localName = element.LocationName != null ? element.LocationName : "";
//         let localCity = element.City != null ? element.City : "";
//         let localState = element.State != null ? element.State : "";
//         let localAddress = element.Address != null ? element.Address : "";
//         let localVisit = element.Visit != null ? element.Visit : "";
//         let locationItem = document.createElement("p");

//         locationItem.classList.add("parks");

//         const args = [localName, localCity, localState, localAddress, localVisit];

//         function parkFormat() {
//             for (const arg of args) {
//                 locationItem.appendChild(document.createTextNode(arg));
//                 locationItem.appendChild(document.createElement("br"));
//             }
//         }
//         parkFormat(args);
//         out.appendChild(locationItem);
//     }
// }

// function filterParkData(selectedEvent) {
//     const filterByParkData = nationalParksArray.filter((parkData) =>
//         parkData.LocationName.includes(selectedEvent)
//     );
//     return filterByParkData;
// }

// function filterStateData(selectedEvent) {
//     const filterByStateData = nationalParksArray.filter((parkData) =>
//         parkData.State === selectedEvent
//     );
//     return filterByStateData;
// }

// window.onload = main;

// function main() {
//     nationParksInfo();
//     parkStateData();
// }

// function nationParksInfo() {
//     const selectElement = document.querySelector("#parks");

//     for (const nationalPark of parkTypesArray) {
//         const option = document.createElement("option");
//         option.value = nationalPark;
//         option.innerText = nationalPark;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedPark;
// }

// function parkStateData() {
//     const selectElement = document.querySelector("#state");

//     for (const stateData of locationsArray) {
//         const option = document.createElement("option");
//         option.value = stateData;
//         option.innerText = stateData;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedState;
// }

// function selectedPark(changeEvent) {
//     const selectedEvent = changeEvent.target.value;
//     const selectedState = document.querySelector("#state").value;

//     const parkDisplayData = filterParkData(selectedEvent, selectedState);
//     displayData(parkDisplayData);
// }

// function selectedState(changeEvent) {
//     const selectedEvent = changeEvent.target.value;
//     const selectedPark = document.querySelector("#parks").value;

//     const stateDisplayData = filterStateData(selectedEvent, selectedPark);
//     displayData(stateDisplayData);
// }

// function displayData(data) {
//     // Clear previous results
//     const out = document.getElementById("main");
//     out.innerHTML = "";

//     for (const element of data) {
//         let localName = element.LocationName != null ? element.LocationName : "";
//         let localCity = element.City != null ? element.City : "";
//         let localState = element.State != null ? element.State : "";
//         let localAddress = element.Address != null ? element.Address : "";
//         let localVisit = element.Visit != null ? element.Visit : "";
//         let locationItem = document.createElement("p");

//         locationItem.classList.add("parks");

//         const args = [localName, localCity, localState, localAddress, localVisit];

//         function parkFormat() {
//             for (const arg of args) {
//                 locationItem.appendChild(document.createTextNode(arg));
//                 locationItem.appendChild(document.createElement("br"));
//             }
//         }
//         parkFormat(args);
//         out.appendChild(locationItem);
//     }
// }

// function filterParkData(selectedPark, selectedState) {
//     const filteredParkData = nationalParksArray.filter(
//         (parkData) =>
//             parkData.LocationName.includes(selectedPark) &&
//             parkData.State === selectedState
//     );
//     return filteredParkData;
// }

// function filterStateData(selectedState, selectedPark) {
//     const filteredStateData = nationalParksArray.filter(
//         (parkData) =>
//             parkData.State === selectedState &&
//             (selectedPark === "" || parkData.LocationName.includes(selectedPark))
//     );
//     return filteredStateData;
// }

// window.onload = main;

// function main() {
//     nationParksInfo();
//     parkStateData();
// }

// function nationParksInfo() {
//     const selectElement = document.querySelector("#parks");

//     for (const nationalPark of parkTypesArray) {
//         const option = document.createElement("option");
//         option.value = nationalPark;
//         option.innerText = nationalPark;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedPark;
// }

// function parkStateData() {
//     const selectElement = document.querySelector("#state");

//     for (const stateData of locationsArray) {
//         const option = document.createElement("option");
//         option.value = stateData;
//         option.innerText = stateData;
//         selectElement.appendChild(option);
//     }

//     selectElement.onchange = selectedState;
// }

// function selectedPark() {
//     const selectedPark = document.querySelector("#parks").value;
//     const selectedState = document.querySelector("#state").value;

//     const parkDisplayData = filterParkData(selectedPark, selectedState);
//     displayData(parkDisplayData);
// }

// function selectedState() {
//     const selectedPark = document.querySelector("#parks").value;
//     const selectedState = document.querySelector("#state").value;

//     const stateDisplayData = filterStateData(selectedState, selectedPark);
//     displayData(stateDisplayData);
// }

// function displayData(data) {
//     // Clear previous results
//     const out = document.getElementById("main");
//     out.innerHTML = "";

//     for (const element of data) {
//         let localName = element.LocationName != null ? element.LocationName : "";
//         let localCity = element.City != null ? element.City : "";
//         let localState = element.State != null ? element.State : "";
//         let localAddress = element.Address != null ? element.Address : "";
//         let localVisit = element.Visit != null ? element.Visit : "";
//         let locationItem = document.createElement("p");

//         locationItem.classList.add("parks");

//         const args = [localName, localCity, localState, localAddress, localVisit];

//         function parkFormat() {
//             for (const arg of args) {
//                 locationItem.appendChild(document.createTextNode(arg));
//                 locationItem.appendChild(document.createElement("br"));
//             }
//         }
//         parkFormat(args);
//         out.appendChild(locationItem);
//     }
// }

// function filterParkData(selectedPark, selectedState) {
//     const filteredParkData = nationalParksArray.filter(
//         (parkData) =>
//             parkData.LocationName.includes(selectedPark) &&
//             (selectedState === "" || parkData.State === selectedState)
//     );
//     return filteredParkData;
// }

// function filterStateData(selectedState, selectedPark) {
//     const filteredStateData = nationalParksArray.filter(
//         (parkData) =>
//             parkData.State === selectedState &&
//             (selectedPark === "" || parkData.LocationName.includes(selectedPark))
//     );
//     return filteredStateData;
// }

window.onload = main;

function main() {
    nationParksInfo();
    parkStateData();
}

function nationParksInfo() {
    const selectElement = document.querySelector("#parks");

    for (const nationalPark of parkTypesArray) {
        const option = document.createElement("option");
        option.value = nationalPark;
        option.innerText = nationalPark;
        selectElement.appendChild(option);
    }

    selectElement.onchange = selectedPark;
}

function parkStateData() {
    const selectElement = document.querySelector("#state");

    for (const stateData of locationsArray) {
        const option = document.createElement("option");
        option.value = stateData;
        option.innerText = stateData;
        selectElement.appendChild(option);
    }

    selectElement.onchange = selectedState;
}

function selectedPark() {
    const selectedPark = document.querySelector("#parks").value;
    const selectedState = document.querySelector("#state").value;

    const parkDisplayData = filterParkData(selectedPark, selectedState);
    displayData(parkDisplayData);
}

function selectedState() {
    const selectedPark = document.querySelector("#parks").value;
    const selectedState = document.querySelector("#state").value;

    const stateDisplayData = filterStateData(selectedState, selectedPark);
    displayData(stateDisplayData);
}

function displayData(data) {
    const out = document.getElementById("main");
    out.innerHTML = "";

    for (const element of data) {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        card.style.backgroundColor = "rgba(255, 255, 255, 0.5)";


        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerText = element.LocationName;

        const subtitle = document.createElement("h6");
        subtitle.classList.add("card-subtitle", "mb-2", "text-muted");
        subtitle.innerText = `${element.City}, ${element.State}`;

        const address = document.createElement("p");
        address.classList.add("card-text");
        address.innerText = element.Address;

        const visit = document.createElement("p");
        visit.classList.add("card-text");
        visit.innerText = element.Visit;

        cardBody.appendChild(title);
        cardBody.appendChild(subtitle);
        cardBody.appendChild(address);
        cardBody.appendChild(visit);
        card.appendChild(cardBody);
        out.appendChild(card);
    }
}

function filterParkData(selectedPark, selectedState) {
    const filteredParkData = nationalParksArray.filter(
        (parkData) =>
            parkData.LocationName.includes(selectedPark) &&
            (selectedState === "" || parkData.State === selectedState)
    );
    return filteredParkData;
}

function filterStateData(selectedState, selectedPark) {
    const filteredStateData = nationalParksArray.filter(
        (parkData) =>
            parkData.State === selectedState &&
            (selectedPark === "" || parkData.LocationName.includes(selectedPark))
    );
    return filteredStateData;
}



