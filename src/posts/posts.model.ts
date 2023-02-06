import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import * as cluster from "cluster";
import {User} from "../users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    image: string;
}

@Table({tableName: "posts"})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: 1, description: "Unique ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "This post about Cars", description: "This is a Post"})
    @Column({type: DataType.STRING})
    title: string;

    @ApiProperty({example: "Some content about o.g. animals", description: "This is a content"})
    @Column({type: DataType.STRING})
    content: string;

    @ApiProperty({example: "123123124341.jpg", description: "hear will be image"})
    @Column({type: DataType.STRING})
    image: string;

    @ApiProperty({example: "2", description: "User ID"})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User
}