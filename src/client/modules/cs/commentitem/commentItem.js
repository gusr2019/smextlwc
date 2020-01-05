import { LightningElement, track, api } from 'lwc';

export default class commentItem extends LightningElement {
    
	renderedCallback(){
		var dc = this.template.querySelector('.extCssId');
		console.log(dc);
		var x = document.createElement("link");
		x.rel="stylesheet";
		x.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
		x.crossorigin="anonymous";
		console.log(dc);
		dc.append(x);
	};
	
	@api comment;
    @api index;
}
