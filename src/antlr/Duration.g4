grammar Duration;

// GRAMMAR
parseDuration
  : durationStatement EOF
  | durationExpression EOF
  ;

durationExpression
  : durationTerm durationExpressionTail*
  ;

durationExpressionTail
  : (ADD | SUB) durationExpression
  ;

durationTerm
  : durationFactor durationTermTail*
  ;

durationTermTail
  : (MUL | DIV) valueStatement
  ;

durationFactor
  : durationStatement
  | LP durationExpression RP
  ;

durationStatement
  : weeksStatement? daysStatement? hoursStatement? minutesStatement? secondsStatement? millisecondsStatement?
  ;

weeksStatement
  : NUMBER WEEK
  ;

daysStatement
  : NUMBER DAY
  ;

hoursStatement
  : NUMBER HOUR
  ;

minutesStatement
  : NUMBER MINUTE
  ;

secondsStatement
  : NUMBER SECOND
  ;

millisecondsStatement
  : NUMBER MILLISECONDS
  ;

valueStatement
  : NUMBER
  ;

// LEXER
ADD:            [+];
SUB:            [-];
MUL:            [*];
DIV:            [/];
LP:             [(];
RP:             [)];
WEEK:           [w];
DAY:            [d];
HOUR:           [h];
MINUTE:         [m];
SECOND:         [s];
MILLISECONDS:   'ms';
NUMBER:         [0-9]+ ('.' [0-9]*)?;
WS:             [ \t\r\n]+ -> skip;
