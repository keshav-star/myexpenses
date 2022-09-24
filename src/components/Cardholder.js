import Card from 'react-bootstrap/Card';
import '../App.css'
export function Expense({ title, amount }) {
  return (
    <div className="text-center w-50 m-auto">
      <div className='d-flex p-2'>
        <h4 className='title text-uppercase pt-1 '>{title}</h4>
        <button type="button" className='amount btn btn-danger ms-auto '>₹ {amount}</button>
      </div>
    </div>
  )
}
export function Fund({ title, amount }) {
  return (
    <Card className="text-center w-50 m-auto">
      <div className='d-flex p-2'>
        <h4 className='title text-uppercase pt-1 '>{title}</h4>
        <button type="button" className='amount btn btn-success ms-auto '>₹ {amount}</button>
      </div>
    </Card>
  )
}
