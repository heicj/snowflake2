# snowflake2
Uses P5.js library and html canvas

Based on my repo https://github.com/heicj/kochSnowflake

Image is drawn using an "initiator" and a "generator."  The initiator is changed into a generator shape.

Drawing a recursive image, this time starting with a square where each side is a segment and acts as the initiator.
Each segment for each generation is then converted to a generator image where each part is itself an initiator.  
So the top line of the square turns into "__|--|__"  (not acurate depiction, dash lines would be top section connecting sides) where each
part is a line that acts as initiator for each generation.

JPGs of first four generations of drawing are in repo.

Coding Train YouTube videos inspired my origin kochSnowflake design which I used to create this.

Coding Train: https://youtu.be/X8bXDKqMsXE and https://youtu.be/_BOtJncHCVA
