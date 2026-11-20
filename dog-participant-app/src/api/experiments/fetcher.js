
import { nanoquery } from '@nanostores/query';
import {atom} from 'nanostores'
let PATH = "http://localhost:3000/api/experiment"

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys) => fetch(keys.join("/")).then((r) => r.json()),
});
export const $selectedExperimentID = atom(1)
export const $currentExperiment = createFetcherStore([PATH, $selectedExperimentID])