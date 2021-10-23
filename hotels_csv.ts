import { Field, ObjectType } from "type-graphql";
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
@ObjectType()
export class hotels_csv extends BaseEntity{
    @Field(() => String)
    @Column()
    name: string;
    @Field(() => String)
    @Column()
    cuisines: string;
    @Field(() => String)
    @Column()
    featured_image: string;
    @Field(() => String)
    @PrimaryGeneratedColumn()
    id: string;
}