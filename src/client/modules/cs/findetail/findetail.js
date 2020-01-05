import { LightningElement, track, api } from 'lwc';

export default class findetail extends LightningElement {
	
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
		if (field === 'averagetransection') {
			this.mainData.fin.averagetransection = event.target.value;
		} 
		else if (field === 'anualturnover') {
			this.mainData.fin.anualturnover = event.target.value;
		}
	}

	savedata(){
		const retEvent = new CustomEvent('nextstep', {
			detail: this.mainData
		});
		this.dispatchEvent(retEvent);
	}

	@api
    showcomponent() {
        this.isShow = true;
    }
}
