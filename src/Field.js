var Field = function(name)
{
  this.name = name;
  this.datatype = Field.NUMBER;
  this.format = Field.NUMBER_FORMAT;
  this.precision = '0.00';
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