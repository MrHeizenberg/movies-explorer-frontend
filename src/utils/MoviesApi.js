const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function checkResStatus(response) {
    if (response.ok) {
        return response.json();
    }
    else {
        return Promise.reject(response.status);
    }
}

export const getCards = () => {
    return fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        return checkResStatus(response);
    })
}