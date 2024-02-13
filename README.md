<h1>A Freelance project for Smartaqua Aquaculture consultants.</h1>
<p>A company focusing on sustainable traceable fishing practicises.
The website is aimed towards companies and individuals looking to contact Smartaqua Consultants.</p>

<h3>Focus:</h3>
<ul> 
<li>Approachable</li>
<li>Professional</li>
<li>Up to date</li>
<li>People centric</li>
<li>A well established portfolio.</li>
<li>Directing the user to contact the team.</li>
</ul>

<a href="https://www.figma.com/file/BeCOVA9uNoD9LXvsoXHam8/Smart-Aqua?type=design&node-id=6-4&mode=design&t=S2WC12dbDRdw920R-0">Designed with Figma </a> 
<br>
<a href="">A Rails Web Application</a>

<h1>Countdown to Site Launch February 29, 2024</h1>
<p id="countdown"></p>

<script>
// Set the date we're counting down to
var countDownDate = new Date("February 29, 2024 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
  document.getElementById("countdown").innerHTML = days + " days ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 86400000); // Update once per day (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)

</script>
