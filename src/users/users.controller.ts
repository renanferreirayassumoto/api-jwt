import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @HttpCode(204)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
