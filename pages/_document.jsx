import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='ar' dir='rtl'>
      <Head>
        <Script
        id="SnapPixel"
        strategy="beforeInteractive"
        onLoad={()=>console.log("hey")}
        >{
            `
              (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
              {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
              a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
              r.src=n;var u=t.getElementsByTagName(s)[0];
              u.parentNode.insertBefore(r,u);})
              (window,document,'https://sc-static.net/scevent.min.js');
              function getIP(json) {
                  snaptr('init', '92c88017-7992-43fe-82a9-e4719af8f5ad', {
                    'ip_address': json.ip
                  });
                  snaptr('track', 'PAGE_VIEW');
              }
            `
          }</Script>
        <Script
        id="ipAddress"
        src="https://api.ipify.org?format=jsonp&callback=getIP"
        strategy="beforeInteractive"
        onLoad={() => console.log("hey2")}
      />
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
