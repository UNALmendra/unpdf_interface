module.exports = {
    apiUrl: `http://35.239.72.193:5000/graphql`,
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