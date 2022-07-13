import { JSXElementConstructor } from 'react';
import { useState, useEffect } from 'react';
export default function RenderHoc(Component: JSXElementConstructor<any>) {
  return function ShouldRender(props: any) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
      if (props.shouldRender) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    }, [props]);
    return shouldRender ? <Component {...props} /> : <> </>;
  };
}
