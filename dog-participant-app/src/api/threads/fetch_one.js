import { nanoquery } from '@nanostores/query';
import {atom} from 'nanostores'
import { useStore } from '@nanostores/react';
import { jwt } from '../me/store';
let PATH = "http://localhost:3000/api/thread"

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys) => {
        console.log({keys, joined:keys.join("/")})

    
    return fetch(keys.join("/"),
  {
    headers: {
      Authorization: jwt.get()
    }}

).then((r) => r.json())}})
export const $selectedThreadID = atom(1)
export const $selectedThread = createFetcherStore([PATH, $selectedThreadID])

export let useThreadApi =()=> useStore($selectedThread)