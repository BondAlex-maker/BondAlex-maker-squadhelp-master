import React from "react";
import styles from "./TransactionPage.module.sass";
import Table from "react-bootstrap/Table";
import Header from "../../components/Header/Header";




const TransactionPage = () => {

 return (
     <><Header></Header>
     <Table className={styles.container} classna striped bordered hover variant="dark" >
    <thead>
    <tr>
        <th>id</th>
        <th>money</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td>500$</td>
        <td>earned</td>
    </tr>
    <tr>
        <td>2</td>
        <td>-300$</td>
        <td>spent</td>
    </tr>
    <tr>
        <td>3</td>
        <td>200$</td>
        <td>@earned</td>
    </tr>
    </tbody>
</Table>
         </>)

}

export default TransactionPage;