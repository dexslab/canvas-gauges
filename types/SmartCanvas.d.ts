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
 * @ignore
 * @typedef {object} ns
 */
/**
 * Drawings on canvas using hidden canvas as a cache for better
 * performance drawings during canvas animations. SmartCanvas also
 * adopts a canvas to
 */
declare class SmartCanvas {
    /**
     * Returns current device pixel ratio
     *
     * @returns {number}
     */
    static get pixelRatio(): number;
    /**
     * Forces redraw all canvas in the current collection
     */
    static redraw(): void;
    /**
     * @constructor
     * @param {HTMLCanvasElement} canvas
     * @param {number} [width]
     * @param {number} [height]
     */
    constructor(canvas: HTMLCanvasElement, width?: number, height?: number);
    /**
     * Canvas base width
     *
     * @type {number}
     */
    width: number;
    /**
     * Canvas base height
     *
     * @type {number}
     */
    height: number;
    /**
     * Target drawings canvas element
     *
     * @type {HTMLCanvasElement}
     */
    element: HTMLCanvasElement;
    /**
     * Initializes canvases and contexts
     */
    init(): void;
    /**
     * Canvas caching element
     *
     * @type {HTMLCanvasElement|Node}
     */
    elementClone: HTMLCanvasElement | Node;
    /**
     * Target drawings canvas element 2D context
     *
     * @type {CanvasRenderingContext2D}
     */
    context: CanvasRenderingContext2D;
    /**
     * Canvas caching element 2D context
     *
     * @type {CanvasRenderingContext2D}
     */
    contextClone: CanvasRenderingContext2D;
    /**
     * Actual drawings width
     *
     * @type {number}
     */
    drawWidth: number;
    /**
     * Actual drawings height
     *
     * @type {number}
     */
    drawHeight: number;
    /**
     * X-coordinate of drawings zero point
     *
     * @type {number}
     */
    drawX: number;
    /**
     * Y-coordinate of drawings zero point
     *
     * @type {number}
     */
    drawY: number;
    /**
     * Minimal side length in pixels of the drawing
     *
     * @type {number}
     */
    minSide: number;
    /**
     * Destroys this object, removing the references from memory
     */
    destroy(): void;
    /**
     * On canvas redraw event callback
     *
     * @type {function|null|undefined}
     */
    onRedraw: Function | null | undefined;
    /**
     * Commits the drawings
     */
    commit(): SmartCanvas;
    /**
     * Redraw this object
     */
    redraw(): SmartCanvas;
}
declare namespace SmartCanvas {
    const collection: any[];
}
export default SmartCanvas;
export type ns = object;
