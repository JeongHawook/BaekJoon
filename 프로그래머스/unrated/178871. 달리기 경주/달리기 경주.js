function solution(players, callings) {
    let newPlayers={}
    
   for(let i = 0 ; i< players.length; i++){
      newPlayers[players[i]] = i
   }
  
    callings.forEach((name)=>{
         const curr = newPlayers[name] //3
         const front = players[curr-1]  // poe
        
        
        players[curr-1] = name
        players[curr] = front
  
        newPlayers[name]--
        newPlayers[players[curr]]++
    })    
        console.log(players)
    
    return players;
}