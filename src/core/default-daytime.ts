import { Daytime } from '$core/types/daytime';

export const defaultDaytime: Daytime = {
  from: '00:00',
  to: '24:00', // special case allowed by @libchrono/time
};
