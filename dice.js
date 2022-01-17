
  var n1="images/"+(Math.floor(Math.random()*6)+1) +".png";
  var n2="images/"+(Math.floor(Math.random()*6)+1)+".png";
  if(n1>n2)
  {
    document.querySelector("h1").innerHTML="Player 1 wins!";
  }
  else if(n2>n1)
  {
    document.querySelector("h1").innerHTML="Player 2 wins!";
  }
  else
  {
    document.querySelector("h1").innerHTML="Draw :(";
  }
  document.getElementById("image1").setAttribute("src",n1);
  document.getElementById("image2").setAttribute("src",n2);
