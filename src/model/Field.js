var Field = function(name)
{
  this.name = name;
  this.datatype = Field.NUMBER;
  this.format = Field.NUMBER_FORMAT;
  this.precision = 2;
  this.agg_type = Field.NO_AGGREGATION;
  this.agg_qty_field = null;
};

Field.NUMBER = '0';
Field.STRING = '1';
Field.CHOICE = '2';

Field.NO_AGGREGATION = '0';
Field.SUM_ANY_AGGREGATION = '1';

Field.NUMBER_FORMAT = '0';
Field.PERCENT_FORMAT = '1';
Field.SCIENTIFIC_FORMAT = '2';

Field.formatValue = function(field, value)
{
  if(field.datatype === Field.NUMBER)
  {
    if(field.format === Field.NUMBER_FORMAT)
    {
      return value.toFixed(field.precision);
    }
    else if(field.format === Field.PERCENT_FORMAT)
    {
      return (100.0 * value).toFixed(field.precision) + '%';
    }
    else if(field.format === Field.SCIENTIFIC_FORMAT)
    {
      return Number(value).toExponential(field.precision);
    }
  }
  else if(field.datatype === Field.STRING)
  {
    return value;
  } 
  else if(field.datatype === Field.CHOICE)
  {
    //TODO: implement
  }      
};  