import styles from "./styles.module.scss"

export default function TelaLogin() {
    return(
       <>
       <section className={styles.home}>
           <div>
               <form className={styles.inicial}>
                   <h3>Login</h3>
                   <label>E-mail</label>
                   <input type="text" placeholder="Digite seu email"/>
                   <label>Senha</label>
                   <input type="password" placeholder="Digite sua senha"/>
                   <label>Esqueceu sua senha ?</label>
                   <a href="/"> <input type="submit" /> </a>
                   <label className="cad">Cadastre-se</label>

               </form>
           </div>
        </section>
       </>
    );
}