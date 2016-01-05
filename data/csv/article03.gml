graph [
  node [
    id 0
    label "parent"
  ]
  node [
    id 1
    label "vaccine dangers"
  ]
  node [
    id 2
    label "unvaccinated children"
  ]
  node [
    id 3
    label "vaccines are not safe"
  ]
  node [
    id 4
    label "safe"
  ]
  node [
    id 5
    label "parents who know that vaccines are not safe"
  ]
  node [
    id 6
    label "vaccine-injured children"
  ]
  node [
    id 7
    label "vaccinated children"
  ]
  node [
    id 8
    label "vaccines"
  ]
  node [
    id 9
    label "doctors"
  ]
  node [
    id 10
    label "parents"
  ]
  node [
    id 11
    label "consent for vaccines"
  ]
  node [
    id 12
    label "contract preventable disease"
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
    label "get child vaccinated"
  ]
  node [
    id 16
    label "vaccine consent forms"
  ]
  edge [
    source 0
    target 15
    edge "no sane mom would"
    comments "if doctors offered truthful consent forms"
    label "parent - no sane mom would - get child vaccinated"
  ]
  edge [
    source 1
    target 10
    edge "would never take the chance to subject their kids to"
    comments "if presented with a truthful consent form"
    label "parents - would never take the chance to subject their kids to - vaccine dangers"
  ]
  edge [
    source 2
    target 13
    edge "developed naturally without vaccines"
    label "unvaccinated children - developed naturally without vaccines - immune system"
  ]
  edge [
    source 3
    target 10
    edge "many know that"
    label "parents - many know that - vaccines are not safe"
  ]
  edge [
    source 4
    target 8
    edge "are not"
    label "vaccines - are not - safe"
  ]
  edge [
    source 5
    target 6
    edge "have"
    label "parents who know that vaccines are not safe - have - vaccine-injured children"
  ]
  edge [
    source 7
    target 12
    edge "are up to five times more likely than unvaccinated children to"
    comments "as reported by Health Freedom Alliance"
    label "vaccinated children - are up to five times more likely than unvaccinated children to - contract preventable disease"
  ]
  edge [
    source 9
    target 16
    edge "do not offer truthful"
    label "doctors - do not offer truthful - vaccine consent forms"
  ]
  edge [
    source 10
    target 11
    edge "do not receive truthful"
    label "parents - do not receive truthful - consent for vaccines"
  ]
  edge [
    source 11
    target 14
    edge "is not"
    label "consent for vaccines - is not - truthful"
  ]
]
