/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Mykhailo Stadnyk <mikhus@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * @access private
 * @typedef {CanvasRenderingContext2D | {
 *   max: number,
 *   maxRadius: number,
 *   barDimensions: object,
 * }} Canvas2DContext
 */
/**
 * Examines if a given error is something to throw or to ignore
 *
 * @param {Error} err
 */
export function verifyError(err: Error): void;
/**
 * Format string unit string format using option members
 * Format option to set the “units” attribute.
 * For example “{value} % {title}” which replaces the attributes inside {} to
 * the same member in the option object.
 * So if title is set to “Hour” and value to “50” the units will be “50% Hour”.
 *
 * @param {GenericOptions|any} options
 * @param {string} format
 * @return {string}
 */
export function formatContext(options: any | any, format: string): string;
/**
 * Prepares major ticks data
 *
 * @access private
 * @param {GenericOptions|{ tickSide: string }} options
 * @return {[boolean, boolean]}
 */
export function prepareTicks(options: any | {
    tickSide: string;
}): [boolean, boolean];
/**
 * Draws rounded corners rectangle
 *
 * @param {Canvas2DContext} context
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number} r
 */
export function roundRect(context: Canvas2DContext, x: number, y: number, w: number, h: number, r: number): void;
/**
 * Pads a given value with leading zeros using the given options
 *
 * @param {number} val
 * @param {RadialGaugeOptions|{valueInt: number, valueDec: number}} options
 * @returns {string}
 */
export function padValue(val: number, options: any | {
    valueInt: number;
    valueDec: number;
}): string;
/**
 * Formats a number for display on the dial's plate using the majorTicksFormat
 * config option.
 *
 * @param {number} num number to format
 * @param {object} options
 * @returns {string} formatted number
 */
export function formatMajorTickNumber(num: number, options: object): string;
/**
 * Transforms degrees to radians
 *
 * @param {number} degrees
 * @returns {number}
 */
export function radians(degrees: number): number;
/**
 * Calculates and returns radial point coordinates
 *
 * @param {number} radius
 * @param {number} angle
 * @returns {{x: number, y: number}}
 */
export function radialPoint(radius: number, angle: number): {
    x: number;
    y: number;
};
/**
 * Creates and returns linear gradient canvas object
 *
 * @param {Canvas2DContext} context
 * @param {string} colorFrom
 * @param {string} colorTo
 * @param {number} length
 * @param {boolean} [isVertical]
 * @param {number} [from]
 * @returns {CanvasGradient}
 */
export function linearGradient(context: Canvas2DContext, colorFrom: string, colorTo: string, length: number, isVertical?: boolean, from?: number): CanvasGradient;
/**
 * Draws the shadow if it was not drawn
 *
 * @param {Canvas2DContext} context
 * @param {GenericOptions} options
 * @param {boolean} shadowDrawn
 * @return {boolean}
 */
export function drawShadow(context: Canvas2DContext, options: any, shadowDrawn?: boolean): boolean;
/**
 * Draws gauge needle shadow
 *
 * @access private
 * @param {Canvas2DContext} context
 * @param {RadialGaugeOptions} options
 */
export function drawNeedleShadow(context: Canvas2DContext, options: any): void;
/**
 * Constructs font styles for canvas fonts
 *
 * @param {GenericOptions} options
 * @param {string} target
 * @param {number} baseSize
 */
export function font(options: any, target: string, baseSize: number): string;
/**
 * Draws value box at given position
 *
 * @param {Canvas2DContext} context
 * @param {GenericOptions} options
 * @param {number|string} value
 * @param {number} x
 * @param {number} y
 * @param {number} max
 */
export function drawValueBox(context: Canvas2DContext, options: any, value: number | string, x: number, y: number, max: number): void;
/**
 * Returns normalized value
 *
 * @param {GenericOptions} options
 * @return {{normal: number, indented: number}}
 */
export function normalizedValue(options: any): {
    normal: number;
    indented: number;
};
export default drawings;
export type Canvas2DContext = CanvasRenderingContext2D | {
    max: number;
    maxRadius: number;
    barDimensions: object;
};
declare namespace drawings {
    export { roundRect };
    export { padValue };
    export { formatMajorTickNumber };
    export { radians };
    export { radialPoint };
    export { linearGradient };
    export { drawNeedleShadow };
    export { drawValueBox };
    export { verifyError };
    export { prepareTicks };
    export { drawShadow };
    export { font };
    export { normalizedValue };
    export { formatContext };
}
