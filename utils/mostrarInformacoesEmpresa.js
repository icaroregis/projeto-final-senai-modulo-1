export function mostrarInformacoesEmpresa(empresa) {
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
${empresa.areasAtuacao.map((a) => `✔️ ${a}`).join('\n')}

📊 METAS ANUAIS (POR MÊS):
Janeiro: R$ ${empresa.metas.janeiro}
Fevereiro: R$ ${empresa.metas.fevereiro}
Março: R$ ${empresa.metas.marco}
Abril: R$ ${empresa.metas.abril}
Maio: R$ ${empresa.metas.maio}
Junho: R$ ${empresa.metas.junho}
Julho: R$ ${empresa.metas.julho}
Agosto: R$ ${empresa.metas.agosto}
Setembro: R$ ${empresa.metas.setembro}
Outubro: R$ ${empresa.metas.outubro}
Novembro: R$ ${empresa.metas.novembro}
Dezembro: R$ ${empresa.metas.dezembro}

Total Anual: R$ ${empresa.totalAnual}

📍 ENDEREÇO:
🏠 ${empresa.endereco.logradouro}
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
