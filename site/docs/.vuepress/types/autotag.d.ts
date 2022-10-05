import type { Props } from "./Tag";

type AutotagTag = Props & {
  /**
   * Change tag label according to these languages.
   *
   * @example
   * ```
   *  {es: "OFICIAL", id: "RESMI", zh: "官方维护"},
   * ```
   */
  locale?: Record<string, string>;
};

type AutotagOptionsItem = {
  /**
   * Add tags to all pages in these path.
   * It will be matched with the url page (case-sensitive).
   *
   * @example
   * This will add tags to all pages inside `plugins` directory
   * and a `middlewares.md` file at the root of `hosting` folder
   * (note that .md extension will be converted to .html).
   *
   * ```
   * ["/plugins", "/hosting/middlewares.html"]
   * ```
   */
  url: string[];

  /**
   * Tag options.
   *
   * If tag `type` property is not defined, then it's mandatory to specify
   * either `text` or `icon` property.
   *
   * @example
   * This will add two tags:
   * ```
   * [ {type: "official"}, {text: "Tag 1"} ]
   * ```
   */
  tag: AutotagTag[];

  /**
   * implement only to these files/folders.
   *
   * @example
   * only add tags to folder `official` and all `middlewares.md` files
   * inside current `url` path
   * (note that .md extension will be converted to .html).
   *
   * ```
   * [ "/official", "middlewares.html" ]
   * ```
   */
  include?: string[];

  /**
   * Exclude these files/folders.
   *
   * @example
   * Exclude folder `official` and all `middlewares.md` files
   * inside current `url` path
   * (note that .md extension will be converted to .html).
   *
   * ```
   * [ "/official", "middlewares.html" ]
   * ```
   */
  exclude?: string[];
};

type AutotagOptions = AutotagOptionsItem[];
