/**
 * Basic abstract BaseGauge class implementing common functionality
 * for different type of gauges.
 *
 * It should not be instantiated directly but must be extended by a final
 * gauge implementation.
 *
 * @abstract
 * @example
 *
 * class MyCoolGauge extends BaseGauge {
 *
 *     // theses methods below MUST be implemented:
 *
 *     constructor(options) {
 *        // ... do something with options
 *        super(options);
 *        // ... implement anything else
 *     }
 *
 *     draw() {
 *         // ... some implementation here
 *         return this;
 *     }
 * }
 */
export default class BaseGauge {
    /**
     * Updates gauge options
     *
     * @param {*} options
     * @return {BaseGauge}
     * @access protected
     */
    static configure(options: any): BaseGauge;
    /**
     * Returns gauges version string
     *
     * @return {string}
     */
    static get version(): string;
    /**
     * Inject given gauge object into DOM
     *
     * @param {string} type
     * @param {GenericOptions} options
     */
    static initialize(type: string, options: any): any;
    /**
     * Initializes gauge from a given HTML element
     * (given element should be valid HTML canvas gauge definition)
     *
     * @param {HTMLElement} element
     */
    static fromElement(element: HTMLElement): void;
    /**
     * Ensures value is proper number
     *
     * @param {*} value
     * @param {number} min
     * @return {number}
     */
    static ensureValue(value: any, min?: number): number;
    /**
     * Corrects javascript modulus bug
     * @param {number} n
     * @param {number} m
     * @return {number}
     */
    static mod(n: number, m: number): number;
    /**
     * Fired each time gauge is initialized on a page
     *
     * @event BaseGauge#init
     */
    /**
     * Fired each time gauge scene is rendered
     *
     * @event BaseGauge#render
     */
    /**
     * Fired each time gauge object is destroyed
     *
     * @event BaseGauge#destroy
     */
    /**
     * Fired each time before animation is started on the gauge
     *
     * @event BaseGauge#animationStart
     */
    /**
     * Fired each time animation scene is complete
     *
     * @event BaseGauge#animate
     * @type {number} percent
     * @type {number} value
     */
    /**
     * Fired each time animation is complete on the gauge
     *
     * @event BaseGauge#animationEnd
     */
    /**
     * @event BaseGauge#value
     * @type {number} newValue
     * @type {number} oldValue
     */
    /**
     * @constructor
     * @abstract
     * @param {GenericOptions} options
     */
    constructor(options: any);
    /**
     * Gauges version string
     *
     * @type {string}
     */
    version: string;
    /**
     * Gauge type class
     *
     * @type {BaseGauge} type
     */
    type: BaseGauge;
    /**
     * True if gauge has been drawn for the first time, false otherwise.
     *
     * @type {boolean}
     */
    initialized: boolean;
    /**
     * Gauge options
     *
     * @type {GenericOptions} options
     */
    options: any;
    _value: any;
    /**
     * @type {SmartCanvas} canvas
     */
    canvas: typeof SmartCanvas;
    /**
     * @type {Animation} animation
     */
    animation: Animation;
    /**
     * Sets new value for this gauge.
     * If gauge is animated by configuration it will trigger a proper animation.
     * Upsetting a value triggers gauge redraw.
     *
     * @param {number} value
     */
    set value(arg: number);
    /**
     * Returns current value of the gauge
     *
     * @return {number}
     */
    get value(): number;
    /**
     * Updates gauge configuration options at runtime and redraws the gauge
     *
     * @param {RadialGaugeOptions} options
     * @returns {BaseGauge}
     */
    update(options: any): BaseGauge;
    /**
     * Performs destruction of this object properly
     */
    destroy(): void;
    /**
     * Triggering gauge render on a canvas.
     *
     * @abstract
     * @returns {BaseGauge}
     */
    draw(): BaseGauge;
}
export type ns = object;
import SmartCanvas = require("./SmartCanvas");
import Animation = require("./Animation");
