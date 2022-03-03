import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import DateRange from '../DateRange';
//import CampTable from './CampTable';
import CreativeTable from './CreativeTable';
import Navibar from './Navibar';
import daterangepicker from 'bootstrap-daterangepicker';
import RangePicker from './RangePicker';
const CampaignCreate = () => {
 

  const handleSave = (event) =>{
     console.log(values);
     event.preventDefault();
  }
  
  const handleChange = (event) =>{
     setValues({
        ...values,
        [event.target.name]: event.target.value
     })
  }

const [values, setValues] = useState({
       
   campaignName: "",
   budget: "",
   adCategory: "",
   startDate: "",
   endDate: "",
   //deletedAt: "",
   adveID: ""
   
 });
  const handleSubmit = event => {
   event.preventDefault();
   var axios = require('axios');
   var data = JSON.stringify({

         "campaignName": values.campaignName,
         "budget":values.budget ,
         "adCategory": values.adCategory,
         "startDate": values.startDate,
         "endDate": values.endDate,
         // "deletedAt": setValues.deletedAt,
         "adveID": values.adveID
   });

   var config = {
     method: 'post',
     url: 'http://localhost:3000/campaign/createCampaign',
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
   
  return (
     <div>
         <Navibar /><br></br>
   <div className="bg-light">
      
      <div className="wrapper">
    
        <form 
        onSubmit={handleSave}>
            <h4>Create campaign</h4>  <br></br>
            <div className="title">
                <h6>Campaign details</h6>
            </div>
            <div className="form">
                  <div className="col-lg-3">
              
                           <input 
                           type="text" 
                           className="form-control"
                           name="campaignName"
                           onChange={handleChange}
                           values = {values.campaignName}
                           placeholder="campaignName"
                           />
              
                   </div>  
                   <div className="col-lg-6">
              
                              <input 
                              type="text" 
                              className="form-control"
                              name="adCategory"
                              onChange={handleChange}
                              values = {values.adCategory}
                              placeholder="adCategory"
                              />
                  </div>  
                   <div className="col-lg-6">
              
                              <input 
                              type="currency" 
                              className="input"
                              name="budget"
                              onChange={handleChange}
                              values = {values.budget}
                              placeholder="budget"
                              />
                    </div>  
          
                   <div className="date">
                     <br></br>
                         <RangePicker />
                  </div>
           
                  <div class="main2">
                  <Link to="/creative" class="btn btn-primary">Create creative</Link>            
                  </div>
    
                  <div className="table-container">
                          <CreativeTable />
                  </div>
               <div class="main2">
                  <Link to="/campcrea" role="button" type="submit" class="btn btn-primary" onClick={handleSubmit}>Save</Link> 
               </div>        
           </div>
        </form>   
      </div>
   </div>
</div>	
  );

}

export default CampaignCreate;
