# Network

1. Average degree
Average degree shows the number of edges each node has in the graph. The higher it is, the more densely connected is the text. Demonstrates diversity of distinct topics well-connected to each other in the text.

2. Average path
Average path shows the average number of nodes traveled to get from one randomly chosen node to another.

3. Diameter
Diameter is the longest path in the network; higher values of average path and diameter indicate long, winding text and greater diversity of topics. Low diameter and average path values may indicate an overall centralized agenda.

- - -

# Centrality
Gives a rough indication of the social power of a node based on how well they "connect" the network. "Betweenness", "Closeness", and "Degree" are all measures of centrality.

1. Degree centrality
Degree centrality refers to the number of connections (edges) that a node has; often interpreted in terms of immediate risk of that node catching whatever is spreading through the network.
in-degree: number of (incoming) edges directed to a node
out-degree: number of (outgoing) edges the node directs to others

2. Betweenness centrality
Betweenness centrality measure for each node shows how often it appears on the shortest path between any two random nodes in the network. This measure takes into account the connectivity of the node's neighbors, giving a higher value for nodes which bridge clusters. The measure reflects the number of people who a person is connecting indirectly through their direct links.
Nodes that occur on many shortest paths between other nodes have higher betweenness than those that do not.

It indicates the importance of a node to the overall connectivity of the network; nodes that connect distinct separated communities together will have a higher measure of betweenness centrality. Additionally, nodes with the highest betweenness centrality represent polysingularity, as they appear more often bridging separate communities together.

3. Closeness centrality
Closeness is preferred in network analysis to mean shortest-path length, as it gives higher values to more central vertices, and so is usually positively associated with other measures such as degree. In network theory, defined as the mean geodesic distance (i.e., the shortest path) between a vertex v and all other vertices reachable from it.

Closeness: The degree an individual is near all other individuals in a network (directly or indirectly). It reflects the ability to access information through the "grapevine" of network members. Thus, closeness is the inverse of the sum of the shortest distances between each individual and every other person in the network. (See also: Proxemics) The shortest path may also be known as the "geodesic distance".

> nx: if the graph is not completely connected, this algorithm computes the closeness centrality for each connected part separately.
> nx: if the ‘distance’ keyword is set to an edge attribute key then the shortest-path length will be computed using Dijkstra’s algorithm with that edge attribute as the edge weight.

Current flow closeness: Current-flow closeness centrality is variant of closeness centrality based on effective resistance between nodes in a network. This metric is also known as information centrality.

Current-flow betweenness: Current-flow betweenness centrality uses an electrical current model for information spreading in contrast to betweenness centrality which uses shortest paths. Current-flow betweenness centrality is also known as random-walk betweenness centrality


4. Eigenvector centrality
Eigenvector centrality computes the centrality for a node based on the centrality of its neighbors; a measure of importance of a node in a network. It assigns relative scores to all nodes in the network based on the principle that connections to high-scoring nodes contribute more to the score of the node in question than equal connections to low-scoring nodes. Google's PageRank is a variant of the Eigenvector centrality measure.

- - -

# Assortativity

### Degree assortativity coefficient
Assortativity measures the similarity of connections in the graph with respect to the node degree.
> nx: computes where e is the joint probability distribution (mixing matrix) of the degrees. If G is directed than the matrix e is the joint probability of the user-specified degree type for the source and target.

Average neighbor degree
> nx: returns the average degree of the neighborhood of each node

Average degree connectivity (k nearest neighbors)
> nx: the average nearest neighbor degree of nodes with degree k
nx: returns a dictionary keyed by degree k with the value of average connectivity

- - -

# Components

### Digraph connectivity
A digraph G is called weakly connected (or just connected) if the undirected underlying graph obtained by replacing all directed edges of G with undirected edges is a connected graph. A digraph is strongly connected or strong if it contains a directed path from u to v and a directed path from v to u for every pair of vertices u,v. The strong components are the maximal strongly connected subgraphs.

`# Strong connectivity
`number_strongly_connected_components(G)
`strongly_connected_component_subgraphs(G, copy=True)

`# Weak connectivity
`weakly_connected_component_subgraphs(G, copy=True)

- - -

# TO-DO

### Node centralities
- Needs to be undirected
- First extract the main connected component, then compute node centrality measures for the largest component

`# for main component
`graph_components = nx.connected_component_subgraphs(ugraph)
`graph_mc = graph_components[0]

`# run betweenness, closeness, and eigenvector centrality
`bet_cen = nx.betweenness_centrality(graph_mc)
`clo_cen =
`eig_cen =

### Clustering coefficient
(not defined for multigraphs)
A measure of degree to which nodes in a graph tend to cluster together; a measure of the likelihood that two associates of a node are associates themselves. A higher clustering coefficient indicates a greater 'cliquishness'.

`## NOT DEFINED FOR MULTIGRAPHS ##

`# first convert to undirected graph
`hardford_ud = hartford.to_undirected()

`# clustering coefficient of all nodes (in a dictionary)
`clust_coefficients = nx.clustering(hartford_ud)

`# average clusteirng coefficient
`ccs = nx.clustering(hartford_ud)
`avg_clust = sum(ccs.values()) / len(ccs)

### Modularity
Modularity algorithm (Blondel 2008) scans through all the relations between the nodes, grouping them into communities on the basis of how densely they are connected together. If nodes are more tightly-knit together than to the rest of the network, they are considered to be part of a distinct community.

Modularity measure greater than 0.4 shows the presence of prominent communities within the text (Freeman 2010, Blondel et al 2008); for example, modularity measure of 0.496 may indiciate the presence of communities that are significantly more connected within, than to the rest of the network (Paranyushkin 2012).
 