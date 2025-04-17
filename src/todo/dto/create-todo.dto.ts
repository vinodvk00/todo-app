/**
 * CreateTodoDto - Data Transfer Object for creating a new todo item
 *
 * DTOs (Data Transfer Objects) are objects that define how the data will be sent over the network.
 * This DTO specifies the required fields when creating a new todo item.
 */
export class CreateTodoDto {
  /**
   * The title or description of the todo item This is the only required field when creating a new
   * todo
   */
  title: string;
}
