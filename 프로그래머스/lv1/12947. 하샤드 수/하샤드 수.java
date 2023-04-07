class Solution {
    public boolean solution(int x) {
        boolean answer = true;
        int num= 0;
        int temp=x;
        while(true){ //1543
            
           num+= temp%10; //2+1
         
               if( temp < 10 ) {
                     System.out.println("x : "+x+" num : "+num);
                 if(x%num==0){ //12/3
                      
                     answer=true;
                     break;
                 }else{
                     answer=false;
                   break;
                 }
                 }    
            temp= temp/10;      //2
             
            
        }
        
        
        
        return answer;
    }
}