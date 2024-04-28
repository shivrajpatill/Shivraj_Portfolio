// console.log("hii");
const host = "http://localhost:5000";
let contactME = async()=>{
  //  console.log("clicked")
  //  console.log(document.getElementById("1").value)
  //  console.log(document.getElementById("2").value)
  //  console.log(document.getElementById("3").value)
   let name1 = document.getElementById("1").value;

   let email2 = document.getElementById("2").value;

   let desc3 = document.getElementById("3").value;
   if(desc3==="" || name1==="" || email2==="") {alert("Please Fill All Information Before submit the form")}


 
    //Api call :
    const response = await fetch(`${host}/contact`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ "name" : name1, "email":email2 ,"desc":desc3}),
    });

    const note = await response.json()
    console.log(note)
  
}
