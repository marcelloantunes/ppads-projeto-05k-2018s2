### PLANO DE TESTES

| # CDU0001 - Realizar Cadastro ao Petgram  | Fluxo Principal |                                                                   
|  -------------|--------------- |            
|OBJETIVO DO TESTE:|	Verificar se o usuário consegue realizar cadastro |                         
|PROCEDIMENTOS: | 1.Acessar a página do Petgram |
| | 2.Clique para realizar cadastro |
| | 3.Digite o login a ser cadastrado | 
| | 4.Digite a senha a ser cadastrado |
| | 5.Clique em concluir   | 
|CRITÉRIOS DE ÊXITO:| Mensagem do sistema de cadastro realizado com sucesso e ser possível logar na aplicação |
|STATUS: | Passou/Falhou  |    
|FEEDBACK: |   |  

| # CDU0001 - Realizar Cadastro ao Petgram  | Fluxo de Exceção |                                                                    
|  -------------|--------------- |            
|OBJETIVO DO TESTE:|	Verificar se o usuário consegue realizar cadastro com dados inválidos |                         
|PROCEDIMENTOS: | 1.Acessar a página do Petgram |
| | 2.Clique para realizar cadastro |
| | 3.Digite o login a ser cadastrado com caracteres especiais | 
| | 4.Digite a senha a ser cadastrado |
| | 5.Clique em concluir   | 
|CRITÉRIOS DE ÊXITO:| Mensagem do sistema de erro |
|STATUS: | Passou/Falhou  |    
|FEEDBACK: |   |  

| #CDU0002 - Subir foto no feed:  |  Fluxo Principal |                                                                   
|  -------------|--------------- |            
|OBJETIVO DO TESTE:|	Verificar se o usuário consegue subir foto de seus pets |                         
|PROCEDIMENTOS: | 1.Acessar a página do Petgram já logado|
| | 2.Clique no ícone de "câmera" | 
| | 3.Selecione uma foto |
| | 4.Insira um título |
| | 5.Clique em "publicar" |
|CRITÉRIOS DE ÊXITO:| A foto selecionada deve aparecer no feed |
|STATUS: | Passou/Falhou  |
|FEEDBACK: |   |  

| #CDU0002 - Subir foto no feed:  | Fluxo Alternativo#01 |                                                                  
|  -------------|--------------- |            
|OBJETIVO DO TESTE:|	Verificar se o usuário consegue cancelar o subimento da foto |                         
|PROCEDIMENTOS: | 1.Acessar a página do Petgram já logado|
| | 2.Clique no ícone de "câmera" | 
| | 3.Selecione uma foto |
| | 4.Clique em cancelar |
|CRITÉRIOS DE ÊXITO:| A tela do feed deve aparecer SEM a foto |
|STATUS: | Passou/Falhou  |   
|FEEDBACK: |   |  

| #CDU0002 - Subir foto no feed:  | Fluxo Alternativo#02 |                                                                    
|  -------------|--------------- |            
|OBJETIVO DO TESTE:|	Verificar se o usuário consegue subir foto fora do formato de imagem |                         
|PROCEDIMENTOS: | 1.Acessar a página do Petgram já logado|
| | 2.Clique no ícone de "câmera" | 
| | 3.Selecione uma arquivo sem ser imagem |
| | 4.Clique em "selecionar" |
|CRITÉRIOS DE ÊXITO:| Nada deve acontecer |
|STATUS: | Passou/Falhou  |
|FEEDBACK: |   |  

| #CDU0003 - Interagir na foto | Fluxo Principal |                                                                   
|  -------------|--------------- |            
|OBJETIVO DO TESTE:|	Verificar se o usuário consegue comentar na foto |                         
|PROCEDIMENTOS: | 1.Acessar a página do Petgram já logado|
| | 2.Selecione em comentar em alguma foto da feed | 
| | 3.Digite qualquer comentário |
| | 4.Clique em "postar" |
|CRITÉRIOS DE ÊXITO:| O comentário deve aparecer embaixo da foto comentada |
|STATUS: | Passou/Falhou  |
|FEEDBACK: |   |  
