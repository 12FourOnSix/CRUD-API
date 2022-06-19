import { v4 as uuidv4 } from 'uuid'

export const createUser = (name, age, ...hobbies) => {
  const userID = uuidv4()

  return {
    id: userID,
    username: name,
    age: age,
    hobbies: [...hobbies] || []
  }
}