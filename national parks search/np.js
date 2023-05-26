
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

        cardBody.appendChild(title);
        cardBody.appendChild(subtitle);
        cardBody.appendChild(address);

        const visit = document.createElement("p");
        visit.classList.add("card-text");
        if (element.Visit !== undefined) {
            visit.innerText = element.Visit;
        } else {
            visit.style.display = "none"; // Hide the visit element if element.Visit is undefined
        }
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



