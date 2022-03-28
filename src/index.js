import {iframeResize, iframeResizerContentWindow, iframeResizer} from 'iframe-resizer';

export function init(iframeId, initialSettings = {}) {
  if (typeof window === 'undefined') return; // don't run for server side render

  this.settings = {
    log: true,
    iframeId: iframeId,
    ...initialSettings
  };

  if (!this.settings.iframeId) {
    console.warn('iframeId should be provided.');
    return;
  }

  const iframeResizerSettings = {
    log: initialSettings.log || true,
    checkOrigin: initialSettings.checkOrigin || false,
  }

  const l = () => {
    iframeResize(iframeResizerSettings, this.settings.iframeId);
  };

  if (window.attachEvent) {
    window.attachEvent('onload', l);
  } else {
    window.addEventListener('load', l, false);
  }
}

export {init as default, iframeResize, iframeResizerContentWindow, iframeResizer};