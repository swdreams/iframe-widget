# iframe widget

version: 1.0.0

This project was bootstrapped with [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer).

## Available Scripts

In the project directory, you can run:

### `npm build`


## Example
    <script src="https://unpkg.com/browse/ds-iframe-widget@1.0.0/dist/ds-iframe-widget.js"></script>
    <script>
      DsIframeWidget.init('#myIframe');
    </script>

    
    <iframe id="myIframe" title="Iframe Widget"
        src="https://global.transak.com?apiKey=[YOUR_PRODUCTION_API_KEY]&[QUERY_PARAMETERS]"
        frameborder="no" allowtransparency="true" allowfullscreen=""
        style="display: block; width: 1px; min-width: 100%; max-height: 625px;"
        scrolling="no"
    >
    </iframe>

## Authors
[Liki Crus](https://github.com/swdreams)

