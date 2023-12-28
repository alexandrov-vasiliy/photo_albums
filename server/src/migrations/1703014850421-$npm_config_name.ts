import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1703014850421 implements MigrationInterface {
    name = ' $npmConfigName1703014850421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`album\` ADD \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`album\` ADD \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`album\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`album\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`created_at\``);
    }

}
