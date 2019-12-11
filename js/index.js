// Your code goes here

//window event listeners
window.addEventListener('load', (event) => {
    console.log('page is fully loaded.');
    alert('Welcome to Fun Bus Travel Agency!');
  });
  
  window.addEventListener('online', (event) => {
    console.log('user is connected to a network');
  });
  
  window.addEventListener('offline', (event) => {
    console.log('user is not connected to a network');
  });
  
  window.addEventListener('fullscreenchange', (event) => {
    alert('you are now in fullscreen mode. Pres ESC to exit.');
    console.log('user is in fullscreen mode');
  });
  
  //logo
  const logo = document.querySelector('.logo-heading');
  console.log(logo);
  logo.addEventListener('click', (event) => {
    logo.style.color = 'red';
    logo.style.fontSize = '60px';
    });
  logo.addEventListener('mouseover', (event) => {
    logo.style.color = 'red';
    });
  logo.addEventListener('mouseout', (event) => {
    logo.style.color = 'black';
    });
  
    //On click buttons change
    const btn = document.querySelectorAll('.btn');
      console.log(btn);
    btn.forEach((button) => {
      button.addEventListener('click', (event) => {
        button.style.backgroundColor = 'yellow';
        button.style.color = 'black';
        alert('Thank you for choosing FunBus!');
      });
    });
  //Just update//
    //nav links//
    const navLink = document.querySelectorAll('.nav-link');
      console.log(navLink);
    navLink.forEach((link) => {
      link.addEventListener('mouseover', (event) => {
        link.style.color = 'red';
      });
      link.addEventListener('mouseout', (event) => {
        link.style.color = 'black';
      });
      link.preventDefault;
    });
   
    //main content images
    const img = document.querySelectorAll('.img-content');
      console.log(img);
    img.forEach((image) => {
      image.addEventListener('mouseenter', (event) => {
        image.style.border = '2px solid black';
      });
      image.addEventListener('mouseleave', (event) => {
        image.style.border = '0';
      });
    });
  
    // lower 3 paragraphs
    const dest = document.querySelectorAll('.destination');
      console.log(dest);
      dest.forEach((destination) => {
        destination.addEventListener('pointerlockchange',(event) => {
          console.log('pointer lock changes');
        });
      });
    