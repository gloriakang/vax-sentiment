graph [
  node [
    id 0
    label "vaccine"
  ]
  node [
    id 1
    label "body"
  ]
  node [
    id 2
    label "natural defenses"
  ]
  node [
    id 3
    label "illness"
  ]
  node [
    id 4
    label "diseases"
  ]
  node [
    id 5
    label "normal"
  ]
  node [
    id 6
    label "risk of infection"
  ]
  node [
    id 7
    label "infection"
  ]
  node [
    id 8
    label "minor symptoms"
  ]
  node [
    id 9
    label "vaccines"
  ]
  node [
    id 10
    label "VPD"
  ]
  node [
    id 11
    label "fever"
  ]
  node [
    id 12
    label ""imitation" infection"
  ]
  node [
    id 13
    label "immunity to diseases"
  ]
  node [
    id 14
    label "immune system"
  ]
  node [
    id 15
    label "expected"
  ]
  node [
    id 16
    label "immunity"
  ]
  edge [
    source 0
    target 8
    edge "sometimes the imitation infection can cause"
    label "vaccine - sometimes the imitation infection can cause - minor symptoms"
  ]
  edge [
    source 1
    target 10
    edge "can recognize and fight in future"
    label "body - can recognize and fight in future - VPD"
  ]
  edge [
    source 2
    target 9
    edge "work with the body's"
    label "vaccines - work with the body's - natural defenses"
  ]
  edge [
    source 3
    target 9
    edge "do not cause"
    label "vaccines - do not cause - illness"
  ]
  edge [
    source 3
    target 12
    edge "does not cause"
    label ""imitation" infection - does not cause - illness"
  ]
  edge [
    source 4
    target 9
    edge "prevent dangerous or even deadly"
    label "vaccines - prevent dangerous or even deadly - diseases"
  ]
  edge [
    source 5
    target 8
    edge "are"
    label "minor symptoms - are - normal"
  ]
  edge [
    source 6
    target 9
    edge "reduce the"
    label "vaccines - reduce the - risk of infection"
  ]
  edge [
    source 7
    target 9
    edge "cause the immune system to develop the same response as it does to a real"
    comments "so that the body can recognize and fight the vaccine-preventable disease in the future"
    label "vaccines - cause the immune system to develop the same response as it does to a real - infection"
  ]
  edge [
    source 7
    target 9
    edge "help develop imminty by imitating an"
    label "vaccines - help develop imminty by imitating an - infection"
  ]
  edge [
    source 8
    target 15
    edge "should be"
    label "minor symptoms - should be - expected"
  ]
  edge [
    source 8
    target 11
    edge "such as"
    label "minor symptoms - such as - fever"
  ]
  edge [
    source 8
    target 16
    edge "are normal and should be expected as the body builds"
    label "minor symptoms - are normal and should be expected as the body builds - immunity"
  ]
  edge [
    source 9
    target 13
    edge "help body safely develop"
    label "vaccines - help body safely develop - immunity to diseases"
  ]
  edge [
    source 9
    target 16
    edge "help develop"
    label "vaccines - help develop - immunity"
  ]
  edge [
    source 9
    target 16
    edge "help the body safely develop"
    label "vaccines - help the body safely develop - immunity"
  ]
  edge [
    source 12
    target 14
    edge "causes to develp same response as to real infection"
    label ""imitation" infection - causes to develp same response as to real infection - immune system"
  ]
]
