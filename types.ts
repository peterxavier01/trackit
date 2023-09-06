export interface IP {
  as: {
    asn: number;
  };
  ip: string;
  location: {
    city: string;
    lat?: number;
    lng?: number;
    country: string;
    region: string;
    timezone: string;
  };
  isp: string;
}
