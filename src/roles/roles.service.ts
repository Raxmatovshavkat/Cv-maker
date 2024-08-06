import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './entities/role.entity';
import { Model } from 'mongoose';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private readonly roleService: Model<Role>) { }
  async create(createRoleDto: CreateRoleDto) {
    return await new this.roleService(createRoleDto).save();
  }

  async findAll() {
    try {
      const roles = await this.roleService.find();
      if (!roles || roles.length === 0) {
        throw new NotFoundException('No roles found');
      }
      return roles;
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException();
    }
  }


  async findOne(id: string) {
    try {
      const role = await this.roleService.findById(id)
      if (!role) {
        throw new NotFoundException()
      }
      return role
    } catch (error) {
      console.log(error.message)
      throw new InternalServerErrorException()
    }
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    try {
      const role = await this.roleService.findById(id)
      if (!role) {
        throw new NotFoundException()
      }
      return role.updateOne(updateRoleDto)
    } catch (error) {
      console.log(error.message)
      throw new InternalServerErrorException()
    }
  }

  async remove(id: string): Promise<any> {
    try {
      const role = await this.roleService.findById(id)
      if (!role) {
        throw new NotFoundException()
      }
      return role.deleteOne()
    } catch (error) {
      console.log(error.message)
      throw new InternalServerErrorException()
    }
  }
  async delete(id: string | any) {
    const role = await this.roleService.findById(id);
    if (!role) {
      throw new NotFoundException('role not found');
    }

    role.is_active = false;
    await this.roleService.updateOne(id, role)

    return { role: 'role status updated to false' };
  }
}
