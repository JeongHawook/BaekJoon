import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;

public class Main {
    public static void main(String[] args) throws IOException {


        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));


        int N = Integer.parseInt(br.readLine());
        int[] ropes= new int[N];
        for (int i = 0; i < N; i++) {
            ropes[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(ropes);


        int max = Integer.MIN_VALUE;

        for (int i = 0; i < N; i++) {
            if(max < ropes[i]*(N-i)){
                max=ropes[i]*(N-i);
            }

        }
        System.out.println(max);
    }
}
