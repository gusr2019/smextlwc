import { LightningElement, track, api } from 'lwc';
import { getMainData } from 'cs/util';

export default class welcome extends LightningElement {
	
	@track mainData;
	mainDataJSON;
	isFinalShow = false;

	constructor(){
		super();
		this.mainData = getMainData();
	}

	renderedCallback(){
		var dc = this.template.querySelector('.extCssId');
		
		var x = document.createElement("link");
		x.rel="stylesheet";
		x.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
		x.crossorigin="anonymous";
		dc.append(x);

		var x2 = document.createElement("script");
		x2.src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
		//dc.append(x2);

		var x3 = document.createElement("script");
		x3.src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
		//dc.append(x3);

		//setTimeout(() => { this.mainData.app.tradingName = 'JJJJJJ'; }, 3000);

		if(this.isFinalShow){
			this.openModal();
		}
	}

	handleChange(event) {
		const field = event.target.name;
		if (field === 'tradingName') {
			this.mainData.app.tradingName = event.target.value;
		} 
		else if (field === 'tradingClass') {
			this.mainData.app.tradingClass = event.target.value;
		}
		else if (field === 'firstName') {
			this.mainData.app.firstName = event.target.value;
		}
	}

	saveandnext(){
		this.template.querySelector('cs-findetail').showcomponent();
		
		var dc = this.template.querySelector('.unqPB1');
		dc.setAttribute('style' , 'width: 33%;');
	}

	showProduct(event){
		this.mainData = event.detail; //data recieved from child i.e. cs-findetail
		this.template.querySelector('cs-prddetail').showcomponent();

		var dc = this.template.querySelector('.unqPB1');
		dc.setAttribute('style' , 'width: 66%;');
	}

	savefinal(event){
		this.mainData = event.detail; //data recieved from child i.e. cs-prddetail
		this.isFinalShow=true;
		this.mainDataJSON = JSON.stringify(this.mainData);

		var dc = this.template.querySelector('.unqPB1');
		dc.setAttribute('style' , 'width: 100%;');
	}

	openModal(){
		var dc = this.template.querySelector('.myModal');
		console.log(dc);
		dc.classList.remove('out');
		dc.classList.add('in');
		dc.setAttribute('style' , 'display: block;');

		var dc2 = this.template.querySelector('.myModalDrop');
		dc2.classList.remove('out');
		dc2.classList.add('in');
	}

	closeModal(){
		var dc = this.template.querySelector('.myModal');
		console.log(dc);
		dc.classList.add('out');
		dc.classList.remove('in');
		dc.setAttribute('style' , 'display: none;');

		var dc2 = this.template.querySelector('.myModalDrop');
		dc2.classList.add('out');
		dc2.classList.remove('in');
	}
}
