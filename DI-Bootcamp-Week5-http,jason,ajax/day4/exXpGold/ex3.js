const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

const getData = async function () {
    const response =  fetch(urls[0])
    // const data = await response.json()
    // await console.log(data)
    console.log(response)
    
    
  
    
  
//   console.log('users', users)
//   console.log('posta', posts)
//   console.log('albums', albums)
}
getData()



 
