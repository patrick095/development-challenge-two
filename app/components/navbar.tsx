import Image from 'next/image'
import styles from './styles.module.css'
import SearchIcon from '@material-ui/icons/Search'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../services/api'

type Client = {
    name: string;
    age: string;
    phone: number;
    email: string;
  }

export default function Navbar(): JSX.Element{
    const [ search, setSearch ] = useState('')
    const [ searchResult, setResult ] = useState<Client[]>([])
    const [ searchMessage, setMessage ] = useState('nenhum cliente encontrado')
    const { pathname } = useRouter()

    
    function resetSearch(){
        setResult([])
        setMessage('nenhum cliente encontrado')
    }
    useEffect(()=>{
        if (search.length > 0) {
            setMessage('carregando...')
            api.get('/find?name='+search)
            .then( res => {
                if (res.data.length > 0) {
                    setResult(res.data)
                }
                else {
                    resetSearch()
                }
            })
        }
        else {
            resetSearch()
        }
    },[search])
    
    return (
        <div className={styles.Navbar}> 
        <div className={styles.options}>
        <Image src="https://medcloud.link/svgs/medcloud.svg" alt="logo" width="218px" height="47px" />
        <Link href="/">
            <a className={pathname === '/'? styles.active: ''}>Home</a>
        </Link>
        <Link href="/insert">
            <a className={pathname === '/insert'? styles.active: ''}>Inserir</a>
        </Link>
        <Link href="/list">
            <a className={pathname === '/list'? styles.active: ''}>Listar</a>
        </Link>
        </div>
        <div className={styles.finder}>
        <SearchIcon />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar cliente" />
        <div className={search.length > 0 ? styles.searchResult : styles.hidden}>
        <span className={searchResult.length === 0 ? styles.searchMessage: styles.hidden}>{searchMessage}</span>
        {searchResult.map(client => 
        <span key={client.phone} className={styles.searchMessage}>{ client.name }</span>
        )}
        </div>
        </div>
        </div>
    )
}