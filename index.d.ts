declare module 'google-map-react' {
  import * as React from 'react';

  interface IProperties {
    className?: string;
    key?: any;
    style?: Object;
  }

  interface IGoogleMapProperties extends IProperties {
    apiKey?: string;
    bootstrapURLKeys?: {};
    center: {};
    onChange?: (center?: any, zoom?: number, bounds?: any, marginBounds?: any) => any;
    zoom: number;
  }

  export default class GoogleMapReact extends React.Component<IGoogleMapProperties, {}> {
  }
}
