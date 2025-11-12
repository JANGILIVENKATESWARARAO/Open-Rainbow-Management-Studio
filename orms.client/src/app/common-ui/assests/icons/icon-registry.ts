import { addIcon, IconifyIcon } from 'iconify-icon';
import home from '@iconify/icons-mdi/home'; 
import save from '@iconify/icons-mdi/content-save';


export const iconRegistry: Record<string, IconifyIcon> = {
  'home': home, 
  'save': save,
};

for (const [name, data] of Object.entries(iconRegistry)) {
  addIcon(name, data);
}