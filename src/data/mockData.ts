export type AIStatus = 'Complete' | 'Processing' | 'Pending' | 'Failed'
export type AgreementStatus = 'Active' | 'Pending' | 'Draft' | 'Expired' | 'In Review'
export type AgreementType = 'Service' | 'Partnership' | 'License' | 'Development' | 'Non-Disclosure' | 'Employment Contract' | 'Other'
export type TagColor = 'red' | 'yellow' | 'orange' | 'light-green' | 'dark-green' | 'light-blue' | 'dark-blue'

export interface Person {
  initial: string
  bgColor: string
  name: string
}

export interface Agreement {
  id: string
  name: string
  dateModified: string
  aiStatus: AIStatus
  status: AgreementStatus
  type: AgreementType
  locationIsFolder: boolean
  counterparty: string
  tags: TagColor[]
  sharedBy: Person[]
}

export interface FileItem {
  id: string
  name: string
  dateModified: string
  isFolder: boolean
  sharedBy: Person[]
}

export interface TagGroup {
  id: string
  name: string
  description: string
  docCount: number
  createdOn: string
  color: TagColor
}

export const PEOPLE: Person[] = [
  { initial: 'A', bgColor: '#3a4a6a', name: 'Alice' },
  { initial: 'M', bgColor: '#8b4bc8', name: 'Marcus' },
  { initial: 'J', bgColor: '#2d5a27', name: 'Jordan' },
  { initial: 'L', bgColor: '#4a9e6a', name: 'Laura' },
  { initial: 'P', bgColor: '#c8a82a', name: 'Peter' },
]

export const AGREEMENTS: Agreement[] = [
  { id: '1',  name: 'Acme Corp Service Agreement 2026',  dateModified: 'Yesterday, 06.11.26', aiStatus: 'Complete',   status: 'Active',    type: 'Service',           locationIsFolder: true,  counterparty: 'Acme Corp',       tags: ['red'],         sharedBy: [PEOPLE[0], PEOPLE[1]] },
  { id: '2',  name: 'BetaCo NDA — Q1 2026',              dateModified: 'Yesterday, 06.11.26', aiStatus: 'Complete',   status: 'Active',    type: 'Non-Disclosure',    locationIsFolder: false, counterparty: 'BetaCo',          tags: ['yellow'],      sharedBy: [PEOPLE[2], PEOPLE[3]] },
  { id: '3',  name: 'GammaSoft License Agreement',        dateModified: 'Yesterday, 06.11.26', aiStatus: 'Complete',   status: 'Active',    type: 'License',           locationIsFolder: false, counterparty: 'GammaSoft',       tags: ['orange'],      sharedBy: [PEOPLE[1], PEOPLE[4]] },
  { id: '4',  name: 'Delta Inc Consulting Contract',      dateModified: 'Yesterday, 06.11.26', aiStatus: 'Complete',   status: 'Active',    type: 'Service',           locationIsFolder: true,  counterparty: 'Delta Inc',       tags: ['red'],         sharedBy: [PEOPLE[0], PEOPLE[2]] },
  { id: '5',  name: 'Epsilon Ltd Partnership Deal',       dateModified: 'Yesterday, 06.11.26', aiStatus: 'Complete',   status: 'Active',    type: 'Partnership',       locationIsFolder: true,  counterparty: 'Epsilon Ltd',     tags: ['light-green'], sharedBy: [PEOPLE[1]] },
  { id: '6',  name: 'Zeta Inc Employment Contract',       dateModified: 'Yesterday, 06.11.26', aiStatus: 'Complete',   status: 'Active',    type: 'Employment Contract', locationIsFolder: true, counterparty: 'Zeta Inc',        tags: ['dark-green'],  sharedBy: [PEOPLE[3], PEOPLE[4]] },
  { id: '7',  name: 'Eta Corp Development Agreement',     dateModified: 'Yesterday, 06.11.26', aiStatus: 'Processing', status: 'Pending',   type: 'Development',       locationIsFolder: true,  counterparty: 'Eta Corp',        tags: ['light-blue'],  sharedBy: [PEOPLE[2], PEOPLE[1]] },
  { id: '8',  name: 'Theta Ltd Service Agreement',        dateModified: 'Yesterday, 06.11.26', aiStatus: 'Complete',   status: 'Active',    type: 'Service',           locationIsFolder: true,  counterparty: 'Theta Ltd',       tags: ['dark-blue'],   sharedBy: [PEOPLE[0]] },
  { id: '9',  name: 'Iota Corp License Deal',             dateModified: 'Yesterday, 06.11.26', aiStatus: 'Pending',    status: 'Draft',     type: 'License',           locationIsFolder: true,  counterparty: 'Iota Corp',       tags: ['red'],         sharedBy: [PEOPLE[1], PEOPLE[4]] },
  { id: '10', name: 'Kappa Inc NDA 2026',                 dateModified: 'Yesterday, 06.11.26', aiStatus: 'Complete',   status: 'Active',    type: 'Non-Disclosure',    locationIsFolder: true,  counterparty: 'Kappa Inc',       tags: ['yellow'],      sharedBy: [PEOPLE[3]] },
  { id: '11', name: 'Lambda Corp Partnership',            dateModified: 'Yesterday, 06.11.26', aiStatus: 'Complete',   status: 'In Review', type: 'Partnership',       locationIsFolder: false, counterparty: 'Lambda Corp',     tags: ['orange'],      sharedBy: [PEOPLE[0], PEOPLE[2], PEOPLE[1]] },
]

