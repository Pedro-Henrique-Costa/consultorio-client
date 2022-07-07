<template>
    <div class="cadastrar-convenio">
        <p>Cadastro Convenio</p>
        <br>
        <div class="field">
            <label class="label">Nome do Convenio</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Valor Convenio</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>


        <br>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/convenio"><button class="button button is-link">Salvar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/convenio"><button class="button button is-link">Voltar</button></router-link>
            </div>
        </div>
        
    </div>


</template>
