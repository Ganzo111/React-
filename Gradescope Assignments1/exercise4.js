function searchBooks(library, authorName) {
      let titles = []
      for (let i = 0; i < library.length; i++){
            if (library[i].author === authorName){
                  titles.push(library[i].titles)
            }      
      }
      if (titles.length === 0){
            return "NOT FOUND"
      }
      return titles.join(", ")
}

