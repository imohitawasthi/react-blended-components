

const GENERATE_ONES_ARRAY = (length) => Array.apply(0, Array(length)).map(function() { return 1; })
const GENERATE_INITIALS = (name) => {
    var initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
}

const GENERATE_ERROR_FIELD_KEY = (key) => `error-${`${key.charAt(0)}${key.slice(1)}`}`


export default {
    GENERATE_ONES_ARRAY,
    GENERATE_INITIALS,

    GENERATE_ERROR_FIELD_KEY
 }
