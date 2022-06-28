<template>
    <div class="detalhar-convenio">

        <article class="panel is-warning">
            <p class="panel-heading">
                Detalhes Convenios
            </p>
            <div class="panel-block"></div>

        </article>

        <table class="table">
            
            <tbody>

                <tr>
                    <th>Nome</th>
                    <td>Itamed</td>
                    
                </tr>

                <tr>
                    <th>Valor</th>
                    <td>R$20,00</td>
                </tr>



            </tbody>

        </table>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/convenio"><button class="button button is-link">Voltar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/cadastrar-convenio"><button class="button button is-link">Editar</button></router-link>
            </div>
             <div class="control">
                <router-link to="/convenio"><button class="button button is-link">Desativar</button></router-link>
            </div>
        </div>

    </div>

</template>