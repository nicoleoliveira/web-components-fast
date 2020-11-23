import { FASTElement, customElement, attr, html } from '@microsoft/fast-element';

import { buttonStyles } from './wcf-button.style';
import { themeDefault } from '../global.style';

const template = html<Button>`
  <button
    @click="${x => x.onClick()}"
    class="${x => x.type}${x => x.disabled ? ' disabled' : ''}">
    ${x => x.label}
  </button>
`;

@customElement({
  name:'wcf-button',
  template,
  styles: [themeDefault, buttonStyles]
})
export class Button extends FASTElement {
  @attr label: string = '';
  @attr type: string = 'default';
  @attr disabled: boolean = false;

  private customClick: Event = document.createEvent('Event');

  constructor() {
    super()
    this.customClick.initEvent('clickButton', true, true);
  }

  onClick() {
    this.dispatchEvent(this.customClick);
  }
}