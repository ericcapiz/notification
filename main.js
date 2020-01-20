var notify = document.querySelector('.notify')
var albums = document.querySelectorAll('.album')
var itemsTotal = document.querySelector('.itemsTotal')
var saveBtn = document.querySelector('.button')
//created variables from classes

var albumsSelected = []
//created empty array for items to be added
var i = 0

while(i < albums.length) {
  albums[i].onclick = function(e){
    var albumTitle = this.querySelector('.title').textContent
//when album is clicked, its getting the text info from that class
    if(this.classList.contains('selected') != true){
      this.classList.add('selected')
      albumsSelected.push(albumTitle)
    //if the album is selected, its adding the selected class to it and adding it to the empty array
    }else{
      this.classList.remove('selected')
      albumsSelected = albumsSelected.filter(function(item){
        return item != albumTitle
    //if the album is selected and clicked, itl remove the selected class and remove from the array
      })
    }
    console.log(albumsSelected)
  }
  i++
}

saveBtn.onclick = function(){
  itemsTotal.textContent = albumsSelected.length + ' items saved'
  notify.classList.add('active')
  //once save is clicked, notification pops up and tells you how many are saved
  setTimeout(function(){
    notify.classList.remove('active')
  }, 2000)
  //this is the timer the notification stays on screen
  console.log('saved')
}
