import { useState } from 'react'
import { Slider } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

function App() {
  const [useLetters, setUseLetters] = useState(true)
  const [useUppercaseLetters, setUseUppercaseLetters] = useState(false)
  const [useNumbers, setUseNumbers] = useState(false)
  const [useSpecialCharacters, setUseSpecialCharacters] = useState(false)
  const [length, setLength] = useState(12)
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    console.log(length)
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    const numbers = '0123456789'
    const specialCharacters = '!@#$%^&*+='

    let allowedCharacters = ''

    if (useLetters) allowedCharacters += lowercase
    if (useUppercaseLetters) allowedCharacters += uppercase
    if (useNumbers) allowedCharacters += numbers
    if (useSpecialCharacters) allowedCharacters += specialCharacters

    let password = ''
    for (let i = 0; i < length; i++) {
      password +=
        allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
    }
    setPassword(password)
    console.log(password)
  }

  const copyToClipboard = () => {}

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-1/4 h-2/4 mx-auto border-solid border-4 border-sky-600 rounded-lg shadow-xl shadow-sky-600'>
        <div className=' w-4/5 mx-auto'>
          <div className='flex flex-col'>
            <div className='flex'>
              <Checkbox
                id='letters'
                checked={useLetters}
                onChange={(e) => setUseLetters(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <label htmlFor='letters'>a-z</label>
            </div>

            <div className='flex'>
              <Checkbox
                id='lettersUppercase'
                checked={useUppercaseLetters}
                onChange={(e) => setUseUppercaseLetters(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <label htmlFor='lettersUppercase'>A-Z</label>
            </div>

            <div className='flex'>
              <Checkbox
                id='numbers'
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <label htmlFor='numbers'>0-9</label>
            </div>

            <div className='flex'>
              <Checkbox
                id='specialCharacters'
                checked={useSpecialCharacters}
                onChange={(e) => setUseSpecialCharacters(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <label htmlFor='specialCharacters'>!@#$%^&*+=</label>
            </div>
          </div>

          <Slider
            min={8}
            max={32}
            defaultValue={12}
            onChange={(e) => setLength(e.target.value)}
            aria-label='Default'
            valueLabelDisplay='auto'
            color='primary'
          />
        </div>
        <button
          onClick={generatePassword}
          className=' bg-sky-600 rounded-md p-2 block mx-auto'
        >
          Generate
        </button>
        <p className=' bg-slate-200 rounded-md block mx-auto p-2 mt-4 w-5/6 text-sm'>
          {password}
        </p>

        <button
          onClick={navigator.clipboard.writeText(password)}
          className=' bg-sky-600 rounded-md p-2 block mx-auto mt-4'
        >
          Copy
        </button>
      </div>
    </div>
  )
}

export default App
