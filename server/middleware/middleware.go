package middleware

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// DB connection string
// for localhost mongoDB
// const connectionString = "mongodb://localhost:27017"
const connectionString = "Connection String"

// Database Name
const dbName = "test"

// Collection Name
const collName = "todolist"

// collection object/instance
var collection *mongo.Collection

// create connection with mongo db
func init() {
	// Set client options
	clientOptions := options.Client().ApplyURI(connectionString)

	// connect to mongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	// check the connection
	err = client.Ping(context.TODO(), nil)
}

// GetAllTask get all the task route
