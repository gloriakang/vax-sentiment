# igraph and community detection
rm(list = ls(all.names = TRUE))

library(igraph)

add_communities_to_df <- function(id_label_df, communities){
  id_label_df$community <- NA
  
  for(i in 1:length(communities)){
    # print(i)
    com <-communities[[i]]
    # print(com)
    id_label_df[id_label_df$id %in% com, 'community'] <- i
  }
  return(id_label_df)
}


# load full networks
#posf <- read_graph("output/network/article_u_pos.gml", "gml")
#negf <- read_graph("output/network/article_u_neg.gml", "gml")
#neuf <- read_graph("output/network/article_u_neu.gml", "gml")

# load greatest components
pos <- read_graph("output/network/u_Gc_positive2.gml", format = "gml")
neg <- read_graph("output/network/u_Gc_negative2.gml", format = "gml")
neu <- read_graph("output/network/u_Gc_neutral2.gml", format = "gml")

# to read labels:
V(pos)
V(pos)$label
as_data_frame(pos, what = "vertices")

## to examine igraph object:
#class(net)
#V(net)  # nodes
#E(net)  # edges
#net[]  # network matrix
#plot(net)  # plot network

#nodes <- as_data_frame(net, what = "vertices")  # save node labels
#edges <- as_data_frame(net, what = "edges")  # save edge labels

## modify network data
#E(net)$label <- NA  # remove edge labels
#V(net)$label  # print node labels

#head(V(net)$label)  # check head of node labels
#head(nodes)  # double-check head of node labels

## set network graph layout for plot
#layout1 <- layout_on_sphere(net)
#layout2 <- layout_with_fr(net)

#plot(net, layout = layout2, vertex.label.color = "black", vertex.size = 5, vertex.label.cex = .7, vertex.label.font = 1)


####################
## community detection algorithms aim to detect groups that consist of densely connected nodes with fewer connections across groups
####################

## community detection based on edge betweenness (Newman-Girvan)
ceb_pos <- cluster_edge_betweenness(pos)
ceb_neg <- cluster_edge_betweenness(neg)
ceb_neu <- cluster_edge_betweenness(neu)

## to examine communities:
# class(ceb)
# length(ceb)  # number of communities
# sizes(ceb)  # number of members per communitity
# membership(ceb)  # community membership for each node
# communities(ceb) # list of communities, each identified by their vertices
# modularity(ceb)  # how modular the graph partitioning is (modularity score)

## to view labels:
#V(pos)
#V(pos)$label
#View(as_data_frame(pos, what = "vertices"))



## number of communities
length(ceb_pos)
length(ceb_neg)
length(ceb_neu)

## modularity
## high modularity for a partitioning reflects dense connections within communities and sparse connections across communities
modularity(ceb_pos)
modularity(ceb_neg)
modularity(ceb_neu)

## communities
communities(ceb_pos)

## membership
membership(ceb_pos)


## communities
#pos_df <- as_data_frame(pos, what = "vertices")
pos_df <- data.frame('id' = as.character(V(pos)), 'label'=as.character(V(pos)$label))
pos_community <- communities(ceb_pos)
pos_df <- add_communities_to_df(pos_df, pos_community)
#write.csv(pos_df, "pos_comm.csv")

#neg_df <- as_data_frame(neg, what = "vertices")
neg_df <- data.frame('id' = as.character(V(neg)), 'label'=as.character(V(neg)$label))
neg_community <- communities(ceb_neg)
neg_df <- add_communities_to_df(neg_df, neg_community)
#write.csv(neg_df, "neg_comm.csv")

#neu_df <- as_data_frame(neu, what = "vertices")
neu_df <- data.frame('id' = as.character(V(neu)), 'label'=as.character(V(neu)$label))
neu_community <- communities(ceb_neu)
neu_df <- add_communities_to_df(neu_df, neu_community)
#write.csv(neu_df, "neu_comm.csv")


## plotting
#dendPlot(ceb, mode = "hclust")
# plot(ceb, net)
#plot(ceb, net, layout = layout2, vertex.label.color = "black", vertex.size = 5, vertex.label.cex = .7, vertex.label.font = 1)

