import { nanoquery } from '@nanostores/query';
import {atom} from 'nanostores'
import { useStore } from '@nanostores/react';
import { jwt } from '../me/store';
let PATH = "http://localhost:3000/api/thread"

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys) => fetch(keys.join("/"),
  {
  headers: {
    Authorization: jwt.get()
  },
}


).then((r) => r.json()),
});
export const $threadApi = createFetcherStore([PATH])

export let useThreadsApi =()=> useStore($threadApi)

