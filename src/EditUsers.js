import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import {useFormik}  from 'formik';
import * as yup from 'yup';


const editUserVdationSchema  =  yup.object({
  fname: yup.string().min(2, "Provide a larger First Name").max(10, "Provide a smaller First Name").required("Please enter your First Name"),
  lname: yup.string().max(20, "Provide a smaller last Name").required("Please enter your Last Name"),
  email: yup.string().email("Please provide a valid email id").required("Your Email will be safe with us"),
  clients: yup.string().required("No of Clients is required"),
  picture: yup.string().url("Invalid Url").required("Please Provide a image url"),
  age: yup.number().positive().integer().required("Age is required"),
  gender: yup.string().required("Gender is required"),
  projects: yup.string().required("Let people know about your projects"),
  about: yup.string().max(231).min(150).required("A brief about yourself"),
  residence: yup.string().required("Locaton is required"),
  skype: yup.string().required("Skype id required"),
  photo_capture: yup.string().required("No of Photo_Capture is required"),
  telephonic_talk: yup.string().required("Telephonic_Talk is required"),
  phone: yup.string().max(10).required("Phone number is required").matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),
  designation: yup.string().max(25).required("Designation is required"),
})



function EditUsers() {

    const { id } = useParams();
    const history = useHistory();
    const[editUser, setEditUser] = useState({
        "fname": "",
        "lname": "",
        "email": "",
        "clients": "",
        "picture": "",
        "age": "",
        "gender": "",
        "projects": "",
        "about": "",
        "id": "",
        "residence": "",
        "skype": "",
        "photo_capture": "",
        "telephonic_talk": "",
        "phone": "",
        "designation":""
      })


      const getUser = ()=>{
        
          axios
            .get(`https://6173de3a110a740017223189.mockapi.io/users/${id}`)
            .then((response) => {
              setEditUser(response.data);
            });
       
      }

      const formik = useFormik({
        initialValues: editUser,
      validationSchema:editUserVdationSchema,
      enableReinitialize: true,
      onSubmit: (values) => {
        updateUser(values)
      }
  
  })

      useEffect(getUser, [id])
     
    
    

      
    
       function updateUser(editedData){
        
           axios.put(`https://6173de3a110a740017223189.mockapi.io/users/${id}`, 
           editedData
        ).then(data=>{
            swal({
              title: "User Info has been updated successfully",
              icon: "success",
              button: "Aww yiss!",
            });
            history.push(`/users/${id}`)})
        
      }

      const styles = {
        borderColor: "red"
      }

    return (
      <section className="h-100 h-custom gradient-custom-2">
       
      <div className="container py-5 h-100">
     
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
               <form onSubmit={formik.handleSubmit}>
              <div className="card-body p-0">
              
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                   
                      <h3 className="fw-normal mb-5" style={{color: "#4835d4"}}>General Infomation</h3>
    
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
    
                          <div className="form-outline ">
                            <input type="text" id="fname" name="fname" className="form-control form-control-lg input-box" onChange={formik.handleChange} value={formik.values.fname} onBlur={formik.handleBlur} style={ formik.errors.fname && formik.touched.fname && styles}/>
                            {formik.errors.fname && formik.touched.fname && <div class="text-danger"><small>{formik.errors.fname}</small></div>}
                            
                            <label className="form-label">First name</label>
                          </div>
    
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
    
                          <div className="form-outline">
                            <input type="text"  id="lname" name="lname" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.lname} onBlur={formik.handleBlur} style={ formik.errors.lname && formik.touched.lname && styles}/>
                            {formik.errors.lname && formik.touched.lname && <div class="text-danger"><small>{formik.errors.lname}</small></div>}
                            <label className="form-label">Last name</label>
                          </div>
    
                        </div>
                      </div>
    
    
                      <div className="mb-4 pb-2">
                        <div className="form-outline">
                          <input type="text"  id="designation" name="designation" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.designation} onBlur={formik.handleBlur} style={ formik.errors.designation && formik.touched.designation && styles}/>
                          {formik.errors.designation && formik.touched.designation && <div class="text-danger"><small>{formik.errors.designation}</small></div>}
                          <label className="form-label" >Designation</label>
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
    
                          <div className="form-outline">
                            <input type="text" id="clients" name="clients" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.clients} onBlur={formik.handleBlur}style={ formik.errors.clients && formik.touched.clients && styles}/>
                            {formik.errors.clients && formik.touched.clients && <div class="text-danger"><small>{formik.errors.clients}</small></div>}
                            <label className="form-label">Happy Clients</label>
                          </div>
    
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
    
                          <div className="form-outline">
                            <input type="text"  id="projects" name="projects" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.projects} onBlur={formik.handleBlur} style={ formik.errors.projects && formik.touched.projects && styles}/>
                            {formik.errors.projects && formik.touched.projects && <div class="text-danger"><small>{formik.errors.projects}</small></div>}
                            <label className="form-label">Projects</label>
                          </div>
    
                        </div>
                      </div>
    
                      <div className="mb-4 pb-2">
                        <div className="form-outline">
                          <input type="text" id="picture" name="picture" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.picture} onBlur={formik.handleBlur} style={ formik.errors.picture && formik.touched.picture && styles}/>
                          {formik.errors.picture && formik.touched.picture && <div class="text-danger"><small>{formik.errors.picture}</small></div>}
                          <label className="form-label" >Photo Url</label>
                        </div>
                      </div>
    
                   
    
                    <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
    
                          <div className="form-outline">
                            <input type="text" id="photo_capture" name="photo_capture" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.photo_capture} onBlur={formik.handleBlur} style={ formik.errors.photo_capture && formik.touched.photo_capture && styles}/>
                            {formik.errors.photo_capture && formik.touched.photo_capture && <div class="text-danger"><small>{formik.errors.photo_capture}</small></div>}
                            <label className="form-label">Photo Capture</label>
                          </div>
    
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
    
                          <div className="form-outline">
                            <input type="text" id="telephonic_talk" name="telephonic_talk" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.telephonic_talk} onBlur={formik.handleBlur} style={ formik.errors.telephonic_talk && formik.touched.telephonic_talk && styles}/>
                            {formik.errors.telephonic_talk && formik.touched.telephonic_talk && <div class="text-danger"><small>{formik.errors.telephonic_talk}</small></div>}
                            <label className="form-label">Telephonic Talk</label>
                          </div>
    
                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
    
                          <div className="form-outline">
                            <input type="text"  id="gender" name="gender" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.gender} onBlur={formik.handleBlur} style={ formik.errors.gender && formik.touched.gender && styles}/>
                            {formik.errors.gender && formik.touched.gender && <div class="text-danger"><small>{formik.errors.gender}</small></div>}
                            <label className="form-label">Gender</label>
                          </div>
    
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
    
                          <div className="form-outline">
                            <input type="text" id="age"  name="age" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.age} onBlur={formik.handleBlur} style={ formik.errors.age && formik.touched.age && styles}/>
                            {formik.errors.age && formik.touched.age && <div class="text-danger"><small>{formik.errors.age}</small></div>}
                            <label className="form-label" for="form3Examplev3">Age</label>
                          </div>
    
                        </div>
                      </div>
    
                      </div>
    
                  </div>
                  <div className="col-lg-6 bg-indigo text-white">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>
    
                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text"  id="email" name="email" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} style={ formik.errors.email && formik.touched.email && styles}/>
                          {formik.errors.email && formik.touched.email && <div class="text-danger"><small>{formik.errors.email}</small></div>}
                          <label className="form-label">Email</label>
                        </div>
                      </div>
    
                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="phone" name="phone" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} style={ formik.errors.phone && formik.touched.phone && styles}/>
                          {formik.errors.phone && formik.touched.phone && <div class="text-danger"><small>{formik.errors.phone}</small></div>}
                          <label className="form-label">Mobile</label>
                        </div>
                      </div>
    
                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="skype"  name="skype" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.skype} onBlur={formik.handleBlur} style={ formik.errors.skype && formik.touched.skype && styles}/>
                          {formik.errors.skype && formik.touched.skype && <div class="text-danger"><small>{formik.errors.skype}</small></div>}
                          <label className="form-label" >Skype</label>
                        </div>
                      </div>
    
                      
    
                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="residence" name="residence" className="form-control form-control-lg" onChange={formik.handleChange} value={formik.values.residence} onBlur={formik.handleBlur} style={ formik.errors.residence && formik.touched.residence && styles}/>
                          {formik.errors.residence && formik.touched.residence && <div class="text-danger"><small>{formik.errors.residence}</small></div>}
                          <label className="form-label" >Country</label>
                        </div>
                      </div>
    
                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text"  id="about" name="about" className="form-control form-control-lg"onChange={formik.handleChange} value={formik.values.about} onBlur={formik.handleBlur} style={ formik.errors.about && formik.touched.about && styles}/>
                          {formik.errors.about && formik.touched.about && <div class="text-danger"><small>{formik.errors.about}</small></div>}
                          <label className="form-label" >About</label>
                        </div>
                      </div>       
    
                      
    
                      <button type="submit" className="btn btn-light btn-lg" data-mdb-ripple-color="dark" >Update User</button>

                      <button type="submit" className="btn btn-primary btn-lg m-2" data-mdb-ripple-color="dark"  onClick={()=>history.push(`/users/${id}`)}>Cancel</button>

                    </div>
                  </div>
                  
                </div>
                
              </div>
              </form>
            </div>
          </div>
        </div>
       
      </div>
    </section>
    )
}

export default EditUsers
