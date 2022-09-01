// console.log("hello world");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end(`Hello World this is Vaibhav's server`);
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors-Styling links and Buttons</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: aquamarine;
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          .btn{
              background-color: blue;
              color: aliceblue;
              padding: 6px;
              border: none;
              /* The cursor changes to pointer when hovering over it */
              cursor: pointer;
              font-size: 12px;
              font-family: cursive;
              font-weight: bold;
              border-radius: 5px;
          }
          a{
              /* this property makes the underline under the link dissapear */
              text-decoration: none;
          }
          /* This property changes the appearence of the specified link button when we hover over it */
          a:hover{
              color: aqua;
              background-color: black;
              border: 3px solid black;
          }
          /* This property changes the appearence of the specified link button once it has been clicked */
          a:visited{
              color: brown;
              background-color: aliceblue;
          }
          /* This property changes the appearence of the specified link button while we click it */
          a:active{
              color: green;
              background-color: blueviolet;
          }
          .btn:hover{
              color: aqua;
              background-color: black;
              border: 3px solid black;
          }
          .btn:visited{
              color: brown;
              background-color: aliceblue;
          }
          /* This property changes the appearence of the specified link button while we click it */
          .btn:active{
              color: green;
              background-color: blueviolet;
          }
  
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur earum illo hic neque, culpa
              nesciunt illum quisquam architecto laudantium, non magnam pariatur corporis necessitatibus a aspernatur
              porro nostrum eveniet iure! Voluptatibus, quasi voluptates.</p>
              <!-- external link , to change visited propery change link-->
          <a href="http://codewithharry.com" target="_blank" class="btn">READ MORE</a>
          <!-- button -->
          <button class="btn" >CONTACT US</button>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});