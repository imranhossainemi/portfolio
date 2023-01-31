let project = {
  name: 'Keeping track of hundreds of components',
  description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  featured_image: {
    desktop:'desktop_pop.png',
    mobile:'mobile_pop.png'
  },
  technologies: ['Ruby on rails','css','JavScript'],
  live: 'live',
  source: 'source'
};

const modal = document.querySelector('.modal');
let h2 = document.createElement('h2');
h2.textContent = project.name;
let p = document.createElement('p');
p.textContent = project.description;
modal.appendChild(h2);
modal.appendChild(p);
