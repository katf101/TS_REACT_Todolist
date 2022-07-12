// export interface Todo {
//   id: string;
//   text: string;
// }

class Todo {
  // ts는 프로퍼티 선언을 한다.
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
