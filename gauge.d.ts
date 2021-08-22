declare module "vendorize" {
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
     * Look-ups for a proper vendor-specific property and returns its value
     *
     * @example
     * var requestAnimationFrame = vendorize('requestAnimationFrame');
     * // it will refer properly to:
     * //  - window.requestAnimationFrame by default or to
     * //  - window.webkitRequestAnimationFrame or to
     * //  - window.mozRequestAnimationFrame or to
     * //  - window.msRequestAnimationFrame or to
     * //  - window.oRequestAnimationFrame
     * // depending on the current browser vendor
     *
     * @author Mykhailo Stadnyk <mikhus@gmail.com>
     * @param {string} prop
     * @param {HTMLElement|Window|object} [from] - default is window
     * @returns {*}
     */
    export default function vendorize(prop: string, from?: HTMLElement | Window | object): any;
}
declare module "Animation" {
    /**
     * Animation engine API for JavaScript-based animations.
     * This is simply an animation core framework which simplifies creation
     * of various animations for generic purposes.
     *
     * @example
     * // create 'linear' animation engine, 500ms duration
     * let linear = new Animation('linear', 500);
     *
     * // create 'elastic' animation engine
     * let elastic = new Animation('elastic');
     *
     * // define animation behavior
     * let bounced = new Animation('bounce', 500, percent => {
     *     let value = parseInt(percent * 100, 10);
     *
     *     $('div.bounced').css({
     *         width: value + '%',
     *         height: value + '%'
     *     });
     * });
     *
     * // execute animation
     * bounced.animate();
     *
     * // execute animation and handle when its finished
     * bounced.animate(null, () => {
     *    console.log('Animation finished!');
     * });
     */
    class Animation {
        /**
         * @constructor
         * @param {string|AnimationRule} rule
         * @param {number} duration
         * @param {DrawEventCallback} [draw]
         * @param {EndEventCallback} [end]
         */
        constructor(rule?: string | AnimationRule, duration?: number, draw?: DrawEventCallback, end?: EndEventCallback);
        /**
         * Overall animation duration in milliseconds.
         * By default is equal to 250 ms.
         *
         * @type {number}
         */
        duration: number;
        /**
         * Animation rule. By default is linear animation.
         * Animation rule is a subject to animation rules, which are
         * a simple object containing math-based methods for calculating
         * animation steps.
         *
         * @type {string|AnimationRule}
         */
        rule: string | AnimationRule;
        /**
         * Callback function for the animation step draw event.
         *
         * @type {DrawEventCallback}
         */
        draw: DrawEventCallback;
        /**
         * Callback for the animation complete event.
         *
         * @type {EndEventCallback}
         */
        end: EndEventCallback;
        /**
         * Performs animation calling each animation step draw callback and
         * end callback at the end of animation. Callbacks are optional to this
         * method call. If them are not bypassed will be used that ones which
         * was pre-set on constructing an Animation object or pre-set after
         * construction.
         *
         * @example
         * function draw(percent) {
         *     $('.my-animated-divs').css({
         *         width: parseInt(percent * 100, 10) + '%'
         *     });
         * }
         * function done() {
         *     console.log('Animation complete!');
         * }
         *
         * // Define 'draw' and 'end' callbacks on construction
         * var animation = new Animation('cycle', 500, draw, done);
         * animation.animate();
         *
         * // Define 'draw' and 'end' callbacks after construction
         * var animation = new Animation('cycle', 500);
         * animation.draw = draw;
         * animation.end = done;
         * animation.animate();
         *
         * // Define 'draw' and 'end' callbacks at animation
         * var animation = new Animation('cycle', 500);
         * animation.animate(draw, done);
         *
         * @param {DrawEventCallback} [draw]
         * @param {EndEventCallback} [end]
         */
        animate(draw?: DrawEventCallback, end?: EndEventCallback): void;
        /**
         * Current requested animation frame identifier
         *
         * @type {number}
         */
        frame: number;
        /**
         * Cancels current animation if any
         */
        cancel(): void;
        /**
         * Destroys this object properly
         */
        destroy(): void;
    }
    namespace Animation {
        export { rules };
    }
    export default Animation;
    export type ns = object;
    /**
     * Generic AnimationRule function interface
     */
    export type AnimationRule = (arg0: any, arg1: number) => number;
    /**
     * Callback for animation step draw event.
     * It will be called each time animation step is executed, bypassing
     * as first argument a percent of animation completeness. It is expected
     * that this callback will do an actual work of animating an elements or
     * whatever, as far as animation engine is just calculating and executing
     * animation steps without any knowledge about things under animation.
     */
    export type DrawEventCallback = (arg0: any, arg1: number) => any;
    /**
     * Callback for animation complete event.
     * It is called once each animation is complete.
     */
    export type EndEventCallback = () => any;
    /**
     * Predefined known animation rules.
     * It's a simple collection of math for some most used animations.
     */
    export type AnimationRules = {
        linear: AnimationRule;
        quad: AnimationRule;
        dequad: AnimationRule;
        quint: AnimationRule;
        dequint: AnimationRule;
        cycle: AnimationRule;
        decycle: AnimationRule;
        bounce: AnimationRule;
        debounce: AnimationRule;
        elastic: AnimationRule;
        delastic: AnimationRule;
    };
    namespace rules {
        function linear(p: any): any;
        function quad(p: any): number;
        function dequad(p: any): number;
        function quint(p: any): number;
        function dequint(p: any): number;
        function cycle(p: any): number;
        function decycle(p: any): number;
        function bounce(p: any): number;
        function debounce(p: any): number;
        function elastic(p: any): number;
        function delastic(p: any): number;
    }
}
declare module "SmartCanvas" {
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
    class SmartCanvas {
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
    namespace SmartCanvas {
        const collection: any[];
    }
    export default SmartCanvas;
    export type ns = object;
}
declare module "Collection" {
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
     * Gauge collections type.
     *
     * It is used ES5 declaration here, because babel
     * transpiles inheritance incorrectly in this case.
     *
     * @class Collection
     * @constructor
     */
    function Collection(...args: any[]): void;
    class Collection {
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
         * Gauge collections type.
         *
         * It is used ES5 declaration here, because babel
         * transpiles inheritance incorrectly in this case.
         *
         * @class Collection
         * @constructor
         */
        constructor(...args: any[]);
        constructor: typeof Collection;
        /**
         * Returns gauge object by its identifier or index in the collection
         *
         * @param {string|number} id
         * @return {*}
         */
        get(id: string | number): any;
    }
    export default Collection;
}
declare module "DomObserver" {
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
}
declare module "EventEmitter" {
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
     * Class EventEmitter - base event manager
     */
    export default class EventEmitter {
        _events: {};
        addListener: (event: string, ...handlers: Function[]) => void;
        removeListener: (event: string, ...handlers: Function[]) => void;
        /**
         * Returns all event listeners
         *
         * @return {object}
         */
        get listeners(): any;
        /**
         * Emits given event bypassing to each registered handler given args
         *
         * @param {string} event
         * @param {...*} args
         */
        emit(event: string, ...args: any[]): void;
        /**
         * Registers given handler for given event to be called only once when
         * event is emitted
         *
         * @param {string} event
         * @param {...function} handlers
         */
        once(event: string, ...handlers: Function[]): void;
        /**
         * Registers given handlers for a given events to be called each time event
         * is emitted
         *
         * @param {string} event
         * @param {...function} handlers
         */
        on(event: string, ...handlers: Function[]): void;
        /**
         * Un-registers previously registered event handlers
         *
         * @param {string} event
         * @param {...function} handlers
         */
        off(event: string, ...handlers: Function[]): void;
        /**
         * Removes all listeners for a given event
         *
         * @param {string} event
         */
        removeAllListeners(event: string): void;
    }
}
declare module "BaseGauge" {
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
    import SmartCanvas = require("SmartCanvas");
    import Animation = require("Animation");
}
declare module "GenericOptions" {
    export default GenericOptions;
    /**
     * Describes rendering target element. Can be either string identifier of
     * the element or the element itself.
     */
    export type RenderTarget = HTMLElement | string;
    /**
     * Highlight area definition.
     * It describes highlight area starting from value to value using
     * color. Color can be describes with hex, rgb or rgba value.
     */
    export type Highlight = {
        from: number;
        to: number;
        color: string;
    };
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
     * Describes rendering target element. Can be either string identifier of
     * the element or the element itself.
     *
     * @typedef {HTMLElement|string} RenderTarget
     */
    /**
     * Highlight area definition.
     * It describes highlight area starting from value to value using
     * color. Color can be describes with hex, rgb or rgba value.
     *
     * @typedef {{ from: number, to: number, color: string}} Highlight
     */
    /**
     * Shared generic gauges options
     *
     * @type {{renderTo: RenderTarget, width: number, height: number, minValue: number, maxValue: number, value: number, units: string|boolean, majorTicks: number[]|string[], exactTicks: boolean, minorTicks: number, strokeTicks: boolean, animatedValue: boolean, animateOnInit: boolean, title: string|boolean, borders: boolean, valueInt: number, valueDec: number, majorTicksInt: number, majorTicksDec: number, animation: boolean, animationDuration: number, animationRule: string|AnimationRule, colorPlate: string, colorPlateEnd: string, colorMajorTicks: string, colorMinorTicks: string, colorStrokeTicks: string, colorTitle: string, colorUnits: string, colorNumbers: string, colorNeedle: string, colorNeedleEnd: string, colorValueText: string, colorValueTextShadow: string, colorBorderShadow: string, colorBorderOuter: string, colorBorderOuterEnd: string, colorBorderMiddle: string, colorBorderMiddleEnd: string, colorBorderInner: string, colorBorderInnerEnd: string, colorValueBoxRect: string, colorValueBoxRectEnd: string, colorValueBoxBackground: string, colorValueBoxShadow: string, colorNeedleShadowUp: string, colorNeedleShadowDown: string, needle: boolean, needleShadow: boolean, needleType: string, needleStart: number, needleEnd: number, needleWidth: number, borderOuterWidth: number, borderMiddleWidth: number, borderInnerWidth: number, borderShadowWidth: number, valueBox: boolean, valueBoxWidth: number, valueBoxStroke: number, valueText: string, valueTextShadow: boolean, valueBoxBorderRadius: number, highlights: Highlight[], highlightsWidth: number, fontNumbers: string, fontTitle: string, fontUnits: string, fontValue: string, fontTitleSize: number, fontValueSize: number, fontUnitsSize: number, fontNumbersSize: number, fontNumbersStyle: string, fontTitleStyle: string, fontUnitsStyle: string, fontValueStyle: string, fontNumbersWeight: string, fontTitleWeight: string, fontUnitsWeight: string, fontValueWeight: string, barWidth: number, barStrokeWidth: number, barProgress: boolean, colorBar: string, colorBarStroke: string, colorBarProgress: string, colorBarShadow: string, barShadow: number, listeners: object}} GenericOptions
     */
    const GenericOptions: {
        renderTo: RenderTarget;
        width: number;
        height: number;
        minValue: number;
        maxValue: number;
        value: number;
        units: string | boolean;
        majorTicks: number[] | string[];
        exactTicks: boolean;
        minorTicks: number;
        strokeTicks: boolean;
        animatedValue: boolean;
        animateOnInit: boolean;
        title: string | boolean;
        borders: boolean;
        valueInt: number;
        valueDec: number;
        majorTicksInt: number;
        majorTicksDec: number;
        animation: boolean;
        animationDuration: number;
        animationRule: string | any;
        colorPlate: string;
        colorPlateEnd: string;
        colorMajorTicks: string;
        colorMinorTicks: string;
        colorStrokeTicks: string;
        colorTitle: string;
        colorUnits: string;
        colorNumbers: string;
        colorNeedle: string;
        colorNeedleEnd: string;
        colorValueText: string;
        colorValueTextShadow: string;
        colorBorderShadow: string;
        colorBorderOuter: string;
        colorBorderOuterEnd: string;
        colorBorderMiddle: string;
        colorBorderMiddleEnd: string;
        colorBorderInner: string;
        colorBorderInnerEnd: string;
        colorValueBoxRect: string;
        colorValueBoxRectEnd: string;
        colorValueBoxBackground: string;
        colorValueBoxShadow: string;
        colorNeedleShadowUp: string;
        colorNeedleShadowDown: string;
        needle: boolean;
        needleShadow: boolean;
        needleType: string;
        needleStart: number;
        needleEnd: number;
        needleWidth: number;
        borderOuterWidth: number;
        borderMiddleWidth: number;
        borderInnerWidth: number;
        borderShadowWidth: number;
        valueBox: boolean;
        valueBoxWidth: number;
        valueBoxStroke: number;
        valueText: string;
        valueTextShadow: boolean;
        valueBoxBorderRadius: number;
        highlights: Highlight[];
        highlightsWidth: number;
        fontNumbers: string;
        fontTitle: string;
        fontUnits: string;
        fontValue: string;
        fontTitleSize: number;
        fontValueSize: number;
        fontUnitsSize: number;
        fontNumbersSize: number;
        fontNumbersStyle: string;
        fontTitleStyle: string;
        fontUnitsStyle: string;
        fontValueStyle: string;
        fontNumbersWeight: string;
        fontTitleWeight: string;
        fontUnitsWeight: string;
        fontValueWeight: string;
        barWidth: number;
        barStrokeWidth: number;
        barProgress: boolean;
        colorBar: string;
        colorBarStroke: string;
        colorBarProgress: string;
        colorBarShadow: string;
        barShadow: number;
        listeners: object;
    };
}
declare module "drawings" {
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
    namespace drawings {
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
}
declare module "LinearGauge" {
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
    import GenericOptions = require("GenericOptions");
}
declare module "RadialGauge" {
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
    import GenericOptions = require("GenericOptions");
}
