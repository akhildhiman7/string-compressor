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
  The <strong>Encode String</strong> expects a string. Which returns the encoded version of the string. <br>
  The algorithm first initializes an empty result string and than counts the contiguous occurance of the character in the
  input string and adds the charater with its frequency in the result string initialized earlier. And when the input string is completely traversed it returns the result string.
  <br>
  <br>
  The <strong>Decode String</strong> expects a string . Which returns the decoded version of the string. <br>
  Initially an empty result string is created. After that the input string is traversed. For every character in the input string, the next character is checked and if it is a <strong><em>number </em> </strong> than the complete number is discovered by traversing the input string further until a <em><strong> NaN (Not a Number)</strong></em> character is found. This way the frequeny of the character is discovered. After that the character is added it's frequency time in the result string. This processes is repeated until the pointer reaches the end of the string. At the end, the decoded string version is returned.
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
  To run the app locally just git clone this application to your pc and just run npm install (this will install all the dependencies) and when all the dependencies are installed just open the app directory and run <strong><em>npm start</em></strong>. Your application would be running on PORT 3000. <br>
  Enjoy!!🎉 The application is running 
</p><br>
<h2> Dependencies </h2>
<ul>
  <li> React create-react-app </li>
  <li> body-parser </li>
  <li> ejs </li>
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
  