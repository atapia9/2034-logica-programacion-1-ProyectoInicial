# README

## ES — Español

### Propósito
Resumen del análisis de ventas realizado sobre los datos de las tiendas presentes en este repositorio y entrega de una recomendación ejecutiva y acciones priorizadas basadas en dicho análisis.

### Contenido del repositorio
- `analisis_tiendas_juan.ipynb` — Notebook principal con el análisis exploratorio, limpieza y visualizaciones.

### Resumen ejecutivo (basado en el análisis de ventas)
- Existen variaciones significativas de desempeño entre tiendas: algunas con ventas consistentes y otras con baja venta y mayor estacionalidad.
- Se identificaron SKUs/categorías de alta rotación que concentran la mayor parte de las ventas, y SKUs de baja rotación que incrementan costos de inventario.
- Hay patrones de demanda por hora y por día que permiten optimizar personal y promociones.
- Margen y volumen muestran oportunidades para priorizar productos con mayor contribución al ingreso.

### Recomendación ejecutiva (acciones priorizadas)
1. Priorizar inventario en SKUs de alta rotación y mejor margen; reducir stock en SKUs de baja rotación.
2. Dirigir campañas de marketing a tiendas y segmentos con mayor potencial (promociones segmentadas y bundles).
3. Implementar precios dinámicos en productos con elasticidad detectada; proteger precios en productos líderes.
4. Ajustar plantillas y horarios del personal según picos de demanda detectados.
5. Desplegar un dashboard de KPIs (ventas diarias, rotación de inventario, margen por SKU, conversión por tienda) para monitoreo continuo.
6. Realizar análisis de causa raíz en tiendas con bajo desempeño (ubicación, surtido, inventario y experiencia de compra) antes de inversiones mayores.

### Cómo reproducir el análisis
1. Abrir `analisis_tiendas_juan.ipynb` y/o `challenge1-data-science-latam-main/AluraStoreLatam.ipynb`.
2. Cargar los CSV desde `challenge1-data-science-latam-main/base-de-datos-challenge1-latam/`.
3. Ejecutar las celdas en un entorno Python con pandas, numpy y matplotlib/seaborn (Jupyter/JupyterLab o similar).

### Observaciones finales
- Priorizar acciones por impacto esperado y facilidad de implementación.
- Para decisiones de inversión o expansión, complementar con datos externos (competencia, demografía, tráfico peatonal).

---

## PT — Português

### Objetivo
Resumo da análise de vendas presente neste repositório e entrega de uma recomendação executiva com ações prioritárias baseadas nessa análise.

### Conteúdo do repositório
- `analisis_tiendas_juan.ipynb` — Notebook principal com análise exploratória, limpeza e visualizações.


### Resumo executivo (baseado na análise de vendas)
- Há variações significativas de desempenho entre lojas: algumas com vendas estáveis e outras com vendas baixas e maior sazonalidade.
- Identificaram-se SKUs/categorias de alta rotatividade que concentram a maior parte das vendas, e SKUs de baixa rotatividade que oneram o estoque.
- Existem padrões de demanda por horário/dia que permitem otimizar equipe e campanhas.
- Margens e volumes indicam oportunidades para priorizar produtos com maior contribuição à receita.

### Recomendação executiva (ações priorizadas)
1. Priorizar estoque em SKUs de alta rotatividade e melhor margem; reduzir SKUs de baixa demanda.
2. Direcionar marketing para lojas e segmentos com maior potencial (promoções segmentadas e bundles).
3. Implementar precificação dinâmica para produtos com elasticidade detectada; manter competitividade em produtos líderes.
4. Ajustar escala e horários da equipe conforme picos de demanda identificados.
5. Implementar um dashboard de KPIs (vendas diárias, giro de estoque, margem por SKU, conversão por loja) para monitoramento contínuo.
6. Fazer análise de causa raiz nas lojas com baixo desempenho (localização, mix de produtos, estoque, experiência) antes de grandes investimentos.

### Como reproduzir a análise
1. Abrir `analisis_tiendas_juan.ipynb` e/ou `challenge1-data-science-latam-main/AluraStoreLatam.ipynb`.
2. Carregar os CSVs que estão em `challenge1-data-science-latam-main/base-de-datos-challenge1-latam/`.
3. Recomenda-se ambiente Python com pandas, numpy e matplotlib/seaborn; executar as células na ordem apresentada.

### Observações finais
- Recomendações priorizadas por impacto e custo de implementação.
- Para decisões de maior risco, considerar análise complementar com dados externos (concorrência, demografia, tráfego).
