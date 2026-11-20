import { nanoquery } from '@nanostores/query';
let PATH = "http://localhost:3000/api/experiment"
export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys) => fetch(PATH).then((r) => r.json()),
});

export const $allExperiment = createFetcherStore(PATH)
