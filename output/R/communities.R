# igraph and community detection
rm(list = ls(all.names = TRUE))

library(igraph)

# load full networks
posf <- read_graph("output/network/article_u_pos.gml", "gml")
negf <- read_graph("output/network/article_u_neg.gml", "gml")
neuf <- read_graph("output/network/article_u_neu.gml", "gml")

# load greatest components
pos <- read_graph("output/network/u_Gc_positive2.gml", "gml")
neg <- read_graph("output/network/u_Gc_negative2.gml", "gml")
neu <- read_graph("output/network/u_Gc_neutral2.gml", "gml")


# set network to analyze
#net <- pos
#net <- neg
#net <- neu

# examine igraph object
class(net)
V(net) # nodes
E(net)  # edges
net[]  # network matrix
plot(net)  # plot network

#nodes <- as_data_frame(net, what = "vertices")  # save node labels
#edges <- as_data_frame(net, what = "edges")  # save edge labels

# modify network data
E(net)$label <- NA  # remove edge labels
V(net)$label  # print node labels

head(V(net)$label)  # check head of node labels
head(nodes)  # double-check head of node labels

# set network graph layout for plot
layout1 <- layout_on_sphere(net)
layout2 <- layout_with_fr(net)

# plot
plot(net, layout = layout2, vertex.label.color = "black", vertex.size = 5,
     vertex.label.cex = .7, vertex.label.font = 1)


##########
## community detection algorithms aim to detect groups that consist of densely connected nodes with fewer connections across groups.

# examine communities
#class(ceb)
#length(ceb)  # number of communities
#sizes(ceb)  # number of members per communitity
#membership(ceb)  # community membership for each node
#communities(ceb) # list of communities, each identified by their vertices
#modularity(ceb)  # how modular the graph partitioning is (modularity score)


## set network to analyze: FULL NETWORKS
## community detection based on edge betweenness (Newman-Girvan)
ceb_posf <- cluster_edge_betweenness(posf)
ceb_negf <- cluster_edge_betweenness(negf)
ceb_neuf <- cluster_edge_betweenness(neuf)

## number of communities
length(ceb_posf)
length(ceb_negf)
length(ceb_neuf)

## modularity
modularity(ceb_posf)
modularity(ceb_negf)
modularity(ceb_neuf)


#####

# how to change ID numbers to node labels? then run cluster_edge_betweenness
V(pos)$label
View(as_data_frame(pos, what = "vertices"))

## set network to analyze: GREATEST COMPONENTS
## community detection based on edge betweenness (Newman-Girvan)
ceb_pos <- cluster_edge_betweenness(pos)
ceb_neg <- cluster_edge_betweenness(neg)
ceb_neu <- cluster_edge_betweenness(neu)

## number of communities
length(ceb_pos)
length(ceb_neg)
length(ceb_neu)

## record data: modularity
modularity(ceb_pos)
modularity(ceb_neg)
modularity(ceb_neu)


### High modularity for a partitioning reflects dense connections within communities and sparse connections across communities.


# plotting
#dendPlot(ceb, mode = "hclust")

# plot(ceb, net)
plot(ceb, net, layout = layout2, vertex.label.color = "black", vertex.size = 5,
     vertex.label.cex = .7, vertex.label.font = 1)


