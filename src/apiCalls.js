const apiURL = 'https://car-mng-api-b.onrender.com';

async function fetchAPI(headerOptions, body, method, uri) {
    const myHeaders = new Headers(headerOptions);

    const myInit = {
        method: method,
        headers: myHeaders,
        mode: 'cors',
    };
    
    if (Object.keys(body).length !== 0) { myInit['body'] = JSON.stringify(body) }

    const apiData = await fetch(uri, myInit);
    const jsonResponse = await apiData.json();
    return { apiData, jsonResponse };
}

export async function registerUser(name, password) {
    const headerOptions = {
        "Content-Type": "application/json"
    };

    const body = {
        "name": name,
        "password": password
    }

    const { apiData, jsonResponse } = await fetchAPI(headerOptions, body, 'POST', `${apiURL}/auth/register`);
    return { apiData, jsonResponse };
}

export async function logUsuario(name, password) {
    const headerOptions = {
        "Content-Type": "application/json"
    };

    const body = {
        "name": name,
        "password": password,
    }

    const { apiData, jsonResponse } = await fetchAPI(headerOptions, body, 'POST', `${apiURL}/auth/user`);
    return { apiData, jsonResponse };
}
