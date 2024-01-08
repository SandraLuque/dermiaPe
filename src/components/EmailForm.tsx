import React from 'react'
import { render } from '@react-email/render'
import UserQuestionsEmail from 'src/emails/UserQuestionsEmail'

export const EmailForm = () => {
  const currentYear = new Date().getFullYear().toString()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const { name, email, phone, message } = Object.fromEntries(formData)

    const finalHtml = render(
      <UserQuestionsEmail
        userFirstname={name}
        userEmail={email}
        userPhone={phone}
        userMessage={message}
        year={currentYear}
      />,
      {
        pretty: true
      }
    )

    const finalText = render(
      <UserQuestionsEmail
        userFirstname={name}
        userEmail={email}
        userPhone={phone}
        userMessage={message}
        year={currentYear}
      />,
      {
        plainText: true
      }
    )

    try {
      const res = await fetch('/api/sendEmail.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'delivered@resend.dev',
          to: ['chambiluquesandra@gmail.com'],
          subject: `Hi, ${name}`,
          html: finalHtml,
          text: finalText
        })
      })
      const data = await res.json()
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='d-g g-3'>
        <input
          type='text'
          required
          name='name'
          placeholder='Tu nombre *'
          className='form-control'
        />
        <input
          type='email'
          required
          name='email'
          placeholder='Email *'
          className='form-control'
        />
        <input
          type='number'
          name='phone'
          placeholder='Tu teléfono'
          className='form-control'
        />
        <textarea
          name='message'
          rows={4}
          cols={40}
          placeholder='Mensaje'
          className='form-control'
        />
        <input type='submit' placeholder='ENVIAR EMAIL' />
      </form>
    </div>
  )
}
