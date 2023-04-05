import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int[][] room = new int[N][2];

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            room[i][0] = Integer.parseInt(st.nextToken());
            room[i][1] = Integer.parseInt(st.nextToken());
        }


        Arrays.sort(room, new Comparator<int[]>() {
            @Override
            public int compare(int[] t1, int[] t2) {
                if(t1[1] == t2[1]){
                    return t1[0] - t2[0];
                }
                return t1[1] - t2[1];
            }
        });

        int count = 0;
        int end= 0;


        for (int i = 0; i < N; i++) {
            if(end <= room[i][0] ){ //4 ,5           ,6
                end = room[i][1];
                count++;
            }
        }

        System.out.println(count);
    }
}
