export interface IShowContent {
    name: string;
    summary: string;
    image: IShowImage;
}

export interface IShowEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    image: IShowImage;
    summary: string;
}

interface IShowImage {
    medium: string;
    original: string;
}
