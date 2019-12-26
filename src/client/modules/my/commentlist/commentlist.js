import { LightningElement, track, api } from 'lwc';

export default class commentlist extends LightningElement {
    comment1 = {Number:"12", Content: "4444", CreatedBy:"2222", CreatedDate:"3333"};
    comment = {Number:"", Content: "", CreatedBy:"", CreatedDate:""};
    @track commentlist = [
        {Number:"0", Content: "A", CreatedBy:"", CreatedDate:"",key:"0"},
        {Number:"1", Content: "B", CreatedBy:"", CreatedDate:"",key:"1"},
        {Number:"2", Content: "C", CreatedBy:"", CreatedDate:"",key:"2"}
    ];

    /*@api
    set speed(value) {
        this.animationSpeed = value;
    }
    get speed() {
        return this.animationSpeed;
    }*/

    handleChange(event) {
        const field = event.target.name;
        if (field === 'Number') {
            this.comment.Number = event.target.value;
        } 
        else if (field === 'Content') {
            this.comment.Content = event.target.value;
        }
        else if (field === 'CreatedBy') {
            this.comment.CreatedBy = event.target.value;
        }
        else if (field === 'CreatedDate') {
            this.comment.CreatedDate = event.target.value;
        }
    }

    addComment() {
        let lcomment = Object.assign({}, this.comment);
        lcomment['key'] = this.commentlist.length + 1;

        this.commentlist.push(lcomment);
        this.comment = {Number:"", Content: "", CreatedBy:"", CreatedDate:""};
        console.log(JSON.stringify(this.commentlist));
    }
    
    deleteComment(index) {
        this.commentlist.pop(index);
    }
}
