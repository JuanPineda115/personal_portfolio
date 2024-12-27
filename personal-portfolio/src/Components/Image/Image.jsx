import './Image.css';

const Image = ({
    src, 
    alt, 
    width, 
    height,
    fit = "cover",
    position = "center",
    className,
    style
}) => {
    return (
        <img 
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            style={{
                objectFit: fit,
                objectPosition: position,
                ...style
            }}
        />
    );
}

export default Image;