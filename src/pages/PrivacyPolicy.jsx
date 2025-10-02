import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidade - Brite</h1>
        <p className="text-sm text-gray-600 mb-8">Última atualização: 02 de outubro de 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
          <p className="text-gray-700 leading-relaxed">
            A Brite ("nós", "nosso" ou "empresa") está comprometida com a proteção da privacidade e segurança dos dados de nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações ao utilizar nossa plataforma de automatização para clínicas de saúde.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Coletamos</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.1 Informações Fornecidas Diretamente</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Dados cadastrais da clínica (nome, CNPJ, endereço, telefone)</li>
            <li>Dados dos profissionais de saúde (nome, CRM/CRO, especialidade)</li>
            <li>Dados de pacientes (nome, telefone, e-mail, histórico de agendamentos)</li>
            <li>Informações de comunicação entre clínica e pacientes</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Integração com Google Calendar</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Quando você autoriza a integração com o Google Calendar, coletamos e acessamos:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Eventos de calendário:</strong> títulos, descrições, horários, locais</li>
            <li><strong>Disponibilidade:</strong> horários livres e ocupados</li>
            <li><strong>Participantes:</strong> informações sobre convidados em eventos relacionados a consultas</li>
            <li><strong>Metadados:</strong> fuso horário, configurações de calendário</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4 mb-2"><strong>Finalidade:</strong> Utilizamos esses dados exclusivamente para:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Sincronizar agendamentos de consultas automaticamente</li>
            <li>Verificar disponibilidade de horários em tempo real</li>
            <li>Evitar conflitos de agendamento</li>
            <li>Enviar lembretes e confirmações de consultas</li>
            <li>Facilitar remarcações e cancelamentos</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Escopo limitado:</strong> Acessamos apenas os calendários que você autorizar explicitamente e somente as informações necessárias para o funcionamento do agendamento.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos Suas Informações</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Utilizamos as informações coletadas para:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Automatizar o processo de agendamento de consultas</li>
            <li>Gerenciar comunicação entre clínicas e pacientes</li>
            <li>Enviar lembretes, confirmações e follow-ups</li>
            <li>Melhorar nossos serviços e desenvolver novas funcionalidades</li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            NÃO compartilhamos seus dados de calendário com terceiros, exceto:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Quando exigido por lei ou ordem judicial</li>
            <li>Com prestadores de serviços essenciais (hospedagem, infraestrutura) sob rigorosos acordos de confidencialidade</li>
            <li>Com seu consentimento explícito</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Armazenamento e Segurança</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.1 Medidas de Segurança</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Implementamos medidas técnicas e organizacionais para proteger seus dados:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Criptografia de dados em trânsito (SSL/TLS) e em repouso</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Backups regulares e seguros</li>
            <li>Conformidade com padrões de segurança da informação</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Localização dos Dados</h3>
          <p className="text-gray-700 leading-relaxed">
            Seus dados são armazenados em servidores seguros localizados no Brasil ou em datacenters certificados de provedores de nuvem confiáveis.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.3 Retenção de Dados</h3>
          <p className="text-gray-700 leading-relaxed">
            Mantemos seus dados pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Dados de calendário sincronizados são mantidos apenas enquanto a integração estiver ativa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seus Direitos (LGPD)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Acessar seus dados pessoais que mantemos</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Excluir seus dados, exceto quando houver obrigação legal de retenção</li>
            <li>Revogar consentimento a qualquer momento</li>
            <li>Portabilidade dos dados para outro fornecedor</li>
            <li>Informações sobre uso compartilhado de dados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Revogação de Acesso ao Google Calendar</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Você pode revogar o acesso da Brite ao seu Google Calendar a qualquer momento através de:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
            <li>Acessando sua Conta Google</li>
            <li>Selecionando "Brite" na lista de aplicativos conectados</li>
            <li>Clicando em "Remover acesso"</li>
          </ol>

          <p className="text-gray-700 leading-relaxed mt-4 mb-2"><strong>Ao revogar o acesso:</strong></p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>A sincronização automática será interrompida imediatamente</li>
            <li>Dados já coletados serão mantidos conforme nossa política de retenção</li>
            <li>Você pode solicitar a exclusão completa dos dados através do nosso suporte</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Uso da API do Google</h2>
          <p className="text-gray-700 leading-relaxed">
            Nossa utilização da informação recebida das APIs do Google adere à Política de Dados de Usuário dos Serviços de API do Google, incluindo os requisitos de Uso Limitado.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies e Tecnologias Similares</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Utilizamos cookies e tecnologias similares para:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Manter sua sessão ativa</li>
            <li>Lembrar suas preferências</li>
            <li>Analisar o uso da plataforma</li>
            <li>Melhorar a experiência do usuário</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            Você pode gerenciar cookies através das configurações do seu navegador.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Menores de Idade</h2>
          <p className="text-gray-700 leading-relaxed">
            Nossos serviços são destinados a clínicas de saúde e profissionais. Não coletamos intencionalmente dados de menores de 18 anos sem consentimento dos pais ou responsáveis, exceto quando necessário para prestação de serviços de saúde.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Alterações nesta Política</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através de:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>E-mail para o endereço cadastrado</li>
            <li>Aviso destacado em nossa plataforma</li>
            <li>Atualização da data no topo deste documento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contato e DPO</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Para exercer seus direitos, esclarecer dúvidas ou reportar problemas relacionados à privacidade:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
            <p className="font-semibold mb-2">Brite - Automação para Clínicas de Saúde</p>
            <p>Website: <a href="https://bebrite.com.br" className="text-brite hover:text-brite-hover">bebrite.com.br</a></p>
            <p>E-mail: <a href="mailto:privacidade@bebrite.com.br" className="text-brite hover:text-brite-hover">privacidade@bebrite.com.br</a></p>
            <p>DPO (Encarregado de Dados): Lucas Paiva Brasil</p>
            <p>Endereço: Rua MMDC, 80 - Butantã, SP - Brasil</p>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong> Caso não esteja satisfeito com nossas respostas, você pode contatar a ANPD através do site <a href="https://www.gov.br/anpd" className="text-brite hover:text-brite-hover" target="_blank" rel="noopener noreferrer">www.gov.br/anpd</a>
          </p>
        </section>

        <section className="mb-8 bg-brite/10 p-6 rounded-lg border-l-4 border-brite">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resumo em Linguagem Simples</h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold text-gray-900 mb-1">O que fazemos:</p>
              <p>Ajudamos clínicas a automatizar agendamentos e comunicação com pacientes</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">Integração com Google Calendar:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Acessamos seu calendário apenas para sincronizar consultas</li>
                <li>Não compartilhamos esses dados com ninguém</li>
                <li>Você pode revogar o acesso quando quiser</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">Seus direitos:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Você controla seus dados</li>
                <li>Pode solicitar cópia, correção ou exclusão a qualquer momento</li>
                <li>Estamos em conformidade com a LGPD</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Dúvidas?</p>
              <p>Entre em contato conosco pelo e-mail <a href="mailto:privacidade@bebrite.com.br" className="text-brite hover:text-brite-hover font-semibold">privacidade@bebrite.com.br</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
