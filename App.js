const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {



	removeShow();

	

   
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);

    

	// Add show class
	tabContentItem.classList.add('show');

     
}











// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}




// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


const para = document.querySelector(".qestion-heading h3");


function onfocus()
{
    para.style.backgroundColor = "lightgreen";
    
}

function onblur()
{
    para.style.backgroundColor = "grey";
    
}

para.addEventListener("mousemove",onfocus);
para.addEventListener("mouseout",onblur);


const para2 = document.querySelector(".qestion-heading-2 h3");
function onfocus1()
{
    
    para2.style.backgroundColor = "lightgreen";
}

function onblur1()
{
    
    para2.style.backgroundColor = "grey";
}

para2.addEventListener("mousemove",onfocus1);
para2.addEventListener("mouseout",onblur1);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////



const paragraph = document.querySelector('.qestion-heading');
const text =  document.getElementById('content');



function onclick()
{
   text.classList.toggle('show');
   
}



paragraph.addEventListener("click",onclick);

const paragraph2 = document.querySelector('.qestion-heading-2');
const text2 = document.getElementById('content-2');
function onclick1()
{
   text2.classList.toggle('show');
   
}


paragraph2.addEventListener('click',onclick1);
