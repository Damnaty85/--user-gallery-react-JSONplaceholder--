import { SET_USERS, SET_ALBUMS, SET_PHOTOS, BASE_URL, SET_PHOTOS_COUNT } from "./types";

const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});

export const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    payload: albums,
});

export const setPhotos = (photos) => ({
    type: SET_PHOTOS,
    payload: photos,
});

export const setPhotosCount = (count) => ({
    type: SET_PHOTOS_COUNT,
    payload: count,
});

export const fetchUsers = () => async (dispatch) => {
    await fetch(`${BASE_URL}/users/`)
        .then(response => response.json())
        .then(data => dispatch(setUsers(data)))
};

export const fetchAlbums = (userId) => async (dispatch) => {
    await fetch(`${BASE_URL}/albums?userId=${userId}`)
        .then(response => response.json())
        .then(data => dispatch(setAlbums(data)))
};

export const fetchPhotos = (albumId) => async (dispatch) => {
    await fetch(`${BASE_URL}/photos?albumId=${albumId}`)
        .then(response => response.json())
        .then(data => {
                dispatch(setPhotos(data));
                dispatch(setPhotosCount(data.length));
            }
        )
};
