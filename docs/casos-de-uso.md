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
|1.Insere os dados solicitados.                                    |                                                                   |
|                                                                  | 2.Valida o tipo dos dados inseridos.                              |
|                                                                  | 3.Valida o preenchimento dos dados obrigatórios.                  | |                                                                  | 4.Gera uma chave primária pro user e armazena no banco.           |
|                                                                  | 5.Apresenta na tela, confirmação da realização docadastro.        |
|6.User pode se logar usando o usuário e senha cadastrados.        |                                                                   |


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
|1.Insere os dados solicitados.                                    |                                                                   |
|2.Clica no botão cancelar                                         |                                                                   |
|                                                                  | 3.Volta a tela inicial.                                           |

### Fluxo Alternativo #2
|                         Ações do Ator	                           |                          Ações do Sistema                         |
-------------------------------------------------------------------|--------------------------------------------------------------------
|1.Insere os dados solicitados.                                    |                                                                   |
|2.Clica no botão voltar do browser                                |                                                                   |
|                                                                  | 3.Volta a tela inicial.                                           |



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

Nome : Registro de adoção  
Atores :	Usuário  
Sumário	: O usuário quer colocar seus filhotes para adoção  
Regras de Negócio :	N/D  
Pré-condições	: Estar logado na aplicação  
Pós-condição : N/D  
Pontos de Inclusão :	N/D  
Pontos de Extensão :	N/D  

### Fluxo Principal
|                         Ações do Ator	                           |                          Ações do Sistema                         |
|------------------------------------------------------------------|-------------------------------------------------------------------|
|1.Acessa o módulo de adoção.                                      |                                                                   |
|                                                                  |2.Indica os campos obrigatórios como fotos, cidade, contato e etc. |
|3.Insere todos os campos obrigatórios.                            |                                                                   |
|4.Conclui o registro.                                             |                                                                   |
|                                                                  |5.Sistema insere a adoção no "classificado".                       |
