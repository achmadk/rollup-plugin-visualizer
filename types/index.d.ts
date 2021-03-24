import { Plugin } from 'rollup'

type TemplateValues = 'treemap' | 'sunburst' | 'network'

/**
 * @description Options for `rollup-plugin-visualizer`
 *
 * @interface RollupPluginVisualizer
 */
interface RollupPluginVisualizer {
  /**
   * Name of the file with diagram to generate
   * @defaultvalue `stats.html`
   *
   * @type {string}
   * @memberof RollupPluginVisualizer
   */
  filename: string
  /**
   * Title tag value
   * @defaultvalue `Rollup Visualizer`
   *
   * @type {string}
   * @memberof RollupPluginVisualizer
   */
  title: string
  /**
   * Use sourcemaps to calculate sizes (e.g. after UglifyJs or Terser)
   * @defaultvalue false
   *
   * @type {boolean}
   * @memberof RollupPluginVisualizer
   */
  sourcemap: boolean
  /**
   * Open generated file in default user agent
   * @defaultvalue false
   *
   * @type {boolean}
   * @memberof RollupPluginVisualizer
   */
  open: boolean
  /**
   * Which digram type to use: `sunburst`, `treemap`, `network` (very early stage, feedback welcomed)
   *
   * @type {TemplateValues}
   * @memberof RollupPluginVisualizer
   */
  template: TemplateValues
  /**
   * Product portable json file that can be used with plugin CLI util to generate graph from several json files. Every UI property ignored in this case.
   * @defaultvalue false
   *
   * @type {boolean}
   * @memberof RollupPluginVisualizer
   */
  json: boolean
  /**
   * Collect gzip size from source code and display it at chart
   * @defaultvalue false
   *
   * @type {boolean}
   * @memberof RollupPluginVisualizer
   */
  gzipSize: boolean
  /**
   * Collect brolti size from source code and display it at chart. Only if current node version supports it
   * @defaultvalue false
   *
   * @type {boolean}
   * @memberof RollupPluginVisualizer
   */
  brotliSize: boolean
}

/**
 * Visualize and analyze your Rollup bundle to see which modules are taking up space.
 *
 * @export
 * @param {Partial<RollupPluginVisualizer>} options Options passed into `rollup-plugin-visualizer`
 * @return {*}  {Plugin} Generated Rollup plugin
 */
export default function visualizer(options?: Partial<RollupPluginVisualizer>): Plugin
