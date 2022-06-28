<template>
    <div class="detalhar-medico">

        <article class="panel is-warning">
            <p class="panel-heading">
                Detalhes Medico
            </p>
            <div class="panel-block"></div>

        </article>

        <table class="table">
            
            <tbody>

                <tr>
                    <th>CRM</th>
                    <td>CRM/SP 123456</td>
                    
                </tr>

                <tr>
                    <th>Consultorio</th>
                    <td>Odonto X</td>
                </tr>

                <tr>
                    <th>Porcentagem Participação</th>
                    <td>40%</td>
                </tr>

                <tr>
                    <th>Valor Consulta</th>
                    <td>R$150,00</td>
                </tr>

                <tr>
                    <th>Especialidade</th>
                    <td>Odontologia</td>
                </tr>

                <tr>
                    <th>Nome</th>
                    <td>Roberto</td>
                </tr>

                <tr>
                    <th>Telefone</th>
                    <td>(45)9 9999-9999</td>
                </tr>

                <tr>
                    <th>Celular</th>
                    <td>(45)9 9999-9999</td>
                </tr>

                <tr>
                    <th>Nacionalidade</th>
                    <td>Brasileiro</td>
                </tr>

                <tr>
                    <th>CPF</th>
                    <td>000.000.000-00</td>
                </tr>

                <tr>
                    <th>RG</th>
                    <td>00-000.000-0</td>
                </tr>

                <tr>
                    <th>E-mail</th>
                    <td>roberto@gmail.com</td>
                </tr>

                <tr>
                    <th>Login</th>
                    <td>roberto@gmail.com</td>
                </tr>

                <tr>
                    <th>Senha</th>
                    <td>senha</td>
                </tr>

                <tr>
                    <th>Sexo</th>
                    <td>Masculino</td>
                </tr>



            </tbody>

        </table>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/medico"><button class="button button is-link">Voltar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/cadastrar-medico"><button class="button button is-link">Editar</button></router-link>
            </div>
             <div class="control">
                <router-link to="/medico"><button class="button button is-link">Desativar</button></router-link>
            </div>
        </div>

    </div>

</template>