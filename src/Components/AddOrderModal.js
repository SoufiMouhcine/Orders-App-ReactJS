import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class AddOrderModal extends Component {

    constructor(props) {
        super(props);

        this.state = { snackbaropen: false, snackbarmsg: '' };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };




    handleSubmit(event) {
        event.preventDefault();
        this.setState({snackbaropen:true, snackbarmsg:"order has been added successfully"});

        //alert(event.target.id.value);

        /*fetch('',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:null,
                vendor:event.target.vendor.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            this.setState({snackbaropen:true, snackbarmsg:"order has been added successfully"});
        },
        (error)=>{
            this.setState({snackbaropen:true, snackbarmsg:"Failed to add order"});
        })*/

    }


    render() {
        return (
            <div className="container">
                <Snackbar 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={this.state.snackbaropen}
                autoHideDuartion={3000}
                onClose={this.snackbarClose}
                message={<span id="message id">{this.state.snackbarmsg}</span>}
                action={[
                    <IconButton
                        key="close"
                        arail-label="close"
                        color="inherit"
                        onClick={this.snackbarClose}>
                            x
                    </IconButton>
                ]}
                />

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Order
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={12}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="id">
                                        <Form.Label>Order ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            placeholder="Order-ID"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="vendor">
                                        <Form.Label>Vendor</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            placeholder="vendor"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="id">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            placeholder="Status"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="id">
                                        <Form.Label>Complete</Form.Label>
                                        <select class="custom-select" name="Complete" >
                                            <option selected>Sélectionner True / False</option>
                                            <option value="true">True</option>
                                            <option value="false">False</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group controlId="id">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control
                                            type="Date"
                                            name="id"
                                            required
                                            placeholder="Date"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="id">
                                        <Form.Label>Customer Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            placeholder="Customer Name"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="id">
                                        <Form.Label>Amount(DH)</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            placeholder="Amount en DH"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="id">
                                        <Form.Label>Product ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            placeholder="Product ID"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">Add Order</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}