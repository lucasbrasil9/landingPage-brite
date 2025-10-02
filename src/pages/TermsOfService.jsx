import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Termos de Serviço - Brite</h1>
        <p className="text-sm text-gray-600 mb-8">Última atualização: 02 de outubro de 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Ao acessar e utilizar a plataforma Brite ("Plataforma", "Serviço" ou "Sistema"), você ("Usuário", "Cliente" ou "Clínica") concorda em cumprir e estar vinculado a estes Termos de Serviço ("Termos"). Se você não concordar com qualquer parte destes Termos, não deverá utilizar nossos serviços.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Estes Termos constituem um acordo legal entre você e a Brite Healthcare Technology Ltda. ("Brite", "nós", "nosso" ou "empresa"), CNPJ 00.000.000/0001-00, com sede na Rua MMDC, 80 - Butantã, São Paulo - SP, Brasil.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição do Serviço</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.1 Visão Geral</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            A Brite é uma plataforma de automação desenvolvida especificamente para clínicas de saúde, oferecendo:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Sistema automatizado de agendamento de consultas</li>
            <li>Integração com Google Calendar para sincronização de horários</li>
            <li>Gestão de comunicação com pacientes (lembretes, confirmações, follow-ups)</li>
            <li>Painel administrativo para gerenciamento de agendamentos</li>
            <li>Relatórios e análises de desempenho da clínica</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Disponibilidade</h3>
          <p className="text-gray-700 leading-relaxed">
            Embora nos esforcemos para manter o Serviço disponível 24/7, não garantimos disponibilidade ininterrupta. Poderemos realizar manutenções programadas, que serão comunicadas com antecedência quando possível.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cadastro e Conta</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.1 Elegibilidade</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Para utilizar a Plataforma, você deve:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Ser uma clínica de saúde legalmente registrada no Brasil</li>
            <li>Ter capacidade legal para celebrar contratos</li>
            <li>Fornecer informações verdadeiras, completas e atualizadas</li>
            <li>Ter autorização para representar a clínica</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.2 Segurança da Conta</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Você é responsável por:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Manter a confidencialidade de suas credenciais de acesso</li>
            <li>Todas as atividades realizadas através de sua conta</li>
            <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
            <li>Garantir que apenas pessoas autorizadas acessem sua conta</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.3 Suspensão de Conta</h3>
          <p className="text-gray-700 leading-relaxed">
            Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos, estejam inativas por período prolongado, ou apresentem atividades suspeitas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Planos e Pagamento</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">4.1 Planos Disponíveis</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Oferecemos diferentes planos de assinatura conforme detalhado em nossa página de preços. Os planos podem incluir:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Plano Básico: funcionalidades essenciais para clínicas pequenas</li>
            <li>Plano Profissional: recursos avançados para clínicas em crescimento</li>
            <li>Plano Enterprise: solução completa para grandes clínicas</li>
            <li>Plano Trial: período de teste gratuito (quando disponível)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2 Cobrança e Renovação</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>As cobranças são realizadas mensalmente ou anualmente, conforme plano escolhido</li>
            <li>A renovação é automática, salvo cancelamento prévio</li>
            <li>Os preços podem ser alterados mediante aviso prévio de 30 dias</li>
            <li>Você receberá faturas por e-mail para cada cobrança realizada</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.3 Formas de Pagamento</h3>
          <p className="text-gray-700 leading-relaxed">
            Aceitamos cartões de crédito, boleto bancário e PIX. Você deve manter informações de pagamento válidas em sua conta.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.4 Política de Reembolso</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Período de teste: reembolso integral se cancelado nos primeiros 7 dias</li>
            <li>Após período de teste: reembolsos serão analisados caso a caso</li>
            <li>Não há reembolso proporcional em caso de cancelamento durante o ciclo</li>
            <li>Problemas técnicos que impeçam o uso podem gerar créditos ou reembolsos</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.5 Atraso de Pagamento</h3>
          <p className="text-gray-700 leading-relaxed">
            Em caso de inadimplência, sua conta poderá ser suspensa após 7 dias do vencimento. A reativação ocorrerá automaticamente após a regularização do pagamento.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Integração com Google Calendar</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.1 Autorização</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Ao conectar sua conta Google, você autoriza a Brite a:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Ler eventos de calendário para verificar disponibilidade</li>
            <li>Criar eventos de calendário para novos agendamentos</li>
            <li>Atualizar eventos existentes relacionados a consultas</li>
            <li>Excluir eventos quando consultas forem canceladas</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Limitações</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            A integração está sujeita aos Termos de Serviço do Google. Você reconhece que:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Problemas na API do Google podem afetar funcionalidades</li>
            <li>Alterações nas políticas do Google podem exigir adaptações</li>
            <li>A Brite não é responsável por falhas no serviço do Google</li>
            <li>Você pode revogar o acesso a qualquer momento</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.3 Responsabilidade</h3>
          <p className="text-gray-700 leading-relaxed">
            Você é responsável por garantir que as configurações de seu Google Calendar estejam corretas e que a integração esteja funcionando adequadamente. Recomendamos verificação periódica de sincronização.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Uso Aceitável</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">6.1 Usos Permitidos</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Você pode utilizar a Plataforma para:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Gerenciar agendamentos de sua clínica de saúde</li>
            <li>Comunicar-se com pacientes sobre consultas</li>
            <li>Analisar dados operacionais de sua clínica</li>
            <li>Integrar com ferramentas autorizadas</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">6.2 Usos Proibidos</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            É expressamente proibido:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Fazer engenharia reversa, descompilar ou desmontar o software</li>
            <li>Revender, sublicenciar ou transferir o acesso a terceiros</li>
            <li>Usar a Plataforma para fins ilegais ou não autorizados</li>
            <li>Enviar spam, malware ou conteúdo malicioso</li>
            <li>Sobrecarregar ou interferir na infraestrutura do sistema</li>
            <li>Coletar dados de outros usuários sem autorização</li>
            <li>Criar contas falsas ou fornecer informações fraudulentas</li>
            <li>Violar direitos de propriedade intelectual da Brite ou terceiros</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">6.3 Consequências</h3>
          <p className="text-gray-700 leading-relaxed">
            Violações desta seção podem resultar em suspensão imediata da conta, encerramento do serviço sem reembolso e ações legais cabíveis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Propriedade Intelectual</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.1 Propriedade da Brite</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Todos os direitos, títulos e interesses sobre a Plataforma são de propriedade exclusiva da Brite, incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Código-fonte, design e arquitetura do sistema</li>
            <li>Marcas, logos e identidade visual</li>
            <li>Documentação, tutoriais e materiais de suporte</li>
            <li>Algoritmos, métodos e processos proprietários</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">7.2 Seus Dados</h3>
          <p className="text-gray-700 leading-relaxed">
            Você mantém todos os direitos sobre os dados que insere na Plataforma. Ao utilizar o Serviço, você nos concede licença limitada para processar esses dados exclusivamente para fornecer o Serviço.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">7.3 Feedback</h3>
          <p className="text-gray-700 leading-relaxed">
            Sugestões, comentários ou feedback fornecidos voluntariamente poderão ser utilizados pela Brite sem qualquer obrigação de compensação ou atribuição.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacidade e Proteção de Dados</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">8.1 Política de Privacidade</h3>
          <p className="text-gray-700 leading-relaxed">
            Nossa coleta, uso e proteção de dados pessoais são regidos por nossa <a href="/privacy-policy" className="text-brite hover:text-brite-hover font-semibold">Política de Privacidade</a>, que faz parte integrante destes Termos.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">8.2 Conformidade com LGPD</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Operamos em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Você, como controlador de dados de seus pacientes, deve:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Obter consentimento adequado de pacientes quando necessário</li>
            <li>Garantir que tem base legal para processar dados de pacientes</li>
            <li>Informar pacientes sobre o uso da plataforma Brite</li>
            <li>Atender solicitações de direitos de titulares (acesso, correção, exclusão)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">8.3 Papel da Brite</h3>
          <p className="text-gray-700 leading-relaxed">
            A Brite atua como operadora de dados, processando informações sob suas instruções. Implementamos medidas técnicas e organizacionais para proteger dados pessoais conforme determinado pela LGPD.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitação de Responsabilidade</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">9.1 Isenção de Garantias</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            O Serviço é fornecido "como está" e "conforme disponível". Não garantimos que:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>O Serviço será ininterrupto, livre de erros ou seguro</li>
            <li>Os resultados obtidos serão precisos ou confiáveis</li>
            <li>Defeitos serão corrigidos em prazo específico</li>
            <li>O Serviço atenderá todas as suas expectativas</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">9.2 Limitação de Danos</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Na máxima extensão permitida por lei, a Brite não será responsável por:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Danos indiretos, incidentais, especiais ou consequenciais</li>
            <li>Perda de lucros, receitas ou dados</li>
            <li>Interrupção de negócios</li>
            <li>Custos de aquisição de produtos ou serviços substitutos</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">9.3 Valor Máximo</h3>
          <p className="text-gray-700 leading-relaxed">
            Nossa responsabilidade total, independentemente da causa de ação, não excederá o valor pago por você nos 12 meses anteriores ao evento que originou a reclamação, limitado a R$ 10.000,00.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">9.4 Exceções</h3>
          <p className="text-gray-700 leading-relaxed">
            Estas limitações não se aplicam a danos causados por dolo ou culpa grave da Brite, nem a responsabilidades que não possam ser legalmente limitadas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indenização</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Você concorda em indenizar e isentar a Brite, seus diretores, funcionários e parceiros de quaisquer reclamações, perdas, danos, responsabilidades e despesas (incluindo honorários advocatícios) decorrentes de:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Seu uso inadequado da Plataforma</li>
            <li>Violação destes Termos</li>
            <li>Violação de direitos de terceiros</li>
            <li>Dados e conteúdo que você fornece ou gerencia</li>
            <li>Suas relações com pacientes e terceiros</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Rescisão</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">11.1 Cancelamento pelo Usuário</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Você pode cancelar sua assinatura a qualquer momento através do painel administrativo ou entrando em contato com nosso suporte. O cancelamento terá efeito:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Ao final do período de faturamento atual (sem reembolso proporcional)</li>
            <li>Você continuará tendo acesso até o fim do período pago</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">11.2 Cancelamento pela Brite</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Podemos suspender ou encerrar seu acesso imediatamente, sem aviso prévio, em caso de:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Violação destes Termos</li>
            <li>Inadimplência superior a 30 dias</li>
            <li>Uso fraudulento ou ilegal da Plataforma</li>
            <li>Risco à segurança ou integridade do sistema</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">11.3 Efeitos da Rescisão</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Após o encerramento:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Seu acesso à Plataforma será imediatamente revogado</li>
            <li>Você terá 30 dias para exportar seus dados</li>
            <li>Após 30 dias, seus dados poderão ser permanentemente excluídos</li>
            <li>Backups de segurança podem ser mantidos conforme obrigações legais</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Modificações dos Termos</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Reservamos o direito de modificar estes Termos a qualquer momento. Mudanças significativas serão comunicadas através de:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Notificação por e-mail com 30 dias de antecedência</li>
            <li>Aviso destacado na Plataforma</li>
            <li>Atualização da data no topo deste documento</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            O uso continuado da Plataforma após as alterações constitui aceitação dos novos Termos. Se você não concordar com as mudanças, deve cancelar sua assinatura antes que entrem em vigor.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Disposições Gerais</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">13.1 Lei Aplicável</h3>
          <p className="text-gray-700 leading-relaxed">
            Estes Termos são regidos pelas leis da República Federativa do Brasil, sem aplicação de conflito de leis.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">13.2 Foro</h3>
          <p className="text-gray-700 leading-relaxed">
            Fica eleito o foro da Comarca de São Paulo, Estado de São Paulo, Brasil, para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">13.3 Independência das Cláusulas</h3>
          <p className="text-gray-700 leading-relaxed">
            Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">13.4 Acordo Integral</h3>
          <p className="text-gray-700 leading-relaxed">
            Estes Termos, juntamente com a Política de Privacidade, constituem o acordo integral entre você e a Brite, substituindo quaisquer acordos anteriores.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">13.5 Cessão</h3>
          <p className="text-gray-700 leading-relaxed">
            Você não pode transferir ou ceder seus direitos sob estes Termos sem nosso consentimento prévio por escrito. A Brite pode ceder estes Termos a qualquer momento.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">13.6 Força Maior</h3>
          <p className="text-gray-700 leading-relaxed">
            Não seremos responsáveis por falhas ou atrasos causados por circunstâncias fora de nosso controle razoável, incluindo desastres naturais, guerras, pandemias, greves ou falhas em infraestrutura de internet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Suporte e Contato</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">14.1 Canais de Suporte</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Oferecemos suporte através de:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>E-mail:</strong> suporte@bebrite.com.br</li>
            <li><strong>Chat:</strong> Disponível no painel administrativo (horário comercial)</li>
            <li><strong>Central de Ajuda:</strong> Artigos e tutoriais em bebrite.com.br/ajuda</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">14.2 Horário de Atendimento</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Suporte técnico: Segunda a sexta, 9h às 18h (horário de Brasília)</li>
            <li>Emergências críticas: Contato prioritário para planos Enterprise</li>
            <li>Tempo de resposta: Até 24 horas úteis</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">14.3 Informações de Contato</h3>
          <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
            <p className="font-semibold mb-2">Brite Healthcare Technology Ltda.</p>
            <p>CNPJ: 00.000.000/0001-00</p>
            <p>Endereço: Rua MMDC, 80 - Butantã, São Paulo - SP, 05510-021</p>
            <p>Website: <a href="https://bebrite.com.br" className="text-brite hover:text-brite-hover">bebrite.com.br</a></p>
            <p>E-mail geral: <a href="mailto:contato@bebrite.com.br" className="text-brite hover:text-brite-hover">contato@bebrite.com.br</a></p>
            <p>E-mail jurídico: <a href="mailto:juridico@bebrite.com.br" className="text-brite hover:text-brite-hover">juridico@bebrite.com.br</a></p>
            <p>Telefone: +55 (11) 3456-7890</p>
          </div>
        </section>

        <section className="mb-8 bg-brite/10 p-6 rounded-lg border-l-4 border-brite">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resumo em Linguagem Simples</h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold text-gray-900 mb-1">O que você pode fazer:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Usar a Brite para gerenciar agendamentos da sua clínica</li>
                <li>Conectar com Google Calendar</li>
                <li>Cancelar quando quiser (válido até o fim do período pago)</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">O que você não pode fazer:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Compartilhar sua conta com outras clínicas</li>
                <li>Usar para fins ilegais</li>
                <li>Copiar ou revender nosso sistema</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">Sobre pagamento:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Renovação automática (você pode cancelar)</li>
                <li>Reembolso nos primeiros 7 dias</li>
                <li>Conta suspensa após 7 dias de atraso</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">Seus dados:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Você é dono dos seus dados</li>
                <li>30 dias para exportar após cancelamento</li>
                <li>Veja mais na <a href="/privacy-policy" className="text-brite hover:text-brite-hover font-semibold">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Precisa de ajuda?</p>
              <p>Entre em contato pelo e-mail <a href="mailto:suporte@bebrite.com.br" className="text-brite hover:text-brite-hover font-semibold">suporte@bebrite.com.br</a> ou use o chat no painel administrativo.</p>
            </div>
          </div>
        </section>

        <div className="mt-8 pt-6 border-t border-gray-300">
          <p className="text-sm text-gray-600 text-center">
            Ao utilizar a plataforma Brite, você reconhece que leu, compreendeu e concorda em estar vinculado a estes Termos de Serviço.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
