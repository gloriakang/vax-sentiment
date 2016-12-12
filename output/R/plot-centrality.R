# Plot centrality

rm(list = ls(all.names = TRUE))
library(ggplot2)
library(ggrepel)
library(gridExtra)

df = read.csv("output/R/all-nodes.csv")

# subset by degree > 25
a1 <- ggplot(df[df$degree > 25, ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.4) +
  geom_text(aes(label = node), size = 4.5, position = "jitter", alpha = 0.9, hjust = "inward") +
  ggtitle("node centrality for positive and negative \nsentiment networks") + 
  xlab("betweenness centrality") + ylab("closeness centrality") + labs(size = "degree centrality") +
  scale_size_continuous(range = c(-1,20))

# scales free, facet
a2 <- ggplot(df, aes(clo.cent, bet.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.3) +
  geom_text(aes(label = node), position = "jitter", alpha = 0.7, hjust = "inward") +
  ggtitle("node centrality measures for \nnegative, neutral, and positive sentiment networks") +
  xlab("betweenness centrality") + ylab("closeness centrality") + labs(size = "degree centrality") +
  scale_size_continuous(range = c(0,10)) +
  facet_wrap(~sentiment, scales = "free")


## subset node data
central_df = read.csv("output/R/central-nodes.csv")

# top 10 eigenvector
a3 <- ggplot(central_df[central_df$central == "Y", ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.4) +
  geom_text(aes(label = node), size = 4, position = "jitter", alpha = 0.9, hjust = "inward") +
  ggtitle("Top 10 eigenvector centrality scores") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") + labs(size = "Degree centrality") +
  scale_size_continuous(range = c(0,15))




## plot deg, bet, close centrality [2stdev+mean]
plot1<- ggplot(central_df[central_df$plot1 == "Y", ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.3) +
  geom_text(aes(label = node), size = 4, position = "jitter", alpha = 0.9, hjust = "inward") +
  ggtitle("Nodes by degree, betweenness, and closeness centrality") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") + labs(size = "Degree centrality") +
  scale_size_continuous(range = c(-5,15))
plot1

## probably split into subfigures instead of doing this
plot<- ggplot(central_df[central_df$plot1 == "Y", ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.3) +
  geom_text_repel(aes(label = node), point.padding = NA, size = 4, position = "jitter", alpha = 0.9, hjust = "inward") +
  ggtitle("Nodes by degree, betweenness, and closeness centrality") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") + labs(size = "Degree centrality") +
  scale_size_continuous(range = c(-5,15))
plot




#plot2 <- ggplot(central_df[central_df$plot2 == "Y", ], aes(sentiment, eigen.cent, color = sentiment, size = eigen.cent)) +
#  geom_point(position = "jitter", alpha = 0.3) +
#  geom_text(aes(label = node), size = 4, position = "jitter", alpha = 0.9) +
#  ggtitle("Nodes by eigenvector centrality") +
#  xlab("Sentiment") + ylab("Eigenvector centrality score") +
#  scale_size_continuous(range = c(0,15))
#plot2

## plot eigenvector centrality
plot2 <- ggplot(central_df[central_df$plot2 == "Y", ], aes(sentiment, eigen.cent, color = sentiment, size = eigen.cent)) +
  geom_point(alpha = 0.3) +
  geom_text(aes(label = node), size = 4, alpha = 0.9, check_overlap = TRUE) +
  ggtitle("Nodes by eigenvector centrality") +
  xlab("Sentiment") + ylab("Eigenvector centrality score") +
  scale_size_continuous(range = c(0,15))
plot2

plot <- ggplot(central_df[central_df$plot2 == "Y",], aes(sentiment, eigen.cent, color = sentiment, size = eigen.cent)) +
  geom_point(alpha = 0.3) +
  geom_text_repel(aes(label = node), point.padding = NA, size = 4, alpha = 0.9) +
  ggtitle("Nodes by eigenvector centrality") +
  xlab("Sentiment") + ylab("Eigenvector centrality score") +
  scale_size_continuous(range = c(0,15))
plot



#grid.arrange(plot1, plot2, ncol=1)




