import { buildCustomElementConstructor } from 'lwc';
import MyApp from 'cs/app';

customElements.define('cs-app', buildCustomElementConstructor(MyApp));
