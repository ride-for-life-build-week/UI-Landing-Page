const navContainer = document.querySelector('.nav');

navContainer.addEventListener('mouseover', function(element) {
  element.target.style.color = 'orange';
});

navContainer.addEventListener('mouseout', function(element) {
  element.target.style.color = 'white';
  
});

const header = document.querySelector('.intro');

header.addEventListener('mouseenter', function(element) {
  element.target.style.backgroundColor = 'black';
  });

header.addEventListener('mouseleave', function(element) {
  element.target.style.backgroundColor = '#292626';
  });

const benefits = document.querySelector('.benefits');
benefits.addEventListener('copy', function(element) {
  element.style.backgroundColor = '#a3d5e0';
})

const leftBtn = document.querySelector('.left-button');

leftBtn.addEventListener('click', function (element) {
  element.target.style.color = 'orange';
  element.target.style.border = 'none';
});

const rightBtn = document.querySelector('.right-button');

rightBtn.addEventListener('click', function (element) {
  element.target.style.color = 'orange';
  element.target.style.border = 'none';
});