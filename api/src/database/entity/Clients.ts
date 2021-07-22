import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Clients {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column({type: 'date'})
    createdAt: Date;

    @Column({type: 'date'})
    updatedAt: Date;

}