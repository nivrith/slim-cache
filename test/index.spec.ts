import {
  SlimCache
} from './../src/index';
import {
  expect
} from 'chai';

describe('SlimCache', () => {
  let cache: SlimCache;
  let $instance = Object.create(null);
  beforeEach(() => {
    $instance = Object.create(null);
    cache = new SlimCache($instance);
  });

  describe('Cache Creation', () => {
    it('Creates Empty Object', () => {
      let bareCache = new SlimCache($instance);
      expect($instance).to.be.empty;
    });

    it('Creates Object Without Prototype', () => {
      expect(Object.getPrototypeOf($instance)).to.equal(null);
    });
  });

  describe('Slim Cache Methods', () => {

    describe('Set', () => {
      beforeEach(() => {
        cache.set('hello', 'world');
      });

      it('Sets value of `key` to cache', () => {
        expect($instance.hello).to.not.be.undefined;
      });

      it('Sets correct value of `key` to cache', () => {
        expect($instance.hello).to.be.equal('world');
      });
    })

    describe('Get', () => {
      beforeEach(() => {
        cache.set('hello', 'world');
      });
      it('Gets value of `key` from cache', () => {
        expect(cache.get('hello')).to.equal($instance.hello);
      });

      it('Returns undefined for non existent `key`', () => {
        expect(cache.get('bye')).to.be.undefined;
      });
    });

    describe('Clear', () => {
      beforeEach(() => {
        cache.set('hello', 'world');
      });

      it('Clears value of `key` from cache', () => {
        cache.clear('hello');
        expect($instance.hello).to.be.undefined;
      });

      it('Expects cache instance to be empty', ()=> {
        cache.clear('hello');
        expect($instance).to.be.empty;
      })
    });

    describe('Clean', () => {
      beforeEach(() => {
        cache.set('hello', 'world');
      });

      it('Cleans cache and unsets previous values', () => {
        cache.clean();
        expect($instance.hello).to.be.undefined;
      });

      it('Cleans cache and renders instance empty', () => {
        cache.clean();
        expect($instance).to.be.empty;
      });
    });

    describe('isEmpty', () => {
      beforeEach(() => {
        cache.set('hello', 'world');
      });

      it('Expects cache to be non empty', () => {
        expect(cache.isEmpty()).to.be.false;
      });

      it('Cleans cache and renders instance empty', () => {
        cache.clean();
        expect(cache.isEmpty()).to.be.true;
      });
    });

    describe('Flush', () => {
      beforeEach(() => {
        cache.set('hello', 'world');
      });

      it('Replaces internal cache and loses previously set keys', () => {
        cache.flush();
        expect(cache.get('hello')).to.be.undefined;
      });

      it('Flushes cache and replaces internal cache with a new empty object', () => {
        cache.flush();
        expect(cache.isEmpty()).to.be.true;
      });

      it('Flushes cache and renders instance empty', () => {
        cache.flush({new: 'cache'});
        expect(cache.get('new')).to.be.equal('cache');
      });
    });
  })


});