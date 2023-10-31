# Ranking 

Test Server: `http://b-dev20220203-vufind-6/`
Config Path: /var/www/vufind/local/config/vufind
FTP: sftp://root@b-dev20220203-vufind-6/

K:\IID\IID_0_Benutzungsabteilung\06_IT-Anwendungen\Discovery\2023\Ranking

1. Filezilla ()
2. Ablageort Searchspecs word doc(!) mit Path to yaml
3. Manuel Backup umbennen searchspec yaml
4. Hochladen nach ânderung
5. Ranking server via redmine (http://b-dev20220203-vufind-6/) visuel Vergleichen
6. Vergleich mit stabikat
7. improv on excel example
8. Bei Erfolg: Doku Word doc mit screenshot (vorher nachher) für treffen
9. Bei Nicht erfolg: word doc Notizen und Fragesammlungen (für treffen mit webworks)

## TODO:

1. ranking tool installiern
2. get git and ndoe for Annette

## Design

-  VUfind Int test `SearchSortTest` https://vufind.org/jenkins/view/All/job/VuFind/javadoc/classes/VuFindTest-Mink-SearchSortTest.html
  -  Has everything especially https://vufind.org/jenkins/view/All/job/VuFind/javadoc/classes/VuFindTest-Feature-SolrSearchObjectTrait.html
-  Maven (embedded SOLR) can do config and relevance tests side by side
   -  https://github.com/jaihind213/Embedded-Solr-Cloud (yup)
   -  https://github.com/Filirom1/solr-test-exemple (nope)
-  Cypress
   -  need mockings to reproduce VUfind Config manager changes to Vufind config need to be manually ported
   -  e2e helps II D to see results, automate screenshots etc.  
- HOw to keep track of before and after
- do we need screenshots?
- response object only available from console on ranking server
-  

## Further Reading

https://lucidworks.com/post/debugging-search-application-relevance-issues/

https://github.com/abdulrahmansheikh/solr_relevance_ranking_analysis (Python) https://github.com/opensemanticsearch/solr-relevance-ranking-analysis 

https://github.com/o19s/ispy_component

https://github.com/sul-dlss/sw_index_tests https://github.com/sul-dlss/searchworks_traject_indexer 

https://github.com/traject/traject https://github.com/sul-dlss/traject_plus

(https://github.com/sul-dlss/folio_qa_tests) :-) 