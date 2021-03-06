


const test = () => {

  const animationDuration = 60000 / 2

  const svgHeader = document.querySelector('.fil-pod-svg')
  const imgHeader = document.querySelector('.header-main-img')
  const windowWidth = window.innerWidth
  const svgWidth = -1 * window.innerHeight / 0.745 + windowWidth / 2
  const imgWidth = -1 * window.innerHeight / 0.25 + windowWidth

  svgHeader.style.right = `${svgWidth}px`
  imgHeader.style.right = `${imgWidth}px`
  let flag = true

  setInterval(function () {
    flag ? svgHeader.src = './svg/fil-pod-svg.svg' : svgHeader.src = './svg/fil-pod-svg2.svg'
    flag = !flag
  }, animationDuration)

}


const navigation = () => {
  //hamburger
  const navText = document.querySelector('nav.mobile-nav')
  const navElipse = document.querySelector('.ellipse-nav')
  document.querySelector('.hamburger').addEventListener('click', function () {
    navText.classList.toggle('hidden')
    navElipse.classList.toggle('hidden')
  })

  //nav

  let navArray = [...document.querySelectorAll('.mob-nav')]

  navArray.forEach(nav => {
    nav.addEventListener('click', function () {
      navText.classList.add('hidden')
      navElipse.classList.add('hidden')

    })
  })

  let navElementsArray = document.getElementById('header')
  let navSectionsArray = [...document.querySelectorAll('section')]
  navElementsArray = [navElementsArray, ...navSectionsArray]

  let navElementsOffsetArray = []

  navElementsArray.forEach(element => { navElementsOffsetArray.push(element.offsetTop) })

  window.addEventListener('scroll', function () {
    let scrollValue = window.scrollY

    navElementsOffsetArray[0] <= scrollValue && scrollValue + 20 < navElementsOffsetArray[1] ? navArray[0].classList.add('active') : navArray[0].classList.remove('active')

    navElementsOffsetArray[1] <= scrollValue + 20 && scrollValue + 20 < navElementsOffsetArray[2] ? navArray[1].classList.add('active') : navArray[1].classList.remove('active')

    navElementsOffsetArray[2] <= scrollValue + 20 && scrollValue + 20 < navElementsOffsetArray[3] ? navArray[2].classList.add('active') : navArray[2].classList.remove('active')

    navElementsOffsetArray[3] <= scrollValue + 20 && scrollValue + 20 < navElementsOffsetArray[4] ? navArray[3].classList.add('active') : navArray[3].classList.remove('active')

    navElementsOffsetArray[4] <= scrollValue ? navArray[4].classList.add('active') : navArray[4].classList.remove('active')

    // console.log(scrollValue, navElementsOffsetArray)

  })

}




const aboutInfo = () => {
  const info = ['bartosz', 'cylwik', 'front-end developer', 'mgr inż.']

  const infoDestination = []
  infoDestination.push(document.querySelector('.first-name span'))
  infoDestination.push(document.querySelector('.last-name span'))
  infoDestination.push(document.querySelector('.job span'))
  infoDestination.push(document.querySelector('.degree span'))

  let counter = 0;
  let type = 0
  let content1 = ''

  const addLetterFunction = () => {
    // counter = 0

    if (counter < info[type].length) {
      content1 += info[type][counter]
      infoDestination[type].textContent = content1
    }


    counter++;


    if (counter === info[type].length) {

      type++
      counter = 0

      content1 = ''

    }

    if (type >= info.length) {
      // type = 0
      clearInterval(interval);
      setTimeout(function () {
        type = 0

        infoDestination.forEach(one => one.textContent = '')
        interval = setInterval(addLetterFunction, 200)
      }, 5000)

    }

  }


  let interval = setInterval(addLetterFunction, 200)



  // console.log(infoDestination)

}






