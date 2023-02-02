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
const closeBtnDiv = document.createElement('div');
closeBtnDiv.className = 'closeBtnDiv';
const closeBtn = document.createElement('button');
closeBtn.className = 'closeBtn';
closeBtn.setAttribute('data-close-button', '#modal');
closeBtnDiv.appendChild(closeBtn);
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
const btnLive = document.createElement('a');
btnLive.className = 'btnLive';
btnLive.textContent = 'See Live';
const att = document.createAttribute('href');
att.value = '#';
const attTwo = document.createAttribute('href');
attTwo.value = '#';
btnLive.setAttributeNode(att);
const btnSource = document.createElement('a');
btnSource.className = 'btnSource';
btnSource.textContent = 'See Source';
btnSource.setAttributeNode(attTwo);
divBtn.appendChild(btnLive);
divBtn.appendChild(btnSource);
modal.appendChild(closeBtnDiv);
modal.appendChild(projectImgdesktop);
modal.appendChild(projectImgmobile);
modal.appendChild(h2);
modal.appendChild(ul);
modal.appendChild(p);
modal.appendChild(divBtn);

const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelector('.closeBtn');
const overlay = document.getElementById('overlay');
const pop = document.querySelector('.modal');
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('activeModal');
  overlay.classList.add('activeModal');
}

openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

function closeModal() {
  pop.classList.remove('activeModal');
  overlay.classList.remove('activeModal');
}

function outsideClick(e) {
  if (e.target === pop) {
    pop.classList.remove('activeModal');
    overlay.classList.remove('activeModal');
  }
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', outsideClick);