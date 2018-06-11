const button = document.querySelector('button')

button.addEventListener('click', function() {
  let element = document.createElement('div')
  element.className = 'bar'
  let progress = document.createElement('div')
  progress.className = 'progress'
  progress.data = 0;
  element.appendChild(progress)
  document.body.appendChild(element)
  let set = setInterval(() => {
    if (progress.data >= 100) {
      clearInterval(set)
    } else {
      progress.data += 10;
      progress.style.width = progress.data + 'px'
    }
  }, 150)
})
