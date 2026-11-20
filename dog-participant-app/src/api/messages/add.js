import { useStore } from "@nanostores/react";
import { createMutatorStore } from "./fetch_all";
let PATH = "http://localhost:3000/api/message"
import { jwt } from "../me/store";
import { $selectedThreadID } from "../threads/fetch_one";
export const $addMessage = createMutatorStore(
  async ({ data: message, revalidate, getCacheUpdater }) => {

    console.log("ADDing", message)
    // …or you can optimistically update current cache.
    const [updateCache, messages] = getCacheUpdater(`/api/messages`);
    updateCache([message]);
    let threadID = $selectedThreadID.get()
    console.log({id:threadID})
    revalidate("http://localhost:3000/api/thread/"+threadID)
    let [update, thread] = getCacheUpdater("http://localhost:3000/api/thread/"+threadID)
    updateCache({})

    console.log(thread, "THRAD UPDATING")
        //
        // const [updateCache, threads] = getCacheUpdater(`/api/messages`);


    // Even though `fetch` is called after calling `revalidate`, we will only
    // revalidate the keys after `fetch` resolves
    return fetch(PATH, {
      method:"POST",
       body:JSON.stringify({...message, 'thread':$selectedThreadID.get()}),
        headers: {
          Authorization: jwt.get(),
           'Content-Type': 'application/json',
        } })
  },
{onError:(er)=>console.log(er)}
);


export let useAddMessage= ()=>useStore($addMessage)