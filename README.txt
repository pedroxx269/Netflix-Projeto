Bloco de notas para atualização e manutencao do codigo
Inicio ( 03/12)

________________________________________________________________________________________________________________________________________________

-> Explicacao da validacao de email e senha

^ - início da string
[^\s@]+ - “qualquer coisa que NÃO seja espaço \s nem @, um ou mais caracteres”
 Isso é a parte antes do @ (ex: joao, maria, iggor.paz)

@ - o símbolo obrigatoriamente

[^\s@]+ - parte do domínio (ex: gmail, outlook, empresa)

\. - um ponto literal
(A barra é para escapar o ponto, porque ponto sozinho significa "qualquer caractere")

[^\s@]+ - parte final
(ex: com, br, com.br — mas só o primeiro nível)

$ - final da string

✔ Em resumo:

O e-mail precisa seguir o formato:
texto + @ + texto + . + texto

Exemplos válidos:

iggor@gmail.com
joao.silva@empresa.com
maria@outlook.com

Exemplos inválidos:

iggor@
@gmail.com
iggor@gmail
iggor gmail.com (espaço)

________________________________________________________________________________________________________________________________________________

validacao de senha


if (senha.length < 8) {A senha precisa ter no mínimo 8 caracteres.}

            Exemplos inválidos:

            "abc123"
            "senha1"
            "Ig2@"

if (!/[0-9]/.test(senha)) {O regex /[0-9]/ procura qualquer dígito entre 0 e 9.}

            Exemplos inválidos:

            "Senha@Forte" (não tem número)

if (!/[A-Z]/.test(senha)) {O regex /[A-Z]/ procura qualquer letra maiúscula.}

if (!/[@#$%&]/.test(senha)) {O regex permite apenas os símbolos @#$%& }

Se passou por todas as regras, retorna erro vazio
return "" {Isso significa: senha válida.}

________________________________________________________________________________________________________________________________________________
