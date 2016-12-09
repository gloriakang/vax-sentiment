# scratch file
# plots for betweenness, closeness, and degree centrality

library(ggplot2)
View(u_Gc_nodes_pos2)

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


a <- ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = bet.cent, x = deg.cent)) + geom_text(aes(label = node)) + geom_jitter()

b <- ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = clo.cent, x = deg.cent)) + geom_text(aes(label = node)) + geom_jitter()

c <- ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = clo.cent, x = bet.cent)) + geom_text(aes(label = node)) + geom_jitter()

multiplot(a,b,c)


#ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = deg.cent, x = sentiment)) + geom_boxplot()

#ggplot(data = u_Gc_nodes_pos2, mapping = aes(y = bet.cent, x = deg.cent, color = sentiment)) + geom_point(alpha=0.5)

# ggplot(data = u_Gc_nodes_pos2, mapping = aes(x = sentiment, y = ))