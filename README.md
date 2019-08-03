##About
This API was used to source data for the quasi-product-cart repo.  Originally it pulled data from MongoDB.  Then I relocated the data to AWS DynamoDB and adjusted accordingly.  Now that the website is in the cloud, I took the core functionality from this API and moved it into a lambda expression.  This API now serves as a local API for offline development.
