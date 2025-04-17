/**
 * UpdateTodoDto - Data Transfer Object for updating an existing todo item
 *
 * This DTO defines the fields that can be updated for an existing todo item. All fields are
 * optional since we might want to update only specific fields.
 */
export class UpdateTodoDto {
  /** The updated title of the todo item (optional) */
  title?: string;

  /** The updated completion status of the todo item (optional) */
  isCompleted?: boolean;
}
