import React, {useState} from 'react'
import './Output.css'
function Output(props) {
  const [show,setShow] = useState(false)
  function totalTipCustomer(){
      setShow(true)
  
  }


  return (
  
    <div className="container justify-content-center mt-4">
      <h2> CUSTOMER'S LIST </h2>

      <table class="table table-striped ">

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Customer Name </th>
            <th scope="col"> Tip Amount </th>
          </tr>
        </thead>

        <tbody>
          {
            props.result.map((ele, index) => (

              <tr>
                <th scope="row">{index + 1}</th>
                <td>{ele.name} </td>
                <td>{ele.totalBill} </td>
              </tr>
            ))

          }

        </tbody>
      </table>
      <div className="button">
        <button type="button" class="btn btn-secondary active text-align-center" onClick={totalTipCustomer} data-bs-toggle="button" autocomplete="off" aria-pressed="true"> Total Tip & Customer</button>
      </div>

      <div class="alert alert-warning  offset-3 alert-dismissible fade show col-md-6 mt-5 mb-4" role="alert">

        Total Customer :  <strong>

          {

            show ? props.result.length : ''

          }
        </strong> &nbsp;
        | &nbsp; Total Tip: <strong>
          Rs{

            show ? props.result.reduce((acc, element) => { acc += element.totalBill; acc.toFixed(); return acc }, 0).toFixed(2) : ''

          }

        </strong> .
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

      </div>
    </div>
  )
}

export default Output
