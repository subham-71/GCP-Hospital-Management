import React, { useEffect, useState } from 'react';
import '../Styles/PatientList.css';
import Navbar from './Navbar';

export default function HospitalList() {
    return (
        <>
            <Navbar />
            <div className='main-content2'>
                <div className="p-2">

                    <div className="container1">
                        <table className="table_pat">
                            <thead>
                                <tr>
                                    <th scope="col">Hospital Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">
                                        Email
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="editable" data-type="text"></td>
                                    <td className="editable" data-type="number"></td>
                                    <td className="editable" data-type="date"></td>
                                    <td className="editable" data-type="text"></td>
                                    <td className="editable" data-type="text">
                                        <a href="#">
                                        <i class="uil uil-arrow-right icon"></i>
                                        </a>
                                    
                                    </td>
                                
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <div className="container2">
                            <div className="row">
                                <div className="col-md-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
