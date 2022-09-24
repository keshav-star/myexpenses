import React from "react";
import Card from 'react-bootstrap/Card';
import { Fund, Expense } from './Cardholder'

export default function Book({ cleft, cright }) {
    let leftamount = 0;
    cleft.map((data) => {
        leftamount += parseFloat(data.amount);
    });
    let rightamount = 0;
    cright.map((data) => {
        rightamount += parseFloat(data.amount);
    });
    let total = leftamount - rightamount;    

    return (
        <>
            <div className="indiv d-flex w-50 m-auto">
                <Card className="text-center w-50 m-auto">
                    <div className='d-flex p-2'>
                        <h4 className='title pt-1 '>Income</h4>
                        <button type="button" className='amount btn btn-primary ms-auto '>₹ {leftamount}</button>
                    </div>
                </Card>
                <Card className="text-center w-50 m-auto ">
                    <div className='d-flex p-2'>
                        <h4 className='title pt-1 '>Expenditure</h4>
                        <button type="button" className='amount btn btn-primary ms-auto '>₹ {rightamount}</button>
                    </div>
                </Card>
            </div>
            <div className="total mb-3">
                <Card className="text-center w-25 m-auto">
                    <div className='d-flex p-2'>
                        <h4 className='title pt-1 '>Total</h4>
                        <button type="button" className="total btn btn-primary ms-auto" id="amt" >₹ {total}</button>
                    </div>
                </Card>
            </div>

            <div className="container d-flex ms-auto">
                <div className="left w-50 ">
                    {cleft.length === 0 ? "Nothing there" : cleft.map((data) => {
                        return <Fund key={data.title} title={data.title} amount={data.amount} />
                    })}
                </div>
                <div className="right w-50">
                    {cright.length === 0 ? "Nothing there" : cright.map((data) => {
                        return <Expense key={data.title} title={data.title} amount={data.amount} />
                    })}
                </div>
            </div>
        </>

    )
}
