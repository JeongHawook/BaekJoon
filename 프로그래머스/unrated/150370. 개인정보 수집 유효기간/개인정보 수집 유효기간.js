function solution(today, terms, privacies) {
    var answer = [];
    let todayYear= parseInt(today.split(".")[0])
    let todayMonth=parseInt(today.split(".")[1])
    let todayDay=parseInt(today.split(".")[2])

    for(i=0;i<privacies.length;i++){
       let privacy= privacies[i].split(" ")
       
       for(k=0;k<terms.length;k++){
        let term = terms[k].split(" ")
        if(privacy[1]==term[0]){
            let date = privacy[0].split(".")
            let month = parseInt(date[1])+parseInt(term[1])
            let year = parseInt(date[0])
            while(month>12){
                month=month-12
                year++
            }
            if(todayYear>year){ //2022  2023까지
                console.log("년"+todayYear, year+"까지", i)
                answer.push(i+1)
               
            }else if(todayYear==year && todayMonth>month){ //2022 2022 7 6까지
                console.log("월"+todayMonth, month+"까지", i)
                answer.push(i+1)
            }else if(todayYear==year && todayMonth==month){
              
                 if(todayDay>=parseInt(date[2])){ //6일 5일까지
                     console.log("일"+todayDay, date[2])
                        answer.push(i+1)
                    }
            }
            
        }
       }
       
       
    }
    
    return answer;
}