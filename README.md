<h1> String Compressor </h1>

<p>
String Compressor is a web based application. This application makes a POST request to the server written in NodeJs which returns the desired string format.
</p>
<p>
  There are two ways to interact with the server
  <ul>
    <li> Encode string </li>
    <li> Decode string </li>
  </ul>
</p>
<h2> Algorithm </h1>
<p> It is a straight forward algorithm which does not make use of any database. As there are two endpoints of the server.<br><br>
  <p>The <strong>Encode String</strong> expects a string containing lowercase characters only. It returns the encoded version of the string. <br>
  As there are only 26 lowercase characters. The input string is a form of Base 26 number. The encoded version of the string contains alphanumeric characters which contains the character in the range <strong><em>[a-zA-Z0-9]</em></strong>. The algorithm first converts the input string Base 26 representation to a Base 10 number. This Base 10 number is further transformed into a Base 62 numbers as the alphanumeric number contains</p>
  <ul>
  <li> a .. z   - 26</li>
  <li> A .. Z   - 26</li>
  <li> 0 .. 9   - 10</li>
  </ul>
  Which equals to 26 + 26 + 10 = 62 possible characters. This resultant string is returned back to the user. 
  <br>
  <br>
  The <strong>Decode String</strong> expects an alphanumeric string. It returns the decoded version of the string. <br>
  Initially the alphanumeric Base 62 number is converted into the Base 10 decimal number. This Base 10 number is further converted into the Base 26 string. The obtained Base 26 representation is returned back to the user.<br>
  The Decode String Endpoint is just the reverse process of the Encoding Endpoint.
  </p>

<h2> Components of the Code </h2>
<p>
  The website can be found at https://aqueous-atoll-40897.herokuapp.com/ 
</p>
<p>
  This project is built using ReactJs create-react-app and the server is written in NodeJs. The package.json file contains all the details about the dependencies and the scripts in the files. The frontend file App.js can be found in src directory. The User makes a POST request while submitting a request and the request is handled by the server which can be found at https://shrouded-crag-69475.herokuapp.com/ there are two endpoints to access the api <strong><em></em>/encod</strong>e and <strong><em>/decode</em></strong>. The React app interacts with these two endpoints and the result is rendered by the react app.
  The Styling can be found in App.css and index.css. The HTML file is present as the index.html file in the Public directory.
</p>
<p>
  To run the app locally. First git clone the server at https://github.com/akhildhiman7/string-backend and hit npm install. This will install the dependencies for the server and just run node start. This will make the server running at PORT 5000.
  Once the server is running just git clone this application to your pc and just run npm install (this will install all the dependencies) and when all the dependencies are installed just open the app directory and run <strong><em>npm start</em></strong>. Your application would be running on PORT 3000. <br>
  Enjoy!!🎉 The application is running 
</p><br>
<h2> Dependencies </h2>
<ul>
  <li> React create-react-app </li>
  <li> body-parser </li>
  <li> express </li>
  <li> node-fetch </li>
</ul>
<br> 
<p> Used HEROKU to deploy the app </p>
<h2> HOW TO USE / TEST CASES </h2>
<p>
  INPUT STRING:  "aaabbbccccd"<br>
  OUTPUT STRING: "a3b3c4d2"
  <img src ="https://raw.githubusercontent.com/akhildhiman7/string-compressor/master/images/a.jpg" alt="INPUT A" />
  <img src ="https://raw.githubusercontent.com/akhildhiman7/string-compressor/master/images/b.jpg" alt="OUTPUT A" /><br><br>
  INPUT STRING:  "abccccccccccccccc"<br>
  OUTPUT STRING: "abc15"
  <img src ="https://raw.githubusercontent.com/akhildhiman7/string-compressor/master/images/c.jpg" alt="INPUT B" />
  <img src ="https://raw.githubusercontent.com/akhildhiman7/string-compressor/master/images/d.jpg" alt="OUTPUT B" /><br><br>
  INPUT STRING:  "abc15"<br>
  OUTPUT STRING: "abccccccccccccccc"
  <img src ="https://raw.githubusercontent.com/akhildhiman7/string-compressor/master/images/e.jpg" alt="INPUT C" />
  <img src ="https://raw.githubusercontent.com/akhildhiman7/string-compressor/master/images/f.jpg" alt="OUTPUT C" /><br><br>
</p>
  