import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

/**
 * TodoController - Handles HTTP requests for todo operations
 *
 * This controller demonstrates NestJS decorators and routing. Each method corresponds to an HTTP
 * endpoint and uses dependency injection to access the TodoService.
 */
@Controller('todos')
export class TodoController {
  /**
   * Constructor - demonstrates dependency injection in NestJS NestJS will automatically instantiate
   * and inject the TodoService
   */
  constructor(private readonly todoService: TodoService) {}

  /**
   * @Get decorator defines a route for HTTP GET requests
   * This endpoint returns all todo items
   */
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  /**
   * @Get(':id') creates a route with a dynamic parameter
   * The @Param decorator extracts the id from the URL
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    const todo = this.todoService.findOne(+id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  /**
   * @Post decorator defines a route for HTTP POST requests
   *
   * @Body decorator extracts the request body and validates it against CreateTodoDto
   */
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  /**
   * @Put decorator defines a route for HTTP PUT requests
   * Combines path parameters and request body
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    const todo = this.todoService.update(+id, updateTodoDto);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  /** @Delete decorator defines a route for HTTP DELETE requests */
  @Delete(':id')
  remove(@Param('id') id: string) {
    const isRemoved = this.todoService.remove(+id);
    if (!isRemoved) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return { message: 'Todo deleted successfully' };
  }
}
