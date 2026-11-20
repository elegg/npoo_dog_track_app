import { useStore } from "@nanostores/react";
import { createMutatorStore } from "./fetch_one";
let PATH = "http://localhost:3000/api/message"
import { jwt } from "../me/store";

export const $addMessage = createMutatorStore(
  async ({ data: message, revalidate, getCacheUpdater }) => {

    console.log("ADDing", message)
    // …or you can optimistically update current cache.
    revalidate("http://localhost:3000/api/message")
    revalidate("http://localhost:3000/api/message")

    const [updateCache, messages] = getCacheUpdater(`/api/messages`);
    updateCache([message]);

    // Even though `fetch` is called after calling `revalidate`, we will only
    // revalidate the keys after `fetch` resolves
    return fetch(PATH, {
      method:"POST",
       body:JSON.stringify(message),
        headers: {
          Authorization: jwt.get(),
           'Content-Type': 'application/json',
        } })
  },
{onError:(er)=>console.log(er)}
);


export let useAddMessage= ()=>useStore($addMessage)