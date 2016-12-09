# Plot centrality

rm(list = ls(all.names = TRUE))
library(ggplot2)
library(gridExtra)

df = read.csv("output/R/all-nodes.csv")

# subset by degree
a1 <- ggplot(df[df$degree > 25, ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.4) +
  geom_text(aes(label = node), size = 4.5, position = "jitter", alpha = 0.9, hjust = "inward") +
  ggtitle("node centrality for positive and negative \nsentiment networks") + 
  xlab("betweenness centrality") + ylab("closeness centrality") + labs(size = "degree centrality") +
  scale_size_continuous(range = c(-1,20))
a1

# scales free facet with labels
a2 <- ggplot(df, aes(clo.cent, bet.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.3) +
  geom_text(aes(label = node), position = "jitter", alpha = 0.7, hjust = "inward") +
  ggtitle("Node centrality measures for \nnegative, neutral, and positive sentiment networks") +
  xlab("betweenness centrality") + ylab("closeness centrality") + labs(size = "degree centrality") +
  scale_size_continuous(range = c(0,10)) +
  facet_wrap(~sentiment, scales = "free")

grid.arrange(a1, a2, ncol=1)


## subset node data

# top 25 by eigenvector centrality
central_df = read.csv("output/R/central-nodes.csv")

# Greatest node centrality for positive and negative networks
plot1 <- ggplot(central_df[central_df$central == "Y", ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.4) +
  geom_text(aes(label = node), size = 4, position = "jitter", alpha = 0.9, hjust = "inward") +
  ggtitle("Top 10 eigenvector centrality scores") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") + labs(size = "Degree centrality") +
  scale_size_continuous(range = c(0,15))
plot1





