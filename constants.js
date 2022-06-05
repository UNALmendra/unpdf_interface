module.exports = {
    apiUrl: `http://localhost:5000/graphql`,
    queries: {
        getDocumentsUser: `
            query DocumentsUser ($user: String!){
                documents_user(user: $user) {
                  storage,
                  name,
                  type
                }
              }`
      },
    // mutations: {
    //   postNewDocument: `
    //     mutation PostNewDocument($document: NewDocument){
    //       postNewDocument(document: $document) {
    //         storage
    //       }
    //     }
    //     `
    // }
  }

//   query {
//     documents_user(user:"user3") {
//       storage,
//       name
//     }
//   }


//   query {
//     logsById(Doc: "10") {
//       Doc,
//       Description,
//       User,
//       Date,
//     }
//   }