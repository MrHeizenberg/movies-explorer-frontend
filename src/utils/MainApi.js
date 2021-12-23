const BASE_URL = 'https://api.diploma-avdeev.nomoredomains.work';

function checkResStatus(response) {
    if (response.ok) {
        return response.json();
    }
    else {
        return Promise.reject(response.status);
    }
}

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
        .then((response) => {
            return checkResStatus(response);
        })
};

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
        .then((response) => {
            return checkResStatus(response);
        })
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        }
    })
        .then((response) => {
            return checkResStatus(response);
        })
}

export const addMovie = (token, country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN, isSaved) => {
        return fetch(`${BASE_URL}/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN })
        })
            .then((response) => {
                return checkResStatus(response);
            })
}

export const deleteMovie = (token, movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        }
    })
        .then((response) => {
            return checkResStatus(response);
        })
}

export const getSavedCards = (token) => {
    return fetch(`${BASE_URL}/movies/`, {
        method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            }
    })
    .then((response) => {
        return checkResStatus(response);
    })
}

export const profileUpdate = (name, email, token) => {
    return fetch(`${BASE_URL}/users/me/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(res => {
            return checkResStatus(res);
        })
}