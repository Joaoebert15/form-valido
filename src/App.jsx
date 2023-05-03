import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSent, setIsSent] = useState(false); // estado para rastrear o envio do formulário

  const onSubmit = (data) => {
    console.log(data); // exibe os dados do formulário no console
    setIsSent(true); // atualiza o estado para indicar que o formulário foi enviado com sucesso
  };
  return (
    <> 
    <div className='tudo'>
      <div className='nav-bar'>

        <h1>Entre em contato</h1>
       
      <div >


      </div>


     <div className='meio'>
        <div className='formps'>

        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome"
          {...register("nome", { required: true })}
        />
        {errors.nome && <p className='obrigatorio'>Nome é obrigatório</p>}

        <input
          type="email"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />
        {errors.email && <p className='obrigatorio'>E-mail é obrigatório</p>}

        <input
          type="tel"
          placeholder="Telefone"
          {...register("telefone", {
            required: true,
           
          })}
        />
        {errors.telefone && errors.telefone.type === "required" && (
          <p className='obrigatorio'>Telefone é obrigatório</p>
        )}
        
        
        <button type="submit" id='enviar'>Enviar</button>
        { isSent && <p>Enviado, agradecemos o seu contato.</p>}
      </form>
      </div>
      
    </div>

       </div>
       </div>

  <h3>Feito por Joao Ebert, uma tela bem simples de contato usando o hook form para enviar, aparecendo oque e enviado no console</h3>

    </>

  )
}

export default App
