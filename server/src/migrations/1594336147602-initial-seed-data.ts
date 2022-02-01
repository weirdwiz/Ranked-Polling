import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialSeedData1594336147602 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(``)}
}
