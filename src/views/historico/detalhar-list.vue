<template>
    <div class="detalhar-historico">

        <article class="panel is-warning">
            <p class="panel-heading">
                Detalhes Historico
            </p>
            <div class="panel-block"></div>

        </article>

        <table class="table">
            
            <tbody>

                <tr>
                    <th>Status Agendamento</th>
                    <td>Compareceu</td>
                    
                </tr>

                <tr>
                    <th>Observação</th>
                    <td>Paciente em tratamento</td>
                </tr>

                <tr>
                    <th>Secretaria</th>
                    <td>Claudia Virginia</td>
                </tr>

                <tr>
                    <th>Paciente</th>
                    <td>João da Silva</td>
                </tr>

                <tr>
                    <th>Agenda</th>
                    <td>1</td>
                </tr>



            </tbody>

        </table>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/historico"><button class="button button is-link">Voltar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/cadastrar-historico"><button class="button button is-link">Editar</button></router-link>
            </div>
             <div class="control">
                <router-link to="/historico"><button class="button button is-link">Desativar</button></router-link>
            </div>
        </div>

    </div>
</template>