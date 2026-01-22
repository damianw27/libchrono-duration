/**
 * Model that provides info about workday time definition
 */
export interface Daytime {
	/**
	 * Time from in military format (e.g. 08:00)
	 */
	readonly from: string;
	/**
	 * Time to in military format (e.g. 16:00)
	 */
	readonly to: string;
}
