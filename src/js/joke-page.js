import { getJock } from "./http-provider";

const body = document.body;
let btnAnotherJoke, olList;

const createJokeHtml = () => {
    const html = `<h1 class="mt-5">Http Jokes</h1>
                <hr>
                <button class="btn btn-primary">+ Chiste</button>
                <ol class="mt-2 list-group">
                </ol>`;

    const divJokes = document.createElement("div");
    divJokes.innerHTML = html;

    body.append(divJokes);
};

const _events = () => {
    btnAnotherJoke = document.querySelector("button");
    olList = document.querySelector("ol");

    btnAnotherJoke.addEventListener("click", async (event) => {
        btnAnotherJoke.disabled = true;
        drawJoke(await getJock());
        btnAnotherJoke.disabled = false;
    });
};

// id, value
const drawJoke = (joke) => {
    const olItem = document.createElement("li");
    olItem.innerHTML = `<b>${joke.id}</b>: ${joke.value}`;
    olItem.classList.add("list-group-item");

    olList.append(olItem);
};

export const init = () => {
    createJokeHtml();
    _events();
};
