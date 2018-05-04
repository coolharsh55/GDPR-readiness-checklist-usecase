#!/usr/bin/env python3

import rdflib
from rdflib.namespace import OWL
from rdflib import Namespace

GDPRtEXT = Namespace('http://purl.org/adaptcentre/openscience/ontologies/GDPRtEXT#')
GDPRov = Namespace('http://purl.org/adaptcentre/openscience/ontologies/gdprov#')

USECASE = Namespace('http://example.com/ontology/shoppingapp#')

g = rdflib.Graph()
g.parse('./data.ttl', format='ttl')

unwanted_graph = rdflib.Graph()
cleaned_graph = rdflib.Graph()

for s, p, o in g:
    if s.startswith(USECASE):
        cleaned_graph.add((s, p, o))
    else:
        unwanted_graph.add((s, p, o))

cleaned_graph.serialize(destination='cleaned.ttl', format='turtle')
unwanted_graph.serialize(destination='removed.ttl', format='turtle')
