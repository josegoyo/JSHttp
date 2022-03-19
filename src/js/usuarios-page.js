import { getUsers } from "./http-provider";

const body = document.body;
let tbody;
let _index = 0;

const crearHtml = () => {
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement("div");
    div.innerHTML = html;
    body.appendChild(div);

    tbody = document.querySelector("tbody");
};

const crearFilaUsuario = ({ avatar, email, first_name, last_name }) => {
    _index++;
    const html = `
        <td scope="col"> ${_index}. </td>
        <td scope="col"> ${email}</td>
        <td scope="col"> ${first_name} ${last_name}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${avatar}">
        </td>
    `;

    const tr = document.createElement("tr");
    tr.innerHTML = html;

    tbody.append(tr);
};

export const init = async () => {
    _index = 0;
    crearHtml();
    const { users } = await getUsers();

    for (let user of users) {
        crearFilaUsuario(user);
    }
};
