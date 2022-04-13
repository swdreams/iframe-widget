# iframe widget

[![NPM version](https://badge.fury.io/js/ds-iframe-widget.svg)](http://badge.fury.io/js/iframe-resizer)
[![NPM Downloads](https://img.shields.io/npm/dm/ds-iframe-widget.svg)](https://npm-stat.com/charts.html?package=ds-iframe-widget&from=2022-03-25)
[![](https://data.jsdelivr.com/v1/package/npm/ds-iframe-widget/badge?style=rounded)](https://www.jsdelivr.com/package/npm/ds-iframe-widget)

version: 1.1.4

This project was bootstrapped with [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer).

## Available Scripts

In the project directory, you can run:

    `npm run build`

## Include library.
    
    // client page
    <script src="https://cdn.jsdelivr.net/npm/ds-iframe-widget/dist/ds-iframe-widget.js"></script>

    // host page that is served in iframe
    <script src="https://cdn.jsdelivr.net/npm/ds-iframe-widget/dist/ds-iframe-widget-content.js"></script>
    

## Example 1 embedded page.
    
    <script src="https://cdn.jsdelivr.net/npm/ds-iframe-widget/dist/ds-iframe-widget.js"></script>
    <script>
      DsIframeWidget.init('#myIframe', {
          baseUrl: "https://bing.com/",      
      });
    </script>

    <iframe id="myIframe" title="Iframe Widget"
        frameborder="no" allowtransparency="true" allowfullscreen=""
        style="display: block; width: 1px; min-width: 100%;"
        scrolling="no"
    >
    </iframe>

## Example 2 modal popup.
    
    <script src="https://cdn.jsdelivr.net/npm/ds-iframe-widget/dist/ds-iframe-widget.js"></script>
    <script>
        DsIframeWidget.init('#myButton', {
            widgetMode: 'modal', 
            baseUrl: "https://bing.com/",
        });
    </script>        
    
    <button id="myButton">Mint on dropspace</button>

## Authors
[Liki Crus](https://github.com/swdreams)

