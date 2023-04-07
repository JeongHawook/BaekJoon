import java.util.Arrays;
import java.util.Collections;

class Solution {
    public long solution(long n) {
        String numbers="";
String[] list = String.valueOf(n).split("");
     Arrays.sort(list, Collections.reverseOrder());
        for(int i = 0 ; i<list.length;i++){
           numbers +=list[i];
        }
      //   System.out.println(list[i]);
        return Long.parseLong(numbers);
    }
}