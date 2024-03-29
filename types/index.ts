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

export interface Contact {
  firstName: string;
  lastName: string;
  workPhone: string;
  organization: string;
  photo: string;
}

export enum ContactType {
  LinkedIn = "LinkedIn",
  GitHub = "GitHub",
  Email = "Email",
  Call = "Call",
  Portfolio = "Portfolio",
}
