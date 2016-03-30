Network analysis of vaccination knowledge and sentiment

### to-do (3/17)
- clean the 3 combined datatables (i.e. article_neg.csv)
- keep track of knowledge representation issues
- unraveling k-cores in Gephi: minimum set of edges that causes the k-core to unravel (how to beliefs change?)
- assigning edges to categorical relationships (i.e. causative...)

### to-do (3/3)
- spectrum of sentiment (highly positive to less positive, etc.)
- try manually separating by argument topic: what are people talking about
- check out CINET for targeted node removal (Maleq)
- K cores
- start working on union of network graphs (grouped by sentiment)

### to-do (2/25)
- make box plots per sentiment
- some other nice figs explaining what the data means
- fix high centrality node data
- check out k-cores
- try manually separating by argument topic
- start working on union of network graphs (grouped by sentiment)

### to-do (2/18)
- finish jupyter notebooks for pd export
- look at distribution of aggregate measures
- look at clusters of networks for terms with highest centrality
- cluster articles by overlapping terms

### to-do (2/11)
- finish all data
- list all network metrics to run + interpretation
- create jupyter notebook for analysis
- export networkx output into pandas dataframe


- - -

# Network analysis notes


1. Average degree

Average degree shows the number of edges each node has in the graph. The higher it is, the more densely connected is the text. Demonstrates diversity of distinct topics well-connected to each other in the text.

2. Average path (x)

Average path shows the average number of nodes traveled to get from one randomly chosen node to another.

3. Density

> The density is 0 for a graph without edges and 1 for a complete graph. The density of multigraphs can be higher than 1. Self loops are counted in the total number of edges so graphs with self loops can have density higher than 1.

4. Diameter (x)

Diameter is the longest path in the network; higher values of average path and diameter indicate long, winding text and greater diversity of topics. Low diameter and average path values may indicate an overall centralized agenda.

- - -

# Centrality


1. Degree centrality

Degree centrality refers to the number of connections (edges) that a node has; often interpreted in terms of immediate risk of that node catching whatever is spreading through the network.

- In-degree: number of (incoming) edges directed to a node
- Out-degree: number of (outgoing) edges the node directs to others

2. Betweenness centrality

Betweenness centrality measure for each node shows how often it appears on the shortest path between any two random nodes in the network. This measure takes into account the connectivity of the node's neighbors, giving a higher value for nodes which bridge clusters. The measure reflects the number of people who a person is connecting indirectly through their direct links. Nodes that occur on many shortest paths between other nodes have higher betweenness than those that do not.

It indicates the importance of a node to the overall connectivity of the network; nodes that connect distinct separated communities together will have a higher measure of betweenness centrality. Additionally, nodes with the highest betweenness centrality represent polysingularity, as they appear more often bridging separate communities together.

3. Closeness centrality

Closeness is preferred in network analysis to mean shortest-path length, as it gives higher values to more central vertices, and so is usually positively associated with other measures such as degree. In network theory, defined as the mean geodesic distance (i.e., the shortest path) between a vertex v and all other vertices reachable from it.

Closeness: The degree an individual is near all other individuals in a network (directly or indirectly). It reflects the ability to access information through the "grapevine" of network members. Thus, closeness is the inverse of the sum of the shortest distances between each individual and every other person in the network. (See also: Proxemics) The shortest path may also be known as the "geodesic distance".

> nx: if the graph is not completely connected, this algorithm computes the closeness centrality for each connected part separately.
> nx: if the ‘distance’ keyword is set to an edge attribute key then the shortest-path length will be computed using Dijkstra’s algorithm with that edge attribute as the edge weight.

- Current flow closeness: Current-flow closeness centrality is variant of closeness centrality based on effective resistance between nodes in a network. This metric is also known as information centrality.

- Current-flow betweenness: Current-flow betweenness centrality uses an electrical current model for information spreading in contrast to betweenness centrality which uses shortest paths. Current-flow betweenness centrality is also known as random-walk betweenness centrality


4. Eigenvector centrality (x)

Eigenvector centrality computes the centrality for a node based on the centrality of its neighbors; a measure of importance of a node in a network. It assigns relative scores to all nodes in the network based on the principle that connections to high-scoring nodes contribute more to the score of the node in question than equal connections to low-scoring nodes. Google's PageRank is a variant of the Eigenvector centrality measure.

- - -

# Assortativity

### Degree assortativity coefficient

Assortativity measures the similarity of connections in the graph with respect to the node degree.

> nx: computes where e is the joint probability distribution (mixing matrix) of the degrees. If G is directed than the matrix e is the joint probability of the user-specified degree type for the source and target. returns assortativity of graph by degree.

### Average neighbor degree (x)

> nx: returns the average degree of the neighborhood of each node

### Average degree connectivity / k nearest neighbors (x)

> nx: the average nearest neighbor degree of nodes with degree k. returns a dictionary keyed by degree k with the value of average connectivity

- - -

# Components & connectivity

### Average node connectivity

The average connectivity K of graph G is the average of local node connectivity over all pairs of nodes of G

### Digraph connectivity

