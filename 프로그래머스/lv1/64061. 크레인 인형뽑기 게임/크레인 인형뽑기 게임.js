function solution(board, moves) {
    var answer = 0;
    let pick=[];
    
    for(let i=0; i<moves.length; i++){
        const move = moves[i]-1
        for(let j = 0; j<board.length; j++){
            if(board[j][move]!==0){
                if(pick[pick.length-1] == board[j][move]){
                    pick.pop()
                    answer+=2
                    console.log(board[j][move], answer)
                }else{
                pick.push(board[j][move])
                }
                board[j][move]=0;
                break;
            }

}
     
    }
       console.log(pick)        
        return answer;
}