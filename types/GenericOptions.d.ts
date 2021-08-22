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
declare const GenericOptions: {
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
