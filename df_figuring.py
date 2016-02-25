
# coding: utf-8

# # network data
# 0. Network-wide statistics
# 1. Creates dataframe for network-level statistics
# 2. Writes to csv file
# 3. Calculation notes below


import networkx as nx
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import os
from glob import glob

gml_files = glob('../output/network/*/*.gml')


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



# create empty dataframe with columns
network_data_columns = ['name',
                    'sentiment',
                    '# nodes',
                    '# edges',
                    'avg degree',
                    'density',
                    'avg deg cent',
                    'avg bet cent',
                    'avg clo cent',
                    'highest degc',
                    'highest betc',
                    'highest cloc',
                    'avg in-deg',
                    'avg out-deg',
                    '# strong comp',
                    '# weak comp',
                    '# conn comp',
                    'avg node connect',
                    'deg assort coeff'
                    ]

network_data = pd.DataFrame(columns = network_data_columns)


# graph = directed, ugraph = undirected
for graph_num, gml_graph in enumerate(gml_files):
    graph = nx.read_gml(gml_graph)
    ugraph = graph.to_undirected() ## to undirected graph
    ## adding those missing edges back
    U = graph.to_undirected(reciprocal=True)
    e = U.edges()
    ugraph.add_edges_from(e)
    ##
    (filepath, filename) = os.path.split(gml_graph)
    print('-' * 40)
    print(gml_graph)
    calculate_graph_inf(graph)
    calculate_graph_inf(ugraph)

    # calculate variables
    sent = filepath.split('/')[-1]
    nodes = nx.number_of_nodes(graph)
    edges = nx.number_of_edges(graph)
    density = float("{0:.4f}".format(nx.density(graph)))
    avg_deg_cen = np.array(nx.degree_centrality(graph).values()).mean()
    avg_bet_cen = np.array(nx.betweenness_centrality(graph).values()).mean()
    avg_clo_cen = np.array(nx.closeness_centrality(graph).values()).mean()
    in_deg = sum(graph.in_degree().values())/float(nx.number_of_nodes(graph))
    out_deg = sum(graph.out_degree().values())/float(nx.number_of_nodes(graph))
    avg_deg = float("{0:.4f}".format(in_deg + out_deg))
    strong_comp = nx.number_strongly_connected_components(graph)
    weak_comp =  nx.number_weakly_connected_components(graph)
    avg_node_con = float("{0:.4f}".format((nx.average_node_connectivity(graph))))
    deg_assort_coeff = float("{0:.4f}".format((nx.degree_assortativity_coefficient(graph))))
    conn_comp = nx.number_connected_components(ugraph)
    deg_cen = nx.degree_centrality(graph)
    bet_cen = nx.betweenness_centrality(graph)
    clo_cen = nx.closeness_centrality(graph)
    highest_deg_cen = highest_centrality(deg_cen)
    highest_bet_cen = highest_centrality(bet_cen)
    highest_clo_cen = highest_centrality(clo_cen)

    # save variables into list
    graph_values = {'name':filename,
                    'sentiment':sent,
                    '# nodes':nodes,
                    '# edges':edges,
                    'avg degree':avg_deg,
                    'density':density,
                    'avg deg cent':"%.4f" % avg_deg_cen,
                    'avg bet cent':"%.4f" % avg_bet_cen,
                    'avg clo cent':"%.4f" % avg_clo_cen,
                    'highest degc':highest_deg_cen,
                    'highest betc':highest_bet_cen,
                    'highest cloc':highest_clo_cen,
                    'avg in-deg':"%.4f" % in_deg,
                    'avg out-deg':"%.4f" % out_deg,
                    '# strong comp':strong_comp,
                    '# weak comp':weak_comp,
                    '# conn comp':conn_comp,
                    'avg node connect':avg_node_con,
                    'deg assort coeff':deg_assort_coeff
                    }
    
    network_data = network_data.append(graph_values, ignore_index=True)
    
    if graph_num == 0:
        break


# In[5]:

#network_data


# In[6]:

# save dataframe to csv
# network_data.to_csv('', encoding = 'utf-8')

