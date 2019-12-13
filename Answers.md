1. What problem does the context API help solve?
    > Solves prop drilling by not having to pass 1 million props down
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    > actions: payloads of information to be sent to the store
    > reducers: specify how state changes in response to actions
    > store: holds state
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    > Component state is something that should stay in one component only, something local,
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    > `redux-thunk` is a middleware that allows us to delay the dispatch of an action or to dispatch only if a certain condition is met
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    > `redux` in the end is just a bunch of functions with switch cases and allows us to keep state in a single place as well as describe how its modified
