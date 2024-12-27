import Cell from "../../Cell/Cell"
import LevelBars from "../../LevelBars/LevelBars";
import Row from "../../Row/Row";
import Typography from "../../Typography/Typography";
import './Card.css';

const Card = ({ title, level, description, size = 4 }) => {
    return (
        <Cell className="card" xs={size}>
            <Row>
                <Cell xs={6}>
                    <Typography  type="h3">{title}</Typography>
                </Cell>
                <Cell xs={6}>
                    <LevelBars level={level} />
                </Cell>
            </Row>
            <Row>
                <Cell xs={12}>
                    <Typography type="text">{description}</Typography>
                </Cell>
            </Row>
        </Cell>
    );
}

export default Card;