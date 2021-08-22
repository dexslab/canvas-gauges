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
