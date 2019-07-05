const colors = {
 "colors": [
   {
     "color": "black",
     "category": "hue",
     "type": "primary",
     "code": {
       "rgba": [255,255,255,1],
       "hex": "#000"
     }
   },
   {
     "color": "white",
     "category": "value",
     "type": "primary",
     "code": {
       "rgba": [0,0,0,1],
       "hex": "#FFF"
     }
   },
   {
     "color": "red",
     "category": "hue",
     "type": "primary",
     "code": {
       "rgba": [255,0,0,1],
       "hex": "#F00"
     }
   },
   {
     "color": "blue",
     "category": "hue",
     "type": "primary",
     "code": {
       "rgba": [0,0,255,1],
       "hex": "#00F"
     }
   },
   {
     "color": "yellow",
     "category": "hue",
     "type": "primary",
     "code": {
       "rgba": [255,255,0,1],
       "hex": "#FF0"
     }
   },
   {
     "color": "green",
     "category": "hue",
     "type": "secondary",
     "code": {
       "rgba": [0,255,0,1],
       "hex": "#0F0"
     }
   },
 ]
};

let colorBoxesInfo = colors.colors;
let holderBox = document.getElementById("boxes");

colorBoxesInfo.forEach( element => {

	let {color, category, type, code:{hex}} = element;
	
	let box = `<div class="box-item" style="background-color:${hex}"> 
				<h1>${color}</h1>
				<h2>${category}</h2>
				<h3>${type}</h3>
				</div>`;

	holderBox.innerHTML += box;

});







