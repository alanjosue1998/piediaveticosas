let miniatura = document.getElementsByClassName('miniatura')
let Image_active = document.getElementsByClassName('active')
for (var i=0; i < miniatura.length; i++){

	miniatura[i].addEventListener('click', function(){
		
		if (Image_active.length > 0){
			Image_active[0].classList.remove('active')
		}	
		
		this.classList.add('active')
		document.getElementById('destacado').src = this.src
	})
}

