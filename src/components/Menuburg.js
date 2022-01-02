const check = document.querySelector('check')

check.addEventListener('onChange',function(event){

    if (event.currentTarget.checked) {
        alert('checked');
      } else {
        alert('not checked');
      }
})
