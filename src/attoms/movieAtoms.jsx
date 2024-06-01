import { atom } from 'recoil';

export const topRatedMoviesState = atom({
    key: 'topRatedMoviesState',
    default: false,
});

export const darkModeState = atom({
    key: 'darkModeState',
    default: false,
});
