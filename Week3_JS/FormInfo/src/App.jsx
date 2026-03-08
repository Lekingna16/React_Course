import FormInput from "./FormInput"


function App() {
  const user = {
    name: 'Kim Ngan',
    age: 21,
    email: 'kimngan@gmail.com'
  }
  return (
    <div>
      <FormInput userInput={user} />
    </div>
  )
}

export default App