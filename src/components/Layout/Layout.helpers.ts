import {
  DesignServicesOutlined,
  InfoOutlined,
  PermContactCalendarOutlined,
  SvgIconComponent,
} from '@mui/icons-material'

export enum Sections {
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
}

export interface INavLinks {
  title: string
  section: Sections
  icon: SvgIconComponent
}

export const navLinks: INavLinks[] = [
  { title: 'About', section: Sections.ABOUT, icon: InfoOutlined },
  {
    title: 'Services',
    section: Sections.SERVICES,
    icon: DesignServicesOutlined,
  },
  {
    title: 'Contact',
    section: Sections.CONTACT,
    icon: PermContactCalendarOutlined,
  },
]
