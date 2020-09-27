// 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组[3,4,5,1,2]为[1,2,3,4,5]的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
function minNumberInRotateArray(rotateArray) {
    const length = rotateArray.length;
    if (!length) {
        return 0;
    }
 
    let left = 0,
        right = length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
 
        // 子数组有序
        if (rotateArray[left] < rotateArray[right]) {
            return rotateArray[left];
        }
 
        // 左子数组有序，最小值在右边
        // 那么mid肯定不可能是最小值（因为rotateArray[mid]大于rotateArray[left]）
        if (rotateArray[left] < rotateArray[mid]) {
            left = mid + 1;
            // 右子数组有序，最小值在左边
            // 这里right=mid因为最小值可能就是rotateArray[mid]
        } else if (rotateArray[mid] < rotateArray[right]) {
            right = mid;
        } else {
            // 无法判断，缩小下范围
            ++left;
        }
    }
 
    return rotateArray[left];
}