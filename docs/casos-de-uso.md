# Casos de uso

## CDU001
Nome : Realizar cadastro  
Atores :	Usuário  
Sumário	: O usuário quer registrar um anúncio mas para isso é necessário se cadastrar na aplicação.  
Regras de Negócio :	N/D  
Pré-condições	: O usuário não deve estar conectado à uma conta  
Pós-condição : Armazenar os dados  
Pontos de Inclusão :	N/D  
Pontos de Extensão :	N/D  

### Fluxo Principal
|                         Ações do Ator	                           |                          Ações do Sistema                         |
-------------------------------------------------------------------|--------------------------------------------------------------------
|1.Insere o nome em campo obrigatório                              |                                                                   |
|                                                                 | 2.Valida o tipo dos dados inseridos através de Expressões Regulares|
|3.Insere o e-mail em campo obrigatório                           |                                                                   |
|                                                                 | 4.Valida o tipo dos dados inseridos através de Expressões Regulares|
|5.Insere uma senha em campo obrigatório                                                                                          |
|                                                                 | 6.Valida o tipo dos dados inseridos através de Expressões Regulares|
|                                                                  | 7.Gera uma chave primária pro user e armazena no banco.           |
|                                                                  | 8.Apresenta na tela, confirmação da realização docadastro.        |
|9.User pode se logar usando o e-mail e a senha cadastrados.        |                                                                   |


### Fluxo de Exceção #1
|                         Ações do Ator	                           |                          Ações do Sistema                         |
-------------------------------------------------------------------|--------------------------------------------------------------------
|1.Insere os dados solicitados porém não válidos.                  |                                                                   |
|                                                                  | 2.Valida o tipo dos dados inseridos.                              |
|                                                                  | 3.Apresenta uma mensagem de erro ao usuário.                      | |                                                                  | 4.O sistema limpa o(s) campo(s) errado(s).                        |
|                                                                  | 5.O fluxo volta ao passo 1 do Fluxo Principal                     |

### Fluxo Alternativo #1
|                         Ações do Ator	                           |                          Ações do Sistema                         |
-------------------------------------------------------------------|--------------------------------------------------------------------
|1.Insere os dados solicitados do Fluxo Principal.                 |                                                                   |
|2.Insere dados opcionais como Nome do Pet, Raça, Idade            |                                                                   |
|                                                          | 3.Valida o tipo dos dados inseridos através de Expressões Regulares.      |
|                                                                  | 4.Gera uma chave primária pro user e armazena no banco.           |
|                                                                  | 5.Apresenta na tela, confirmação da realização docadastro.        |
|6.User pode se logar usando o e-mail e a senha cadastrados.       |      |                        


## CDU002
Nome : Consultar veterinários  
Atores :	Usuário  
Sumário	: O usuário quer consultar algum veterinário próximo a sua localização.  
Regras de Negócio :	N/D  
Pré-condições	: N/D  
Pós-condição : N/D  
Pontos de Inclusão :	N/D  
Pontos de Extensão :	N/D  

### Fluxo Principal
|                        Ações do Ator	                          |                          Ações do Sistema                         |
|-----------------------------------------------------------------|-------------------------------------------------------------------|
|1.Acessa o módulo de consulta.                                   |                                                                   |
|                                                                 |2.Solicita permissão para utilizar o localizador gps.              |
|3.Permite que o sistema tenha acesso ao localizador.             |                                                                   |
|                                                                 |4.Sistema acessa base de dados do Google Maps através de API próprio|
|                                                                 |5.Mostra todos os veterinários próximos ao user.                   |
|6.Seleciona algum veterinário para obter mais informações.       |                                                                   |


## CDU003

Nome : Interação do "Petgram"  
Atores :	Usuário  
Sumário	: O usuário quer interagir nas fotos de outros pets como dar like/comentar  
Regras de Negócio :	N/D  
Pré-condições	: Estar logado na aplicação  
Pós-condição : N/D  
Pontos de Inclusão :	N/D  
Pontos de Extensão :	N/D  

### Fluxo Principal
|                         Ações do Ator	                           |           Ações do Sistema                   |
|------------------------------------------------------------------|----------------------------------------------|
|1.Acessa o módulo de Petgram.                                     |                                              |
|                                                                  |2.Mostra um feed com fotos de pets            |
|3.Interage dando like.                                            |                                              |
|                                                                  |4.Salva o like na foto.                       |
|5.Interage comentando na foto.                                    |                                              |
|                                                                  |6.Salva o comentário na foto e deixar visível |

