package main

import mgo "gopkg.in/mgo.v2"

type Todo struct {
	Id          int    `bson:"id"`
	Title       string `bson:"title"`
	Description string `bson:"description"`
}

func main() {
	session, err := mgo.Dial("127.0.0.1")
	if err != nil {
		panic(err)
	}
	defer session.Close()
}
