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
declare class Animation {
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
declare namespace Animation {
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
declare namespace rules {
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
