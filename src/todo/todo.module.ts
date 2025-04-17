import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

/**
 * TodoModule - The feature module for todo functionality This module demonstrates NestJS's modular
 * architecture:
 *
 * - Controllers handle HTTP requests and define routes
 * - Providers (services) implement business logic
 * - The @Module decorator configures how NestJS should assemble the module
 */
@Module({
  controllers: [TodoController], // Register the TodoController to handle HTTP requests
  providers: [TodoService], // Register the TodoService as a provider
})
export class TodoModule {}
