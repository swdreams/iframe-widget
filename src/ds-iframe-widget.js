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
    ...initialSettings,
  }

  this.isModal = () => {
    return this.settings.widgetMode === 'modal';
  }

  this.getIframeId = () => {
    return this.isModal() ? `dsw-${this.settings.api_key}-modal` : `${this.settings.iframeId}`;
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
    let ele;
    if (typeof this.settings.iframeId === 'string') {
      ele = document.querySelectorAll(this.settings.iframeId)[0];
      return ele;
    } else {
      return this.settings.iframeId;
    }
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

  this.getUrl = () => {
    let url = this.settings.baseUrl;
    if (!url) {
      if (this.settings.env == 'development') {
        url = `http://192.168.110.46:3000`;
      } else if (this.settings.env == 'staging') {
        url = `https://staging-widget2.dropspace.art`;
      } else {
        url = `https://widget2.dropspace.art`;
      }
    }
    url += `/widget?api_key=${this.api_key}`;
    if (this.settings.widgetMode === 'modal') {
      url += `&modal=1`;
    }
    return url;
  }

  this.showWidgetModal = () => {
    if (this.settings.log)
    this.log('onShow modal');
    if (!this.getIframeModalWrap()) return;

    this.iframeEle.src = this.getUrl();
    this.getIframeModalWrap().classList.add('dsw-wrap-opened');
    this.getIframe().style.height = '270px';
  };

  this.hideWidgetModal = () => {
    if (!this.getIframeModalWrap()) return;

    this.getIframeModalWrap().classList.remove('dsw-wrap-opened');
    this.iframeEle.src = ``;
  };

  this.initWidgetModal = () => {
    this.btnEle = this.getIframeModalFireButton();
    if (!this.btnEle) {
      console.error(`button does not exist: ${this.settings.iframeId}`);
      return;
    }

    if (!this.iframeEle) {
      if (document.getElementsByClassName('.dsw-wrap').length < 1) {
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
        const div = document.createElement('div');
        div.innerHTML += html;
        document.body.appendChild(div);
      }
    }

    this.iframeEle = this.getIframe();
    iframeResize(this.iframeResizerSettings, '#' + this.getIframeId());

    // mint button to open a modal.
    this.getIframeModalFireButton().addEventListener('click', (e) => this.showWidgetModal());

    // close button
    this.getIframeModalCloseButton().addEventListener('click',(e) => this.hideWidgetModal());
  };

  this.log = (val) => {
    if (this.settings.log) console.log(' [DSW] ', val);
  }

  const l = () => {
    if (this.settings.widgetMode == 'modal') {
      this.initWidgetModal();
    } else {
      if (!this.getIframeModalFireButton().src)
        this.getIframeModalFireButton().src = this.getUrl();
      iframeResize(this.iframeResizerSettings, this.settings.iframeId);
    }
  };

  if (checkLoaded()) {
    this.log(document.readyState);
    l();
  } else {
    if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('load', l, false);
    }
  }
};

function checkLoaded() {
  return document.readyState === "complete" /*|| document.readyState === "interactive"*/;
}

export {init, iframeResize};