export const FILES: FileItem[] = [
  { id: 'f1',  name: 'Master Agreements 2026',   dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [PEOPLE[0], PEOPLE[1], PEOPLE[3]] },
  { id: 'f2',  name: 'Counterparty B',            dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [PEOPLE[3], PEOPLE[4]] },
  { id: 'f3',  name: 'Q1 NDAs',                   dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [] },
  { id: 'f4',  name: 'Service Agreements Archive', dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [] },
  { id: 'f5',  name: 'Acme Corp Folder',           dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [PEOPLE[1], PEOPLE[2]] },
  { id: 'f6',  name: 'BetaCo Documents',           dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [PEOPLE[0], PEOPLE[2]] },
  { id: 'f7',  name: 'Compliance 2026',             dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [PEOPLE[0]] },
  { id: 'f8',  name: 'Templates',                  dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [] },
  { id: 'f9',  name: 'Employment Contracts',        dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [PEOPLE[3], PEOPLE[4]] },
  { id: 'f10', name: 'Development Agreements',      dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [] },
  { id: 'f11', name: 'Partnership Deals',           dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
]

export const SHARED_WITH_ME: Agreement[] = AGREEMENTS.map((a, i) => ({
  ...a,
  sharedBy: [PEOPLE[i % 5], PEOPLE[(i + 1) % 5]],
}))

export const COUNTERPARTIES: Record<string, string[]> = {
  A: ['Acme Corp', 'Alpha Industries', 'Apex Solutions', 'Ariel Holdings'],
  B: ['BetaCo', 'Bright Ventures', 'Blue Ridge Tech'],
  C: ['Counterparty Corp', 'Crescent Holdings', 'Cascade Systems'],
  D: ['Delta Inc', 'Dynamic Systems', 'Dawn Enterprises'],
  E: ['Epsilon Ltd', 'Eclipse Corp'],
  G: ['GammaSoft', 'Global Partners'],
  H: ['Helios Group', 'Harbor Tech'],
  I: ['Iota Corp'],
  J: ['Jade Ventures'],
  K: ['Kappa Inc', 'Kinetic Solutions'],
  L: ['Lambda Corp', 'Lunar Tech'],
}

export const TAG_GROUPS: TagGroup[] = [
  { id: 't1', name: 'Active Service Agreements',   description: 'All active service agreements from the last 6 months', docCount: 3,  createdOn: '01.15.26', color: 'red' },
  { id: 't2', name: 'Q1 NDAs',                      description: 'Non-disclosure agreements from Q1 2026',               docCount: 7,  createdOn: '01.02.26', color: 'yellow' },
  { id: 't3', name: 'Renewal Pending',              description: 'Agreements coming up for renewal this quarter',         docCount: 5,  createdOn: '02.10.26', color: 'orange' },
  { id: 't4', name: 'High Priority',                description: 'Flagged for executive review and immediate action',    docCount: 2,  createdOn: '03.05.26', color: 'light-green' },
  { id: 't5', name: 'Archived 2025',                description: 'Completed and archived agreements from 2025',          docCount: 12, createdOn: '12.31.25', color: 'dark-green' },
  { id: 't6', name: 'Draft Contracts',              description: 'Contracts currently in draft review stage',            docCount: 4,  createdOn: '04.20.26', color: 'light-blue' },
]

export const FOLDER_CONTENTS: Record<string, { name: string; items: FileItem[] }> = {
  f1: {
    name: 'Master Agreements 2026',
    items: [
      { id: 'fi1',  name: 'Counterparty B',             dateModified: 'Yesterday, 06.11.26', isFolder: true,  sharedBy: [] },
      { id: 'fi2',  name: 'Acme Corp Q1 Agreement',     dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
      { id: 'fi3',  name: 'BetaCo NDA January',         dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
      { id: 'fi4',  name: 'GammaSoft License',          dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
      { id: 'fi5',  name: 'Delta Partnership',          dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
      { id: 'fi6',  name: 'Epsilon Service Contract',   dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
      { id: 'fi7',  name: 'Zeta Employment Contract',   dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
      { id: 'fi8',  name: 'Eta Development Agreement',  dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
      { id: 'fi9',  name: 'Theta Service Agreement',    dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
      { id: 'fi10', name: 'Iota License Deal',          dateModified: 'Yesterday, 06.11.26', isFolder: false, sharedBy: [] },
    ],
  },
}
