var PREFIX = {
  "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "owl": "http://www.w3.org/2002/07/owl#",
  "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
  "xsd": "http://www.w3.org/2001/XMLSchema#",
  "gdprov": "http://purl.org/adaptcentre/openscience/ontologies/gdprov#",
  "gdprtext": "http://purl.org/adaptcentre/openscience/ontologies/GDPRtEXT#",
  "p-plan": "http://purl.org/net/p-plan#",
  "prov": "http://www.w3.org/ns/prov#",
  "this": "http://example.com/ontology/shoppingapp#"
}

$(document).ready(function() {
    CodeMirror.colorize();
    $(".NA").each(function() {
        $(this).text("Does not contain provenance metadata OR Is currently not implemented");
    });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fdata+%3Fprocess+WHERE+%7B%0D%0A++%3FStepType+rdfs%3AsubClassOf+gdprov%3ADataStep+.%0D%0A++%3Fstep+a+%3FStepType+.%0D%0A++%3FDataType+rdfs%3AsubClassOf+gdprov%3APersonalData+.%0D%0A++%3Fdata+a+%3FDataType+.%0D%0A++%3Fstep+%3Faction+%3Fdata+.%0D%0A++%3Fstep+gdprov%3AisPartOfProcess+%3Fprocess%0D%0A%7D+ORDER+BY+%3Fdata+%3Fprocess&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-A1"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fdata+%3Fused+where+%7B%0D%0A++%3FDataType+rdfs%3AsubClassOf+gdprov%3APersonalData+.%0D%0A++%3Fdata+a+%3FDataType+.%0D%0A++%3Fstep+a+gdprov%3ADataUsageStep+.%0D%0A++BIND%28EXISTS+%7B+%3Fstep+gdprov%3AusesData+%3Fdata+%7D+as+%3Fused%29+.%0D%0A%7D+ORDER+BY+%3Fdata&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-A2"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Faction+%3Fdata+where+%7B%0D%0A++%3Fstep+a+gdprov%3ADataDeletionStep+.%0D%0A++%3FDataType+rdfs%3AsubClassOf+gdprov%3APersonalData+.%0D%0A++%3Fdata+a+%3FDataType+.%0D%0A++%3Fstep+%3Faction+%3Fdata+.%0D%0A%7D+ORDER+BY+%3Fstep+%3Faction&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-A6"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fprocess+%3Fstep+where+%7B%0D%0A++%3Fprocess+a+%3FBreachProcess+.%0D%0A++FILTER%28%3FBreachProcess+IN+%28gdprov%3AHandleDataBreachProcess%2C+gdprov%3AReportDataBreach%29+%29+.%0D%0A++%3Fstep+gdprov%3AisPartOfProcess+%3Fprocess+.%0D%0A%7D+ORDER+BY+%3Fprocess&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-B1"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fprocess+where+%7B%0D%0A++%3Fprocess+a+gdprov%3AReportDataBreach+.%0D%0A%7D+ORDER+BY+%3Fprocess&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-B3"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fprocess+where+%7B%0D%0A++%3Fprocess+a+gdprov%3AReportDataBreach+.%0D%0A%7D+ORDER+BY+%3Fprocess&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-B4"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fprocess+where+%7B%0D%0A++%3Fprocess+a+gdprov%3AImpactAssessment+.%0D%0A%7D+ORDER+BY+%3Fprocess%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-C6"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fcategory+where+%7B%0D%0A++%3Fcategory+rdfs%3AsubClassOf+gdprov%3APersonalData+.%0D%0A++FILTER%28regex%28str%28%3Fcategory%29%2C+%22http%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%22%29%29+.%0D%0A%7D+ORDER+BY+%3Fcategory%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
        YASR(document.getElementById("results-G1a"), {
            getUsedPrefixes: PREFIX
        }, data);
    });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fcategory+where+%7B%0D%0A++%3Fcategory+rdfs%3AsubClassOf+gdprov%3ADataSubject+.%0D%0A++FILTER%28regex%28str%28%3Fcategory%29%2C+%22http%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%22%29%29+.%0D%0A%7D+ORDER+BY+%3Fcategory%0D%0A%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
        YASR(document.getElementById("results-G1b"), {
            getUsedPrefixes: PREFIX
        }, data);
    });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fdata+%3Ftype+where+%7B%0D%0A++%3Fdata+a+%3Ftype+.%0D%0A++%3Ftype+rdfs%3AsubClassOf+gdprov%3APersonalData+.%0D%0A++FILTER%28regex%28str%28%3Fdata%29%2C+%22http%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%22%29%29+.%0D%0A%7D+ORDER+BY+%3Fdata+%3Ftype%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-G2"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fdata+%3Fstep+%3Fagent+%3Fagent_type+where+%7B%0D%0A++%3Fdata+a+%3Fdata_type+.%0D%0A++%3Fdata_type+rdfs%3AsubClassOf+gdprov%3APersonalData+.%0D%0A++%3Fstep+a+gdprov%3ADataCollectionStep+.%0D%0A++%3Fstep+gdprov%3AcollectsData+%3Fdata+.%0D%0A++%3Fstep+gdprov%3AcollectsDataFromAgent+%3Fagent+.%0D%0A++%3Fagent+a+%3Fagent_type+.%0D%0A++FILTER%28regex%28str%28%3Fagent_type%29%2C+%22http%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%22%29%29+.%0D%0A%7D+ORDER+BY+%3Fdata+%3Fstep+%3Fagent&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-G3"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fdata_type+%3Fprocess+where+%7B%0D%0A++%3Fdata+a+%3Fdata_type+.%0D%0A++%3Fdata_type+rdfs%3AsubClassOf%2B+gdprov%3APersonalData+.%0D%0A++%3Fstep+a+%3Fstep_type+.%0D%0A++%3Fstep_type+rdfs%3AsubClassOf*+gdprov%3ADataStep+.%0D%0A++%3Fstep+gdprov%3AusesData+%3Fdata+.+%0D%0A++%3Fstep+gdprov%3AisPartOfProcess+%3Fprocess+.%0D%0A%7D+ORDER+BY+%3Fdata_type+%3Fprocess%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
        YASR(document.getElementById("results-G4"), {
            getUsedPrefixes: PREFIX
        }, data);
    });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fprocess+%3Flegal+where+%7B%0D%0A++%3Fdata+a+%3Fdata_type+.%0D%0A++%3Fdata_type+rdfs%3AsubClassOf+gdprov%3APersonalData+.%0D%0A++%3Fstep+a+%3Fstep_type+.%0D%0A++%3Fstep_type+rdfs%3AsubClassOf+gdprov%3ADataStep+.%0D%0A++%3Fstep+gdprov%3AusesData+%3Fdata+.+%0D%0A++%3Fstep+gdprov%3AisPartOfProcess+%3Fprocess+.%0D%0A++OPTIONAL+%7B+%3Fstep+gdprov%3AhasLegalBasis+%3Flegal+%7D+.%0D%0A++OPTIONAL+%7B%3Fprocess+gdprov%3AhasLegalBasis+%3Flegal+.+%7D+.%0D%0A%7D+ORDER+BY+%3Fprocess%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-G5"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fdata+%3FSensitiveDataType+%3FcollectionStep+%3Fretained+where+%7B%0D%0A++%3FSensitiveDataType+rdfs%3AsubClassOf+gdprov%3ASensitiveData+.%0D%0A++%3Fdata+a+%3FSensitiveDataType+.+%0D%0A++%3FcollectionStep+a+gdprov%3ADataCollectionStep+.%0D%0A++%3FcollectionStep+gdprov%3AcollectsData+%3Fdata+.%0D%0A++BIND%28+EXISTS+%7B%0D%0A++++%3FstorageStep+a+gdprov%3ADataStorageStep+.%0D%0A++++%3FstorageStep+gdprov%3AusesData+%3Fdata+.%0D%0A++%7D+as+%3Fretained+%29+.%0D%0A%7D+ORDER+BY+%3FSensitiveDataType+%3Fretained%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-G6"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fdata+%3FSensitiveDataType+%3FcollectionStep+%3Fretained+%3Flegal+where+%7B%0D%0A++%3FSensitiveDataType+rdfs%3AsubClassOf+gdprov%3ASensitiveData+.%0D%0A++%3Fdata+a+%3FSensitiveDataType+.+%0D%0A++%3FcollectionStep+a+gdprov%3ADataCollectionStep+.%0D%0A++%3FcollectionStep+gdprov%3AcollectsData+%3Fdata+.%0D%0A++OPTIONAL+%7B%0D%0A++++%3FcollectionStep+gdprov%3AhasLegalBasis+%3Flegal+.%0D%0A++%7D%0D%0A++BIND%28+EXISTS+%7B%0D%0A++++%3FstorageStep+a+gdprov%3ADataStorageStep+.%0D%0A++++%3FstorageStep+gdprov%3AusesData+%3Fdata+.%0D%0A++%7D+as+%3Fretained+%29+.%0D%0A++OPTIONAL+%7B%0D%0A++++%3FcollectionStep+gdprov%3AisPartOfProcess+%3Fprocess+.%0D%0A++%7D%0D%0A%7D+ORDER+BY+%3FSensitiveDataType%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-G7"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Fregion+%3Flocation+where+%7B%0D%0A++%3Fstep+a+gdprov%3ADataTransferStep+.%0D%0A++OPTIONAL+%7B%0D%0A++++%3Fstep+gdprov%3AtransfersDataToRegion+%3Fregion+.%0D%0A++++%3Fregion+this%3Alocation+%3Flocation+.%0D%0A++%7D%0D%0A%7D+ORDER+BY+%3Fstep+%3Fregion&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-I1"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0AASK+%7B%0D%0A++%3Fstep+a+gdprov%3ADataTransferStep+.%0D%0A++%3Fstep+%3F_+%3Fdata+.%0D%0A++%3Fdata+a+%3FDataType+.%0D%0A++%3FDataType+rdfs%3AsubClassOf+gdprov%3ASensitiveData+.%0D%0A%7D&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-I2"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0Aselect+DISTINCT+%3Fstep+%3Fcomment+%7B%0D%0A++%3Fstep+a+gdprov%3ADataTransferStep+.%0D%0A++%3Fstep+rdfs%3Acomment+%3Fcomment+.%0D%0A%7D+ORDER+BY+%3Fstep&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-I3"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Fentity+%3FEntityType+%7B%0D%0A++%3Fstep+a+gdprov%3ADataTransferStep+.%0D%0A++OPTIONAL+%7B%0D%0A++++%3Fstep+%3Faction+%3Fentity+.%0D%0A++++%3Fentity+a+%3FEntityType+.%0D%0A++++%3FEntityType+rdfs%3AsubClassOf*+prov%3AAgent+.%0D%0A++%7D%0D%0A%7D+ORDER+BY+%3Fstep+%3Fentity&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-I4"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Fterms+%3Ftemplate+%3FgivenConsent+%7B%0D%0A++%3Fstep+a+gdprov%3AConsentAcquisitionStep+.%0D%0A++%3Ftemplate+a+gdprov%3AConsentAgreementTemplate+.%0D%0A++%3Fterms+a+gdprov%3ATermsAndConditions+.%0D%0A++%3FgivenConsent+a+gdprov%3AConsentAgreement+.%0D%0A++%3Fstep+gdprov%3AusesConsentAgreementTemplate+%3Ftemplate+.%0D%0A++%3Fstep+gdprov%3AusesTermsAndConditions+%3Fterms+.%0D%0A++%3Fstep+gdprov%3AgeneratesConsentAgreement+%3FgivenConsent+.%0D%0A%7D+ORDER+BY+%3Fstep%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-P1"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Faction+%3Fconsent+where+%7B%0D%0A++%3Fconsent+a+gdprov%3AConsentAgreement+.%0D%0A++%3FStepType+rdfs%3AsubClassOf+gdprov%3AConsentStep+.%0D%0A++%3Fstep+a+%3FStepType+.%0D%0A++%3Fstep+%3Faction+%3Fconsent.%0D%0A++FILTER%28regex%28str%28%3Faction%29%2C+%22http%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%22%29%29+.%0D%0A%7D+ORDER+BY+%3Fstep+%3Fconsent%0D%0A%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-P3"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Fprocess+%3Faction+%3Fitem+where+%7B%0D%0A++%3Fstep+a+gdprov%3AConsentWithdrawalStep+.%0D%0A++OPTIONAL+%7B%0D%0A++++%3Fprocess+a+gdprov%3AProcess+.%0D%0A++++%3Fstep+gdprov%3AisPartOfProcess+%3Fprocess+.%0D%0A++%7D%0D%0A++OPTIONAL+%7B%0D%0A++++%3Fstep+%3Faction+%3Fitem+.%0D%0A++%7D%0D%0A++FILTER%28regex%28str%28%3Faction%29%2C+%22http%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%22%29%29+.%0D%0A%7D+ORDER+BY+%3Fstep+%3Faction%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-P4"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttps%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3FStepType+where+%7B%0D%0A++%3FStepType+rdfs%3AsubClassOf+gdprov%3AConsentAgeVerificationStep+.%0D%0A++%3Fstep+a+%3FStepType+.%0D%0A%7D+ORDER+BY+%3Fstep%0D%0A%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-P5"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Fprocess+%3Faction+%3Fitem+where+%7B%0D%0A++%3Fdata+a+%3Fdata_type+.%0D%0A++%3Fdata_type+rdfs%3AsubClassOf+gdprov%3APersonalData+.%0D%0A++%3Fstep+a+%3Fstep_type+.%0D%0A++%3Fstep_type+rdfs%3AsubClassOf+gdprov%3ADataStep+.%0D%0A++%3Fstep+gdprov%3AusesData+%3Fdata+.+%0D%0A++%3Fstep+gdprov%3AisPartOfProcess+%3Fprocess+.%0D%0A++%3Fstep+%3Faction+%3Fitem+.%0D%0A++%3Fstep+gdprov%3AhasLegalBasis+gdprtext%3ALegitimateInterest+.%0D%0A++FILTER%28regex%28str%28%3Faction%29%2C+%22http%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%22%29%29+.%0D%0A%7D+ORDER+BY+%3Fprocess+%3Faction%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-P6"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fprocess+where+%7B%0D%0A++%3Fprocess+a+gdprov%3AHandleSAR+.%0D%0A%7D+ORDER+BY+%3Fprocess%0D%0A&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-R1"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fdata+%3Fformat+where+%7B%0D%0A++%3Fprocess+a+gdprov%3AHandleRightOfDataPortability+.%0D%0A++%3Fstep+gdprov%3AisPartOfProcess+%3Fprocess+.%0D%0A++%3Fstep+gdprov%3AgeneratesData+%3Fdata+.%0D%0A++%3Fdata+dct%3Aformat+%3Fformat+.%0D%0A%7D+ORDER+BY+%3Fdata&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-R3"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fprocess+where+%7B%0D%0A++%7B%0D%0A++++%3Fprocess+a+gdprov%3AHandleRightOfErasure+.%0D%0A++%7D%0D%0A++UNION%0D%0A++%7B%0D%0A++++%3Fprocess+a+gdprov%3AHandleRightToRectification+.%0D%0A++%7D%0D%0A%7D+ORDER+BY+%3Fprocess&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-R4"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fprocess+where+%7B%0D%0A++%3Fprocess+a+gdprov%3AHandleRightToObjectProcessing+.%0D%0A%7D+ORDER+BY+%3Fprocess&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-R7"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Fprocess+where+%7B%0D%0A++%3Fstep+a+gdprov%3AAutomatedStep+.%0D%0A++%3Fstep+gdprov%3AisPartOfProcess+%3Fprocess+.%0D%0A++%3Fprocess+gdprov%3AhasLegalBasis+gdprtext%3AGivenConsent+.%0D%0A%7D+ORDER+BY+%3Fstep+%3Fprocess&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-R8"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Fprocess+%3Flegal+where+%7B%0D%0A++%3Fstep+a+gdprov%3AAutomatedStep+.%0D%0A++%3Fstep+gdprov%3AisPartOfProcess+%3Fprocess+.%0D%0A++%3Fprocess+gdprov%3AhasLegalBasis+%3Flegal+.%0D%0A++FILTER%28%3Flegal+IN+%28gdprtext%3AContractWithDataSubject%2C+gdprtext%3AGivenConsent%29+%29+.%0D%0A%7D+ORDER+BY+%3Fstep&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-R9"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fdata+%3Fstep+where+%7B%0D%0A++%3FStepType+rdfs%3AsubClassOf+gdprov%3ADataStep+.%0D%0A++%3Fstep+a+%3FStepType+.%0D%0A++%3FDataType+rdfs%3AsubClassOf+gdprov%3APersonalData+.%0D%0A++%3Fdata+a+%3FDataType+.%0D%0A++%3Fstep+gdprov%3AusesData+%3Fdata+.%0D%0A%7D+ORDER+BY+%3Fdata&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-S1"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fstep+%3Fdata+where+%7B%0D%0A++%3Fstep+a+gdprov%3ADataCollectionStep+.%0D%0A++%3Fstep+gdprov%3AcollectsData+%3Fdata+.%0D%0A%7D+ORDER+BY+%3Fstep&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-T2"), {
                getUsedPrefixes: PREFIX
            }, data);
        });

    $.get("http://openscience.adaptcentre.ie/sparql?default-graph-uri=http%3A%2F%2Fpurl.org%2Fadapt%2Fshopping%23&query=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+gdprov%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2Fgdprov%23%3E%0D%0APREFIX+gdprtext%3A+%3Chttp%3A%2F%2Fpurl.org%2Fadaptcentre%2Fopenscience%2Fontologies%2FGDPRtEXT%23%3E%0D%0APREFIX+p-plan%3A+%3Chttp%3A%2F%2Fpurl.org%2Fnet%2Fp-plan%23%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+this%3A+%3Chttp%3A%2F%2Fexample.com%2Fontology%2Fshoppingapp%23%3E%0D%0A%0D%0ASELECT+DISTINCT+%3Fagent+%3Fthirdparty+%3Fstep++where+%7B%0D%0A++%3Fstep+a+gdprov%3ADataCollectionStep+.%0D%0A++%3Fstep+gdprov%3AcollectsDataFromAgent+%3Fagent+.%0D%0A++BIND%28EXISTS+%7B+%3Fagent+a+gdprov%3AThirdParty+%7D+as+%3Fthirdparty+%29+.%0D%0A%7D+ORDER+BY+%3Fagent+%3Fstep&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on", function(data, status) {
            YASR(document.getElementById("results-T3"), {
                getUsedPrefixes: PREFIX
            }, data);
        });
});
