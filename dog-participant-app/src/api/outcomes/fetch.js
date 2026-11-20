import { nanoquery } from '@nanostores/query';
import {atom, computed} from 'nanostores'
import { useStore } from '@nanostores/react';
import { jwt } from '../me/store';
let PATH = "http://localhost:3000/api/outcome"

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys) => {
    console.log({keys})
    
   return fetch(keys.join("/"),
  {
    headers: {
      Authorization: jwt.get()
    }}

).then((r) => r.json())}


});
export const $selectedMessageID = atom(1)
export const $allOutcomes = createFetcherStore([PATH])


export let $cleanedOutcomes = computed($allOutcomes, (outcomes)=>{


   let values =  outcomes?.data?.docs
   if(!values){
    return []
   }

   return values

})

export let useOutcomesApi =()=> useStore($cleanedOutcomes)