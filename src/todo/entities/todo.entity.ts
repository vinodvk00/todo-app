/**
 * Todo Entity - Represents the structure of a todo item in our application
 *
 * This class defines the shape of our todo items and will be used throughout the application for
 * type safety and data consistency.
 */
export class Todo {
  /** Unique identifier for the todo item */
  id: number;

  /** The title or description of the todo item */
  title: string;

  /** Indicates whether the todo item has been completed */
  isCompleted: boolean;

  /** Timestamp when the todo item was created */
  createdAt: Date;

  /** Timestamp when the todo item was last updated */
  updatedAt: Date;
}
