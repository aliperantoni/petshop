import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { api, busca } from '../../../api/api';
import { useParams, useHistory } from 'react-router-dom';

const FormSubCategoria = () => {
  let history = useHistory();
  const parametros = useParams();

  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [subcategorias, setSubCategorias] = useState([]);
  const [subCategoria1, setSubCategoria1] = useState([]);
  const [subCategoria2, setSubCategoria2] = useState([]);

  useEffect(() => {
    busca(`/categorias/${parametros.id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [parametros]);

  useEffect(() => {
    if (parametros.id) {
      api
        .get(`categorias/${parametros.id}`)
        .then((resposta) => setNomeCategoria(resposta.data.nome));
    }
  }, [parametros]);

  const CadCategoria = (evento) => {
    evento.preventDefault();
    if (parametros.id) {
      api
        .put(`/categorias/${parametros.id}/`, {
          id: nomeCategoria,
          nome: nomeCategoria,
          subcategorias: [subCategoria1, subCategoria2],
        })
        .then(() => {
          alert('Sucesso na atualização!');
          history.push('/admin/');
        });
    }
  };

  return (
    <main className='container flex flex--centro'>
      <article className='cartao post'>
        <h3 className='titulo-pagina'>
          Categoria:
          {parametros.id} / Subcategorias:
        </h3>
        {subcategorias.map((subcategoria) => (
          <p key={subcategoria.id}>- {subcategoria}</p>
        ))}

        <form onSubmit={CadCategoria}>
          <TextField
            value={subCategoria1}
            onChange={(evento) => setSubCategoria1(evento.target.value)}
            id='outlined-basic'
            label='Subcategoria 1'
            variant='filled'
            fullWidth
            required
          />
          <br />
          <TextField
            value={subCategoria2}
            onChange={(evento) => setSubCategoria2(evento.target.value)}
            id='outlined-basic'
            label='Subcategoria 2'
            variant='filled'
            fullWidth
            sx={{ marginTop: 2 }}
          />
          <br />
          <Button
            type='submit'
            variant='contained'
            sx={{ marginTop: 2 }}
            fullWidth
          >
            Salvar
          </Button>
        </form>
      </article>
    </main>
  );
};

export default FormSubCategoria;
