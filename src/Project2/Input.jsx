import React, { useState } from 'react'
import './Input.css'
function Input(props) {
    const [input, setinput] = useState({
        name: " ",
        amount: 0,
        person: 0,
        service : 0,
        totalBill : 0

    })

    function handleChange(event) {
        setinput({
            ...input, [event.target.name]: event.target.value
        })

    }

    function calculateBill() {
        input.totalBill= ((input.amount / 100) * input.service)/input.person
        props.AddResults(input);
    }
    return (

        <div className="container-fluid bg-dark text-light py-4 mt-4 myInput">

            <div className="Input container justify-content-center">
                <div class="mb-3">
                    <label for="ControlInput1" class="form-label"> Enter your Customer Name</label>
                    <input type="text" name="name" onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="Customer Name" />
                </div>

                <div class="mb-3">
                    <label for="ControlInput1" class="form-label"> Enter the Amount of Bill </label>
                    <input type="text" name="amount" onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="Amount of Bill" />
                </div>

                <div class="mb-3">
                    <label for="ControlInput1" class="form-label"> How many people are sharing the Bill ? </label>
                    <input type="text" name="person" onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="Number of person" />
                </div>

                <div class="mb-3">
                    <label for="ControlInput1" class="form-label"> How was the Service ? </label>

                    <select class="form-select" name="service" onChange={handleChange} aria-label="Default select example">
                        <option selected disabled hidden> Choose an Option </option>
                        <option value="20">20% - Excellent </option>
                        <option value="10">10% - Moderate </option>
                        <option value="5">5% - Bad </option>
                    </select>
                </div>

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-warning " onClick={calculateBill} type="button">ADD CUSTOMER & TIP AMOUNT</button>
                </div>


            </div>
        </div>
    )
}

export default Input
