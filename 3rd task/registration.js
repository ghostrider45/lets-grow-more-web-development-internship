function getData() {
    var name1 = document.getElementById("name1").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var image = document.getElementById("image").value;
    var male = document.getElementById("gender-male");
    var female = document.getElementById("gender-female");
  
    var gender;
    if (male.checked) {
      gender = male.value;
    } else if (female.checked) {
      gender = female.value;
    } else {
      gender = "Not specified";
    }
  
    var dataDiv = document.querySelector(".data1");
  
    var namepara = document.createElement("p");
    namepara.innerText = "Name: " + name1;
    dataDiv.appendChild(namepara);
  
    var emailpara = document.createElement("p");
    emailpara.innerText = "Email: " + email;
    dataDiv.appendChild(emailpara);
  
    var websitepara = document.createElement("p");
    websitepara.innerText = "Website: " + website;
    dataDiv.appendChild(websitepara);
  
    var genderpara = document.createElement("p");
    genderpara.innerText = "Gender: " + gender;
    dataDiv.appendChild(genderpara);
  
    var image1 = document.createElement("img");
    image1.src = image;
    dataDiv.appendChild(image1);
    var horizontalHr = document.createElement("hr");
    dataDiv.appendChild(horizontalHr);
  }
  