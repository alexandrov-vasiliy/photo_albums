import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1703015218812 implements MigrationInterface {
    name = ' $npmConfigName1703015218812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`photo\` CHANGE \`filePath\` \`filePath\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`photo\` CHANGE \`meta_info\` \`meta_info\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`album\` CHANGE \`preview\` \`preview\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`album\` CHANGE \`preview\` \`preview\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`photo\` CHANGE \`meta_info\` \`meta_info\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`photo\` CHANGE \`filePath\` \`filePath\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`photo\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
    }

}
