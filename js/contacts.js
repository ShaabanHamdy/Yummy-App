let Contact = document.getElementById('Contact')
let contactsPage =document.getElementById('contactsPage')
function displayContacts(){
    contactsPage = 
    `
    <div class="container w-50">
    <div class="row gy-4">
      <h1 class="text-center text-white">ContacUs...</h1>
      <div class="col-md-6">
        <input type="text" placeholder="Enter Your Name"  class="form-control bg-transparent"/>
      </div>
      <div class="col-md-6">
        <input type="email" placeholder="Enter Your Email"  class="form-control bg-transparent" />
      </div>
      <div class="col-md-6">
        <input type="number"  placeholder="Enter Your Phone" class="form-control bg-transparent"/>
      </div>
      <div class="col-md-6">
        <input type="number" placeholder="Enter Your Age" class="form-control bg-transparent"/>
      </div>
      <div class="col-md-6">
        <input  type="password"  placeholder="Enter Your Password"  class="form-control bg-transparent"  />
      </div>
      <div class="col-md-6">
        <input  type="password"  placeholder="Enter Your RePassword"  class="form-control bg-transparent"  />
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
  </div>
    `
}

Contact.onclick=function(){
    displayContacts()   
}