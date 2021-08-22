/**
 * Minimalistic HTML5 Canvas Linear Gauge
 */
export default class LinearGauge {
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
     * @event LinearGauge#beforePlate
     */
    /**
     * Fired each time before gauge highlight areas are drawn
     *
     * @event LinearGauge#beforeHighlights
     */
    /**
     * Fired each time before gauge minor ticks are drawn
     *
     * @event LinearGauge#beforeMinorTicks
     */
    /**
     * Fired each time before gauge major ticks are drawn
     *
     * @event LinearGauge#beforeMajorTicks
     */
    /**
     * Fired each time before gauge tick numbers are drawn
     *
     * @event LinearGauge#beforeNumbers
     */
    /**
     * Fired each time before gauge title is drawn
     *
     * @event LinearGauge#beforeTitle
     */
    /**
     * Fired each time before gauge units text is drawn
     *
     * @event LinearGauge#beforeUnits
     */
    /**
     * Fired each time before gauge bar area is drawn
     *
     * @event LinearGauge#beforeBar
     */
    /**
     * Fired each time before gauge progress bar is drawn
     *
     * @event LinearGauge#beforeProgressBar
     */
    /**
     * Fired each time before gauge value box is drawn
     *
     * @event LinearGauge#beforeValueBox
     */
    /**
     * Fired each time before gauge needle is drawn
     *
     * @event LinearGauge#beforeNeedle
     */
    /**
     * @constructor
     * @param {LinearGaugeOptions} options
     */
    constructor(options: LinearGaugeOptions);
    /**
     * Triggering linear gauge render on a canvas.
     *
     * @returns {LinearGauge}
     */
    draw(): LinearGauge;
    drawBox: number[];
}
/**
 * Linear gauge configuration options
 */
export type LinearGaugeOptions = typeof GenericOptions | {
    borderRadius: number;
    barBeginCircle: number;
    tickSide: string;
    needleSide: string;
    numberSide: string;
    ticksWidth: number;
    ticksWidthMinor: number;
    ticksPadding: number;
    barLength: number;
    colorBarEnd: string;
    colorBarProgressEnd: string;
};
export type ns = object;
import GenericOptions = require("./GenericOptions");
