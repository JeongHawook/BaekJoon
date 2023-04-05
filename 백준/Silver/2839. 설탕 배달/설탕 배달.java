import java.io.BufferedReader;
import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int given = Integer.parseInt(br.readLine());
        int count = 0;
        int result = 0;
        while (true) {

            if(given == 4 || given== 7){
                result=-1;
                break;
            }

            if (given % 5 != 0) {
                given -= 3;
                count++;
            } else {
                result = given / 5;
                break;
            }


        }

        System.out.println(result+ count);

    }
}
