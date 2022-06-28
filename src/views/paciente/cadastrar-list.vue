<template>
    <div class="cadastrar-paciente">

        <p>Cadastro Paciente</p>
        <br>
        <div class="field">
            <label class="label">Tipo Atendimento</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Numero Cartão Convenio</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Data Vencimeto</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Convenio</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Nome</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Telefone</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Celular</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Nacionalidade</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">CPF</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">RG</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">E-mail</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Login</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Senha</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Sexo</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>



        <br>


        <div class="field is-grouped">
            <div class="control">
                <router-link to="/paciente"><button class="button button is-link">Salvar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/paciente"><button class="button button is-link">Voltar</button></router-link>
            </div>
        </div>

    </div>
</template>