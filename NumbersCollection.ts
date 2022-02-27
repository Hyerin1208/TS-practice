class NumbersCollection {
  // 숫자에 대한 정렬을 할 예정
  // 숫자를 비교하고 버블 sort 를 하기위한 swap 하기위한 class
  constructor(private data: number[]) {}

  // 내가가진 배열의 길이를 반환하는 length라는 메소드만들기
  get length(): number {
    return this.data.length;
  }

  // 아래는 버블 정렬의 비교와 스왑
  compare(leftIndex: number, rightIndex: number): boolean {
    // leftIndex 가 rightIndex 보다 큰지에 대한 결과를 리턴
    return this.data[leftIndex] > this.data[rightIndex]; // 오름차순이라서 부포가 > 내림차순은 < 이걸쓰면됨.
  }

  swap(leftIndex: number, rightIndex: number): void {
    // 먼저 변수하나를 선언하고,
    const temp = this.data[leftIndex];
    // this.data[leftIndex] 에 this.data[rightIndex] 를 대입
    this.data[leftIndex] = this.data[rightIndex];
    // this.data[rightIndex]에 temp를 대입
    this.data[rightIndex] = temp;
  }
}

export default NumbersCollection;
