import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
   
        ArrayList<Integer> list = new ArrayList<Integer>();
        
        
        for(int i = 0; i<arr.length; i++){
            if(i==0){
                list.add(arr[i]);
            }else{
                if(arr[i-1] != arr[i]){
                        list.add(arr[i]);            
                }          
            }
        }
        
        int[] answer = new int[list.size()];
        for(int i = 0; i<list.size(); i++){
               answer[i]=list.get(i);
        
        }
        
        
       // System.out.println("Hello Java");

        return answer;
    }
}