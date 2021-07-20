const employee = {
    name: 'joj',
    streetAddress: '123 lane'
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {[key]: value});
}
function deleteFromEmployeeByKey(obj, key) {
    let newObj = {...obj};
    delete newObj.[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj.[key];
    return obj;
}