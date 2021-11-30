import React, { useEffect, useState } from 'react'
import "./UserProfile.css"
import axios from 'axios';
import { useHistory } from "react-router-dom";


function UserProfile() {

    const [users, setUsers] = useState([]);

      const history = useHistory(); 

    useEffect(() => {
        axios.get(`https://6173de3a110a740017223189.mockapi.io/users`)
            .then((response) => {
                setUsers(response.data);
            })
    }, [])

    return (

     
        <div className="user-container">
        {
            users.map((user,index)=>{
               
                return <div className="maincard p-3" key={index}>
            <div className="thecard">
                <div className="thefront text-center py-4"> <img src={user.picture} className="rounded-circle" width="100" alt={""}/>
                    <h3 className="mt-2 mb-0 name-css">{user.fname} {user.lname}</h3> <h6 className="mt-2 mb-0 designation-css">{user.designation}</h6>
                    <div className="stats d-flex justify-content-between px-3 mt-3">
                        <div className="stats-1 d-flex flex-column span-css"> <span>{user.clients}</span> <span>Clients</span> </div>
                        <div className="stats-1 d-flex flex-column span-css"> <span>{user.projects}</span> <span>Projects</span> </div>
                        <div className="stats-1 d-flex flex-column span-css"> <span>{user.residence}</span> <span>Location</span> </div>
                        
                    </div>
                </div>
                <div className="theback text-center py-3 px-3 mt-3p">
                    <div className="pos-center">
                    <h4>{user.fname} {user.lname}</h4>
                    <p className="about text-justify abt-css">{user.about}</p>
                    <div className="px-5"> <button className="btn follow-button btn-block" onClick={() => history.push(`/users/${user.id}`)}>View</button> </div>
                    </div>
                </div>
            </div>
        </div>
            })
        }
        


        </div>
    )
}

export default UserProfile
