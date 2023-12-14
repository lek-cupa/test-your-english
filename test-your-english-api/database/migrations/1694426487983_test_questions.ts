import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TestQuestions extends BaseSchema {
  protected tableName = 'test_questions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id');
      table.string('question').notNullable();
      table.json('choices').notNullable();
      table.string('answer').notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
