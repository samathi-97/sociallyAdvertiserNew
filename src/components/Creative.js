import React from 'react';
import FileUp from './FileUp';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Navibar from './Navibar';


const Creative = () => {
  // const [data, setData] = React.useState();

  const handleSave = (event) =>{
     console.log(values);
     event.preventDefault();
  }
  
  const handleChange = (event) =>{
     //console.log(event.target.name, event.target.value);
     setValues({
        ...values,
        [event.target.name]: event.target.value
     })
  }
  const [values, setValues] = useState({ 
   creativeHeading: "",
   destinationURL: "",
   creativeDescription: "",
   costPerSale: "",
   creativeType: "",
   //deletedAt: null,
   //campID: 7

  });

  const handleSubmit = event => {
   event.preventDefault();
   
   var axios = require('axios');
var data = JSON.stringify({
  "creativeHeading": values.creativeHeading,
  "destinationURL":values.destinationURL ,
  "creativeDescription": values.creativeDescription,
  "costPerSale": values.costPerSale,
  "creativeType":values.creativeType ,
  //"deletedAt": null,
 // "campID": 7
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/creative/createCreative',
  headers: { 
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('JWT'))['accessToken'] , 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
  }

   const[creativeType, setCreativeType] = useState("")
   const creativeTypeHandle=(e)=>{
      setCreativeType(e.target.value)     
   }
   console.log(creativeType)
  return(
     
   <div className="bg-light">
      <Navibar /><br></br>
      <div class="wrapper">
       
         <form onSubmit={handleSave}>
         <h4>Ad preferences</h4><br></br>
            <div class="form-outline mb-4">
               
               <input 
               type="text" 
               id="form6Example3" 
               class="form-control" 
               name="creativeHeading"
               placeholder="creativeHeading"
               values = {values.creativeHeading}
               onChange={handleChange}
               />
            </div>
 
            <div class="row mb-4">
               <div class="col">
                  <div class="form-outline">
                 
                  <input 
                  type="text" 
                  id="form6Example1" 
                  class="form-control" 
                  name="costPerSale"
                  placeholder="costPerSale"
                  values = {values.costPerSale}
                  onChange={handleChange}
                  />
                  </div>
               </div>
               <div class="col">
                  <div class="form-outline">
                  
                  <input 
                  type="text" 
                  id="form6Example2" 
                  class="form-control"
                  name="destinationURL" 
                  placeholder="destinationURL"
                  values = {values.destinationURL}
                  onChange={handleChange}
                  />
                  </div>
               </div>
            </div>

            <label><h6>Creative type</h6></label>  
            

            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="image" onClick={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault1">
                  Single Image
               </label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="video" onChange={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault1">
                  Single Video
            </label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="I&V" onChange={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault2">
                  Image & Video
               </label>
            </div>

            <div class="form-outline mb-4">
               <br></br>
               <label class="form-label" 
               for="form6Example7">
               <h6>Discription</h6>
               </label>
               <textarea 
               name="creativeDescription"
              onChange={handleChange}
              values = {values.creativeDescription}
              placeholder="creativeDescription"
               class="form-control"
                id="form6Example7" 
                rows="4" >
                </textarea>  
            </div>
 
            <label><h6>Upload Thumbnail media</h6></label>
            <div>
               <FileUp />               
            </div>

            <br></br>     
            <label><h6>Upload media</h6></label>
            <div>
               <FileUp />               
            </div>
                 
            <br></br>
            <div className="inputfield">
              <Link to="/campaign"
               class="btn btn-primary"
                id="right-panel-link" 
                role="button"
                onClick={handleSubmit}>
                Submit</Link>           
            </div>
         </form>
      </div>

   </div>
  );
}

export default Creative;


