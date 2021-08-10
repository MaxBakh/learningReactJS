export const EXAMPLE_ACTION = "PROFILE::EXAMPLE_ACTION"

export const changeName = (name) => ({
    type: EXAMPLE_ACTION,
    payload: {
        name: 'name'
    }
})