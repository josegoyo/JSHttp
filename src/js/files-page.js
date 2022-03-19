import { uploadImage } from "./http-provider";

const body = document.body;
let inputFile, imgPhoto;

const createInputFile = () => {
    const html = `
        <h1 class="mt-5">Subir fotografia</h1>
        <hr>
        <label>Selecciona una fotografia</label>    
        <input type="file" accept="image/png, image/jpeg">
        <br>
        <img src="" id="photo" class="img-thumbnail">
    `;

    const div = document.createElement("div");
    div.innerHTML = html;

    body.append(div);

    inputFile = document.querySelector("input");
    imgPhoto = document.querySelector("#photo");
};

const _events = async () => {
    inputFile.addEventListener("change", async (event) => {
        const file = event.target.files[0];
        console.log("file", file);
        uploadImage(file).then((url) => {
            imgPhoto.src = url;
        });
    });
};

export const init = () => {
    createInputFile();
    _events();
};
