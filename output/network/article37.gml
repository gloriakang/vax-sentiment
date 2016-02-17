graph [
  directed 1
  multigraph 1
  node [
    id 0
    label "infection of mouth"
  ]
  node [
    id 1
    label "women previously exposed to HPV"
  ]
  node [
    id 2
    label "infection at multiple sites"
  ]
  node [
    id 3
    label "cancer"
  ]
  node [
    id 4
    label "partial protection"
  ]
  node [
    id 5
    label "HPV vaccine recommendations"
  ]
  node [
    id 6
    label "HPV vaccine"
  ]
  node [
    id 7
    label "Gardasil"
  ]
  node [
    id 8
    label "cancer-causing types of HPV"
  ]
  node [
    id 9
    label "infection of anus"
  ]
  node [
    id 10
    label "multi-site protection"
  ]
  node [
    id 11
    label "current HPV infection"
  ]
  node [
    id 12
    label "reduction in HPV"
  ]
  node [
    id 13
    label "women without previous HPV"
  ]
  node [
    id 14
    label "infection of cervix"
  ]
  node [
    id 15
    label "vaccine efficacy"
  ]
  node [
    id 16
    label "age 26"
  ]
  node [
    id 17
    label "young women"
  ]
  node [
    id 18
    label "HPV Vaccine Trial in Costa Rica"
  ]
  node [
    id 19
    label "age 11 or 12"
  ]
  node [
    id 20
    label "high-risk types of HPV"
  ]
  edge [
    source 0
    target 20
    key 0
    edge "is"
    label "infection of mouth - is - high-risk types of HPV"
  ]
  edge [
    source 0
    target 3
    key 0
    edge "is primary anatomic site where persistent HPV infections can cause"
    label "infection of mouth - is primary anatomic site where persistent HPV infections can cause - cancer"
  ]
  edge [
    source 4
    target 1
    key 0
    edge "provided for"
    label "partial protection - provided for - women previously exposed to HPV"
  ]
  edge [
    source 5
    target 16
    key 0
    edge "are to continue through"
    label "HPV vaccine recommendations - are to continue through - age 26"
  ]
  edge [
    source 5
    target 19
    key 0
    edge "start at"
    label "HPV vaccine recommendations - start at - age 11 or 12"
  ]
  edge [
    source 6
    target 1
    key 0
    edge "provides partial protection for"
    label "HPV vaccine - provides partial protection for - women previously exposed to HPV"
  ]
  edge [
    source 6
    target 1
    key 1
    edge "may provide partial protection at multiple sites in"
    comments "said Daniel C. Bleacher"
    label "HPV vaccine - may provide partial protection at multiple sites in - women previously exposed to HPV"
  ]
  edge [
    source 6
    target 2
    key 0
    edge "is effective against"
    label "HPV vaccine - is effective against - infection at multiple sites"
  ]
  edge [
    source 6
    target 11
    key 0
    edge "cannot help clear"
    comments "stressed Daniel C. Bleacher"
    label "HPV vaccine - cannot help clear - current HPV infection"
  ]
  edge [
    source 6
    target 13
    key 0
    edge "brought greatest protection"
    comments "reported Daniel C. Bleacher"
    label "HPV vaccine - brought greatest protection - women without previous HPV"
  ]
  edge [
    source 6
    target 4
    key 0
    edge "provides"
    label "HPV vaccine - provides - partial protection"
  ]
  edge [
    source 6
    target 20
    key 0
    edge "provides partial protection against"
    label "HPV vaccine - provides partial protection against - high-risk types of HPV"
  ]
  edge [
    source 6
    target 12
    key 0
    edge "brought"
    comments "of cervix, anus, and mouth"
    label "HPV vaccine - brought - reduction in HPV"
  ]
  edge [
    source 7
    target 8
    key 0
    edge "recently approved and protects against seven"
    label "Gardasil - recently approved and protects against seven - cancer-causing types of HPV"
  ]
  edge [
    source 9
    target 3
    key 0
    edge "is primary anatomic site where persistent HPV infections can cause"
    label "infection of anus - is primary anatomic site where persistent HPV infections can cause - cancer"
  ]
  edge [
    source 9
    target 20
    key 0
    edge "is"
    label "infection of anus - is - high-risk types of HPV"
  ]
  edge [
    source 10
    target 0
    key 0
    edge "includes"
    label "multi-site protection - includes - infection of mouth"
  ]
  edge [
    source 10
    target 1
    key 0
    edge "also observed, though at lower levels, in"
    label "multi-site protection - also observed, though at lower levels, in - women previously exposed to HPV"
  ]
  edge [
    source 10
    target 9
    key 0
    edge "includes"
    label "multi-site protection - includes - infection of anus"
  ]
  edge [
    source 10
    target 14
    key 0
    edge "includes"
    label "multi-site protection - includes - infection of cervix"
  ]
  edge [
    source 14
    target 3
    key 0
    edge "is primary anatomic site where persistent HPV infections can cause"
    label "infection of cervix - is primary anatomic site where persistent HPV infections can cause - cancer"
  ]
  edge [
    source 14
    target 20
    key 0
    edge "is"
    label "infection of cervix - is - high-risk types of HPV"
  ]
  edge [
    source 15
    target 1
    key 0
    edge "was lower for"
    label "vaccine efficacy - was lower for - women previously exposed to HPV"
  ]
  edge [
    source 17
    target 20
    key 0
    edge "protected from"
    label "young women - protected from - high-risk types of HPV"
  ]
  edge [
    source 18
    target 5
    key 0
    edge "findings support current"
    comments "said Daniel C. Bleacher"
    label "HPV Vaccine Trial in Costa Rica - findings support current - HPV vaccine recommendations"
  ]
  edge [
    source 18
    target 15
    key 0
    edge "previous reports looking at separate sites demonstrated high"
    label "HPV Vaccine Trial in Costa Rica - previous reports looking at separate sites demonstrated high - vaccine efficacy"
  ]
  edge [
    source 18
    target 10
    key 0
    edge "is first to analyze"
    comments "explained Daniel C. Beachler, postdoctoral fellow at NCI"
    label "HPV Vaccine Trial in Costa Rica - is first to analyze - multi-site protection"
  ]
  edge [
    source 18
    target 10
    key 1
    edge "previous reports looking at separate sites demonstrated HPV vaccine is highly effective in providing"
    label "HPV Vaccine Trial in Costa Rica - previous reports looking at separate sites demonstrated HPV vaccine is highly effective in providing - multi-site protection"
  ]
]
