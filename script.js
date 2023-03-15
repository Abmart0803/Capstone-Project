const button = document.getElementById('btn');
const closeMenus = document.getElementById('menu-close');
const menuList = document.querySelectorAll('.menu-item');
const menuShow = document.getElementById('menu-show');

let moreState = 1;

const openMenu = () => {
  menuShow.classList.remove('menu-container');
  menuShow.classList.add('show-menu');
};

const closeMenu = () => {
  menuShow.classList.remove('show-menu');
  menuShow.classList.add('menu-container');
};

button.addEventListener('click', openMenu);
closeMenus.addEventListener('click', closeMenu);

menuList.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

const featureArr = [
  {
    speakerName: 'Anthony R. Roberto',
    speakerstatus: 'Director, Xmartlabs (Uruguay)',
    speakerdetail:
      'Anthony R. Roberto is the Director of Xmartlabs, Uruguay, A product development studio based in Uruguay with offices in San Franscisco, USA.',
    speakerimage: './images/spk1.jpg',
    alt: 'Anthony Roberto',
  },
  {
    speakerName: 'Roshni Nadar Malhotra',
    speakerstatus: 'CEO and Executive Director of HCL Corporation (India)',
    speakerdetail:
      'Roshni Nadar Malhotra, is the daughter of one of India’s pioneering industrialist and philanthropist Shiv Nadar.',
    speakerimage: './images/spk2.jpg',
    alt: 'Rhea Mazumdar Singhal',
  },
  {
    speakerName: 'Vanitha Narayanan ',
    speakerstatus: 'Managing Director, IBM, India',
    speakerdetail:
      'With operations in over 170 countries and an existence of over a century, IBM is a name to reckon with in the technology world. Spearheading IBM’s transformational initiatives in India and expanding its footprint in the country is Ms. Vanitha Narayanan.',
    speakerimage: './images/spk3.jpg',
    alt: 'Vanitha Narayan',
  },
  {
    speakerName: 'Nacho De Marco',
    speakerstatus: 'CEO at BairesDev & General Partner at BDev Ventures ',
    speakerdetail:
      'BairesDev is an industry-leading staff augmentation and software outsourcing company helping technology leaders from companies of all sizes - from startups to Fortune 500 companies.',
    speakerimage: './images/spk4.jpg',
    alt: ' Nacho Marco',
  },
  {
    speakerName: 'Harikrishna Kundariya',
    speakerstatus: ' CEO & Founder @eSparkBiz Technologies, India',
    speakerdetail:
      'eSparkBiz, a CMMI level 3 and ISO 9001:2008 certified company, has established itself as a leading Software and web development solution provider in the IT sector. ',
    speakerimage: './images/spk5.jpg',
    alt: 'Harikrishna',
  },
  {
    speakerName: 'Anatolii Pazhyn',
    speakerstatus:
      'CEO AnyforSoft',
    speakerdetail:
      'AnyforSoft is a software development company with expertise in implementing complex web and mobile development solutions for more than 140 clients around the globe. ',
    speakerimage: './images/spk6.jpg',
    alt: 'Ruth Shapiro',
  },
];

const featureContainer = document.querySelector('.feature-speaker');

const creatfeaturespeaker = () => {
  featureContainer.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="single-feature-speker">
    <div class="image">
      <img src="./images/chessboard-bg-img.jpg"
      alt="white board bg"
      class="bg-img"/>
      <img 
      src=""
      alt="avatear"
      class="avatar"
      />
    </div>
    <div class="speaker-description">
      <h3 class="speaker-name"></h3>
      <p class="speaker-details"></p>
      <div class="border-line">
      </div>
      <p class="speaker-background"></p>
    </div>
  </div>
  `,
  );
};
for (let i = 0; i < featureArr.length; i += 1) {
  creatfeaturespeaker();
  const speakerName = document.querySelector('.speaker-name');
  const speakerstatus = document.querySelector('.speaker-details');
  const speakerdetail = document.querySelector('.speaker-background');
  const speakerimage = document.querySelector('.avatar');

  speakerName.textContent = featureArr[i].speakerName;
  speakerstatus.textContent = featureArr[i].speakerstatus;
  speakerdetail.textContent = featureArr[i].speakerdetail;
  speakerimage.setAttribute('src', featureArr[i].speakerimage);
}

const moreText = 'MORE <i class="bi-solid bi bi-chevron-down"></i>';
const lessText = 'LESS <i class="bi-solid bi bi-chevron-up"></i>';

const allSpeakers = document.querySelectorAll('.single-feature-speker');
const featureSpeakerBtn = document.getElementById('speaker-btn');

featureSpeakerBtn.addEventListener('click', () => {
  if (moreState === 1) {
    featureSpeakerBtn.innerHTML = lessText;
    allSpeakers.forEach((speaker, index) => {
      if (index > 1) {
        speaker.classList.remove('hideElement');
      }
    });

    moreState = 0;
  } else if (moreState === 0) {
    featureSpeakerBtn.innerHTML = '';
    featureSpeakerBtn.innerHTML = moreText;
    allSpeakers.forEach((speaker, index) => {
      if (index > 1) {
        speaker.classList.add('hideElement');
      }
    });

    moreState = 1;
  } else {
    alert('none of condigions');
  }
});

if (window.innerWidth < 768) {
  allSpeakers.forEach((speaker, index) => {
    if (index > 1) {
      speaker.classList.add('hideElement');
    }
  });
}

function displaySpeakers() {
  if (window.innerWidth >= 768) {
    allSpeakers.forEach((speaker, index) => {
      if (index > 1) {
        speaker.classList.remove('hideElement');
      }
    });
  }
}

window.addEventListener('resize', displaySpeakers);
