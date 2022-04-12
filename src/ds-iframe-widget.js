import {iframeResize} from 'iframe-resizer';

function init(iframeId, initialSettings = {}) {
  if (typeof window === 'undefined') return; // don't run for server side render
  this.btnEle = null;
  this.iframeEle = null;
  this.settings = {
    iframeId: iframeId,
    ...initialSettings,
  };
  this.api_key = this.settings.api_key || '';

  if (!this.settings.iframeId) {
    console.warn('iframeId should be provided.');
    return;
  }

  this.iframeResizerSettings = {
    log: initialSettings.log || false,
    checkOrigin: initialSettings.checkOrigin || false,
    onResized: (iframe,height,width,type) => {
      // console.log(iframe, height, width, type);
    },
    onMessage: ({iframe,message}) => {
      // console.log(iframe, message);
    },
  }

  this.isModal = () => {
    return this.settings.widgetMode === 'modal';
  }

  this.getIframeId = () => {
    return this.isModal() ? `dsw-${this.settings.api_key}-modal` : `${this.settings.iframeId}`
  }

  this.getIframeModalWrapId = () => {
    return `dsw-${this.settings.api_key}-wrap`;
  }

  this.getIframe = () => {
    return document.getElementById(this.getIframeId());
  }

  this.getIframeModalWrap = () => {
    return document.getElementById(this.getIframeModalWrapId());
  }

  this.getIframeModalCloseButton = () => {
    return this.getIframeModalWrap().querySelectorAll('.dsw-close')[0];
  }

  this.getIframeModalFireButton = () => {
    return document.querySelectorAll(this.settings.iframeId)[0];
  }

  this.getCloseButton = () => {
    return `
    <div class="dsw-close">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="none"/>
        <path d="M19 5L5 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 5L19 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>  
    `;
  }

  this.addModalIframeCss = () => {
    const css = `
      body{
        background: transparent;
      }
      #${this.getIframeModalWrapId()} {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: transparent;
        z-index: 99999;
        display: none;
        background: rgb(0,0,0,0.6);
        backdrop-filter: blur(7px);
      }
      
      #${this.getIframeModalWrapId()}.dsw-wrap-opened {
        display: flex;
      }
      
      #${this.getIframeModalWrapId()} iframe {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
        opacity: 1;
        transition: width 200ms ease 0s, height ease 0s, max-height ease 0s;
      }
      
      #${this.getIframeModalWrapId()} .dsw-close {
        position: fixed;
        top: 0;
        right: 0;
        margin-right: 2rem;
        margin-top: 2rem;
        padding: 5px; 
        border-radius: 100%;
        background: white;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
        transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      #${this.getIframeModalWrapId()} .dsw-close:hover svg {
        scale: 1.1;
      }
    `;
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  this.showWidgetModal = () => {
    if (!this.getIframeModalWrap()) return;

    this.iframeEle.src = `http://192.168.110.46:3000/widget?api_key=${this.api_key}&modal=1`;
    this.getIframeModalWrap().classList.add('dsw-wrap-opened');
    this.getIframe().style.height = '270px';
    // console.log(this.getIframe().style.height);
    // console.log(this.getIframe().parentElement.clientHeight);
  };

  this.hideWidgetModal = () => {
    if (!this.getIframeModalWrap()) return;

    this.getIframeModalWrap().classList.remove('dsw-wrap-opened');
    this.iframeEle.src = ``;
  };

  this.initWidgetModal = () => {
    this.btnEle = this.getIframeModalFireButton();
    if (!this.btnEle) {
      console.log(`button does not exist: ${this.settings.iframeId}`);
      return;
    }

    if (!this.iframeEle) {
      this.addModalIframeCss();
      const html = `
            <div id="${this.getIframeModalWrapId()}" class="dsw-wrap">
              ${this.getCloseButton()}
              <div style="max-height: 100%; overflow-y: auto">
                <iframe id="${this.getIframeId()}" 
                      title="dropspace widget"
                      class="dsw-iframe"
                      src=""
                      frameborder="no" allowtransparency="true" allowfullscreen=""
                      scrolling="yes"
                      style="display: block; width: 425px; max-width: 100vw;"
                >
                </iframe>
              </div>
            </div>
        `;
      document.body.innerHTML += html;
    }

    this.iframeEle = this.getIframe();
    iframeResize(this.iframeResizerSettings, '#' + this.getIframeId());

    // mint button to open a modal.
    this.getIframeModalFireButton().addEventListener('click', (e) => this.showWidgetModal());

    // close button
    this.getIframeModalCloseButton().addEventListener('click',(e) => this.hideWidgetModal());
  };

  const l = () => {
    if (this.settings.widgetMode == 'modal') {
      this.initWidgetModal();
    } else {
      iframeResize(this.iframeResizerSettings, this.settings.iframeId);
    }
  };

  if (window.attachEvent) {
    window.attachEvent('onload', l);
  } else {
    window.addEventListener('load', l, false);
  }
};

export {init, iframeResize};