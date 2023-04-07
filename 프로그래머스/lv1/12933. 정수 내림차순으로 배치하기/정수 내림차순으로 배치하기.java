import java.util.Arrays;
import java.util.Collections;

class Solution {
    public long solution(long n) {
               
        String[] list = String.valueOf(n).split("");
        
        Arrays.sort(list);
        StringBuilder sb = new StringBuilder();
        
        for(int i = 0 ; i<list.length;i++){
          String numbers =list[i];
            sb.append(numbers);
        }
      //   System.out.println(list[i]);
        return Long.parseLong(sb.reverse().toString());
    }
}