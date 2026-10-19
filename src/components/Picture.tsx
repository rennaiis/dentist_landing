import type { PictureProps } from "../types";


export default function Picture(pictureProps: PictureProps){
    const {sources, imgAttr} = pictureProps;
    return(
        <picture className={pictureProps?.className}>
            {sources.map((source, index)=>(
                <source 
                    key={index}
                    srcSet={source.srcSet}
                    media={source.media || ''}
                    type={source.type || ''}
                />
            ))}
            <img src={imgAttr.src} alt={imgAttr.alt || ''} />
        </picture>
    )
}