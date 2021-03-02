import React, { Component } from 'react';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddOrderModal } from './AddOrderModal'
import { UpdateOrderModal } from './UpdateOrderModal'
export class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            addModalShow: false,
            updateModalShow:false
        }
    }


    componentDidMount() {
        this.setState({
            orders: [{
                "id": 1, "vendor": "Amazon", "status": "placed", "complete": "true", "shipDate": "2020-06-13T03:13:34.047Z", Customer: { "id": 1, "firstName": "mouhcine", "lastName": "Soufi" },
                "amount": 20154, "productId": 5
            },
            {
                "id": 2, "vendor": "E-bay", "status": "placed", "complete": "true", "shipDate": "2020-06-13T03:13:34.047Z", Customer: { "id": 1, "firstName": "Noureddin", "lastName": "Souad" },
                "amount": 20154, "productId": 5
            },
            {
                "id": 3, "vendor": "Amazon", "status": "placed", "complete": "true", "shipDate": "2020-06-13T03:13:34.047Z", Customer: { "id": 1, "firstName": "mouhcine", "lastName": "Soufi" },
                "amount": 20154, "productId": 5
            }]
        })
    }

    /*refreshList(){
        fetch('')
        .then(response=> response.json())
        .then (date=>{
            this.setState({orders:data});
        });
    }


    componentDidUpdate(){
        this.refreshList()
    }*/

    deleteOrder(id){
        if(window.confirm('Are you sure ?'))
        {
            fetch(''+id,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                }
            })
        }

    }



    render() {
        const { orders,id,vendor,status,complete,shipDate,first,last,amount,productId } = this.state;
        let addModalClose = () => { this.setState({ addModalShow: false }) };
        let updateModalClose = () => { this.setState({ updateModalShow: false }) };

        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sl">
                    <thead>
                        <tr>
                            <th class="text-center">Order ID</th>
                            <th class="text-center">Vendor</th>
                            <th class="text-center">Status</th>
                            <th class="text-center">Complete</th>
                            <th class="text-center">Date</th>
                            <th class="text-center">Customer Name</th>
                            <th class="text-center">Amount(DH)</th>
                            <th class="text-center">Product ID</th>
                            <th class="text-center">Option</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order =>
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.vendor}</td>
                                <td>{order.status}</td>
                                <td>{order.complete}</td>
                                <td>{order.shipDate}</td>
                                <td>{order.Customer.firstName + " " + order.Customer.lastName}</td>
                                <td>{order.amount}</td>
                                <td>{order.productId}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" onClick={()=>this.setState({updateModalShow:true, id:order.id, vendor:order.vendor, status:order.status, 
                                        complete:order.complete, shipDate:order.shipDate, first:order.Customer.firstName, last:order.Customer.lastName, amount:order.amount, productId:order.productId})}>EDIT</Button>
                                        <Button className="mr-2" variant="danger" onClick={()=>this.deleteOrder(order.id)}>DELETE</Button>

                                        <UpdateOrderModal show={this.state.updateModalShow} onHide={updateModalClose} 
                                        id={id} vendor={vendor} status={status} complete={complete} date={shipDate} first={first} last={last} amount={amount}
                                        productId={productId}/>

                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>

                </Table>
                <ButtonToolbar>
                    <Button variant="primary" onClick={() => this.setState({ addModalShow: true })}>Add Order</Button>
                    <AddOrderModal show={this.state.addModalShow} onHide={addModalClose} />
                </ButtonToolbar>
            </div>

        )
    }
}