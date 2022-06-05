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
  }