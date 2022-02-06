let data = {
    Uzb: {
      title: 'Assalomu alaykum',
      description:
        'Ilm bu – nurdir. U bilan inson jannat tomon eltuvchi yo’lini yoritadi. Ilm qanchalik kuchli bo’lsa u shunchalik kengroq yerni yoritadi. Dunyodagi barcha narsa vaqt o’tib, ishlatilib, kamayishianiq, lekin, ilm qancha ishlatilmasin ortsa ortadiki hech qachon kamaymaydi.Ilm olish inson uchun naqadar bebaho ne’mat hisoblanadi. Nafaqat ilm olish balki uni tarqatish ham saodatliamallardan biridir.',
    },
  
    Eng: {
      title: 'Hello',
      description:
        'Science is light.  With it, man illuminates the path to heaven.  The stronger the science, the brighter the earth.  It is clear that everything in the world will be used and diminished over time, but no matter how much science is used, it will never decrease.Knowledge is a priceless gift.  Not only acquiring knowledge but also disseminating it is one of the blissful deeds.',
    },
    Rus: {
      title: 'Привет',
      description:
        'Наука светла.  С его помощью человек освещает путь к небу.  Чем сильнее наука, тем ярче земля.  Понятно, что все в мире со временем будет использоваться и уменьшаться, но сколько бы ни использовалась наука, она никогда не уменьшится.Знания — бесценный дар.  Не только приобретение знаний, но и их распространение — одно из блаженных дел',
    },
  };
  
  let activeClass = document.querySelector('.LangeWrap');
  let links = document.querySelectorAll('a');
  let heading = document.querySelector('.title');
  let text = document.querySelector('.description');
  
  links.forEach(function (el) {
    el.addEventListener('click', function () {
      activeClass.querySelector('.active').classList.remove('active');
      el.classList.add('active');
      let attr = el.getAttribute('lang');
      heading.textContent = data[attr].title;
      text.textContent = data[attr].description;
    });
  });
  