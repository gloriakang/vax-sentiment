# Clean plots

rm(list = ls(all.names = TRUE))
library(ggplot2)
library(ggrepel)
library(gridExtra)

# data
central_df = read.csv("output/R/central-nodes.csv")

## plot 1: 3 centrality measures [2stdev+mean]
plot1 <- ggplot(central_df[central_df$plot1 == "Y", ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.3) +
  ggtitle("Nodes by degree, betweenness, and closeness centrality") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") +
  labs(size = "Degree centrality") +
  scale_size_continuous(range = c(-5,15))

# normal text
plot1 + geom_text(aes(label = node), size = 4, position = "jitter", alpha = 0.9, hjust = "inward")
# text repel
plot1 + geom_text_repel(aes(label = node), point.padding = NA, size = 4, alpha = 0.9)




# facet




