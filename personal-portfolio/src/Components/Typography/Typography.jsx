import './Typography.css';

const Typography = ({ children, className = '', type = 'text', align = 'left', justify = false }) => {
    const alignClass = `text-${align}`;
    const justifyClass = justify ? 'text-justify' : '';
    
    switch (type) {
        case 'title':
            return <h1 className={`title ${alignClass} ${justifyClass} ${className}`}>{children}</h1>
        case 'subtitle':
            return <h2 className={`subtitle ${alignClass} ${justifyClass} ${className}`}>{children}</h2>
        case 'h3':
            return <h3 className={`h3 ${alignClass} ${justifyClass} ${className}`}>{children}</h3>
        case 'caption':
            return <span className={`caption ${alignClass} ${justifyClass} ${className}`}>{children}</span>
        case 'link':
            return <a href="#" className={`link ${alignClass} ${justifyClass} ${className}`}>{children}</a>
        case 'label':
            return <label className={`label ${alignClass} ${justifyClass} ${className}`}>{children}</label>
        case 'error':
            return <p className={`error ${alignClass} ${justifyClass} ${className}`}>{children}</p>
        default:
            return <p className={`text ${alignClass} ${justifyClass} ${className}`}>{children}</p>
    }
}

export default Typography;