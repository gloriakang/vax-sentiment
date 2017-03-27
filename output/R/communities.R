# igraph
rm(list = ls(all.names = TRUE))

library(igraph)

pos <- read_graph("output/network/u_Gc_positive2.gml", "gml")
neg <- read_graph("output/network/u_Gc_negative2.gml", "gml")
neu <- read_graph("output/network/u_Gc_neutral2.gml", "gml")

#net <- pos
#net <- neg
net <- neu


class(net)
V(net) # nodes
E(net)  # edges
net[]  # network matrix
plot(net)  # plot network

nodes <- as_data_frame(net, what = "vertices")  # save node labels
edges <- as_data_frame(net, what = "edges")  # save edge labels

E(net)$label <- NA  # remove edge labels
V(net)$label  # print node labels

head(V(net)$label)  # check head of node labels
head(nodes)  # double-check head of node labels



# layouts
layout1 <- layout_on_sphere(net)
layout2 <- layout_with_fr(net)

# plot
plot(net, layout = layout2, vertex.label.color = "black",
     vertex.size = 5, vertex.label.cex = .7, vertex.label.font = 1)


## community detection algorithms aim to detect groups that consist of densely connected nodes with fewer connections across groups.

# community detection based on edge betweenness (Newman-Girvan)
ceb <- cluster_edge_betweenness(net)

dendPlot(ceb, mode = "hclust")

# plot(ceb, net)
plot(ceb, net, layout = layout2, vertex.label.color = "black",
     vertex.size = 5, vertex.label.cex = .7, vertex.label.font = 1)

class(ceb)
length(ceb)  # number of communities
sizes(ceb)  # number of members per communitity
membership(ceb)  # community membership for each node
communities(ceb) # list of communities, each identified by their vertices
modularity(ceb)  # how modular the graph partitioning is (modularity score)


# High modularity for a partitioning reflects dense connections within communities and sparse connections across communities.



