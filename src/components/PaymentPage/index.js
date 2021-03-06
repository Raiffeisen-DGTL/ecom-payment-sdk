import Component from 'src/utils/component';

import { Paranja } from 'src/components/Paranja';
import { addClass } from 'src/utils/classList';
import { CROSS } from 'src/constants/icons';
import style from './style.css';

export class PaymentPage extends Component {
    name = 'payment-page';

    handleClickCross = e => {
        e.stopPropagation();

        const { onForceClose } = this.props;

        onForceClose();
    }

    render() {
        const { onClose } = this.props;
        const paranja = new Paranja();

        const cover = document.createElement('div');
        addClass(cover, style.cover);

        const cross = document.createElement('div');
        cross.innerHTML = CROSS;
        addClass(cross, style.cross);
        cross.addEventListener('click', this.handleClickCross);

        const wrap = document.createElement('div');
        addClass(wrap, style.wrap);

        const inner = document.createElement('div');
        addClass(inner, style.inner);

        const iframe = document.createElement('iframe');
        iframe.setAttribute('name', this.name);
        addClass(iframe, style.iframe);

        const iframeWrap = document.createElement('div');
        addClass(iframeWrap, style['iframe-wrap']);

        cover.appendChild(wrap);
        cover.appendChild(cross);
        wrap.appendChild(iframeWrap);
        iframeWrap.appendChild(iframe);

        return paranja.execute({
            children: cover,
            onClick: onClose
        });
    }

    get url() {
        const { url } = this.props;
        const pos = url.indexOf('?');

        if (pos === -1) {
            return url;
        }

        return url.slice(0, pos);
    }
}
