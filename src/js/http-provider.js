const jokeURl = "https://api.chucknorris.io/jokes/random";
const usersURL = "https://reqres.in/api/users?page=2";
const cloudURL = "https://api.cloudinary.com/v1_1/dcspiynkh/image/upload";
const cloudPreset = "xxxxx";

const getJock = async () => {
    try {
        const response = await fetch(jokeURl);
        if (!response.ok) throw "no se pudo realizar la peticion";

        const { icon_url, id, value } = await response.json();

        return { icon_url, id, value };
    } catch (error) {
        throw error;
    }
};

const getUsers = async () => {
    try {
        const response = await fetch(usersURL);
        if (!response.ok) throw "no se pudo realizar la peticion de usuarios";

        const { data: users } = await response.json();

        return { users };
    } catch (error) {
        throw error;
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("upload_preset", cloudPreset);
    formData.append("file", file);

    try {
        const response = await fetch(cloudURL, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            const cloudResponse = await response.json();

            return cloudResponse.secure_url;
        } else {
            throw await response.json();
        }
    } catch (error) {
        throw error;
    }
};

export { getJock, getUsers, uploadImage };
