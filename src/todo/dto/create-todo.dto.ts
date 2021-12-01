import { BaseTodoDto } from "./base-todo.dto";
import { ApiProperty, ApiBody} from '@nestjs/swagger';

export class CreateTodoDto extends BaseTodoDto {}