import { Injectable } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor (
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const item = this.itemRepository.create(createItemDto);
    return await this.itemRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find()
  }

  async findOne(id: string): Promise<Item | null> {
    return await this.itemRepository.findOne({ where: { id } });
  }

  async update(id: string, updateItemDto: UpdateItemDto): Promise<Item | null> {
    await this.itemRepository.update(id, updateItemDto);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.itemRepository.delete(id);
  }
}