import { LightningElement, track, api } from 'lwc';

export default class commentItem extends LightningElement {
    @api comment;
    @api index;
}
