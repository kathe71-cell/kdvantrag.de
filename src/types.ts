export type UserStatus = 'ungedient_vor_einberufung' | 'ungedient_nach_einberufung' | 'soldat_aktiv' | 'reservist';

export interface StatusInfo {
  id: UserStatus;
  label: string;
  shortDesc: string;
  authority: string;
  submissionRoute: string;
  specialNotice: string;
  checklist: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'recht' | 'ablauf' | 'begruendung' | 'folgen';
  source?: string;
}

export type PageRoute = 'home' | 'ablauf' | 'vorlagen' | 'ratgeber' | 'rechner' | 'rechner-embed' | 'impressum' | 'datenschutz' | 'projektuebernahme';
