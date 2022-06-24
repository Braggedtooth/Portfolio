/**
 * "Given a birthday, return the age of the person."
 * 
 * The function takes a single parameter, birthday, which is a Date object
 * @param {Date} birthday - Date - The birthday of the person you want to calculate the age of.
 * @returns The age of the person
 */
const calculateAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export default calculateAge
