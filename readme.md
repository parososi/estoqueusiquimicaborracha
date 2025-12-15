# 📊 Dashboard de Estoque com Análise Preditiva - Borracha

Dashboard web interativo para análise de estoque da Usiquímica do Brasil, agora com recursos ampliados para custos contábeis multimoeda e conversão automática via PTAX.

## 📋 Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Principais Recursos](#principais-recursos)
- [Fluxo de Uso](#fluxo-de-uso)
- [Estrutura de Análise](#estrutura-de-análise)
- [Tecnologias](#tecnologias)
- [Limitações](#limitações)
- [Créditos](#créditos)
- [Agradecimentos](#agradecimentos)
- [Licença](#licença)

## 🎯 Sobre o Projeto
O dashboard centraliza a leitura de planilhas de estoque, automatiza mapeamentos de colunas e entrega insights preditivos em tempo real. Com a nova camada de custos, a solução também calcula valores contábeis em BRL e USD, convertendo automaticamente via PTAX (BACEN) para comparações consistentes.

## ✨ Principais Recursos
- **Consulta PTAX em Tempo Real**: busca a última taxa USD/BRL disponível no BACEN, registra data/hora da cotação e informa status de disponibilidade.
- **Custo Contábil Multimoeda**: separa itens em BRL e USD, converte automaticamente para BRL com PTAX e destaca totais e quantidades por moeda.
- **Análise Preditiva de Estoque**: classifica itens em crítico, baixo e slow moving; estima rupturas em 30/60 dias e sugere reposição ideal.
- **Histórico e Importação Guiada**: mapeamento inteligente de colunas, debug visual, histórico de importação por aba/planilha e fallback para dados anteriores.
- **Interface Interativa**: gauges animados por família, filtros rápidos/avançados, busca global, alertas visuais e suporte responsivo.
- **Exportação e Compartilhamento**: geração de relatórios Excel/CSV com os dados filtrados; operação totalmente offline com suporte a File System API.
- **Templates e Backup Local**: gerador de template (HTML) para planilhas com colunas obrigatórias e backup automático no `localStorage`.

## 🚀 Fluxo de Uso
1. **Preparar a planilha**: inclua colunas como CÓDIGO, FORNECEDOR, FAMÍLIA, ITEM, 1-4, 90-13, 90-15, ESTOQUE EM MESES, VENDAS 3M e custos contábeis (BRL ou USD) quando disponíveis.
2. **Importar dados**: em "📊 Importar Dados da Planilha", selecione o Excel/CSV e acompanhe o mapeamento automático; ajuste manualmente se necessário.
3. **Explorar o dashboard**: use busca global, filtros rápidos (Todos/Crítico/Baixo/Slow), filtros por família/fornecedor/estabelecimento e indicadores preditivos.
4. **Avaliar custos**: acompanhe cartões de custo contábil em BRL e USD, com conversão PTAX e notas de status; confira o detalhamento por item na tabela.
5. **Exportar e compartilhar**: gere Excel/CSV com os filtros aplicados ou utilize o salvamento automático (Chrome/Edge + HTTPS) para manter backups locais.

## 📐 Estrutura de Análise
### Classificação de Estoque
```
Crítico: < 2 meses de estoque
Atenção: 2-6 meses de estoque
Bom: > 6 meses de estoque
```

### Análise Preditiva
```
Zerarão em 30 dias: 0-1 mês de estoque
Zerarão em 60 dias: 1-2 meses de estoque
Ponto de reposição ideal: 3-4 meses
```

### Métricas Calculadas
- **Estoque Total** consolidado por estabelecimento (1-4, 90-13, 90-15).
- **Cobertura** e **previsão de ruptura** com base em VENDAS 3M e média histórica.
- **Custo Contábil** segregado por moeda, com conversão PTAX para BRL e rótulos de disponibilidade.
- **Histórico de Importação** por aba de planilha, preservando colunas e totais usados no cálculo.

## 🛠 Tecnologias
- **HTML5**, **CSS3** e **JavaScript ES6+**
- **Canvas API** para gauges animados
- **SheetJS (XLSX)** para processamento de planilhas
- **File System Access API** para salvamento automático
- **Local Storage** para backup local

## ⚠️ Limitações
- A precisão depende da **qualidade e atualização** das planilhas enviadas.
- Sazonalidade e itens novos podem afetar a **previsão de ruptura**.
- **File System API** disponível somente em Chrome/Edge com HTTPS ou localhost.
- Melhor experiência em telas maiores; em mobile alguns elementos podem ser comprimidos.

## 👨‍💻 Créditos
**Desenvolvido por:** Paulo Roberto S. S. ([@Parososi](https://github.com/parososi))

## Agradecimentos
- **Usiquímica do Brasil**: Por fornecer requisitos e dados de teste
- **Comunidade Open Source**: Pelas bibliotecas SheetJS, Chart.js e outras

### Bibliotecas Utilizadas
- **SheetJS**: processamento de planilhas Excel
- **File System Access API**: salvamento automático
- **Canvas API**: gráficos e gauges personalizados

## 📄 Licença
Este projeto está sob a licença CC BY-NC-ND 4.0 (Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International). Veja o arquivo LICENSE para mais detalhes.

Resumo da Licença
✅ Usar: Para fins não comerciais
✅ Compartilhar: Com atribuição ao autor
❌ Modificar: Não são permitidas obras derivadas
❌ Comercializar: Não é permitido uso comercial
