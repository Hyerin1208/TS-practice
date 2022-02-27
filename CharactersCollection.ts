class CharactersCollection {
  // 문자에 대한 정렬
  // 문자를 비교하고 버블 sort를 하기위한 swap하기위한 class
  constructor(private data: string) {}

  // 내가가진 배열의 길이를 반환하는 length 메소드만들기
  get length(): number {
    return this.data.length;
  }

  // 아래는 버블 정렬의 비교와 swap
  compare(leftIndex: number, rightIndex: number): boolean {
    // 소문자로 변경해서 (toLowerCase) 변경한 값을 비교해서 true/false로 리턴하는 메소드
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split(""); // 문자열 분리 (split)
    // 먼저 변수하나를 선언하고 swap하는 로직은 number와 동일.
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join(""); // 문자열을 다시 문자열로 조합하는 작업 join
  }
}

export default CharactersCollection;
