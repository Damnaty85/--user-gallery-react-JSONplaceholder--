import { SET_ALBUMS, SET_PHOTOS, SET_PHOTOS_COUNT, SET_USERS } from "../actions/types";

const initialState = {
    users: [],
    albums: [],
    photos:[],
    albumCover: [],
    countPhoto: 0,
};

const fetchData = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case SET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
            };
        case SET_PHOTOS:
            const currentValue = !state.albumCover[action.payload.id]
                        ? [action.payload]
                        : [...state.albumCover[action.payload[0]['thumbnailUrl']].albumCover, action.payload]

            const newItems = {
                ...state.albumCover,
                [action.payload[0]['id']]: {
                    albumCover: currentValue
                },
            };

            return {
                ...state,
                photos: action.payload,
                albumCover: newItems
            };
        case SET_PHOTOS_COUNT:
            return {
                ...state,
                countPhoto: action.payload,
            };
        default:
            return state;
    }
};

export default fetchData;
