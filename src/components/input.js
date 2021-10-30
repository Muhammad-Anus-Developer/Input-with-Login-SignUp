import React, { useState, useEffect } from "react";
import "../App.css"

const Inputs = (props) => {
    const Valueses = {
        userName: '',
        names: '',
        url: '',
        email: '',
        password: ''
    }

    const [values, setValues] = useState(Valueses)

    useEffect(() => {
        if (props.currentId === '')
            setValues({
                ...Valueses
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = (e)=> {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit} className="my-5">
            <div>
                <input className="px-2 py-2 mx-2 my-2" style={{border:"1px solid #d8e2dc", width:"30%"}} placeholder="Enter User Name" name="userName" value={values.userName} onChange={handleInputChange} />
           
            
                <input className="px-2 py-2 mx-2 my-2" style={{border:"1px solid #d8e2dc", width:"30%"}} placeholder="Enter Name" name="names" value={values.names} onChange={handleInputChange} />
           
            
                
                    <input className="px-2 py-2 mx-2 my-2"  style={{border:"1px solid #d8e2dc", width:"30%"}} placeholder="Enter Url" name="url"
                        value={values.url}
                        onChange={handleInputChange}
                    />
               
               
                    <input className="px-2 py-2 mx-2 my-2"  style={{border:"1px solid #d8e2dc", width:"30%"}} placeholder="Enter Email" name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
               
            
           
                <input className="px-2 py-2 mx-2 my-2" type="password" style={{border:"1px solid #d8e2dc", width:"30%"}} placeholder="Enter Password" name="password"
                    value={values.password}
                    onChange={handleInputChange}
                />
            </div>
                <button className="px-4 py-2 my-3 btn btn-info rounded shadowed text-white" value={props.currentId == '' ? "Save" : "Update"}  >Submit</button>
            
        </form >
    );
}

export default Inputs;