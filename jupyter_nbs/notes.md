# Final results.

## 00_Gc_negative; 00_Gc_neutral; 00_Gc_positive
1. Loads sentiment network graph file: *"article_neg1.gml"*
- Table of all nodes labels, degrees, and centralities: *"nodes_df_negative.csv"*
- Draws component subgraphs from directed and undirected representations of the network
- Prints sizes for all connected components
- Note: the difference in average degree (undirected) and average in/out degree (directed)
- Prints greatest component (Gc) info
- Saves Gc as graph files: *"d_Gc_negative.gml"* and *"u_Gc_negative.gml"*

1. Loads greatest component network graph file: *"d_Gc_negative.gml"*
- Calculates network-wide statistics for Gc: saves as *"Gc_df_neg.csv"*
- Calculates minimum node and edge cuts with given source and target node; prints edge labels
- Prints table of betweenness, closeness, and degree centrality





------------------------------------------------
# Second half.
## 6_sentiment_graph_calculation

- Takes all article networks and composes new graph by identifying nodes common to both.
- nx.compose_all() creates:
  - positive_all.gml (positive_uall.gml)
  - negative_all.gml (negative_uall.gml)
  - neutral_all.gml (neutral_uall.gml)
- But did I even use these composed graphs??

- Manually combine article csv files into sentiment-level csv file
  - article_neg1.csv; article_neu1.csv; article_pos1.csv
- Run python script to convert into gmls:
  - article_neg1.gml; article_neu1.gml; article_pos1.gml


---
## 7_negative_graph_calculation; 7_positive_graph_calculation
- Template from 6_sentiment_graph



---

- Final in output/df as:
  - 'network_df_negative.csv'
  - 'network_df_neutral.csv'
  - 'network_df_positive.csv'


---
## 8_single_calc_neg; 8_single_calc_pos



---
## 9_draw



---
## 0_draw_cc



---
## 0_Gc
This is a template for all analysis on greatest component graphs.



---
## 0_Gc_nodes




---
## 0_graph_negative; 0_graph_neutral; 0_graph_positive









-----------------------------------------------------
# First half.
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

- Saves network_data to 'network_union_df.csv' (temp)

---
## 5_node_union_df

- FINAL OUTPUT is renamed? in '../output/df' as:
  - nodes_df_negative.csv
  - nodes_df_neutral.csv
  - nodes_df_positive.csv
- The final csv files contain all nodes, degrees, and centralities.
