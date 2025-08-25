// Configurações do Dashboard de Estoque
// Edite este arquivo para personalizar o comportamento do sistema

window.dashboardConfig = {
    // Configurações da empresa
    company: {
        name: "USIQUÍMICA",
        logo: "U",
        title: "Dashboard de Estoque com Análise Preditiva"
    },

    // Configurações dos estabelecimentos
    establishments: {
        "1-4": {
            name: "GUARULHOS",
            code: "1-4",
            city: "Guarulhos",
            state: "SP",
            color: "#1F448C"
        },
        "90-13": {
            name: "ITAJAÍ", 
            code: "90-13",
            city: "Itajaí",
            state: "SC",
            color: "#2196F3"
        },
        "90-15": {
            name: "GARUVA",
            code: "90-15", 
            city: "Garuva",
            state: "SC",
            color: "#4CAF50"
        }
    },

    // Níveis de estoque para classificação
    stockLevels: {
        critical: 2,    // Menos de 2 meses = crítico (vermelho)
        warning: 6,     // Entre 2 e 6 meses = atenção (amarelo)
        good: 6,        // Mais de 6 meses = bom (verde)
        reorderPoint: 3 // Ponto ideal de reposição em meses
    },

    // Configurações de análise preditiva
    predictions: {
        urgentDays: 30,     // Alertas para produtos zerando em 30 dias
        warningDays: 60,    // Alertas para produtos zerando em 60 dias
        maxGaugeValue: 12,  // Valor máximo nos gauges (meses)
        showReorderPoint: true // Mostrar sugestão de ponto de reposição
    },

    // Mapeamento de colunas para importação de planilhas
    columnMappings: {
        code: ['CODIGO', 'CÓDIGO', 'CODE', 'COD', 'ITEM CODE'],
        supplier: ['FORNECEDOR', 'SUPPLIER', 'VENDOR', 'FABRICANTE'],
        family: ['FAMILIA', 'FAMÍLIA', 'FAMILY', 'FAM', 'CATEGORIA', 'CATEGORY'],
        item: ['ITEM', 'PRODUTO', 'PRODUCT', 'NOME', 'DESCRIPTION', 'DESCRIÇÃO'],
        stock14: ['1-4', '1_4', 'STOCK14', 'EST_1_4', 'ESTOQUE 1-4', 'GUARULHOS', 'FILIAL 1'],
        stock9013: ['90-13', '90_13', 'STOCK9013', 'EST_90_13', 'ESTOQUE 90-13', 'ITAJAI', 'ITAJAÍ', 'FILIAL 2'],
        stock9015: ['90-15', '90_15', 'STOCK9015', 'EST_90_15', 'ESTOQUE 90-15', 'GARUVA', 'FILIAL 3'],
        stockMonths: ['ESTOQUE EM MESES', 'ESTOQUE_EM_MESES', 'STOCKMONTHS', 'MESES', 'STOCK_MONTHS', 'DURAÇÃO']
    },

    // Configurações de interface
    ui: {
        // Cores do tema
        colors: {
            primary: "#1F448C",
            secondary: "#2196F3", 
            success: "#4CAF50",
            warning: "#FF9800",
            danger: "#F44336",
            info: "#2196F3"
        },

        // Configurações da tabela
        table: {
            maxHeight: "600px",        // Altura máxima da tabela
            fontSize: "13px",          // Tamanho da fonte
            rowsPerPageOptions: [25, 50, 100, 'All'], // Opções de paginação
            defaultRowsPerPage: 50     // Linhas por página padrão
        },

        // Configurações dos gauges
        gauges: {
            animationDuration: 1000,   // Duração da animação em ms
            delayBetween: 200,         // Delay entre animações dos gauges
            showAnimation: true,       // Habilitar animações
            showValues: true,          // Mostrar valores nos gauges
            showLabels: true           // Mostrar labels nos gauges
        },

        // Configurações de busca
        search: {
            placeholder: "🔍 Buscar por código ou nome do produto...",
            highlightResults: true,    // Destacar resultados da busca
            searchDelay: 300,          // Delay para busca em ms
            minSearchLength: 1         // Mínimo de caracteres para buscar
        }
    },

    // Configurações de exportação
    export: {
        defaultFormat: "xlsx",         // Formato padrão (xlsx ou csv)
        includeTimestamp: true,        // Incluir timestamp no nome do arquivo
        includeFilters: true,          // Incluir informações dos filtros aplicados
        dateFormat: "YYYY-MM-DD",      // Formato da data no nome do arquivo
        
        // Colunas para exportação
        columns: {
            'CÓDIGO': 'code',
            'FORNECEDOR': 'supplier', 
            'FAMÍLIA': 'family',
            'ITEM': 'item',
            'ESTOQUE 1-4': 'stock14',
            'ESTOQUE 90-13': 'stock9013',
            'ESTOQUE 90-15': 'stock9015',
            'TOTAL ESTOQUE': 'totalStock', // Calculado
            'ESTOQUE EM MESES': 'stockMonths',
            'PREVISÃO': 'prediction',      // Calculado
            'STATUS': 'status'             // Calculado
        }
    },

    // Configurações de dados
    data: {
        autoSave: true,                // Salvar automaticamente no localStorage
        backupBeforeImport: true,      // Criar backup antes de importar
        maxBackups: 5,                 // Máximo de backups a manter
        validateOnImport: true,        // Validar dados ao importar
        
        // Campos obrigatórios para validação
        requiredFields: ['code', 'supplier', 'family', 'item'],
        
        // Campos numéricos (para validação)
        numericFields: ['stock14', 'stock9013', 'stock9015', 'stockMonths']
    },

    // Mensagens personalizáveis
    messages: {
        noData: "⚠️ Nenhum dado encontrado. Importe uma planilha ou carregue dados de exemplo.",
        importSuccess: "✅ Dados importados com sucesso! {count} produtos carregados.",
        importError: "❌ Erro ao processar arquivo: {error}",
        exportSuccess: "✅ Dados exportados com sucesso!",
        updateSuccess: "✅ Dashboard atualizado com sucesso!",
        downloadDataSuccess: "💾 Arquivo data.js baixado! Substitua o arquivo na pasta compartilhada.",
        noFileSelected: "❌ Por favor, selecione um arquivo primeiro.",
        invalidFile: "❌ Formato de arquivo não suportado.",
        noValidProducts: "❌ Nenhum produto válido encontrado na planilha."
    },

    // Configurações de performance
    performance: {
        enableAnimations: true,        // Habilitar animações (pode desabilitar em PCs antigos)
        updateDelay: 100,             // Delay para atualizações da UI em ms
        maxProductsForAnimation: 1000, // Máximo de produtos para mostrar animações
        lazyLoadGauges: false,        // Carregar gauges sob demanda (experimental)
        useWebWorkers: false          // Usar Web Workers para cálculos (experimental)
    },

    // Configurações específicas do modo offline
    offline: {
        showOfflineNotice: true,       // Mostrar aviso de modo offline
        enableLocalStorage: true,      // Usar localStorage como backup
        autoDownloadData: false,       // Baixar data.js automaticamente após importar
        shareInstructions: true        // Mostrar instruções de compartilhamento
    },

    // Configurações de desenvolvimento/debug
    debug: {
        enableConsoleLog: false,       // Habilitar logs no console
        showPerformanceMetrics: false, // Mostrar métricas de performance
        enableErrorReporting: true,    // Habilitar relatório de erros
        verboseImport: false          // Logs detalhados durante importação
    }
};

// Função para aplicar configurações personalizadas
window.applyConfig = function(customConfig) {
    if (customConfig && typeof customConfig === 'object') {
        // Merge das configurações personalizadas
        window.dashboardConfig = Object.assign({}, window.dashboardConfig, customConfig);
        
        if (window.dashboardConfig.debug.enableConsoleLog) {
            console.log('📊 Configurações aplicadas:', window.dashboardConfig);
        }
    }
};

// Função para obter configuração específica
window.getConfig = function(path) {
    const keys = path.split('.');
    let current = window.dashboardConfig;
    
    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = current[key];
        } else {
            return undefined;
        }
    }
    
    return current;
};

// Exemplo de como personalizar configurações específicas da empresa:
/*
window.applyConfig({
    company: {
        name: "SUA EMPRESA",
        logo: "SE",
        title: "Dashboard Personalizado"
    },
    stockLevels: {
        critical: 1,    // Mudar para 1 mês
        warning: 3,     // Mudar para 3 meses
        good: 3         // Mudar para mais de 3 meses
    }
});
*/