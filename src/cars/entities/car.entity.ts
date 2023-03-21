import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    driver_id: number;
}
