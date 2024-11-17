import Card from 'react-bootstrap/Card';

export default function FoodCard(props){
    const {foodName} = props;
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{foodName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card titel and make up the bulk of the cards content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}