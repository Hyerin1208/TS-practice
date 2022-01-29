import TodoItem from "./TodoItem";

class TodoCollection {
    private nextId : number = 1;

    // itemMap이라는 프로퍼티에 TodoItem 저장하도록 Map 객체사용
    private itemMap : Map<number, TodoItem>; // 제너릭 사용한 형태

    constructor(public userName: string, public todoItems:TodoItem[] = []) {
        // 생성자 내부 코드
        this.itemMap = new Map<number, TodoItem>();
        // id를 통해 TodoItem을 통해 꺼내는 형태
        todoItems.forEach((item) => this.itemMap.set(item.id, item));

    }
    
    getTodoById(id: number) : TodoItem | undefined {
        return this.itemMap.get(id);
    }

    addTodo(task: string) : number {
        while(this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task))
        return this.nextId;
    }

    // includeComplete => true : 모든 할일목록 반환
    // includeComplete => false : 완료목록은 제외한 할일 목록반환.
    getTodoItems(includeComplete:boolean) : TodoItem[] {
        return [...this.itemMap.values()].filter(
            (item) => includeComplete || !item.complete
        )
    }

    removeComplete():void {
        this.itemMap.forEach((item) => {
            if(item.complete){
                // 이미 완료된 항목
                this.itemMap.delete(item.id);
            }
        })
    }

    markComplete(id: number, complete: boolean) : void {
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
}

export default TodoCollection;