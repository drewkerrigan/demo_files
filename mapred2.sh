curl -XPOST http://localhost:8098/mapred \
     -H 'Content-Type: application/json' \
     -d "{\"inputs\":\"quote\",
          \"query\":[{\"map\":{
            \"language\":\"javascript\",
            \"arg\":\"$1\",
            \"name\":\"Foo.map\"}},
            {\"reduce\":{\"language\":\"javascript\",
                    \"name\":\"Foo.reduce\"
            }}]}"
