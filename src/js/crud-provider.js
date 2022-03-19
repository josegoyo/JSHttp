const urlCrud = "https://reqres.in/api/users";

const getUser = async (id) => {
    const response = await fetch(`${urlCrud}/${id}`);
    const { data } = await response.json();

    return data;
};

const createUser = async (user) => {
    const response = await fetch(`${urlCrud}`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json",
        },
    });

    return await response.json();
};

const updatUser = async (id, user) => {
    const response = await fetch(`${urlCrud}/${id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json",
        },
    });

    return await response.json();
};

const deleteUser = async (id) => {
    const response = await fetch(`${urlCrud}/${id}`, {
        method: "DELETE",
    });

    return response.ok ? "Borrado" : "No se pudo eliminar";
};

export { getUser, createUser, updatUser, deleteUser };
