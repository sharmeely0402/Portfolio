


document.addEventListener('DOMContentLoaded',() =>
    {
        const navImg = document.querySelector('.navimg');
        const dropdownMenu = document.getElementById('dropdownMenu');
        const front =document.querySelector('.comple');
        navImg.addEventListener('click', () => {
            // Toggle the display of the dropdown menu
            if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
                dropdownMenu.style.display = 'flex';
               
                
            } else{
                dropdownMenu.style.display = 'none';
              
                
            }
        });
    
    }
   
);
    const navImg = document.querySelector('.navimg');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const front =document.querySelector('.comple');
    if( navImg.style.visibility== 'hidden')
        {
            dropdownMenu.style.display='none';
            front.style.position='static';
           
        }
    
    
    const bar1 = document.querySelector('.barF');
    setInterval(bar12,30000);
    function bar12(){
    for (let i = 0; i <= 80; i ++) {
        setTimeout(() => {
            bar1.style.width = i + '%';
        }, i * 50);  // 100ms delay for each increment
    }
    }
    const bar2 = document.querySelector('.barb');
    setInterval(bar22,30000);
    function bar22(){
    for (let i = 0; i <= 50; i ++) {
        setTimeout(() => {
            bar2.style.width = i + '%';
        }, i * 50);  // 100ms delay for each increment
    }}
    
    const bar3 = document.querySelector('.barj');
    setInterval(bar32,30000);
    function bar32(){
    for (let i = 0; i <= 90; i ++) {
        setTimeout(() => {
            bar3.style.width = i + '%';
        }, i * 50);  // 100ms delay for each increment
    }
    }
    
    const bar4 = document.querySelector('.bara');
    setInterval(bar42,30000);
    function bar42(){
    for (let i = 0; i <= 50; i ++) {
        setTimeout(() => {
            bar4.style.width = i + '%';
        }, i * 50);  // 100ms delay for each increment
    }}
    
    
    const ba1 = document.querySelector('.bar1');
    setInterval(ba12,30000);
    function ba12(){
    for (let i = 0; i <= 87; i ++) {
        setTimeout(() => {
            ba1.style.width = i + '%';
        }, i * 50);  // 100ms delay for each increment
    }}
    
    const ba2 = document.querySelector('.bar2');
    setInterval(ba22,30000);
    function ba22(){
    for (let i = 0; i <= 89; i ++) {
        setTimeout(() => {
            ba2.style.width = i + '%';
        }, i * 50);  // 100ms delay for each increment
    }}
    
    const ba3 = document.querySelector('.bar3');
    setInterval(ba32,30000);
    function ba32(){
    for (let i = 0; i <= 85; i ++) {
        setTimeout(() => {
            ba3.style.width = i + '%';
        }, i * 50);  // 100ms delay for each increment
    }}

    function adjustFontSize() {
        var mainpart = document.querySelector('.mainpart h1');
        var back = document.querySelector('.back');
        if (window.innerWidth < 600) {
            mainpart.style.fontSize = '30px';
            back.style.fontSize = '50px';
        } 
       else if (window.innerWidth < 1500) {
            mainpart.style.fontSize = '50px';
            back.style.fontSize = '77px';
        } 
        else if (window.innerWidth < 400) {
            mainpart.style.fontSize = '50px';
            back.style.fontSize = '10px';
        } 
        else if (window.innerWidth < 800) {
            mainpart.style.fontSize = '40px';
            back.style.fontSize = '60px';
        } 
        else if (window.innerWidth < 1200) {
            mainpart.style.fontSize = '50px';
            back.style.fontSize = '30px';
        }
        else if (window.innerWidth < 1300) {
            mainpart.style.fontSize = '50px';
            back.style.fontSize = '40px';
            back.style.top='-10%';
        }
        else if (window.innerWidth < 1080) 
            {
            mainpart.style.fontSize = '50px';
            back.style.fontSize = '10px';
        
        }
     
       
    }

    window.addEventListener('resize', adjustFontSize);
    window.addEventListener('load', adjustFontSize);
// Function to hide/show spans based on window width
function removefont() {
    var disappearingSpan = document.querySelector('.mainpart .back span span');
    
    if (window.innerWidth < 1300) {
        // Hide the span by setting display to 'none'
        disappearingSpan.style.display = 'none';
    } else {
        // Show the span if width is less than or equal to 1300px
        disappearingSpan.style.display = 'inline'; // or 'inline-block' depending on your CSS
    }
}

function removespan() {
    var disappearingSpan2 = document.querySelector('.mainpart .back span');
    
    if (window.innerWidth < 400) {
        // Hide the span by setting display to 'none'
        disappearingSpan2.style.display = 'none';
    } else {
        // Show the span if width is less than or equal to 400px
        disappearingSpan2.style.display = 'inline'; // or 'inline-block' depending on your CSS
    }
}

// Event listeners to call functions on window resize and load
window.addEventListener('resize', removefont);
window.addEventListener('load', removefont);

window.addEventListener('resize', removespan);
window.addEventListener('load', removespan);


document.addEventListener('DOMContentLoaded',function onebyone(){
    const wel = document.querySelector('.wel');
    const text='Welcome to my Portfolio!';
    
    const textL=text.length;
  
   
       for(let i=0;i<textL;i++)
        { setTimeout(() =>{
            wel.textContent=wel.textContent+(text.slice(i,i+1));
        },i*150);

        }
});



function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth'  });
    }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}