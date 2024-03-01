import "./Rodape.css";

function Rodape() {
    // JSX
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="Facebook"/>
                        </a> 
                    </li>
                    <li>
                        <a href="X.com" target="_blank">
                            <img src="/imagens/tw.png" alt="X"/>
                        </a> 
                    </li>
                    <li>
                        <a href="Instagram.com" target="_blank">
                            <img src="/imagens/ig.png" alt="Organo"/>
                        </a> 
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Organo"/>
            </section>
            <section>
                <p>
                    Desenvolvido por Alura
                </p>
            </section>
        </footer>
    )
}

export default Rodape;