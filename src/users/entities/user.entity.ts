import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number

    @Column()
    user_name: string

    @Column()
    user_surname: string
}
