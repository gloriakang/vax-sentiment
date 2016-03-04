
# coding: utf-8

# # single network graph

# In[1]:

import networkx as nx
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
get_ipython().magic(u'matplotlib inline')
import os
from glob import glob


#gml_files = glob('../output/network/*/*.gml')

graph = nx.read_gml('../output/network/negative/article1.gml')
ugraph = graph.to_undirected()

## adding back missing edges
U = graph.to_undirected(reciprocal=True)
e = U.edges()
ugraph.add_edges_from(e)

print nx.info(graph)
print nx.info(ugraph)


# In[2]:

def calculate_graph_inf(graph):
    graph.name = filename
    info = nx.info(graph)
    print info
    ## plot spring layout
    # plt.figure(figsize=(10,10))
    # nx.draw_spring(graph, arrows=True, with_labels=True)

def highest_centrality(cent_dict):
    """Returns a tuple (node,value) with the node
    with largest value from centrality dictionary."""
    # create ordered tuple of centrality data
    cent_items = [(b,a) for (a,b) in cent_dict.iteritems()]
    # sort in descending order
    cent_items.sort()
    cent_items.reverse()
    return tuple(reversed(cent_items[0]))

# - - -

# degree histogram: returns a list of frequencies of degree values
nx.degree_histogram(graph)


# In[ ]:

# degree centrality

a = nx.degree_centrality(graph)
dfIn=pd.DataFrame.from_dict(a,orient='index')
dfIn.columns = ['degree centrality']
dfIn = dfIn.sort_values(by=['degree centrality'])
dfIn


# In[ ]:

# betweenness centrality

a = nx.betweenness_centrality(graph)
dfIn=pd.DataFrame.from_dict(a,orient='index')
dfIn.columns = ['betweenness centrality']
dfIn = dfIn.sort_values(by=['betweenness centrality'])
dfIn


# In[ ]:

# closeness centrality

a = nx.closeness_centrality(graph)
dfIn=pd.DataFrame.from_dict(a,orient='index')
dfIn.columns = ['closeness centrality']
dfIn = dfIn.sort_values(by=['closeness centrality'])
dfIn


# In[ ]:

# in degree centrality
a = nx.in_degree_centrality(graph)
dfIn=pd.DataFrame.from_dict(a,orient='index')
dfIn.columns = ['in deg centrality']
dfIn = dfIn.sort_values(by=['in deg centrality'])
dfIn


# In[ ]:

# out degree centrality
b = nx.out_degree_centrality(graph)
dfIn=pd.DataFrame.from_dict(b,orient='index')
dfIn.columns = ['out deg centrality']
dfIn = dfIn.sort_values(by=['out deg centrality'])
dfIn


# - - -

# In[ ]:

# current-flow betweenness centrality (graph must be connected; run for largest component)
#nx.current_flow_betweenness_centrality(graph)

# eigenvector centrality

# degree assortativity coefficient
# average neighbor degree; average degree connectivity (k nearest neighbors)

#nx.edge_connectivity(graph)
#nx.node_connectivity(graph)

# clustering coefficient (cannot be multigraph)
# nx.average_clustering(graph)

# ## Connected components of a graph





# In[ ]:

#for cc in nx.connected_component_subgraphs(ugraph):
#    print cc, " has ", len(cc.nodes()), " nodes."
