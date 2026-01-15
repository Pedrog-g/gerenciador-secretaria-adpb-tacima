import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    const {
      nome,
      data_nascimento,
      estado_civil,
      rg,
      cpf,
      nome_mae,
      nome_pai,
      nacionalidade,
      naturalidade,
      data_conversao,
      conversao_nao_recordo,
      data_batismo,
      batismo_nao_recordo,
      cargo,
      foto_url
    } = data;

    const { error } = await supabase
      .from('membros')
      .insert([
        {
          nome,
          data_nascimento,
          estado_civil,
          rg,
          cpf,
          nome_mae,
          nome_pai,
          nacionalidade,
          naturalidade,
          data_conversao,
          conversao_nao_recordo,
          data_batismo,
          batismo_nao_recordo,
          cargo,
          foto_url,
          ativo: true
        }
      ]);

    if (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro interno no servidor' })
    };
  }
}
