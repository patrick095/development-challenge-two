import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../services/api'
import styles from '../styles/List.module.css'
type User = {
  name: string;
  phone: string;
  email: string;
  age: number;
}

export default function List() {
  const [ list, setList ] = useState([])
  async function getList(){
    await api.get('/')
    .then(res => {
      if (res.data.length > 0) {
        setList(res.data)
      }
      else {
        setList([])
      }
    })
  }
  useEffect(()=>{
    getList()
  },[])
  async function deleteClient(user: User){
    await api.delete('/?email='+user.email)
    .then(res => {
      res.data.message === "success" ? getList() : alert("falha ao apagar cliente, favor recarregue a página.")
      console.log(res.data)
    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Medcloudbr - List</title>
        <meta name="description" content="challenge two" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={list.length === 0 ? '' : styles.hidden}>Nenhum cliente cadastrado.</h1>
      <main className={list.length > 0 ? styles.main : styles.hidden}>
        <h1>Lista de todos os clientes salvos</h1>
        <div className={styles.Table}>
          <table className={list.length > 0 ? '' : styles.hidden}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Opção</th>
            </tr>
          </thead>
          <tbody>
            { list.map((user: User) => {
              return <tr key={user.name+user.phone}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td><button onClick={()=> deleteClient(user)}>Apagar</button></td>
              </tr>
            })}
          </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}