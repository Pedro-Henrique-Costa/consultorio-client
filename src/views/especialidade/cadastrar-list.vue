<template>
    <div class="cadastrar-especialidade">
        <p>Cadastro Especialidade</p>
        <br>
        <div class="field">
            <label class="label">Nome da especialidade</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>


        <br>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/especialidade"><button class="button button is-link">Salvar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/especialidade"><button class="button button is-link">Voltar</button></router-link>
            </div>
        </div>

    </div>
</template>