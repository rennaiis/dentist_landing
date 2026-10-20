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

export default interface CardProps{
    title: string, 
    picture: PictureProps,
    href: string, 
    button: ButtonProps, 
    arrow: ButtonProps
}
export interface ButtonProps {
    text?: string;
    icon?: string;
    href?: string;
    mod?: string;
}


