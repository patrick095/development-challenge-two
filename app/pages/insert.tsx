import Head from 'next/head'
import styles from '../styles/Insert.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import api from '../services/api'
type newClient = {
  name: string;
  age: string;
  phone: number;
  email: string;
}

export default function Insert() {
  const [ phoneNumber, setPhone ] = useState('')
  const { register, handleSubmit, reset } = useForm()

  async function Submit({name, age, email}: newClient){
    let phone = phoneNumber.replace(/[^0-9]/gi, '')
    const data ={ name, phone, age, email }
    api.post('/', data)
    .then(res => {
      if (res.data.message === "Cliente inserido com sucesso!") {
        alert('Cliente "'+ name +'" inserido com sucesso!')
        resetForm()
      }
      else {
        alert('erro ao inserir cliente, verifique se algum dos dados já foi cadastrado.')
      }
    })
  }

  function handleChangePhone(value:string){
    let verifiedValue = value.replace(/[^0-9()-\s]/gi, '')
    let newValue = verifiedValue
    if (verifiedValue === '(') {
      newValue = ''
    }
    else if (verifiedValue.length === 1) {
      newValue = '('+verifiedValue
    }
    else if (verifiedValue.length === 3 && phoneNumber.length === 2) {
      newValue = verifiedValue+') '
    }
    else if (verifiedValue.length === 10 && phoneNumber.length === 9) {
      newValue = verifiedValue+'-'
    }
    else if (verifiedValue.length > 15) {
      //não adiciona mais caracteres
      newValue = phoneNumber
    }
    else {
      newValue = verifiedValue
    }
    setPhone(newValue)
  }

  function resetForm(){
    setPhone('')
    reset()
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Medcloudbr - Insert</title>
        <meta name="description" content="challenge two" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main className={styles.main}>
        <h1>Inserir novo cliente</h1>
        <form onSubmit={handleSubmit(Submit)}>
          <label>Nome Completo: </label>
          <input type="text" required {...register('name')} />
          <label>Idade: </label>
          <input type="number" required {...register('age')} />
          <label>Telefone: </label>
          <input type="text" value={phoneNumber} onChange={(e) => handleChangePhone(e.target.value)} required />
          <label>E-mail</label>
          <input type="email" required {...register('email')} />
          <div className={styles.formButton}>
            <button onClick={resetForm}>Limpar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </main>
    </div>
  )
}