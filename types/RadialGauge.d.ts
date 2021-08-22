/**
 * Minimalistic HTML5 Canvas Gauge
 * @example
 *  var gauge = new RadialGauge({
 *     renderTo: 'gauge-id', // identifier of HTML canvas element or element itself
 *     width: 400,
 *     height: 400,
 *     units: 'Km/h',
 *     title: false,
 *     value: 0,
 *     minValue: 0,
 *     maxValue: 220,
 *     majorTicks: [
 *         '0','20','40','60','80','100','120','140','160','180','200','220'
 *     ],
 *     minorTicks: 2,
 *     strokeTicks: false,
 *     highlights: [
 *         { from: 0, to: 50, color: 'rgba(0,255,0,.15)' },
 *         { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
 *         { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
 *         { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
 *         { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }
 *     ],
 *     colorPlate: '#222',
 *     colorMajorTicks: '#f5f5f5',
 *     colorMinorTicks: '#ddd',
 *     colorTitle: '#fff',
 *     colorUnits: '#ccc',
 *     colorNumbers: '#eee',
 *     colorNeedleStart: 'rgba(240, 128, 128, 1)',
 *     colorNeedleEnd: 'rgba(255, 160, 122, .9)',
 *     valueBox: true,
 *     animationRule: 'bounce'
 * });
 * // draw initially
 * gauge.draw();
 * // animate
 * setInterval(() => {
 *    gauge.value = Math.random() * -220 + 220;
 * }, 1000);
 */
export default class RadialGauge {
    /**
     * Checks and updates gauge options properly
     *
     * @param {*} options
     * @return {*}
     * @access protected
     */
    static configure(options: any): any;
    /**
     * Fired each time before gauge plate is drawn
     *
     * @event RadialGauge#beforePlate
     */
    /**
     * Fired each time before gauge highlight areas are drawn
     *
     * @event RadialGauge#beforeHighlights
     */
    /**
     * Fired each time before gauge minor ticks are drawn
     *
     * @event RadialGauge#beforeMinorTicks
     */
    /**
     * Fired each time before gauge major ticks are drawn
     *
     * @event RadialGauge#beforeMajorTicks
     */
    /**
     * Fired each time before gauge tick numbers are drawn
     *
     * @event RadialGauge#beforeNumbers
     */
    /**
     * Fired each time before gauge title is drawn
     *
     * @event RadialGauge#beforeTitle
     */
    /**
     * Fired each time before gauge units text is drawn
     *
     * @event RadialGauge#beforeUnits
     */
    /**
     * Fired each time before gauge progress bar is drawn
     *
     * @event RadialGauge#beforeProgressBar
     */
    /**
     * Fired each time before gauge value box is drawn
     *
     * @event RadialGauge#beforeValueBox
     */
    /**
     * Fired each time before gauge needle is drawn
     *
     * @event RadialGauge#beforeNeedle
     */
    /**
     * @constructor
     * @param {RadialGaugeOptions} options
     */
    constructor(options: RadialGaugeOptions);
    /**
     * Sets the value for radial gauge
     *
     * @param {number} value
     */
    set value(arg: number);
    /**
     * Returns current gauge value
     *
     * @return {number}
     */
    get value(): number;
    _value: number;
    /**
     * Triggering gauge render on a canvas.
     *
     * @returns {RadialGauge}
     */
    draw(): RadialGauge;
}
/**
 * Gauge configuration options
 */
export type RadialGaugeOptions = typeof GenericOptions | {
    exactTicks: boolean;
    ticksAngle: number;
    startAngle: number;
    colorNeedleCircleOuter: string;
    colorNeedleCircleOuterEnd: string;
    colorNeedleCircleInner: string;
    colorNeedleCircleInnerEnd: string;
    needleCircleSize: number;
    needleCircleInner: boolean;
    needleCircleOuter: boolean;
    animationTarget: string;
    useMinPath: boolean;
    barStartPosition: 'right' | 'left';
};
export type ns = object;
import GenericOptions = require("./GenericOptions");
