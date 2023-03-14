window.onload = () => {
    const li = document.querySelectorAll('header ul li')
  
    Object.keys(li).forEach((k) =>
      li[k].addEventListener('click', function () {
        li.forEach((v) => v.classList.remove('menu'))
  
        this.classList.add('menu')
  
        const s = document.querySelector('.slider-block').offsetWidth
  
        let t
  
        if (k == 0) t = 0
        if (k == 1) t = s
        if (k == 2) t = s * 2
        if (k == 3) t = s * 3
        if (k == 4) t = s * 4
        if (k == 5) t = s * 5
  
        document.querySelector(
          '.slider'
        ).style.transform = `translateX(-${t}px)`
      })
    )
  }
  