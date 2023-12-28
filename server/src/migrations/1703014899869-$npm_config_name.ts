import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1703014899869 implements MigrationInterface {
    name = ' $npmConfigName1703014899869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`meta_info\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`meta_info\``);
    }

}
