# Network files

Network directory contains finalized graph files.
- UNDIRECTED graph; FULL sentiment network
  - u_neg.gml, u_neu.gml, u_pos.gml

- UNDIRECTED GREATEST COMPONENT of sentiment network
  - u_Gc_negative.gml, u_Gc_neutral.gml, u_Gc_positive.gml


- DIRECTED graph; FULL sentiment network
  - article_neg1.gml, article_neu1.gml, article_pos1.gml

- DIRECTED GREATEST COMPONENT of sentiment network
  - d_Gc_negative.gml, d_Gc_neutral.gml, d_Gc_positive.gml


Sub-folders contain: individual network graphs for negative, neutral, and positive sentiment; 'raw_networks' contains the original, UNEDITED joined/union network graphs (so, the merged network data prior to data cleaning); and lastly, pajek formatted (.net) graph files for the full, DIRECTED sentiment networks.
