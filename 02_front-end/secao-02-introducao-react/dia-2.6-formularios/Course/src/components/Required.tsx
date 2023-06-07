// Funções do HTML
// Uma outra forma de validar campos é utilizando o atributo required do HTML nos inputs. Ao adicionar esse atributo, o formulário não será submetido caso algum campo required esteja vazio

<label>
  Nome
  <input
    required
    // value={name}
    // onChange={({ target }) => setName(target.value)}
  />
</label>
<label>
  E-mail
  <input
    required
    // value={email}
    // onChange={({ target }) => setEmail(target.value)}
  />
</label>