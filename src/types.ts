export interface Source {
    srcSet: string;
    media?: string;
    type?: string;
}

export interface PictureProps {
    className?: string;
    sources: Source[],
    imgAttr: {
        src: string;
        alt?: string;

    }
}


export interface ButtonProps {
    text?: string;
    icon?: string;
    href?: string
}
