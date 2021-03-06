import React, { useEffect, useState } from "react";
import "./UserInfo.css";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from "@mui/material/Button";

function UserInfo() {
  const { id } = useParams();
  const history = useHistory();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6173de3a110a740017223189.mockapi.io/users/${id}`)
      .then((response) => {
        setUsers(response.data);
      });
  }, [id]);

  function deleteUser(){
    
    

     swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {

        axios.delete(`https://6173de3a110a740017223189.mockapi.io/users/${id}`)
            .then((data) => {
            swal("Movie has been removed successfully", {
              icon: "success",
            });
            history.push(`/`)
          });
          
      }
    });
  }

  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6 ">
          <Button
           startIcon={<ArrowBackIosIcon />}
            variant="contained"
            className="mt-auto ml-2"
            color="primary"
            onClick={()=>history.push(`/`)}
          >
            Back
          </Button>
            <div className="about-text go-to">
              <h3 className="dark-color">About {users.fname} {users.lname}</h3>
              <h6 className="theme-color lead">
                {users.designation}{" "}
                <Fab
                  color="primary"
                  aria-label="add"
                  className="m-2"
                  size="small"
                  onClick={() => history.push(`/edit-users/${users.id}`)}
                >
                  <EditIcon />
                </Fab>
                <Fab color="primary" aria-label="add" size="small" onClick={deleteUser}>
                  <DeleteIcon />
                </Fab>
              </h6>
              <p>{users.about}</p>
              <div className="row about-list">
                <div className="col-md-6 ">
                  <div className="media">
                    <label>Name</label>
                    <p>{users.name}</p>
                  </div>
                  <div className="media">
                    <label>Age</label>
                    <p>{users.age} Yr</p>
                  </div>
                  <div className="media">
                    <label>Residence</label>
                    <p>{users.residence}</p>
                  </div>
                  <div className="media">
                    <label>Gender</label>
                    <p>{users.gender}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>{users.email}</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>{users.phone}</p>
                  </div>
                  <div className="media">
                    <label>Skype</label>
                    <p>{users.skype}</p>
                  </div>
                  <div className="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="about-avatar">
              <img src={users.picture} title="" alt="" />
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="500" data-speed="500">
                  {users.clients}
                </h6>
                <p className="m-0px font-w-600">Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="150" data-speed="150">
                  {users.projects}
                </h6>
                <p className="m-0px font-w-600">Project Completed</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="850" data-speed="850">
                  {users.photo_capture}
                </h6>
                <p className="m-0px font-w-600">Photo Capture</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-data text-center">
                <h6 className="count h2" data-to="190" data-speed="190">
                  {users.telephonic_talk}
                </h6>
                <p className="m-0px font-w-600">Telephonic Talk</p>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>
      
    </section>
  );
}

export default UserInfo;
