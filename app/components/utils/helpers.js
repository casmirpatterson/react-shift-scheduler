var axios = require("axios");

var helper = {

  getAllEmployees: function() {
    return axios.get("/getAllEmployees");
  },

  getCurrentUser: function() {
    return axios.get("/user");
  },

  getEmployee: function(id) {
  return axios.get("/getEmployee/" + id);
  },

  getEmpSchedules:function() {
    return axios.get('/getEmpSchedules')
    .then(function(response){
        return response;
    })
  },

  addEmpSchedule:function(emp_id,firstName,lastName,monday,tuesday,wednesday,thursday,friday,saturday,sunday) {
    return axios.post('/addEmpSchedule', {
      emp_id: emp_id,
      firstName: firstName,
      lastName: lastName,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday
    });
  },

  updateEmpSchedule: function(empSchedule) {
    return axios.put('/updateSchedule/' + empSchedule._id, {
      employeeSchedule: empSchedule
    });
  },

  addEmployee: function(firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
    return axios.post("/addEmployee", {
        firstName: firstName,
        lastName: lastName,
        addressOne: addressOne,
        addressTwo: addressTwo,
        city: city,
        state: state,
        zip: zip,
        email: email,
        phone: phone,
        phoneType: phoneType });
  },

  updateEmployee: function(id, firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
       return axios.put("/updateEmployee/" + id, {
           firstName: firstName,
           lastName: lastName,
           addressOne: addressOne,
           addressTwo: addressTwo,
           city: city,
           state: state,
           zip: zip,
           email: email,
           phone: phone,
           phoneType: phoneType
       });
  },

  updateEmpName: function(emp_id,firstName,lastName)  {
    return axios.put("/updateEmpName/" + emp_id, {
        firstName: firstName,
        lastName: lastName
       });
  },

  removeEmployee: function(id) {
       return axios.put("/removeEmployee/" + id);
  },

  removeEmpSchedule: function(emp_id) {
       return axios.put("/removeEmpSchedule/" + emp_id);
  },

};

module.exports = helper;