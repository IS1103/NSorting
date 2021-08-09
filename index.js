/** 物件陣列排序
 * @param {Array} arr 
 * @param {*} key 若要排序的是物件需要比對的key
 */
function sortObj(arr, key) {
    if (!key) {
        throw new Error("the key don't exist!");
    }

    arr = arr.slice();
    const length = arr.length;

    // 有幾個元素，就要找幾輪的最小值
    // 這邊的 i 代表 i 以前的元素都排序好了
    for (let i = 0; i < length; i++) {

        // 先預設第一個是最小的
        let min = arr[i];
        let minIndex = i;

        // 從還沒排好的元素開始找最小值
        for (let j = i; j < length; j++) {
            if (arr[j][key] < min[key]) {
                min = arr[j];
                minIndex = j;
            }
        }

        // ES6 的用法，交換兩個數值
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}

/** 陣列排序
 * @param {Array} arr 
 */
function sort(arr) {
    arr = arr.slice();
    const length = arr.length;

    // 有幾個元素，就要找幾輪的最小值
    // 這邊的 i 代表 i 以前的元素都排序好了
    for (let i = 0; i < length; i++) {

        // 先預設第一個是最小的
        let min = arr[i];
        let minIndex = i;

        // 從還沒排好的元素開始找最小值
        for (let j = i; j < length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }

        // ES6 的用法，交換兩個數值
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}
module.exports = { sortObj, sort };