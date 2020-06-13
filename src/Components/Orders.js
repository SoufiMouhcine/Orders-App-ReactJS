import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders:[]
        }
    }
    

    componentDidMount(){
        this.setState({orders:[{"id":1,"vendor":"Amazon","status":"placed","complete":"true","shipDate":"2020-06-13T03:13:34.047Z",Customer:{"id":1,"firstName":"mouhcine","lastName":"Soufi"},
    "amount":20154,"productId":5}, 
    {"id":1,"vendor":"Amazon","status":"placed","complete":"true","shipDate":"2020-06-13T03:13:34.047Z",Customer:{"id":1,"firstName":"mouhcine","lastName":"Soufi"},
    "amount":20154,"productId":5}, 
    {"id":1,"vendor":"Amazon","status":"placed","complete":"true","shipDate":"2020-06-13T03:13:34.047Z",Customer:{"id":1,"firstName":"mouhcine","lastName":"Soufi"},
    "amount":20154,"productId":5}]})
    }






    render() {
        const {orders}=this.state
        return (
                <Table className="mt-4" striped bordered hover size="sl">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Vendor</th>
                            <th>Status</th>
                            <th>Complete</th>
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Amount(DH)</th>
                            <th>Product ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order=>
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.vendor}</td>
                                <td>{order.status}</td>
                                <td>{order.complete}</td>
                                <td>{order.shipDate}</td>
                                <td>{order.Customer.firstName+" "+order.Customer.lastName}</td>
                                <td>{order.amount}</td>
                                <td>{order.productId}</td>
                            </tr>
                            )}
                    </tbody>

                </Table>


        )
    }
}