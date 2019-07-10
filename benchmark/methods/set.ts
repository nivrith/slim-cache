const ora = require('ora')
const Table = require('cli-table2')
import logdown from 'logdown';
import Benchmark from 'benchmark';
import nativeMapCache from '../map';
import objectCache from '../object';
import SlimCache from '../../src';

const MapCache = require('map-cache');


const debug = logdown('slim');
interface BenchmarkResult extends Benchmark.Event {
  target: {
    name: string,
    hz: number,
    stats: any
  }
}

const results: BenchmarkResult[] = []
const spinner = ora('Running benchmark')


function showResults (benchmarkResults:BenchmarkResult[]) {
  const table = new Table({head: ['NAME', 'OPS/SEC', 'RELATIVE MARGIN OF ERROR', 'SAMPLE SIZE']})
  benchmarkResults.forEach((result) => {
    table.push([
      result.target.name,
      result.target.hz.toLocaleString('en-US', {maximumFractionDigits: 0}),
      `± ${result.target.stats.rme.toFixed(2)}%`,
      result.target.stats.sample.length
    ])
  })

  console.log(table.toString())
}

function sortDescResults (benchmarkResults: any) {
  return benchmarkResults.sort((a:BenchmarkResult, b: BenchmarkResult) => a.target.hz < b.target.hz ? 1 : -1)
}

function onCycle (event: BenchmarkResult) {
  results.push(event)
  ora(event.target.name).succeed()
}

function onComplete () {
  spinner.stop()
  debug.log()

  const orderedBenchmarkResults = sortDescResults(results)
  showResults(orderedBenchmarkResults)
}

spinner.start()

const fibNumber = 40;

const benchmark = new Benchmark.Suite();

const $nativeMapCache = nativeMapCache.create();
const $objectCache =  objectCache.create();
const $slimCache =  new SlimCache();
const $mapCache =  new MapCache();




benchmark
  .add('native map', ()=>{
    $nativeMapCache.set(40, 102334155);
  })
  .add('map-cache', ()=>{
    $mapCache.set(40, 102334155);
  })
  .add('slim-cache', ()=>{
    $slimCache.set(40, 102334155);
  })
  .add('object cache', ()=>{
    $objectCache.set(40, 102334155);
  })
  .on('cycle', onCycle)
  .on('complete', onComplete)
  .run({'async': true})