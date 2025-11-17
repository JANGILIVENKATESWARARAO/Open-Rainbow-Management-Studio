import { addIcon, IconifyIcon } from 'iconify-icon';
import home from '@iconify/icons-mdi/home'; 
import save from '@iconify/icons-mdi/content-save';
import calendar from '@iconify/icons-mdi/calendar-month';


export const iconRegistry: Record<string, IconifyIcon> = {
  'home': home, 
  'save': save,
   'calendar': calendar,
};

for (const [name, data] of Object.entries(iconRegistry)) {
  addIcon(name, data);
}