function SendLicense() {

  License = document.getElementById("License").value;
  url = 'http://127.0.0.1:5000/license/' + License;
  var xhttp = new XMLHttpRequest();




  xhttp.onload = function () {



    if (this.status == 404 || this.responseText == null || this.status == 204) {


      document.getElementById("result").style.display = 'block';
      document.getElementById("car_details").style.display = 'none';
      document.getElementById("result").innerHTML = 'Unfortunately this license plate cannot be found';


    } else {
      car = JSON.parse(this.responseText);


      document.getElementById("result").style.display = 'none';
      document.getElementById("car_details").style.display = 'block';

      document.getElementById("European_vehicle_category_c").innerHTML = car.columns[0];
      document.getElementById("European_vehicle_category_v").innerHTML = car.data[0][0];


      document.getElementById("Fuel_consumption_combined_c").innerHTML = car.columns[1];
      document.getElementById("Fuel_consumption_combined_v").innerHTML = car.data[0][1];



      document.getElementById("CO2_emissions_combined_c").innerHTML = car.columns[2];
      document.getElementById("CO2_emissions_combined_v").innerHTML = car.data[0][2];


      document.getElementById("soorted_cluster_c").innerHTML = car.columns[3];
      document.getElementById("soorted_cluster_v").innerHTML = car.data[0][3];


    }
  }

  xhttp.open("GET", url);
  xhttp.send();

}