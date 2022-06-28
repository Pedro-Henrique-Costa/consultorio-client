<template>
    <div class="detalhar-paciente">

        <article class="panel is-warning">
            <p class="panel-heading">
                Detalhes Paciente
            </p>
            <div class="panel-block"></div>

        </article>

        <table class="table">
            
            <tbody>

                <tr>
                    <th>Tipo Atendimento</th>
                    <td>Particular</td>
                    
                </tr>

                <tr>
                    <th>Numero Cartão Convenio</th>
                    <td>Sem Convenio</td>
                </tr>

                <tr>
                    <th>Data Vencimento</th>
                    <td>Sem Convenio</td>
                </tr>

                <tr>
                    <th>Convenio</th>
                    <td>Sem Convenio</td>
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
                <router-link to="/paciente"><button class="button button is-link">Voltar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/cadastrar-paciente"><button class="button button is-link">Editar</button></router-link>
            </div>
             <div class="control">
                <router-link to="/paciente"><button class="button button is-link">Desativar</button></router-link>
            </div>
        </div>

    </div>
</template>