declare module 'react-native-apple-ads-attribution' {
  export interface Attribution {
    [key: string]: {
      'iad-attribution': boolean;
      'iad-org-name': string;
      'iad-campaign-id': number;
      'iad-campaign-name': string;
      'iad-purchase-date': Date;
      'iad-conversion-date': Date;
      'iad-conversion-type': string;
      'iad-click-date': Date;
      'iad-adgroup-id': number;
      'iad-adgroup-name': string;
      'iad-keyword': string;
      'iad-keyword-matchtype': string;
    };
  }

  export default class AppleAdsAttribution {
    static getAttributionData(): Promise<Attribution>;
  }
}
