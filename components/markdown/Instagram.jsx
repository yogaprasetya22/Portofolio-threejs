export const Atoms = `~~~js
import { atom, selector } from "recoil";
import { v1 } from "uuid";

export const modalState = atom({
    key: 'modalState/' + v1(),
    default: false,
});

export const modalComments = atom({
    key: 'modalComments/' + v1(),
    default: false,
});

export const modalDataCommentsId = atom({
    key: 'modalDataCommentsId/' + v1(),
    default: null,
});
~~~`
