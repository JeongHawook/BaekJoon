import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) throws IOException {


        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));


        int N = Integer.parseInt(br.readLine());

        Integer[] money = new Integer[N];
        for (int i = 0; i < N; i++) {
            money[i]=Integer.parseInt(br.readLine());
        }


        Arrays.sort(money, new Comparator<Integer>() {
            public int compare(Integer t1, Integer t2) {
                return t2 - t1;
            }
        });
        long result = 0;
        for (int i = 0; i < N; i++) {
           int sum = money[i]-(i);
           if(sum < 0){
               sum = 0;
           }
           result +=sum;
           


        }
        System.out.println(result);
    }
}
