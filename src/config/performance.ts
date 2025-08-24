// Configurações de performance
export const PERFORMANCE_CONFIG = {
  // Debounce para scroll
  SCROLL_DEBOUNCE: 16, // ~60fps
  
  // Timeout para carregamento inicial
  INITIAL_LOAD_TIMEOUT: 100,
  
  // Lazy loading threshold
  LAZY_LOAD_THRESHOLD: 0.1,
  
  // Cache de imagens
  IMAGE_CACHE_DURATION: 5 * 60 * 1000, // 5 minutos
  
  // Debounce para mudanças de idioma
  LANGUAGE_CHANGE_DEBOUNCE: 300,
  
  // Otimizações de renderização
  RENDER_OPTIMIZATIONS: {
    // Usar React.memo para componentes
    USE_MEMO: true,
    
    // Usar useCallback para funções
    USE_CALLBACK: true,
    
    // Usar useMemo para dados computados
    USE_MEMO_FOR_DATA: true,
    
    // Lazy loading de componentes
    LAZY_LOAD_COMPONENTS: true,
  }
};

// Configurações de cache
export const CACHE_CONFIG = {
  // Cache de traduções
  TRANSLATIONS_CACHE_KEY: 'portfolio_translations',
  
  // Cache de dados do portfólio
  PORTFOLIO_DATA_CACHE_KEY: 'portfolio_data',
  
  // Cache de preferências do usuário
  USER_PREFERENCES_CACHE_KEY: 'user_preferences',
};

// Configurações de otimização de imagens
export const IMAGE_OPTIMIZATION = {
  // Qualidade das imagens
  QUALITY: 85,
  
  // Formato preferido
  PREFERRED_FORMAT: 'webp',
  
  // Fallback para navegadores antigos
  FALLBACK_FORMAT: 'png',
  
  // Tamanho máximo
  MAX_SIZE: 1024 * 1024, // 1MB
};
