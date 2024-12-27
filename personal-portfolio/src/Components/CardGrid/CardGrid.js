import Row from "../Row/Row";
import Card from "./Card/Card";

const calculateOptimalSize = (itemCount) => {
    // Para menos de 3 items
    if (itemCount <= 2) return 6; // half width
    // Para 3 o 4 items
    if (itemCount <= 4) return 3; // quarter width
    // Para 5 o 6 items
    if (itemCount <= 6) return 4; // third width
    // Para más de 6 items
    return 3; // quarter width por defecto
};

const CardGrid = ({ data }) => {
    const size = calculateOptimalSize(data.length);

    return (
        <Row className="card-grid" justify="center">
            {data ? data.map((item, index) => (
                <Card 
                    key={index} 
                    title={item.title} 
                    level={item.level} 
                    description={item.description}
                    size={size}
                />
            )) : null}
        </Row>
    );
}

export default CardGrid;