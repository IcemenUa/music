import { IAlbum } from "../interfaces/album.interface";


export class Album implements IAlbum {
    readonly role = 'user';
    constructor(
        public artist: string,
        public name: string,
        public img: string,
        public isLiked: boolean,

    ) { }
}