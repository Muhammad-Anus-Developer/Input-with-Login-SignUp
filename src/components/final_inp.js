import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import firebaseDb from "../firebase";
import Inputs from "./input";

const FinalInp = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('customers').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])// similar to componentDidMount

    const addOrEdit = obj => {
        if (currentId === '')
            firebaseDb.child('customers').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
            firebaseDb.child(`customers/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }

    const onDelete = (id) => {
        if (window.confirm('Are you sure to delete this record?')) {
            debugger
            firebaseDb.child(`customers/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }

    return (
        <>
            <div>
               
                    <h1 className="py-5 bg-info text-white text-center">Input To Table</h1>
               
            </div>
            <div className="text-center">
               
                    <Inputs {...({ addOrEdit, currentId, contactObjects })} />
                
                <h2 className="bg-info text-white py-3 my-3">
                    Data Table
                </h2>
                    <table className="table table-bordered" style={{boxShadow:"0 0 50px -20px #000"}}>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Name</th>
                                <th>Url</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObjects[id].userName}</td>
                                        <td>{contactObjects[id].names}</td>
                                        <td>{contactObjects[id].url}</td>
                                        <td>{contactObjects[id].email}</td>
                                        <td>{contactObjects[id].password}</td>
                                        <td>
                                          <button className="btn btn-danger" onClick={() => { onDelete(id) }}>Remove</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

               
            </div>
        </>
    );
}

export default FinalInp;