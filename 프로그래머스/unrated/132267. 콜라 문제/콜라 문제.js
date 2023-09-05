function solution(a, b, n) {
    let totalCola = 0; // 상빈이가 받을 수 있는 전체 콜라 수
    let emptyBottles = n; // 현재 가지고 있는 빈 병 수
    
    while (emptyBottles >= a) {
        // 현재 가지고 있는 빈 병으로 교환 가능한 콜라 수 계산
        const colaFromEmptyBottles = Math.floor(emptyBottles / a);
        
        // 총 콜라 수에 더해주고, 빈 병 수를 업데이트
        totalCola += colaFromEmptyBottles * b;
        emptyBottles = (emptyBottles % a) + (colaFromEmptyBottles * b);
    }
    
    return totalCola;
}

// 예시 테스트 케이스
const a = 2; // 빈 병 2개를 가져다주면
const b = 1; // 콜라 1병을 주는 마트
const n = 20; // 빈 병 20개를 가져다주면

console.log(solution(a, b, n)); // 출력: 19
