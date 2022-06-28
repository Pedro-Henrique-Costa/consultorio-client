<template>
    <div class="detalhar-especialidade">

        <article class="panel is-warning">
            <p class="panel-heading">
                Detalhes Convenios
            </p>
            <div class="panel-block"></div>

        </article>

        <table class="table">

            <tbody>

                <tr>
                    <th>Especialidade</th>
                    <td>Cirurgião</td>

                </tr>


            </tbody>

        </table>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/especialidade"><button class="button button is-link">Voltar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/cadastrar-especialidade"><button class="button button is-link">Editar</button>
                </router-link>
            </div>
            <div class="control">
                <router-link to="/especialidade"><button class="button button is-link">Desativar</button></router-link>
            </div>
        </div>

    </div>
</template>