import { tableIfc } from '../modules/DbModule';
import { properties_schema_table, properties_schema } from './properties.schema';

export const sysTables: tableIfc[] = [
  {
    name: properties_schema_table,
    schema: properties_schema
  }
];
