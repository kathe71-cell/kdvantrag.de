export type UserStatus = 'ungedient' | 'soldat_aktiv' | 'reservist' | 'musterung';

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
}

export type PageRoute = 'home' | 'ablauf' | 'vorlagen' | 'ratgeber' | 'rechner' | 'rechner-embed' | 'impressum' | 'datenschutz';
