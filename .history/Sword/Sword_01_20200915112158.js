// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
function Find(target, array) {
    const rowNum = array.length;
    if (!rowNum) {
        return false;
    }
    const colNum = array[0].length;
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            if (array[i][j] === target) return true;
        }
    }
 
    return false;
}