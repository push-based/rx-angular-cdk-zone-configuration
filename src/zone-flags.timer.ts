/**
 * Vanilla version:
 *
 * @example
 * window.__zone_symbol__timers = true;
 */
import { zoneConfig } from "@rx-angular/cdk";
zoneConfig.global.disable.timers();
