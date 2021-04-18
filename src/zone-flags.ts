import {zoneConfig} from '@rx-angular/cdk';
zoneConfig.global.disable.timers();
zoneConfig.events.disable.UNPATCHED_EVENTS([
  'keypress',
  'keydown',
  'textinput',
  'input',
  'mousemove',
]);
