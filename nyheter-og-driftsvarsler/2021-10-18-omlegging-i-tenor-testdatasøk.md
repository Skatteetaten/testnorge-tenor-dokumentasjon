---
title:  "Omlegging i Tenor testdatasøk"
tags: [Nyhet, Søk]
date: 2021-10-18
---
Vi gjør en omlegging av søkestrukturen (Elasticsearch) i Tenor testdatasøk.
Dette vil medføre at søk på relasjoner i avansert søk ikke vil fungere som tidligere.

{/* truncate */}

F.eks. må dette søket: ```tenorRelasjoner.freg.barn.bostedsadresse: "Rotebergvegen 1"```

Endres til: ```tenorRelasjoner.freg: {tenorRelasjonsnavn: "barn" AND bostedsadresse: "Rotebergvegen 1"}```

Hvis du har lagret søk med relasjoner, så må du endre disse og lagre de på nytt.
