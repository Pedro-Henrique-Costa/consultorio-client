<template>
    <div class="detalhar-agendamento">
        <article class="panel is-warning">
            <p class="panel-heading">
                Detalhes Agendamento
            </p>
            <div class="panel-block"></div>

        </article>

        <table class="table">

            <tbody>

                <tr>
                    <th>Status</th>
                    <td>Compareceu</td>

                </tr>

                <tr>
                    <th>Data de</th>
                    <td>28/06</td>
                </tr>

                <tr>
                    <th>Data ate</th>
                    <td>30/06</td>
                </tr>

                <tr>
                    <th>Encaixe</th>
                    <td>Falso</td>
                </tr>

                <tr>
                    <th>Paciente</th>
                    <td>João da Silva</td>
                </tr>

                <tr>
                    <th>Secretaria</th>
                    <td>Francisca de Souza</td>
                </tr>

                <tr>
                    <th>Medico</th>
                    <td>Gustavo Gomes</td>
                </tr>



            </tbody>

        </table>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/agendamento"><button class="button button is-link">Voltar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/cadastrar-agendamento"><button class="button button is-link">Editar</button>
                </router-link>
            </div>
            <div class="control">
                <router-link to="/agendamento"><button class="button button is-link">Desativar</button></router-link>
            </div>
        </div>


    </div>

</template>