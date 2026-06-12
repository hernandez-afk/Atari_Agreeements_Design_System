// Improvement 3: Unified Lucide React icon set — consistent 1.5px stroke, 20/24px sizes
import type { ComponentType } from 'react'
import {
  Key, DollarSign, Calendar, Briefcase, Settings, Scale,
  Circle, Menu, Folder, FileText, FolderPlus, Download,
  Users, Share2, ArrowUpDown, ChevronDown, Trash2, Move,
  Pin, PinOff, Building, Type, Home, Clock, Info,
  Save, ExternalLink, RefreshCw, ListChecks, Pencil, History,
  Search, Plus, CheckSquare, Tag, Hash, Minus, Sparkles,
  Inbox, Upload, LogOut, UserCircle,
  type LucideProps,
} from 'lucide-react'

export type IconName =
  | 'key' | 'finance' | 'dates' | 'business' | 'technical' | 'legal'
  | 'status' | 'menu' | 'folder' | 'document' | 'addFolder' | 'download'
  | 'people' | 'share' | 'expand' | 'expandCarrot' | 'trash' | 'relocate'
  | 'pin' | 'pinned' | 'counterparty' | 'text' | 'home' | 'clock' | 'info'
  | 'save' | 'export' | 'syncDocs' | 'actionItems' | 'edit' | 'editHistory'
  | 'search' | 'add' | 'checkbox' | 'tag' | 'number' | 'minimize' | 'ai'
  | 'inbox' | 'upload' | 'logOut' | 'gmailUser'

export type IconStatus = 'brown' | 'black' | 'white'
export type IconSize   = 'small' | 'large'

const STATUS_COLORS: Record<IconStatus, string> = {
  brown: '#4a2c24',
  black: '#2b2b2b',
  white: '#fefef9',
}

const ICON_MAP: Record<IconName, ComponentType<LucideProps>> = {
  key:          Key,
  finance:      DollarSign,
  dates:        Calendar,
  business:     Briefcase,
  technical:    Settings,
  legal:        Scale,
  status:       Circle,
  menu:         Menu,
  folder:       Folder,
  document:     FileText,
  addFolder:    FolderPlus,
  download:     Download,
  people:       Users,
  share:        Share2,
  expand:       ArrowUpDown,
  expandCarrot: ChevronDown,
  trash:        Trash2,
  relocate:     Move,
  pin:          Pin,
  pinned:       PinOff,
  counterparty: Building,
  text:         Type,
  home:         Home,
  clock:        Clock,
  info:         Info,
  save:         Save,
  export:       ExternalLink,
  syncDocs:     RefreshCw,
  actionItems:  ListChecks,
  edit:         Pencil,
  editHistory:  History,
  search:       Search,
  add:          Plus,
  checkbox:     CheckSquare,
  tag:          Tag,
  number:       Hash,
  minimize:     Minus,
  ai:           Sparkles,
  inbox:        Inbox,
  upload:       Upload,
  logOut:       LogOut,
  gmailUser:    UserCircle,
}

export type IconProps = {
  name: IconName
  size?: IconSize
  status?: IconStatus
  className?: string
}

export function Icon({ name, size = 'small', status = 'brown', className }: IconProps) {
  const px = size === 'small' ? 20 : 24
  const LucideIcon = ICON_MAP[name]
  return (
    <LucideIcon
      size={px}
      color={STATUS_COLORS[status]}
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    />
  )
}
