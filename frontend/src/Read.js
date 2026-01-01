import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Read.css';

const Read = () => {
  const{cust_id}=useParams();
  const[customer,setCustomer]=useState([]);
  const navigate = useNavigate()

  const goToUpdate = () => {
    navigate(`/update/${cust_id}`)
  }
  useEffect(()=>{
    axios 
        .get("http://localhost:8081/read/"+ cust_id)
        .then((res)=>{
            console.log(res);
            setCustomer(res.data);
        })
        .catch((err)=>console.log(err));

  },[]);
  return(
    <div className='main'>
        {customer.length> 0 ?(
            customer.map((cust)=>(
              <>
              <div key={cust.cust_id} className="customer-box">
                <div className="field1">{cust.cust_id}</div>
                <div className="field2">{cust.cust_name}</div>
                <div className="field3">{cust.cust_address}</div>
                <div className="field4">{cust.cust_amount}</div>  
              </div>
                <button onClick={goToUpdate} >Edit</button>
                <button>Delete</button>
              </>
              
            ))   
            
        ):(<p>loading...</p>
        )}
    </div>
  )
}

export default Read