
export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE'
}

export enum PlanType {
  ESSENTIAL = 'ESSENTIAL',
  PLUS = 'PLUS',
  PREMIUM = 'PREMIUM'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  companyId?: string;
  avatar?: string;
}

export interface Company {
  id: string;
  name: string;
  plan: PlanType;
  employeeCount: number;
  activeEmployees: number;
  joinDate: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  category: 'WELCOME' | 'PAUSE' | 'SERIES' | 'BREATH' | 'LIVE_RECORDING';
  videoUrl: string;
  isPremium?: boolean;
}

export interface LiveClass {
  id: string;
  title: string;
  companyId?: string; // If specific to a company
  date: string;
  time: string;
  link: string;
  instructor: string;
}

export interface Challenge {
  id: string;
  title: string;
  days: number;
  description: string;
  lessons: Lesson[];
}
