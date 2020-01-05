import { LightningElement, track, api } from 'lwc';

export default class prddetail extends LightningElement {
	
	@track mainData;
	isShow=false;

	renderedCallback(){
		var dc = this.template.querySelector('.extCssId');
		console.log(dc);
		var x = document.createElement("link");
		x.rel="stylesheet";
		x.href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
		x.crossorigin="anonymous";
		if(this.isShow) dc.append(x);
	}

	@api
	get appdata() {
		return this.mainData;
	}
	set appdata(value) {
		//this.mainData = {...value};
		this.mainData = JSON.parse(JSON.stringify(value));
	}

	handleChange(event) {
		const field = event.target.name;
		if (field === 'prdName') {
			this.mainData.prd.prdName = event.target.value;
		} 
		else if (field === 'prdQuantity') {
			this.mainData.prd.prdQuantity = event.target.value;
		}
		else if (field === 'prdPrice') {
			this.mainData.prd.prdPrice = event.target.value;
		}
	}

	@api
    showcomponent() {
        this.isShow = true;
	}
	
	saveandgen(){
		const retEvent = new CustomEvent('finalstep', {
			detail: this.mainData
		});
		this.dispatchEvent(retEvent);
	}
}
