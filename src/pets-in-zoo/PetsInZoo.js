import './PetsInZoo.scss';

import { Button } from '../button/Button';
import { Paginator } from '../paginator/Paginator';

import ThreeSliderPandaImg from '../assets/treeScreen/panda.png';
import ThreeSliderEagleImg from '../assets/treeScreen/eagle.png';
import ThreeSliderMonkeyImg from '../assets/treeScreen/monkey.png';
import ThreeSliderCrocImg from '../assets/treeScreen/kro.png';
import ThreeSliderFoxImg from '../assets/treeScreen/fox.png';
import ThreeSliderElephImg from '../assets/treeScreen/eleph.png';
import ThreeSliderCatImg from '../assets/treeScreen/cat.png';
import ThreeSliderAnmImg from '../assets/treeScreen/anm.png';

const ARROW = {
  arrowLeft: '<',
  arrowRight: '>'
}

const PETS_IN_ZOO = [
  {
    imgUrl: ThreeSliderPandaImg,
    alt: 'panda',
    desc: `
    Panda’s name is Bei Bei. He
    is 2 years old. Bei Bei is
    from China. He loves bamboos.
  `,
    isActive: true
  },
  {
    imgUrl: ThreeSliderEagleImg,
    alt: 'eagle',
    desc: '',
    isActive: false
  },
  {
    imgUrl: ThreeSliderMonkeyImg,
    alt: 'monkey',
    desc: '',
    isActive: false
  },
  {
    imgUrl: ThreeSliderCrocImg,
    alt: 'croc',
    desc: '',
    isActive: false
  },
  {
    imgUrl: ThreeSliderFoxImg,
    alt: 'eagle',
    desc: '',
    isActive: false
  },
  {
    imgUrl: ThreeSliderElephImg,
    alt: 'monkey',
    desc: '',
    isActive: false
  },
  {
    imgUrl: ThreeSliderCatImg,
    alt: 'croc',
    desc: '',
    isActive: false
  },
  {
    imgUrl: ThreeSliderAnmImg,
    alt: 'croc',
    desc: '',
    isActive: false
  },

]

export const PetsInZoo = () => {
  return (
    <section className="section-three">
      <div className='arrow arrow-left'>{ARROW.arrowLeft}</div>
      <div className="container">
        <h3 className="section-three__heading">Pets in Zoo</h3>

        <div className="slider">
        {PETS_IN_ZOO.map(imgAnimals => (
          <div
            key={imgAnimals.alt}
            className={`
              ${"slider-img"}
              ${imgAnimals.isActive ? 'img-active' : ''}
            `}
            style={{backgroundImage: `url('${imgAnimals.imgUrl}'`}}
          >
            {imgAnimals.isActive && [
              <p key="0" className='img-active__pharagraph'>
                {imgAnimals.desc}
              </p>,
                <div key="1" className='img-active__btns'>
                  <button className={'img-active-btn'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11.5" />
                      <path d="M16 12L10 15.4641V8.5359L16 12Z" />
                    </svg>
                    watch online
                  </button>
                  <button className={'img-active-btn'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11.5" />
                      <path d="M14.1982 15.6602C14.1982 15.1621 14.04 14.752 13.7236 14.4297C13.4072 14.1016 12.8799 13.8086 12.1416 13.5508C11.4033 13.2871 10.8291 13.0439 10.4189 12.8213C9.05371 12.0889 8.37109 11.0049 8.37109 9.56934C8.37109 8.59668 8.66699 7.79687 9.25879 7.16992C9.85059 6.54297 10.6533 6.1709 11.667 6.05371V4.1377H13.0732V6.07129C14.0928 6.21777 14.8809 6.65137 15.4375 7.37207C15.9941 8.08691 16.2725 9.01855 16.2725 10.167H14.1455C14.1455 9.42871 13.9785 8.84863 13.6445 8.42676C13.3164 7.99902 12.8682 7.78516 12.2998 7.78516C11.7373 7.78516 11.2979 7.9375 10.9814 8.24219C10.665 8.54688 10.5068 8.9834 10.5068 9.55176C10.5068 10.0615 10.6621 10.4717 10.9727 10.7822C11.2891 11.0869 11.8223 11.377 12.5723 11.6523C13.3223 11.9277 13.9111 12.1826 14.3389 12.417C14.7666 12.6514 15.127 12.9209 15.4199 13.2256C15.7129 13.5244 15.9385 13.8701 16.0967 14.2627C16.2549 14.6553 16.334 15.1152 16.334 15.6426C16.334 16.6328 16.0293 17.4355 15.4199 18.0508C14.8164 18.666 13.9727 19.0293 12.8887 19.1406V20.8545H11.4912V19.1494C10.3311 19.0205 9.4375 18.6045 8.81055 17.9014C8.18945 17.1982 7.87891 16.2666 7.87891 15.1064H10.0146C10.0146 15.8447 10.1992 16.416 10.5684 16.8203C10.9434 17.2246 11.4707 17.4268 12.1504 17.4268C12.8184 17.4268 13.3252 17.2656 13.6709 16.9434C14.0225 16.6211 14.1982 16.1934 14.1982 15.6602Z" />
                    </svg>
                    donate
                  </button>
              </div>
            ]}
          </div>
        ))}
        </div>

       <Paginator />

        <Button name='choose your favorite' />
      </div>
      <div className='arrow arrow-right'>{ARROW.arrowRight}</div>
    </section>
  );
};
