import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

/**
 * TodoService - Handles the business logic for todo operations
 * 
 * This service implements CRUD operations for todo items using in-memory storage.
 * In a real application, this would typically interact with a database.
 */
@Injectable()
export class TodoService {
  // In-memory storage for todos
  private todos: Todo[] = [];
  private idCounter = 1;

  /**
   * Creates a new todo item
   * @param createTodoDto - The DTO containing the todo item data
   * @returns The created todo item
   */
  create(createTodoDto: CreateTodoDto): Todo {
    const todo: Todo = {
      id: this.idCounter++,
      title: createTodoDto.title,
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.todos.push(todo);
    return todo;
  }

  /**
   * Retrieves all todo items
   * @returns Array of all todo items
   */
  findAll(): Todo[] {
    return this.todos;
  }

  /**
   * Retrieves a specific todo item by ID
   * @param id - The ID of the todo item to find
   * @returns The found todo item or undefined
   */
  findOne(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  /**
   * Updates a todo item
   * @param id - The ID of the todo item to update
   * @param updateTodoDto - The DTO containing the update data
   * @returns The updated todo item or undefined if not found
   */
  update(id: number, updateTodoDto: UpdateTodoDto): Todo | undefined {
    const todo = this.findOne(id);
    if (!todo) return undefined;

    Object.assign(todo, updateTodoDto, { updatedAt: new Date() });
    return todo;
  }

  /**
   * Removes a todo item
   * @param id - The ID of the todo item to remove
   * @returns True if the item was removed, false otherwise
   */
  remove(id: number): boolean {
    const initialLength = this.todos.length;
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos.length !== initialLength;
  }
}