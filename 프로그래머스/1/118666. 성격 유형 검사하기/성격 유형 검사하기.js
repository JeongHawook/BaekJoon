function solution(survey, choices) {
    var answer = '';
    let map = new Map()
    map.set("R",0)
    map.set("T",0)
    map.set("C",0)
    map.set("F",0)
    map.set("J",0)
    map.set("M",0)
    map.set("A",0)
    map.set("N",0)
    
    for(i=0;i<survey.length;i++){ //TR   
  
        if(choices[i]>4){ // 7  
          let bigPoint =  choices[i]-4 // 3  
          let existingPoint = map.get(survey[i][1]) //undefined 
        
          if(existingPoint>0){
            map.set(survey[i][1],existingPoint+bigPoint)
          }else{
            map.set(survey[i][1],bigPoint) //R,3
           
          }
         
            
        } //  RT    TR 
        else if(choices[i]<4){ //1  3
            let smallPoint = 4- choices[i] //3  1  
            let existingPoint = map.get(survey[i][0]) // undefined undefined
            if(existingPoint>0){
                map.set(survey[i][0],existingPoint+smallPoint)
            }else{
                map.set(survey[i][0],smallPoint) // R,3   T,1
            }
        }
       
    }

console.log(map.get('N'))
    
    if(map.get('R')>map.get('T')){
        answer += "R" 
    }else if(map.get('T')>map.get('R')){
        answer +="T"
    }else{
        answer+="R"
    }
    
    if(map.get('C')>map.get('F')){
        answer += "C" 
    }else if(map.get('F')>map.get('C')){
        answer +="F"
    }else{
        answer+="C"
    }
    if(map.get('J')>map.get('M')){
        answer += "J" 
    }else if(map.get('M')>map.get('J')){
        answer +="M"
    }else{
        answer +="J"
    }
    
    if(map.get('A')>map.get('N')){
        answer += "A" 
    }else if(map.get('N')>map.get('A')){
        answer +="N"
    }else{
        answer+="A"
    }
    return answer;
}