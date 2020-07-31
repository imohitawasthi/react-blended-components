

const GENERATE_ONES_ARRAY = (length) => Array.apply(0, Array(length)).map(function() { return 1; })
const GENERATE_INITIALS = (name) => {
    var initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
}


export default {
    GENERATE_ONES_ARRAY,
    GENERATE_INITIALS
 }