A digraph G is called weakly connected (or just connected) if the undirected underlying graph obtained by replacing all directed edges of G with undirected edges is a connected graph. A digraph is strongly connected or strong if it contains a directed path from u to v and a directed path from v to u for every pair of vertices u,v. The strong components are the maximal strongly connected subgraphs.

`# Strong connectivity
`number_strongly_connected_components(G)
`strongly_connected_component_subgraphs(G, copy=True)
`# sorted list starting with largest:
`[len(Gc) for Gc in sorted(nx.strongly_connected_component_subgraphs(G), key=len, reverse=True)]`
`# or, just for the largest component:
`Gc = max(nx.strongly_connected_component_subgraphs(G), key=len)`
`# Weak connectivity
`weakly_connected_component_subgraphs(G, copy=True)


### Connected components
- `nx.number_connected_components`: must be undirected graph


- - -

# TO-DO

### Node centralities

`nx.eigenvector_centrality_numpy`

- Needs to be undirected
- First extract the main connected component, then compute node centrality measures for the largest component

`# for main component
`graph_components = nx.connected_component_subgraphs(ugraph)
`graph_mc = graph_components[0]

`# run betweenness, closeness, and eigenvector centrality
`bet_cen = nx.betweenness_centrality(graph_mc)
`clo_cen =
`eig_cen = nx.eigenvector_centrality_numpy

### Connected components

- Must be undirected
- `nx.connected_components(G)`: generator of sets
    - to generate a sorted list of connected components, largest first:
    `[len(c) for c in sorted(nx.connected_components(G), key=len, reverse=True)]`

- Generate connected components as subgraphs (must be undirected)
- `nx.connected_component_subgraphs(G)` : generator of graphs
> `graphs = list(nx.connected_component_subgraphs(G))`

`# if you only want the largest cc, more efficient to use max than sort
> `Gc = max(nx.connected_component_subgraphs(G), key=len)`

- To return the nodes in a component of a graph containing node n (set)
- `nx.node_connected_component(G,n)

### Clustering coefficient



- A measure of degree to which nodes in a graph tend to cluster together; a measure of the likelihood that two associates of a node are associates themselves. A higher clustering coefficient indicates a greater 'cliquishness'.
- `average_clustering(G)`
`## NOT DEFINED FOR MULTIGRAPHS... I think. def must be undirected though ##
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


### Cliques?



- - -

## Glossary of terms - social network analysis metrics

- Betweenness: the extent to which a node lies between other nodes in the network. This measure takes into account the connectivity of the node's neighbors, giving a higher value for nodes which bridge clusters. The measure reflects the number of people who a person is connecting indirectly through their direct links.

- Bridge: An edge is said to be a bridge if deleting it would cause its endpoints to lie in different components of a graph.

- Centrality: This measure gives a rough indication of the social power of a node based on how well they "connect" the network. "Betweenness", "Closeness", and "Degree" are all measures of centrality.

- Centralization: The difference between the number of links for each node divided by maximum possible sum of differences. A centralized network will have many of its links dispersed around one or a few nodes, while a decentralized network is one in which there is little variation between the number of links each node possesses.

- Closeness: The degree an individual is near all other individuals in a network (directly or indirectly). It reflects the ability to access information through the "grapevine" of network members. Thus, closeness is the inverse of the sum of the shortest distances between each individual and every other person in the network. (See also: Proxemics) The shortest path may also be known as the "geodesic distance".

- Clustering coefficient: A measure of the likelihood that two associates of a node are associates themselves. A higher clustering coefficient indicates a greater 'cliquishness'.

- Cohesion: The degree to which actors are connected directly to each other by cohesive bonds. Groups are identified as ‘cliques’ if every individual is directly tied to every other individual, ‘social circles’ if there is less stringency of direct contact, which is imprecise, or as structurally cohesive blocks if precision is wanted.

- Degree: The count of the number of ties to other actors in the network.

- Density (individual-level): The degree a respondent's ties know one another/ proportion of ties among an individual's nominees. Network or global-level density is the proportion of ties in a network relative to the total number possible (sparse versus dense networks).

- Flow betweenness centrality: The degree that a node contributes to sum of maximum flow between all pairs of nodes (not that node).

- Eigenvector centrality: A measure of the importance of a node in a network. It assigns relative scores to all nodes in the network based on the principle that connections to nodes having a high score contribute more to the score of the node in question.

- Path length: The distances between pairs of nodes in the network. Average path-length is the average of these distances between all pairs of nodes.

- Prestige: In a directed graph prestige is the term used to describe a node's centrality. "Degree Prestige", "Proximity Prestige", and "Status Prestige" are all measures of Prestige.

- Radiality: Degree an individual’s network reaches out into the network and provides novel information and influence.

- Reach: The degree any member of a network can reach other members of the network.

- Structural cohesion: The minimum number of members who, if removed from a group, would disconnect the group.

- Structural equivalence: Refers to the extent to which nodes have a common set of linkages to other nodes in the system. The nodes don’t need to have any ties to each other to be structurally equivalent.

- Structural hole: Static holes that can be strategically filled by connecting one or more links to link together other points. Linked to ideas of social capital: if you link to two people who are not linked you can control their communication.
 
