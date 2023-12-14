import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TestQuestion extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public question: string

  @column()
  private _choices: string

  public get choices(): string[] {
      return JSON.parse(this._choices)
  }

  public set choices(value: string[]) {
    
    this._choices = JSON.stringify(value)
  }

  @column()
  public answer: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
