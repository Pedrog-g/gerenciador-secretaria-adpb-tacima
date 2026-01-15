export async function handler() {
  const { data, error } = await supabase
    .from('membros')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return { statusCode: 500, body: error.message };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}