const svgIcons = () => {

  const svgDestiny = [...document.querySelectorAll('.cart .svg')]
  const svgCartCont = [...document.querySelectorAll('.cart-cont')]

  const svgOffsetTop = []


  svgDestiny.forEach((svg, id) => {
    svg.innerHTML = svgCart[id]
    svgOffsetTop.push(svgCartCont[id].offsetTop)
  })

  window.addEventListener('scroll', function (e) {

    let scrollValue = window.scrollY
    let windowHeight = window.innerHeight
    let stackDiv = [...document.querySelectorAll('.cart-cont .cart')]


    scrollValue >= svgOffsetTop[0] - scrollValue / 4 ? stackDiv[0].classList.remove('left') : stackDiv[0].classList.add('left')
    scrollValue >= svgOffsetTop[1] - scrollValue / 4 ? stackDiv[1].classList.remove('right') : stackDiv[1].classList.add('right')
    scrollValue >= svgOffsetTop[2] - scrollValue / 4 ? stackDiv[2].classList.remove('left') : stackDiv[2].classList.add('left')
    scrollValue >= svgOffsetTop[3] - scrollValue / 4 ? stackDiv[3].classList.remove('right') : stackDiv[3].classList.add('right')
    scrollValue >= svgOffsetTop[4] - scrollValue / 4 ? stackDiv[4].classList.remove('left') : stackDiv[4].classList.add('left')
    scrollValue >= svgOffsetTop[5] - scrollValue / 4 ? stackDiv[5].classList.remove('right') : stackDiv[5].classList.add('right')
    scrollValue >= svgOffsetTop[6] - scrollValue / 4 ? stackDiv[6].classList.remove('left') : stackDiv[6].classList.add('left')


    if (scrollValue >= svgOffsetTop[0] - windowHeight / 2) {
      animateSVGSOffset(1)
    }
    if (scrollValue >= svgOffsetTop[1] - windowHeight / 2) {
      animateSVGSOffset(2)
    }
    if (scrollValue >= svgOffsetTop[2] - windowHeight / 2) {
      animateSVGSOffset(3)
    }
    if (scrollValue >= svgOffsetTop[3] - windowHeight / 2) {
      animateSVGSOffset(4)
    }
    if (scrollValue >= svgOffsetTop[4] - windowHeight / 2) {
      animateSVGSOffset(5)
    }
    if (scrollValue >= svgOffsetTop[5] - windowHeight / 2) {
      animateSVGSOffset(6)
    }
    if (scrollValue >= svgOffsetTop[6] - windowHeight / 2) {
      animateSVGSOffset(7)
    }
  })

  const animateSVGSOffset = (number) => {
    let clickedSVG = [...document.querySelectorAll(`.cart-cont:nth-of-type(${number}) .cart svg path`)]
    let svgLength = []

    clickedSVG.forEach(svg => {
      svgLength.push(svg.getTotalLength())
    })

    for (let i = 0; i < clickedSVG.length; i++) {
      clickedSVG[i].style.strokeDasharray = svgLength[i]
      clickedSVG[i].style.strokeDashoffset = svgLength[i]

      clickedSVG[i].style.animation = `svgAnimate 5s ease both`
    }
  }

}


const dualImagesAnimation = function () {

  const dualImagesLeft = [...document.querySelectorAll('.image1')]
  const dualImagesRight = [...document.querySelectorAll('.image2')]

  const equalize = function (e) {
    let index;

    this.classList.contains('image1') ? index = dualImagesLeft.findIndex(image => image === this) : index = dualImagesRight.findIndex(image => image === this)

    if (e.type === 'mouseover' || e.type === 'touchstart') {
      dualImagesLeft[index].classList.add('equalize')
      dualImagesRight[index].classList.add('equalize')
    } else if (e.type === 'mouseout' || e.type === 'touchend') {
      dualImagesLeft[index].classList.remove('equalize')
      dualImagesRight[index].classList.remove('equalize')
    }

  }

  dualImagesLeft.forEach((imageLeft, id) => {
    imageLeft.addEventListener('mouseover', equalize)
    imageLeft.addEventListener('mouseout', equalize)
    imageLeft.addEventListener('touchstart', equalize)
    imageLeft.addEventListener('touchend', equalize)
  })

  dualImagesRight.forEach((imageRight, id) => {
    imageRight.addEventListener('mouseover', equalize)
    imageRight.addEventListener('mouseout', equalize)
    imageRight.addEventListener('touchstart', equalize)
    imageRight.addEventListener('touchend', equalize)
  })
}



const cursorMove = () => {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  document.body.appendChild(circle)

  const fCircle = document.querySelector('.circle')

  window.addEventListener('mousemove', function (e) {

    fCircle.style.left = `${e.clientX}px`
    fCircle.style.top = `${e.clientY}px`


  })


  let allIMGS = [...document.querySelectorAll('img')]
  let allAs = [...document.querySelectorAll('a')]
  allIMGS = [...allIMGS, ...allAs]




  allIMGS.forEach(one => {
    one.addEventListener('mouseover', function () {
      fCircle.style.width = `${150}px`
      fCircle.style.height = `${150}px`

    })
  })

  allIMGS.forEach(one => {
    one.addEventListener('mouseout', function () {
      fCircle.style.width = `${100}px`
      fCircle.style.height = `${100}px`
    })
  })



}



const showEmailAsAlert = () => {
  document.getElementById('email').addEventListener('click', function () {
    alert('Mój adres email to: bartosz.cylwik94@gmail.com')
  })
}


test()
navigation()
aboutInfo()
svgIcons()
dualImagesAnimation()
cursorMove()
showEmailAsAlert()