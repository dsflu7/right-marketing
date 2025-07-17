import { writable } from "svelte/store";

export const hideHeader = writable(false);
export const hideFooter = writable(false);
export const isMobile = writable(false);
export const servicesPageNavigating = writable(false);
