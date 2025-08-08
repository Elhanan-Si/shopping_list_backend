import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Item } from "src/items/entities/item.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ nullable: true })
    google_id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

    @OneToMany(() => Item, (item) => item.user)
    items: Item[];
}
