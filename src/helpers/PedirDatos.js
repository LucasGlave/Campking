import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = () =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MOCK_DATA)
      },6000)
    })
}

export const pedirProductoPorld = (id) => {
  return new Promise((resolve, reject) =>{

    setTimeout(() => {
      resolve(MOCK_DATA.find(item => item.id === id))
    }, 6000)
  })
}