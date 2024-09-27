import React from 'react';
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap';

const Checkout: React.FC = () => {
    return (
        <Card style={{ padding: '20px', width: '100%' }}>
            <Card.Body>
                <Card.Title>Checkout</Card.Title>
                <Form>
                    {/* Billing Information */}
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your address" />
                    </Form.Group>

                    <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter your city" />
                    </Form.Group>

                    <Form.Group controlId="formPostalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" placeholder="Enter your postal code" />
                    </Form.Group>

                    <Form.Group controlId="formCardDetails">
                        <Form.Label>Credit Card</Form.Label>
                        <Form.Control type="text" placeholder="Card number" />
                    </Form.Group>

                    <Form.Group controlId="formExpiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>

                    <Form.Group controlId="formCVV">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" placeholder="CVV" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Place Order
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Checkout;