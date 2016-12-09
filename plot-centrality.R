## Plotting centrality

rm(list = ls(all.names = TRUE))
library(ggplot2)


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


#####
# all nodes plot

df = read.csv("output/R/all-nodes.csv")

# Greatest node centrality values with labels for positive and negative networks
a <- ggplot(df[df$degree > 40, ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  #xlim(0.05, 0.33) + ylim(0.305, NA) +
  geom_point(position = "jitter", alpha = 0.4) +
  geom_text(aes(label = node), size = 5, position = "jitter", alpha = 0.8, hjust = "inward") +
  ggtitle("Top node centrality values \nfor positive and negative sentiment networks") + 
  xlab("betweenness centrality") + ylab("closeness centrality") + labs(size = "degree centrality") +
  scale_size_continuous(range = c(0,15))
a

# scales free facet with labels
a2 <- ggplot(df, aes(clo.cent, bet.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.3) +
  geom_text(aes(label = node), position = "jitter", alpha = 0.7, hjust = "inward") +
  ggtitle("Node centrality measures for \nnegative, neutral, and positive sentiment networks") +
  xlab("betweenness centrality") + ylab("closeness centrality") + labs(size = "degree centrality") +
  scale_size_continuous(range = c(0,10)) +
  facet_wrap(~sentiment, scales = "free")
a2



#####
# subset node data

# top 25 by eigenvector centrality
central_df = read.csv("output/R/central-nodes.csv")

# Greatest node centrality values with labels for positive and negative networks
c <- ggplot(central_df[central_df$central == "Y", ], aes(bet.cent, clo.cent, color = sentiment, size = deg.cent)) +
  geom_point(position = "jitter", alpha = 0.4) +
  geom_text(aes(label = node), size = 4, position = "jitter", alpha = 0.9, hjust = "inward") +
  ggtitle("Top 10 eigenvector centrality scores") + 
  xlab("Betweenness centrality") + ylab("Closeness centrality") + labs(size = "Degree centrality") +
  scale_size_continuous(range = c(0,15))
c





