describe('template spec', () => {
  it('passes', () => {
    cy.visit('', {
      qs: {
        select: {
          fl: '*',
          year: '2024',
          'shards.tolerant': 'true',
          'q.op': 'AND',
          'facet.threads': '4',
          spellcheck: 'true',
          sort: 'score+desc',
          hl: 'false',
          'spellcheck.dictionary': 'default',
          wt: 'json',
          'json.nl': 'arrarr',
          rows: '20',
          start: '0',
          'spellcheck.q': 'adad',
          qf: 'title_short^750+title_full_unstemmed^600+title_full^400+title^500+title_alt^200+title_new^100+series^50+series^100+author^300+contents^10+topic_unstemmed^1050+topic^1000+geographic^300+class^500+bklname^500+genre^300+allfields_unstemmed^0.1+fulltext_unstemmed^0.1+allfields^0.1+fulltext^0.1+description^0.1+isbn+issn+long_lat_display^0.1+allfieldsGer^0.1+id^50+hierarchy_top_id+journal^500+is_hierarchy_title^500+hierarchy_top_title^500',
          qt: 'edismax',
          bq: ['format:eJournal^237', 'format:Journal^284', 'format:eBook^255', 'format:Book^500', 'format:Article^620', 'format:"electronic+Article"^620', 'format_facet:"Serienband"^0.1', 'publishDateSort:2023^280', 'publishDateSort:2022^260', 'publishDateSort:2021^240', 'publishDateSort:2020^220', 'publishDateSort:2019^200', 'publishDateSort:2018^180', 'publishDateSort:2017^160', 'publishDateSort:2016^150', 'publishDateSort:2015^140', 'publishDateSort:2014^130', 'publishDateSort:2013^120', 'publishDateSort:202*^500'],
          mm: '0%',
          q: 'Lehrbuch Organisationspsychologie',
          fq: ['(collection:GVK+AND+collection_details:GBV_ILN_11)+OR+(collection:OLC+AND+collection_details:GBV_ILN_11)+OR+collection:NL+OR+collection:JSTOR+OR+collection:DOAJ+OR+collection:SBB-Crossref', 'NOT+id:859116190', 'NOT+signature_iln_str_mv:11\:vergriffen+OR+NOT+signature_iln_str_mv:"11\:nicht+beschaffbar"+OR+NOT+signature_iln_str_mv:11\:storniert+OR+NOT+signature_iln_str_mv:"11\:nicht+erschienen"']
        }
      },
    })
  })
})

