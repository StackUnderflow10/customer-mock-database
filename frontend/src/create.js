import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [values, setValues] = useState({
        cust_id: '',
        cust_name: '',
        cust_address: '',
        cust_amount:''
    });
    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/customer', values)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className='main'>
            <div className='sub-main'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Customer</h2>

                    <div className='mb-2'>
                        <label htmlFor="">ID</label>
                        <input
                            type="text"
                            placeholder="Enter Id"
                            className="form-control"
                            name='id'
                            onChange={(e) => setValues({ ...values, cust_id: e.target.value })}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            name='name' 
                            onChange={(e) => setValues({ ...values, cust_name: e.target.value })}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Address</label>
                        <input
                            type="text"
                            placeholder="Enter Address"
                            className="form-control"
                            name='address'
                            onChange={(e) => setValues({ ...values, cust_address: e.target.value })}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Amount</label>
                        <input
                            type="text"
                            placeholder="Enter Amount"
                            className="form-control"
                            name='amount'
                            onChange={(e) => setValues({ ...values, cust_amount: e.target.value })}
                        />
                    </div>


                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;