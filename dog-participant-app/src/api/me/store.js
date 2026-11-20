import {map, computed} from 'nanostores'

export let $me = map({})

export let jwt = computed($me, (me)=>me.token ? `JWT ${me.token}` : "")

