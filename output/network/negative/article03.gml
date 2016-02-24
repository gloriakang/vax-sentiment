graph [
  directed 1
  multigraph 1
  node [
    id 0
    label "parent"
  ]
  node [
    id 1
    label "safe"
  ]
  node [
    id 2
    label "vaccinated children"
  ]
  node [
    id 3
    label "vaccine dangers"
  ]
  node [
    id 4
    label "unvaccinated children"
  ]
  node [
    id 5
    label "vaccines are not safe"
  ]
  node [
    id 6
    label "preventable disease"
  ]
  node [
    id 7
    label "parents who know that vaccines are not safe"
  ]
  node [
    id 8
    label "vaccine-injured children"
  ]
  node [
    id 9
    label "vaccines"
  ]
  node [
    id 10
    label "doctors"
  ]
  node [
    id 11
    label "parents"
  ]
  node [
    id 12
    label "consent for vaccines"
  ]
  node [
    id 13
    label "immune system"
  ]
  node [
    id 14
    label "truthful"
  ]
  node [
    id 15
    label "children"
  ]
  node [
    id 16
    label "get child vaccinated"
  ]
  node [
    id 17
    label "vaccine consent forms"
  ]
  edge [
    source 0
    target 16
    key 0
    edge "no sane mom would"
    comments "if doctors offered truthful consent forms"
    label "parent - no sane mom would - get child vaccinated"
  ]
  edge [
    source 2
    target 6
    key 0
    edge "are up to five times more likely than unvaccinated children to contract"
    comments "as reported by Health Freedom Alliance"
    label "vaccinated children - are up to five times more likely than unvaccinated children to contract - preventable disease"
  ]
  edge [
    source 2
    target 4
    key 0
    edge "are more likely to contract preventable disease than"
    label "vaccinated children - are more likely to contract preventable disease than - unvaccinated children"
  ]
  edge [
    source 3
    target 15
    key 0
    edge "parents would never take the chance to subject their"
    label "vaccine dangers - parents would never take the chance to subject their - children"
  ]
  edge [
    source 4
    target 13
    key 0
    edge "developed naturally without vaccines"
    label "unvaccinated children - developed naturally without vaccines - immune system"
  ]
  edge [
    source 7
    target 8
    key 0
    edge "have"
    label "parents who know that vaccines are not safe - have - vaccine-injured children"
  ]
  edge [
    source 9
    target 1
    key 0
    edge "are not"
    label "vaccines - are not - safe"
  ]
  edge [
    source 10
    target 17
    key 0
    edge "do not offer truthful"
    label "doctors - do not offer truthful - vaccine consent forms"
  ]
  edge [
    source 11
    target 5
    key 0
    edge "many know that"
    label "parents - many know that - vaccines are not safe"
  ]
  edge [
    source 11
    target 12
    key 0
    edge "do not receive truthful"
    label "parents - do not receive truthful - consent for vaccines"
  ]
  edge [
    source 11
    target 3
    key 0
    edge "would never take the chance to subject their kids to"
    comments "if presented with a truthful consent form"
    label "parents - would never take the chance to subject their kids to - vaccine dangers"
  ]
  edge [
    source 12
    target 14
    key 0
    edge "is not"
    label "consent for vaccines - is not - truthful"
  ]
  edge [
    source 13
    target 9
    key 0
    edge "developed naturally without"
    label "immune system - developed naturally without - vaccines"
  ]
]
