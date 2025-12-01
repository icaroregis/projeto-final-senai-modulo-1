export function mostrarInformacoesEmpresa(empresa) {
  let metasMensais = '';
  empresa.metaAnual.forEach((meta) => {
    metasMensais += `${meta.mes}: R$ ${meta.meta}\n`;
  });
  const totalAnual = empresa.metaAnual.reduce((total, meta) => total + meta.meta, 0);

  const template = `
=============================================================
                 📘 CADASTRO DE EMPRESA 📘
=============================================================

📌 DADOS DA EMPRESA:
🔸 Nome Fantasia: ${empresa.nomeFantasia}
🏢 Razão Social: ${empresa.razaoSocial}
🧾 CNPJ: ${empresa.cnpj}
🪪 Inscrição Estadual: ${empresa.inscricaoEstadual}
📅 Data de Fundação: ${empresa.dataFundacao}

📍 ÁREAS DE ATUAÇÃO:
${empresa.areasAtuacao.map((areas) => `✔️  ${areas.nome}`).join('\n')}

📊 METAS ANUAIS (POR MÊS):
${metasMensais}
${'-----------------------------------------------------'}
Total Anual: R$ ${totalAnual.toFixed(2)}


📍 ENDEREÇO:
🏠 Logradouro: ${empresa.endereco.logradouro}
📌 Bairro: ${empresa.endereco.bairro}
🌆 Cidade: ${empresa.endereco.cidade}
🏷️ CEP: ${empresa.endereco.cep}

📞 CONTATO:
☎️ Telefone: ${empresa.contato.telefone}
📧 E-mail: ${empresa.contato.email}
🌐 Site: ${empresa.contato.site}

=============================================================
`;
  return console.log(template);
}
