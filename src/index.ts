/*!
 * slim-cache <https://github.com/nivrith/slim-cache>
 *
 * Copyright (c) Nivrith Mandayam Gomatam
 * Licensed under the MIT License.
 */

/**
 *
 *
 * @export
 * @class SlimCache
 *
 */

export interface CacheList {
  key: keyof any,
  value: any
}
export class SlimCache {
  /**
   * The cache instance
   *
   * @private
   * @type {*}
   * @memberof SlimCache
   */
  private cache: any;

  /**
   *Creates an instance of SlimCache.
   * @param {*} cache Preferably an Object Without Prototype
   * @memberof SlimCache
   */
  constructor(cache: any = Object.create(null)) {
    this.cache = cache;
  }

  /**
   *
   *
   * @param {keyof any} key
   * @returns
   * @memberof SlimCache
   */
  public has(key: keyof any) {
    let val = this.cache[key];
    return typeof val !== undefined && val !== null;
  }

  /**
   *
   *
   * @param {keyof any} key
   * @param {*} value
   * @memberof SlimCache
   */

  public set(key: keyof any, value: any) {
    this.cache[key] = value
  }


  /**
   *
   *
   * @param {keyof any} key
   * @returns {*}
   * @memberof SlimCache
   */
  public get(key: keyof any): any {
    return this.cache[key];
  }

  /**
   *
   *
   * @param {keyof any} key
   * @returns {Boolean} Returns `true` if the entry was removed successfully, else `false`.
   * @memberof SlimCache
   */
  public clear(key: keyof any) {
    return this.has(key) && delete this.cache[key];
  }


  /** Replace internal map cache with a fresh one
   *
   *
   * @param {*} [cache=Object.create(null)]
   * @memberof SlimCache
   */
  public flush (cache: any = Object.create(null)) {
    this.cache = cache;
  }

  /**
   *
   *
   * @memberof SlimCache
   */
  public clean () {
    for (let key in this.cache) {
      // this check can be safely omitted in modern JS engines
      // if (this.cache.hasOwnProperty(key))
        delete this.cache[key];
    }
  }

  /**
   *
   *
   * @returns {boolean}
   * @memberof SlimCache
   */
  public isEmpty(): boolean {
    for (let prop in this.cache) {
      return false;
    }
    return true;
  }
}

export default SlimCache;