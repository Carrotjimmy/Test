// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
public class Solution {
    public boolean Find(int target, int [][] array) {
        int rows = array.length;
        if(rows==0){
            return false;
        }
        int cols = array[0].length;
        if(cols==0){
            return false;
        }
        int row = rows - 1;
        int col = 0;
        while(row>=0 && col<cols){
            if(array[row][col]>target){
                row--;
            }
            else if(array[row][col]<target){
                col++;
            }
            else{
                return true;
            }
        }
        return false;
    }
}