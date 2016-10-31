# plots for betweenness, closeness, and degree centrality

rm(list = ls(all.names = TRUE))
library(ggplot2)

# read data
u_Gc_nodes_neg2 = read.csv("output/df/final_undirected/u_Gc_nodes_neg2.csv")
u_Gc_nodes_neu2 = read.csv("output/df/final_undirected/u_Gc_nodes_neu2.csv")
u_Gc_nodes_pos2 = read.csv("output/df/final_undirected/u_Gc_nodes_pos2.csv")

# multiplot function
multiplot <- function(..., plotlist=NULL, file, cols=1, layout=NULL) {
  library(grid)

  # Make a list from the ... arguments and plotlist
  plots <- c(list(...), plotlist)
  numPlots = length(plots)

  # If layout is NULL, then use 'cols' to determine layout
  if (is.null(layout)) {
    # Make the panel
    # ncol: Number of columns of plots
    # nrow: Number of rows needed, calculated from # of cols
    layout <- matrix(seq(1, cols * ceiling(numPlots/cols)),
                     ncol = cols, nrow = ceiling(numPlots/cols))
  }

  if (numPlots==1) {
    print(plots[[1]])

  } else {
    # Set up the page
    grid.newpage()
    pushViewport(viewport(layout = grid.layout(nrow(layout), ncol(layout))))

    # Make each plot, in the correct location
    for (i in 1:numPlots) {
      # Get the i,j matrix positions of the regions that contain this subplot
      matchidx <- as.data.frame(which(layout == i, arr.ind = TRUE))

      print(plots[[i]], vp = viewport(layout.pos.row = matchidx$row,
                                      layout.pos.col = matchidx$col))
    }
  }
}


# positive
a <- ggplot(u_Gc_nodes_pos2, mapping = aes(bet.cent, clo.cent, size = deg.cent, color = deg.cent)) +
  geom_point(alpha=0.5, position = "jitter") +
  geom_text(aes(label = node), alpha=0.9, hjust="inward") +
  ggtitle("Positive Sentiment")
a <- a + scale_size(range = c(0,5))
a

# negative
b <- ggplot(u_Gc_nodes_neg2, mapping = aes(bet.cent, clo.cent, size = deg.cent, color = deg.cent)) +
  geom_point(alpha=0.5) + geom_text(aes(label = node), alpha = 0.9, hjust = "inward") + 
  ggtitle("Negative Sentiment")
b <- b + scale_size(range = c(0,10))
b

# neutral
c <- ggplot(u_Gc_nodes_neu2, mapping = aes(bet.cent, clo.cent, size = deg.cent, color = deg.cent)) +
  geom_point(alpha=0.5) + geom_text(aes(label = node), alpha = 0.9, hjust="inward") + 
  ggtitle("Neutral Sentiment")
c <- c + scale_size(range = c(0,10))
c

multiplot(a,b,c)


##############################
# single plot

df = read.csv("output/R/all-nodes.csv")

# Greatest node centrality values with labels for positive and negative networks
d <- ggplot(df, aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  xlim(0.05, 0.35) + ylim(0.3, NA) +
  geom_point(position = "jitter", alpha = 0.4) +
  geom_text(aes(label = node), size = 4.5, position = "jitter", alpha = 1, hjust = "inward") +
  ggtitle("Top node centrality values \nfor positive and negative sentiment networks") + 
  xlab("betweenness") + ylab("closeness") + labs(size = "degree centrality") +
  scale_size_continuous(range = c(0,15))
d


# scales free facet with labels
f <- ggplot(df, aes(clo.cent, bet.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.3) +
  geom_text(aes(label = node), position = "jitter", alpha = 0.7, hjust = "inward") +
  ggtitle("Node centrality measures for \nnegative, neutral, and positive sentiment networks") +
  xlab("betweenness") + ylab("closeness") + labs(size = "degree centrality") +
  scale_size_continuous(range = c(0,10)) +
  facet_wrap(~sentiment, scales = "free")
f





# a = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = bet.cent, x = deg.cent)) + geom_text(aes(label = node)) + geom_jitter()
# violin multiplot
# a = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = clo.cent, x = bet.cent, fill = degree)) + geom_violin()
# box plots
# a = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = bet.cent, x = sentiment, fill = sentiment)) + geom_boxplot() + coord_flip()
