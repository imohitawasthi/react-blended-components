
export const Types = {
    CHANGE_ACTIVE_COMPONENT: 'CHANGE_ACTIVE_COMPONENT'
}

const changeComponent = (component) => ({
    type: Types.CHANGE_ACTIVE_COMPONENT,
    component
})

export default {
    changeComponent
}