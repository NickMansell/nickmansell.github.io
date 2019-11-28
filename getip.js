var xmlhttp = new XMLHttpRequest();
var ip_address = '38.140.221.19';
var auth = '2beff1e2-fa5c-42cd-8b6f-99478cd06236';
var url = "https://ipfind.co/?auth=" + auth + "&ip=" + ip_address;

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(this.responseText);
      console.log(result);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
