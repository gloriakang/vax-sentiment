## 1_network_df

- Takes the outputted gml files generated from the python script (first run)
- Calculates network statistics for each article's .gml file as directed network, EXCEPT for connected components and greatest component -- for these two I converted the directed MultiDiGraphs to undirected
- Ignore rest of notebook.
- 'network_data' contains all articles
- Saves 'network_data' as: 'network_df.csv'

---
## 2_node_df

**Change:**
gml_files = glob('../output_join/article_pos1.gml')
To: gml_files = glob('../output/network/article_pos1.gml')

**Comment out:**
combined_df.to_csv('neg1_df.csv', encoding = 'utf-8')

**Change:**
where output files are saved; save to '../output/df'

- Takes outputted gml files generated from the python script (second run: after merging all articles)
- Prints all node labels, degrees, and centrality values for ONE sentiment at a time
- Need to run for all 3 sentiment networks:
  - positive: article_neg1.gml
  - neutral: article_neu1.gml
  - positive: article_pos1.gml
- Prints 'combined_df': generic table of node labels, degree, centrality values; then saves each sentiment as (temp):
  - neg_node_df = 'negative_node_df.csv'
  - pos_node_df = 'postive_node_df.csv'
  - neu_node_df = 'netural_node_df.csv'

---
## 3_make_union

- Saves output: MultiDiGraph (and undirected DiGraphs); these files are in jupyter_nbs
  - 'positive_all.gml' (positive_uall.gml)
  - 'negative_all.gml' (negative_uall.gml)
  - 'neutral_all.gml' (neutral_uall.gml)

---
## 4_network_union_df

Calculates network averages for sentiment-level graph.
(n nodes, n edges, avg degree, density, avg deg cent, avg bet cent, avg clo cent, highest degc, highest betc, highest cloc, avg node connect, deg assort coeff, avg in-deg, avg out-deg, n strong comp, n weak comp, n conn comp, Gc size)

- Saves network_data to 'network_union_df.csv' (temp)?
- Final output is renamed in output/df as:
  - 'network_df_negative.csv'
  - 'network_df_neutral.csv'
  - 'network_df_positive.csv'

---
## 5_node_union_df

- FINAL OUTPUT is renamed in '../output/df' as:
  - nodes_df_negative.csv
  - nodes_df_neutral.csv
  - nodes_df_positive.csv
- The final csv files contain all nodes, degrees, and centralities.

---
## start here:

0_Gc
6_sentiment_graph_calculation
7_negative_graph_calculation
7_positive_graph_calculation
8_single_calc_neg
8_single_calc_pos
9_draw
0_draw_cc
0_Gc_nodes
0_graph_negative
0_graph_neutral
0_graph_positive
