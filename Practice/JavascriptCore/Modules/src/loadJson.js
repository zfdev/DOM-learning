import {
    HttpError
} from './error';
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        let json = await response.json();
        return json;
    } else {
        throw new HttpError(response);
    }
}

export {
    loadJson,
}