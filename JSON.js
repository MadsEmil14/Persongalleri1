// hent url
const url = "https://persongalleri-c32e.restdb.io/rest/personer";

// hent api-key
const options = {
  headers: {
    "x-apikey": "630797081635890a326f6931",
  },
};

async function hentData() {
  const resspons = await fetch(url, options);
  const json = await resspons.json();
  //   console.log(json);
  vis(json);
}

const main = document.querySelector("#holder");
const template = document.querySelector("template").content;

function vis(json) {
  console.log(json);
  json.forEach((json) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".imagess").src = "./images/" + json.potrait;
    klon.querySelector(".fornavn").textContent = json.fornavn;
    klon.querySelector(".email").textContent = json.email;
    klon.querySelector(".fødselsdag").textContent = json.birthday;
    main.appendChild(klon);
  });
}

hentData();
