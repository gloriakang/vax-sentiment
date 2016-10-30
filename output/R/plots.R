# plots for betweenness, closeness, and degree centrality

rm(list = ls(all.names = TRUE))
library(ggplot2)

u_Gc_nodes_neg2 = read.csv("output/df/final_undirected/u_Gc_nodes_neg2.csv")
u_Gc_nodes_neu2 = read.csv("output/df/final_undirected/u_Gc_nodes_neu2.csv")
u_Gc_nodes_pos2 = read.csv("output/df/final_undirected/u_Gc_nodes_pos2.csv")


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
a <- ggplot(u_Gc_nodes_pos2, mapping = aes(bet.cent, clo.cent, color = deg.cent, size = deg.cent)) +
  geom_point(alpha=0.5) + geom_text(aes(label = node), alpha=0.9, hjust="inward") + ggtitle("Positive Sentiment")
a <- a + scale_size(range = c(0,10))
a

# negative
b <- ggplot(u_Gc_nodes_neg2, mapping = aes(bet.cent, clo.cent, size = deg.cent, color = deg.cent)) +
  geom_point(alpha=0.5) + geom_text(aes(label = node), alpha = 0.9, hjust = "inward") + ggtitle("Negative Sentiment")
b <- b + scale_size(range = c(0,10))

b
b + scale_x_log10() + scale_y_log10()


# neutral
c <- ggplot(u_Gc_nodes_neu2, mapping = aes(bet.cent, clo.cent, size = deg.cent, color = deg.cent)) +
  geom_point(alpha=0.5) + geom_text(aes(label = node), alpha = 0.9, hjust="inward") + ggtitle("Neutral Sentiment")
c <- c + scale_size(range = c(0,10))
c

multiplot(a,b,c)



# a = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = bet.cent, x = deg.cent)) + geom_text(aes(label = node)) + geom_jitter()
# b = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = clo.cent, x = deg.cent)) + geom_text(aes(label = node)) + geom_jitter()
# c = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = clo.cent, x = bet.cent)) + geom_text(aes(label = node)) + geom_jitter()
# multiplot(a,b,c)

# violin multiplot
# a = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = clo.cent, x = bet.cent, fill = degree)) + geom_violin()
# b = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = bet.cent, x = clo.cent, fill = deg.cent)) + geom_violin()
# multiplot(a,b)

# box plots
# a = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = bet.cent, x = sentiment, fill = sentiment)) + geom_boxplot() + coord_flip()
# b = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = deg.cent, x = sentiment, fill = sentiment)) + geom_boxplot() + coord_flip()
# c = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = degree, x = sentiment, fill = sentiment)) + geom_boxplot() + coord_flip()
# d = ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = density, x = sentiment, fill = sentiment)) + geom_boxplot() + coord_flip()
# multiplot(a,b,c,d)
