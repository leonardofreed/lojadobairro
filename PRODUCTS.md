# Produtos

## Estrutura do Produto
- Cada produto deve conter as seguintes informações:
  - **Nome:** O nome do produto.
  - **Descrição:** Uma breve descrição do produto.
  - **Preço:** O valor do produto.
  - **Disponibilidade:** Indica se o produto está disponível ou não.
  - **Valores Adicionais:** Informações sobre variações de preço, como tamanhos ou opções.
  - **Imagem:** Uma imagem do produto que deve se ajustar automaticamente ao layout.


## Exemplo de Produto
```json
{
  "nome": "Pizza Margherita",
  "descricao": "Pizza clássica com molho de tomate e queijo mozzarella.",
  "preco": 29.90,
  "disponibilidade": true,
  "valores_adicionais": {
    "tamanhos": {
      "pequena": 29.90,
      "media": 39.90,
      "grande": 49.90
    },
    "opcoes": ["sem cebola", "com extra queijo"]
  }
}
