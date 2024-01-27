type WebMethod = "GET" | "POST" | "DELETE" | "PATCH";

const SERVER_URL = "http://localhost:8080";
const API_BASE_PATH = 'api/v1';


export async function webGet(path: string, data?: any) {
    return webCall("GET", path, data);
}

export async function webPost(path: string, data: any) {
    return webCall("POST", path, data);
}

export async function webPatch(path: string, data: any) {
    return webCall("PATCH", path, data);
}

export async function webDelete(path: string, data?: any) {
    return webCall("DELETE", path, data);
}


async function webCall(httpMethod: WebMethod, path: string, data?: any) {
    const url = `${SERVER_URL}/${API_BASE_PATH}/${path}`;

    const response = await fetch(url, {
        method: httpMethod,
        // mode: 'same-origin',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': '123'
        },
        body: JSON.stringify(data)
    });

    let res = await response.json();
    return res
    // return res.data;
}