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
 * @typedef {{ constructor: function(options: GenericOptions): GaugeInterface, draw: function(): GaugeInterface, destroy: function, update: function(options: GenericOptions) }} GaugeInterface
 */
/**
 * @typedef {{parse: function, stringify: function}} JSON
 * @external {JSON} https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON
 */
/**
 * @ignore
 * @typedef {{MutationObserver: function}} ns
 */
/**
 * DOM Observer.
 * It will observe DOM document for a configured element types and
 * instantiate associated Types for an existing or newly added DOM elements
 *
 * @example
 * class ProgressBar {
 *     constructor(options) {}
 *     draw() {}
 * }
 *
 * // It will observe DOM document for elements <div>
 * // having attribute 'data-type="progress"'
 * // and instantiate for each new instance of ProgressBar
 *
 * new DomParser({color: 'red'}, 'div', 'progress', ProgressBar);
 *
 * // assume we could have HTML like this
 * // <div data-type="progress" color="blue"></div>
 * // in this case all matching attributes names for a given options will be
 * // parsed and bypassed to an instance from HTML attributes
 */
export default class DomObserver {
    /**
     * Parses given attribute value to a proper JavaScript value.
     * For example it will parse some stringified value to a proper type
     * value, e.g. 'true' => true, 'null' => null, '{"prop": 20}' => {prop: 20}
     *
     * @param {*} value
     * @return {*}
     */
    static parse(value: any): any;
    /**
     * Transforms camelCase string to dashed string
     *
     * @static
     * @param {string} camelCase
     * @return {string}
     */
    static toDashed(camelCase: string): string;
    /**
     * Transforms dashed string to CamelCase representation
     *
     * @param {string} dashed
     * @param {boolean} [capitalized]
     * @return {string}
     */
    static toCamelCase(dashed: string, capitalized?: boolean): string;
    /**
     * Transforms camel case property name to dash separated attribute name
     *
     * @static
     * @param {string} str
     * @returns {string}
     */
    static toAttributeName(str: string): string;
    /**
     * Cross-browser DOM ready handler
     *
     * @static
     * @param {Function} handler
     */
    static domReady(handler: Function): any;
    /**
     * @constructor
     * @param {object} options
     * @param {string} element
     * @param {string} type
     */
    constructor(options: object, element: string, type: string);
    /**
     * Default instantiation options for the given type
     *
     * @type {Object}
     */
    options: any;
    /**
     * Name of an element to lookup/observe
     *
     * @type {string}
     */
    element: string;
    /**
     * data-type attribute value to lookup
     *
     * @type {string}
     */
    type: string;
    /**
     * Actual type constructor to instantiate for each found element
     *
     * @type {Function}
     */
    Type: Function;
    /**
     * Signals if mutations observer for this type or not
     *
     * @type {boolean}
     */
    mutationsObserved: boolean;
    /**
     * Flag specifies whenever the browser supports observing
     * of DOM tree mutations or not
     *
     * @type {boolean}
     */
    isObservable: boolean;
    /**
     * Checks if given node is valid node to process
     *
     * @param {Node|HTMLElement} node
     * @returns {boolean}
     */
    isValidNode(node: Node | HTMLElement): boolean;
    /**
     * Traverse entire current DOM tree and process matching nodes.
     * Usually it should be called only once on document initialization.
     */
    traverse(): void;
    /**
     * Observes given mutation records for an elements to process
     *
     * @param {MutationRecord[]} records
     */
    observe(records: MutationRecord[]): void;
    /**
     * Processes a given node, instantiating a proper type constructor for it
     *
     * @param {Node|HTMLElement} node
     * @returns {GaugeInterface|null}
     */
    process(node: Node | HTMLElement): GaugeInterface | null;
}
export type GaugeInterface = {
    constructor: (arg0: any, arg1: any) => GaugeInterface;
    draw: () => GaugeInterface;
    destroy: Function;
    update: (arg0: any, arg1: any) => any;
};
export type JSON = {
    parse: Function;
    stringify: Function;
};
export type ns = {
    MutationObserver: Function;
};
