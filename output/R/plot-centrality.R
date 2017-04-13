# Plot centrality

rm(list = ls(all.names = TRUE))
library(ggplot2)
library(ggrepel)
library(gridExtra)

df = read.csv("~/git/vax-sentiment/output/R/all-nodes.csv")

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
central_df = read.csv("~/git/vax-sentiment/output/R/central-nodes.csv")

# top 10 eigenvector: 3 centrality measures; without facet
a3 <- ggplot(central_df[central_df$central == "Y", ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.4) +
  geom_text(aes(label = node), size = 4, position = "jitter", alpha = 0.9, hjust = "inward") +
  ggtitle("Top 10 eigenvector centrality scores") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") + labs(size = "Degree centrality") +
  scale_size_continuous(range = c(0,15))
a3


### plot1: 3 centrality measures [2stdev+mean] original
plot1<- ggplot(central_df[central_df$plot1 == "Y", ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.3) +
  geom_text(aes(label = node), size = 4, position = "jitter", alpha = 0.9, hjust = "inward") +
  ggtitle("Nodes by degree, betweenness, and closeness centrality") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") + labs(size = "Degree centrality") +
  scale_size_continuous(range = c(-5,15))
plot1
# plot1 with facet
plot1 + facet_wrap(~sentiment, scales = "free")
plot1 + facet_wrap(~sentiment)


# plot1 with text_repel; probably split into subfigures instead of doing this
p1 <- ggplot(central_df[central_df$plot1 == "Y", ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.3) +
  geom_text_repel(aes(label = node), point.padding = NA, size = 4, alpha = 0.9) +
  ggtitle("Nodes by degree, betweenness, and closeness centrality") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") + labs(size = "Degree centrality") +
  scale_size_continuous(range = c(-5,15))


# -------------------------------------------- #
central_df$sentiment_f <- factor(central_df$sentiment, levels=c('positive', 'negative', 'neutral'))
### plot1 with facet
p2 <- ggplot(central_df[central_df$plot1 == "Y", ], aes(bet.cent, clo.cent, color = sentiment_f, size = deg.cent)) +
  theme_minimal()+
  geom_point(position = "jitter", alpha = 0.3) +
  ggtitle("Nodes by degree, betweenness, and closeness centrality") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") + labs(size = "Degree centrality") +
  scale_size_continuous(range = c(0,15)) +
  scale_color_manual(values = c('#1b9e77', '#d95f02', '#7570b3')) +
  guides(color=FALSE) +
  facet_wrap(~sentiment_f, scales="free")
# no labels
p2

# normal text ** currently in document **
p2 + geom_text(aes(label = node), size = 3, position = "jitter", alpha = 0.9, hjust = "inward")
# text repel
p2 + geom_text_repel(aes(label = node), point.padding = NA, size = 3.5, alpha = 0.9)


## alternate: scales free ** currently in document **
p2 + facet_wrap(~sentiment, scales = "free") + 
  geom_text(aes(label = node), size = 3.5, position = "jitter", alpha = 0.9, hjust = "inward")

# text repel
p2 + facet_wrap(~sentiment, scales = "free") + 
  geom_text_repel(aes(label = node), point.padding = NA, size = 3.5, alpha = 0.9)
# ------------



### plot2: eigenvector centrality [2stdev+mean] original; check_overlap
plot2 <- ggplot(central_df[central_df$plot2 == "Y", ], aes(sentiment, eigen.cent, color = sentiment, size = eigen.cent)) +
  geom_point(alpha = 0.3) +
  geom_text(aes(label = node), size = 3.5, alpha = 0.9, check_overlap = TRUE) +
  ggtitle("Nodes by eigenvector centrality") +
  xlab("Sentiment") + ylab("Eigenvector centrality score") +
  scale_size_continuous(range = c(0,15))
plot2

# plot2
plot <- ggplot(central_df[central_df$plot2 == "Y",], aes(sentiment, eigen.cent, color = sentiment, size = eigen.cent)) +
  geom_point(alpha = 0.3) +
  ggtitle("Nodes by eigenvector centrality") +
  xlab("Sentiment") + ylab("Eigenvector centrality score") +
  scale_size_continuous(range = c(0,15))
plot



#grid.arrange(plot1, plot2, ncol=1)




