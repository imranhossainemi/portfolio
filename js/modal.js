const project = {
  name: 'Keeping track of hundreds of components',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  featured_image: {
    desktop: 'images/desktop_pop.png',
    mobile: 'images/mobile_pop.png',
  },
  technologies: ['Ruby on rails', 'css', 'JavScript'],
  live: 'live',
  source: 'source',
};

const modal = document.querySelector('.modal');
const h2 = document.createElement('h2');
h2.textContent = project.name;
const p = document.createElement('p');
p.textContent = project.description;
const closeBtn = document.createElement('button');
closeBtn.className = 'closeBtn';
const projectImgdesktop = document.createElement('img');
projectImgdesktop.className = 'imgDesk';
const projectImgmobile = document.createElement('img');
projectImgmobile.className = 'imgMob';
projectImgdesktop.src = project.featured_image.desktop;
projectImgmobile.src = project.featured_image.mobile;
const ul = document.createElement('ul');
ul.className = 'tech';
let li = document.createElement('li');
const liTxt1 = project.technologies[0];
li.textContent = liTxt1;
ul.appendChild(li);
li.className = 'tech-item';
li = document.createElement('li');
const liTxt2 = project.technologies[1];
li.textContent = liTxt2;
ul.appendChild(li);
li.className = 'tech-item';
li = document.createElement('li');
const liTxt3 = project.technologies[2];
li.textContent = liTxt3;
ul.appendChild(li);
li.className = 'tech-item';
const divBtn = document.createElement('div');
divBtn.className = 'divBtn';
const btnLive = document.createElement('button');
btnLive.className = 'btnLive';
btnLive.textContent = 'See Live';
const btnSource = document.createElement('button');
btnSource.className = 'btnSource';
btnSource.textContent = 'See Source';
divBtn.appendChild(btnLive);
divBtn.appendChild(btnSource);
modal.appendChild(closeBtn);
modal.appendChild(projectImgdesktop);
modal.appendChild(projectImgmobile);
modal.appendChild(h2);
modal.appendChild(ul);
modal.appendChild(p);
modal.appendChild(divBtn);
