export interface BusinessPass {
  passModel: string;
  serialNumber: string;
  logoText: string;
  textColor: string;
  backgroundColor: string;
  labelColor: string;
  relevantDate?: string; // Optional properties
  expiryDate?: string;
  relevantLocationLat?: number;
  relevantLocationLong?: number;
  // ... other optional properties
}
