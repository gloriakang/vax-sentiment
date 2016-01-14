graph [
  directed 1
  multigraph 1
  node [
    id 0
    label "suboptimal protection"
  ]
  node [
    id 1
    label "influenza viruses"
  ]
  node [
    id 2
    label "CDC"
  ]
  node [
    id 3
    label "reduced vaccine potency"
  ]
  node [
    id 4
    label "reduced benefit"
  ]
  node [
    id 5
    label "Northern Hemisphere flu vaccine"
  ]
  node [
    id 6
    label "safety concern"
  ]
  node [
    id 7
    label "reduced effectiveness"
  ]
  node [
    id 8
    label "vaccinated people"
  ]
  node [
    id 9
    label "GSK flu vaccine recall"
  ]
  node [
    id 10
    label "flu vaccine recall"
  ]
  node [
    id 11
    label "GlaxoSmithKline"
  ]
  node [
    id 12
    label "vaccine potency"
  ]
  node [
    id 13
    label "revaccinated"
  ]
  node [
    id 14
    label "2014-2015 FLULAVAL QUADRIVALENT flu vaccine"
  ]
  edge [
    source 2
    target 14
    key 0
    edge "does not recommend revaccination for people who received the recalled"
    label "CDC - does not recommend revaccination for people who received the recalled - 2014-2015 FLULAVAL QUADRIVALENT flu vaccine"
  ]
  edge [
    source 3
    target 4
    key 0
    edge "does not necessarily mean people vaccinated received"
    label "reduced vaccine potency - does not necessarily mean people vaccinated received - reduced benefit"
  ]
  edge [
    source 5
    target 0
    key 0
    edge "approved for use in the United States might provide"
    comments "against flu viruses expected to circulate in the Southern Hemisphere"
    label "Northern Hemisphere flu vaccine - approved for use in the United States might provide - suboptimal protection"
  ]
  edge [
    source 8
    target 13
    key 0
    edge "may be"
    comments "of 2014-2015 FLULAVAL QUADRIVALENT flu vaccine"
    label "vaccinated people - may be - revaccinated"
  ]
  edge [
    source 9
    target 3
    key 0
    edge "means the vaccine no longer meets the manufacturer's specifications for potency for these particular viruses because of"
    label "GSK flu vaccine recall - means the vaccine no longer meets the manufacturer's specifications for potency for these particular viruses because of - reduced vaccine potency"
  ]
  edge [
    source 11
    target 10
    key 0
    edge "voluntarily initiated"
    label "GlaxoSmithKline - voluntarily initiated - flu vaccine recall"
  ]
  edge [
    source 11
    target 14
    key 0
    edge "recalling remaining doses of"
    label "GlaxoSmithKline - recalling remaining doses of - 2014-2015 FLULAVAL QUADRIVALENT flu vaccine"
  ]
  edge [
    source 12
    target 14
    key 0
    edge "fell below pre-specified limit prior to expiration of"
    label "vaccine potency - fell below pre-specified limit prior to expiration of - 2014-2015 FLULAVAL QUADRIVALENT flu vaccine"
  ]
  edge [
    source 14
    target 6
    key 0
    edge "reduced potency does not pose"
    label "2014-2015 FLULAVAL QUADRIVALENT flu vaccine - reduced potency does not pose - safety concern"
  ]
  edge [
    source 14
    target 1
    key 0
    edge "is quadrivalent flu vaccine that protects against"
    label "2014-2015 FLULAVAL QUADRIVALENT flu vaccine - is quadrivalent flu vaccine that protects against - influenza viruses"
  ]
  edge [
    source 14
    target 12
    key 0
    edge "detected decrease in"
    label "2014-2015 FLULAVAL QUADRIVALENT flu vaccine - detected decrease in - vaccine potency"
  ]
  edge [
    source 14
    target 7
    key 0
    edge "potentially may have"
    label "2014-2015 FLULAVAL QUADRIVALENT flu vaccine - potentially may have - reduced effectiveness"
  ]
]
