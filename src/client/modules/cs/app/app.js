import { LightningElement } from 'lwc';

export default class App extends LightningElement {
	
	renderedCallback(){
		var dc = this.template.querySelector('.extCssId');
		var x = document.createElement("link");
		x.rel="stylesheet";
		x.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
		x.crossorigin="anonymous";
		dc.append(x);
	};
}
