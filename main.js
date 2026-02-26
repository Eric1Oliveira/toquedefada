// ============================================
// TOQUE DE FADA — Interactive Features (Full)
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // PRODUCT DATABASE (defaults — overridden by Supabase)
  // ============================================
  const DEFAULT_PRODUCTS = {
    'anel-solitario': {
      id: 'anel-solitario',
      name: 'Anel Solitário',
      category: 'Prata 925',
      categorySlug: 'prata-925',
      price: 149.90,
      oldPrice: null,
      description: 'Anel solitário em prata 925 legítima com acabamento em rose gold. Design delicado e sofisticado, perfeito para uso diário ou ocasiões especiais. Pedra central em zircônia cristal com brilho incomparável.',
      rating: 4.9,
      reviews: 48,
      badge: 'NOVO',
      images: ['linear-gradient(135deg, #E8E0F0, #D4C6E8)'],
      reviewsList: [
        { author: 'Ana L.', rating: 5, text: 'Anel lindo! A prata é de excelente qualidade e o brilho é incrível.', date: '12/01/2026' },
        { author: 'Carla M.', rating: 5, text: 'Perfeito! Combina com tudo. Embalagem impecável!', date: '08/01/2026' },
        { author: 'Beatriz S.', rating: 4, text: 'Muito bonito, mas achei um pouco apertado. Recomendo pedir um número maior.', date: '03/01/2026' }
      ]
    },
    'brincos-rosa': {
      id: 'brincos-rosa',
      name: 'Brincos Rosa',
      category: 'Prata 925',
      categorySlug: 'prata-925',
      price: 89.90,
      oldPrice: null,
      description: 'Par de brincos em prata 925 com banho rose gold e pedras em quartzo rosa. Leves e confortáveis para uso prolongado. Fecho tipo tarraxa de silicone para maior segurança.',
      rating: 4.8,
      reviews: 32,
      badge: null,
      images: ['linear-gradient(135deg, var(--rosa-claro), var(--rosa-suave))'],
      reviewsList: [
        { author: 'Fernanda R.', rating: 5, text: 'Amei! São delicados e super leves. Uso todos os dias.', date: '10/01/2026' },
        { author: 'Raquel P.', rating: 5, text: 'Presente perfeito! Minha mãe adorou.', date: '05/01/2026' }
      ]
    },
    'batom-glow': {
      id: 'batom-glow',
      name: 'Batom Glow',
      category: 'Maquiagem',
      categorySlug: 'maquiagem',
      price: 55.90,
      oldPrice: 69.90,
      description: 'Batom líquido com acabamento glow e longa duração (até 12h). Fórmula hidratante com ácido hialurônico e vitamina E. Textura aveludada e alta pigmentação. Cruelty-free.',
      rating: 4.7,
      reviews: 67,
      badge: '-20%',
      images: ['linear-gradient(135deg, #FDE8EC, #F9CDD3)'],
      reviewsList: [
        { author: 'Juliana C.', rating: 5, text: 'Melhor batom que já usei! A textura é incrível e dura o dia todo.', date: '11/01/2026' },
        { author: 'Patricia A.', rating: 4, text: 'Cor linda, mas precisa reaplicar depois do almoço.', date: '07/01/2026' },
        { author: 'Luciana M.', rating: 5, text: 'Já comprei 3 cores! Não troco por nenhum outro.', date: '02/01/2026' }
      ]
    },
    'colar-cristal': {
      id: 'colar-cristal',
      name: 'Colar Cristal',
      category: 'Prata 925',
      categorySlug: 'prata-925',
      price: 199.90,
      oldPrice: null,
      description: 'Colar em prata 925 com pingente de cristal Swarovski. Corrente ajustável de 40 a 45cm. Ideal para looks elegantes e sofisticados. Acompanha certificado de autenticidade.',
      rating: 5.0,
      reviews: 91,
      badge: 'NOVO',
      images: ['linear-gradient(135deg, #E0F0E8, #C6E8D4)'],
      reviewsList: [
        { author: 'Marina S.', rating: 5, text: 'Peça maravilhosa! O cristal brilha muito. Super recomendo!', date: '14/01/2026' },
        { author: 'Amanda O.', rating: 5, text: 'Qualidade impecável. Veio com certificado e tudo.', date: '09/01/2026' }
      ]
    },
    'serum-glow': {
      id: 'serum-glow',
      name: 'Sérum Glow',
      category: 'Cosméticos',
      categorySlug: 'cosmeticos',
      price: 79.90,
      oldPrice: null,
      description: 'Sérum facial com vitamina C, niacinamida e ácido hialurônico. Ilumina, hidrata e uniformiza o tom da pele. Textura leve e rápida absorção. Vegano e cruelty-free.',
      rating: 4.9,
      reviews: 54,
      badge: null,
      images: ['linear-gradient(135deg, #E8F0E0, #D4E8C6)'],
      reviewsList: [
        { author: 'Isabela F.', rating: 5, text: 'Minha pele ficou incrível em 2 semanas! Sem oleosidade.', date: '13/01/2026' },
        { author: 'Tatiana L.', rating: 5, text: 'Produto maravilhoso! Super leve e absorve rápido.', date: '06/01/2026' }
      ]
    },
    'sombra-dourada': {
      id: 'sombra-dourada',
      name: 'Sombra Dourada',
      category: 'Maquiagem',
      categorySlug: 'maquiagem',
      price: 42.90,
      oldPrice: 49.90,
      description: 'Sombra compacta com pigmentação intensa e acabamento cintilante dourado. Longa duração (até 10h). Fórmula vegana com microfinas partículas de brilho.',
      rating: 4.6,
      reviews: 29,
      badge: '-15%',
      images: ['linear-gradient(135deg, #FEF3C7, #FDE68A)'],
      reviewsList: [
        { author: 'Vitória G.', rating: 5, text: 'Pigmentação maravilhosa! O brilho é super fino e elegante.', date: '10/01/2026' },
        { author: 'Débora R.', rating: 4, text: 'Linda cor, mas tem um pouco de fallout.', date: '04/01/2026' }
      ]
    },
    'pulseira-delicada': {
      id: 'pulseira-delicada',
      name: 'Pulseira Delicada',
      category: 'Prata 925',
      categorySlug: 'prata-925',
      price: 119.90,
      oldPrice: null,
      description: 'Pulseira em prata 925 com design minimalista e acabamento polido. Fecho ajustável com corrente extensora. Perfeita para empilhar com outras pulseiras.',
      rating: 4.9,
      reviews: 73,
      badge: null,
      images: ['linear-gradient(135deg, #F0E4F8, #E0D0F0)'],
      reviewsList: [
        { author: 'Renata D.', rating: 5, text: 'Delicada e elegante! Perfeita para o dia a dia.', date: '12/01/2026' },
        { author: 'Camila S.', rating: 5, text: 'Comprei para usar com meu anel e ficou lindo!', date: '08/01/2026' }
      ]
    },
    'hidratante-facial': {
      id: 'hidratante-facial',
      name: 'Hidratante Facial',
      category: 'Cosméticos',
      categorySlug: 'cosmeticos',
      price: 64.90,
      oldPrice: null,
      description: 'Hidratante facial com textura gel-creme, enriquecido com aloe vera e ceramidas. Hidratação 24h sem oleosidade. Ideal para todos os tipos de pele. Dermatologicamente testado.',
      rating: 4.9,
      reviews: 41,
      badge: 'NOVO',
      images: ['linear-gradient(135deg, #E0EFF8, #C6DFE8)'],
      reviewsList: [
        { author: 'Larissa B.', rating: 5, text: 'Melhor hidratante! Minha pele oleosa amou.', date: '11/01/2026' },
        { author: 'Gabriela T.', rating: 5, text: 'Super leve, absorve rápido. Uso todo dia!', date: '07/01/2026' }
      ]
    },
    'kit-fada-completa': {
      id: 'kit-fada-completa',
      name: 'Kit Fada Completa',
      category: 'Kit Especial',
      categorySlug: 'prata-925',
      price: 299.90,
      oldPrice: 399.90,
      description: 'Kit exclusivo com Brinco + Anel + Colar em Prata 925 com acabamento rose gold. O combo perfeito para brilhar em qualquer ocasião. Embalagem premium com caixa de veludo.',
      rating: 5.0,
      reviews: 120,
      badge: '-25%',
      images: ['linear-gradient(135deg, var(--rosa-suave), var(--rose-gold-light))'],
      reviewsList: [
        { author: 'Amanda O.', rating: 5, text: 'O Kit Fada Completa é TUDO! As peças combinam perfeitamente.', date: '14/01/2026' },
        { author: 'Jessica M.', rating: 5, text: 'Presente perfeito! A embalagem é um charme.', date: '10/01/2026' }
      ]
    }
  };

  // Search products array
  let PRODUCTS = { ...DEFAULT_PRODUCTS };

  function buildSearchProducts() {
    return Object.values(PRODUCTS).map(p => ({
      name: p.name,
      category: p.category,
      price: `R$ ${p.price.toFixed(2).replace('.', ',')}`,
      id: p.id
    }));
  }

  let searchProducts = buildSearchProducts();

  // ============================================
  // SVG ICONS FOR DEFAULT PRODUCTS
  // ============================================
  const PRODUCT_SVGS = {
    'anel-solitario': '<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="55" r="12" stroke="currentColor" stroke-width="3" fill="none"/><path d="M40 35L46 48L40 52L34 48L40 35Z" fill="currentColor"/></svg>',
    'brincos-rosa': '<svg viewBox="0 0 80 80" fill="none"><circle cx="30" cy="20" r="5" stroke="currentColor" stroke-width="2"/><line x1="30" y1="25" x2="30" y2="45" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="48" r="3" fill="currentColor" opacity="0.5"/><circle cx="50" cy="20" r="5" stroke="currentColor" stroke-width="2"/><line x1="50" y1="25" x2="50" y2="45" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="48" r="3" fill="currentColor" opacity="0.5"/></svg>',
    'batom-glow': '<svg viewBox="0 0 80 80" fill="none"><rect x="30" y="20" width="20" height="40" rx="4" fill="currentColor" opacity="0.8"/><rect x="33" y="16" width="14" height="8" rx="3" fill="currentColor"/></svg>',
    'colar-cristal': '<svg viewBox="0 0 80 80" fill="none"><path d="M20 25 Q40 35 60 25" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M40 35L46 50L40 56L34 50L40 35Z" fill="currentColor" opacity="0.8"/><circle cx="40" cy="56" r="3" fill="currentColor" opacity="0.4"/></svg>',
    'serum-glow': '<svg viewBox="0 0 80 80" fill="none"><rect x="32" y="25" width="16" height="32" rx="8" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="40" cy="36" r="3" fill="currentColor" opacity="0.6"/><line x1="40" y1="18" x2="40" y2="25" stroke="currentColor" stroke-width="2"/></svg>',
    'sombra-dourada': '<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="16" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.4"/><circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.7"/></svg>',
    'pulseira-delicada': '<svg viewBox="0 0 80 80" fill="none"><ellipse cx="40" cy="40" rx="20" ry="14" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="40" cy="26" r="3" fill="currentColor" opacity="0.6"/></svg>',
    'hidratante-facial': '<svg viewBox="0 0 80 80" fill="none"><rect x="28" y="20" width="24" height="36" rx="6" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M34 32h12M34 38h12" stroke="currentColor" stroke-width="1.5" opacity="0.4"/></svg>',
    'kit-fada-completa': '<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="55" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M25 20 Q40 30 55 20" stroke="currentColor" stroke-width="2" fill="none"/><rect x="34" y="35" width="12" height="16" rx="3" stroke="currentColor" stroke-width="2" fill="none"/></svg>'
  };
  const DEFAULT_SVG = '<svg viewBox="0 0 80 80" fill="none"><rect x="25" y="25" width="30" height="30" rx="6" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="40" cy="40" r="4" fill="currentColor" opacity="0.4"/></svg>';

  // Category color lookup (populated from DB)
  let CATEGORY_COLORS = {};

  // ============================================
  // DYNAMIC PRODUCT RENDERING
  // ============================================
  function convertDbProduct(p) {
    return {
      id: p.id,
      name: p.name,
      category: p.category,
      categorySlug: p.category_slug,
      price: parseFloat(p.price),
      oldPrice: p.old_price ? parseFloat(p.old_price) : null,
      description: p.description || '',
      rating: p._avgRating != null ? p._avgRating : (parseFloat(p.rating) || 0),
      reviews: p._reviewCount != null ? p._reviewCount : (p.reviews_count || 0),
      badge: p.badge || null,
      images: p.images || [],
      imageUrl: p.image_url || null,
      imageBg: p.image_bg || null,
      reviewsList: p.reviews_list || []
    };
  }

  function generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return '★'.repeat(full) + (half ? '<span class="star-half">★</span>' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
  }

  function renderProductCard(p) {
    const bg = p.imageBg || p.images[0] || 'linear-gradient(135deg, #f0e6f6, #d4c5e0)';
    const imgContent = p.imageUrl
      ? `<img src="${p.imageUrl}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
      : (PRODUCT_SVGS[p.id] || DEFAULT_SVG);
    const badgeClass = p.badge === 'NOVO' ? 'product-badge--new' : 'product-badge--sale';
    const badgeHtml = p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : '';
    const oldPriceHtml = p.oldPrice ? `<span class="product-price-old">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : '';
    const priceHtml = `<span class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>`;
    const starsHtml = p.reviews > 0 ? generateStars(p.rating) : '☆☆☆☆☆';
    const reviewsLabel = p.reviews > 0 ? `(${p.reviews})` : '(0)';

    return `<div class="product-card reveal" data-category="${p.categorySlug}" data-price="${p.price}" data-name="${p.name}" data-id="${p.id}">
      <div class="product-image" style="background: ${bg};">
        ${badgeHtml}
        <button class="product-wishlist" aria-label="Adicionar aos favoritos" data-product="${p.name}">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
        <div class="product-image-inner" role="button" tabindex="0" aria-label="Ver detalhes de ${p.name}">
          ${imgContent}
        </div>
      </div>
      <div class="product-info" role="button" tabindex="0" aria-label="Ver detalhes de ${p.name}">
        <p class="product-category-label"${CATEGORY_COLORS[p.categorySlug] ? ` style="color:${CATEGORY_COLORS[p.categorySlug]}"` : ''}>${p.category}</p>
        <h4 class="product-name">${p.name}</h4>
        <div class="product-rating">
          <div class="mini-stars">${starsHtml}</div>
          <span>${reviewsLabel}</span>
        </div>
        <div class="product-footer">
          <div>${oldPriceHtml}${priceHtml}</div>
          <button class="product-add-btn" aria-label="Adicionar ao carrinho" data-product="${p.name}" data-price="${p.price}" data-product-id="${p.id}">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          </button>
        </div>
      </div>
    </div>`;
  }

  function renderProductsGrid() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    const productList = Object.values(PRODUCTS);
    grid.innerHTML = productList.map(p => renderProductCard(p)).join('');

    // Re-observe for reveal animation
    grid.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
      revealObserver.observe(el);
    });

    // Sync wishlist buttons (only after wishlist system is initialized)
    try { if (typeof syncWishlistButtons === 'function') syncWishlistButtons(); } catch(e) {}

    // Also render kits carousel
    renderKitsCarousel();
  }

  // ---- KITS CAROUSEL ----
  function renderKitsCarousel() {
    const track = document.getElementById('kits-carousel-track');
    const section = document.getElementById('kits-carousel-section');
    if (!track) return;

    const kits = Object.values(PRODUCTS).filter(p => p.categorySlug === 'kits');
    if (!kits.length) {
      if (section) section.style.display = 'none';
      return;
    }
    if (section) section.style.display = '';

    // Duplicate items for infinite scroll effect
    const items = [...kits, ...kits, ...kits];
    track.innerHTML = items.map(p => {
      const bg = p.imageBg || p.images?.[0] || 'linear-gradient(135deg, #f0e6f6, #d4c5e0)';
      const imgContent = p.imageUrl
        ? `<img src="${p.imageUrl}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
        : (PRODUCT_SVGS[p.id] || DEFAULT_SVG);
      const badgeHtml = p.badge ? `<span class="product-badge ${p.badge === 'NOVO' ? 'product-badge--new' : 'product-badge--sale'}">${p.badge}</span>` : '';
      const oldPriceHtml = p.oldPrice ? `<span class="product-price-old">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : '';
      const priceHtml = `<span class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>`;

      return `<div class="kit-carousel-card" data-id="${p.id}">
        <div class="kit-carousel-img" style="background:${bg};">
          ${badgeHtml}
          <div class="kit-carousel-img-inner">${imgContent}</div>
        </div>
        <div class="kit-carousel-info">
          <h4>${p.name}</h4>
          <p class="kit-carousel-desc">${p.description ? p.description.slice(0, 80) + (p.description.length > 80 ? '...' : '') : ''}</p>
          <div class="kit-carousel-prices">${oldPriceHtml} ${priceHtml}</div>
          <button class="kit-carousel-btn" data-product="${p.name}" data-price="${p.price}" data-product-id="${p.id}" onclick="addToCart(this)">Adicionar ao Carrinho</button>
        </div>
      </div>`;
    }).join('');

    // Click on card to open modal
    track.querySelectorAll('.kit-carousel-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.kit-carousel-btn')) return;
        const id = card.dataset.id;
        if (id && typeof window.openProductModal === 'function') window.openProductModal(id);
      });
    });

    // Start auto-scroll
    initKitsAutoScroll();
  }

  let kitsAnimFrame = null;
  let kitsScrollPaused = false;
  let kitsOffset = 0;

  function initKitsAutoScroll() {
    const track = document.getElementById('kits-carousel-track');
    if (!track || !track.children.length) return;
    if (kitsAnimFrame) cancelAnimationFrame(kitsAnimFrame);

    // Measure one set width (items are tripled)
    const totalWidth = track.scrollWidth;
    const oneSetWidth = totalWidth / 3;
    kitsOffset = 0;

    function step() {
      if (!kitsScrollPaused) {
        kitsOffset += 0.8;
        if (kitsOffset >= oneSetWidth) kitsOffset -= oneSetWidth;
      }
      track.style.transform = `translateX(-${kitsOffset}px)`;
      kitsAnimFrame = requestAnimationFrame(step);
    }
    kitsAnimFrame = requestAnimationFrame(step);

    track.addEventListener('mouseenter', () => { kitsScrollPaused = true; });
    track.addEventListener('mouseleave', () => { kitsScrollPaused = false; });
    track.addEventListener('touchstart', () => { kitsScrollPaused = true; }, { passive: true });
    track.addEventListener('touchend', () => { setTimeout(() => { kitsScrollPaused = false; }, 2000); });
  }

  // Carousel nav buttons
  document.getElementById('kits-carousel-prev')?.addEventListener('click', () => {
    const track = document.getElementById('kits-carousel-track');
    if (!track) return;
    const oneSetWidth = track.scrollWidth / 3;
    kitsOffset -= 300;
    if (kitsOffset < 0) kitsOffset += oneSetWidth;
  });
  document.getElementById('kits-carousel-next')?.addEventListener('click', () => {
    const track = document.getElementById('kits-carousel-track');
    if (!track) return;
    const oneSetWidth = track.scrollWidth / 3;
    kitsOffset += 300;
    if (kitsOffset >= oneSetWidth) kitsOffset -= oneSetWidth;
  });

  // ---- OFFERS CAROUSEL ----
  async function loadOffersCarousel() {
    const offerSection = document.getElementById('ofertas');
    try {
      if (typeof supabase !== 'undefined') {
        const activeOffers = await supabase.getActiveOffers();
        if (activeOffers && activeOffers.length > 0) {
          if (offerSection) offerSection.style.display = '';
          renderOffersCarousel(activeOffers);
        } else {
          if (offerSection) offerSection.style.display = 'none';
        }
      }
    } catch (e) {
      console.log('Offers load error:', e.message);
      if (offerSection) offerSection.style.display = 'none';
    }
  }

  function renderOffersCarousel(offers) {
    const track = document.getElementById('offers-carousel-track');
    if (!track || !offers.length) return;

    // Build carousel cards - triplicate for infinite scroll (5x for single item to fill width)
    const repeatCount = offers.length === 1 ? 5 : 3;
    let items = [];
    for (let r = 0; r < repeatCount; r++) items = items.concat(offers);
    track.dataset.repeatCount = repeatCount;
    track.innerHTML = items.map((o, i) => {
      const savings = (parseFloat(o.old_price) || 0) - (parseFloat(o.price) || 0);
      const savingsHtml = savings > 0 ? `<span class="offer-card-badge">ECONOMIZE R$ ${savings.toFixed(0)}</span>` : '';
      const oldPriceHtml = o.old_price ? `<span class="offer-card-old-price">De R$ ${parseFloat(o.old_price).toFixed(2).replace('.', ',')}</span>` : '';
      const priceHtml = `<span class="offer-card-price">R$ ${parseFloat(o.price).toFixed(2).replace('.', ',')}</span>`;

      // Try to get image: offer's own image_url, or linked product image
      let imgSrc = '';
      if (o.image_url) {
        imgSrc = o.image_url;
      } else if (o.product_id && PRODUCTS[o.product_id]) {
        const prod = PRODUCTS[o.product_id];
        if (prod.imageUrl) imgSrc = prod.imageUrl;
      }
      const imgHtml = imgSrc ? `<div class="offer-card-img"><img src="${imgSrc}" alt="${o.name}" loading="lazy"></div>` : '';

      return `<div class="offer-carousel-card" data-offer-idx="${i}" ${o.product_id ? `data-product-id="${o.product_id}"` : ''}>
        ${imgHtml}
        <div class="offer-card-content">
          <p class="offer-card-label">OFERTA ESPECIAL</p>
          <h4 class="offer-card-title">${o.name || 'Oferta'}</h4>
          <p class="offer-card-desc">${o.description || ''}</p>
          <div class="offer-card-prices">${oldPriceHtml} ${priceHtml}</div>
          ${savingsHtml}
          <button class="offer-card-btn" data-product="${o.name}" data-price="${o.price}" ${o.product_id ? `data-product-id="${o.product_id}"` : ''} onclick="addToCart(this)">
            COMPRAR AGORA
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </button>
        </div>
      </div>`;
    }).join('');

    // Click on card to open product modal
    track.querySelectorAll('.offer-carousel-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.offer-card-btn')) return;
        const pid = card.dataset.productId;
        if (pid && typeof window.openProductModal === 'function') window.openProductModal(pid);
      });
    });

    initOffersAutoScroll();
  }

  let offersAnimFrame = null;
  let offersScrollPaused = false;
  let offersOffset = 0;

  function initOffersAutoScroll() {
    const track = document.getElementById('offers-carousel-track');
    if (!track || !track.children.length) return;
    if (offersAnimFrame) cancelAnimationFrame(offersAnimFrame);

    const repeatCount = parseInt(track.dataset.repeatCount) || 3;
    const totalWidth = track.scrollWidth;
    const oneSetWidth = totalWidth / repeatCount;
    offersOffset = 0;

    // --- Ultra-smooth physics engine ---
    let isDragging = false;
    let dragStartX = 0;
    let dragStartOffset = 0;
    let currentVelocity = 0;        // px per frame (~16ms)
    let targetAutoSpeed = 0.5;       // gentle auto-scroll speed
    let hasDragMoved = false;

    // Track last N touch/mouse points for weighted velocity
    const dragHistory = [];          // {x, t} entries
    const HISTORY_MAX = 6;

    // Momentum physics constants
    const FRICTION = 0.965;          // per-frame friction (closer to 1 = longer glide)
    const MIN_VELOCITY = 0.08;       // stop threshold
    const AUTO_EASE_RATE = 0.015;    // how fast auto-scroll resumes (smooth blend)

    let resumeAutoTimeout = null;
    let isCoasting = false;          // momentum phase after release

    function wrapOffset() {
      while (offersOffset < 0) offersOffset += oneSetWidth;
      while (offersOffset >= oneSetWidth) offersOffset -= oneSetWidth;
    }

    // Compute velocity from drag history using weighted average
    function computeReleaseVelocity() {
      if (dragHistory.length < 2) return 0;
      // Use only recent entries (last ~80ms)
      const now = dragHistory[dragHistory.length - 1].t;
      const recent = dragHistory.filter(p => now - p.t < 80);
      if (recent.length < 2) {
        // fallback: use last two points
        const a = dragHistory[dragHistory.length - 2];
        const b = dragHistory[dragHistory.length - 1];
        const dt = b.t - a.t;
        return dt > 0 ? (a.x - b.x) / dt * 16 : 0; // convert to px/frame
      }
      const first = recent[0];
      const last = recent[recent.length - 1];
      const dt = last.t - first.t;
      if (dt <= 0) return 0;
      return (first.x - last.x) / dt * 16; // px per frame
    }

    // Main render loop — always running, silky smooth
    let lastFrameTime = 0;
    function step(timestamp) {
      if (!lastFrameTime) lastFrameTime = timestamp;
      const elapsed = timestamp - lastFrameTime;
      lastFrameTime = timestamp;
      // Normalize to ~16ms frames for consistent physics
      const timeFactor = Math.min(elapsed / 16, 3);

      if (!isDragging) {
        if (isCoasting) {
          // Momentum deceleration with exponential friction
          currentVelocity *= Math.pow(FRICTION, timeFactor);
          offersOffset += currentVelocity * timeFactor;
          wrapOffset();
          if (Math.abs(currentVelocity) < MIN_VELOCITY) {
            isCoasting = false;
            currentVelocity = 0;
          }
        } else if (!offersScrollPaused) {
          // Smoothly ease back to auto-scroll speed
          currentVelocity += (targetAutoSpeed - currentVelocity) * AUTO_EASE_RATE * timeFactor;
          offersOffset += currentVelocity * timeFactor;
          wrapOffset();
        }
      }
      // During drag, offset is set directly by onDragMove, no extra movement

      track.style.transform = `translate3d(-${offersOffset}px, 0, 0)`;
      offersAnimFrame = requestAnimationFrame(step);
    }
    offersAnimFrame = requestAnimationFrame(step);

    // --- Drag handlers ---
    function onDragStart(clientX) {
      isDragging = true;
      isCoasting = false;
      offersScrollPaused = true;
      currentVelocity = 0;
      hasDragMoved = false;
      dragStartX = clientX;
      dragStartOffset = offersOffset;
      dragHistory.length = 0;
      dragHistory.push({ x: clientX, t: performance.now() });
      if (resumeAutoTimeout) { clearTimeout(resumeAutoTimeout); resumeAutoTimeout = null; }
      track.style.cursor = 'grabbing';
    }

    function onDragMove(clientX) {
      if (!isDragging) return;
      hasDragMoved = true;
      // Record history
      dragHistory.push({ x: clientX, t: performance.now() });
      if (dragHistory.length > HISTORY_MAX) dragHistory.shift();

      const diff = dragStartX - clientX;
      offersOffset = dragStartOffset + diff;
      wrapOffset();
    }

    function onDragEnd() {
      if (!isDragging) return;
      isDragging = false;
      track.style.cursor = '';

      // Calculate release velocity from history
      const releaseVel = computeReleaseVelocity();
      if (Math.abs(releaseVel) > MIN_VELOCITY) {
        currentVelocity = releaseVel;
        isCoasting = true;
      }

      // Resume auto-scroll smoothly after delay
      resumeAutoTimeout = setTimeout(() => {
        offersScrollPaused = false;
        isCoasting = false;
        // currentVelocity will ease toward targetAutoSpeed via AUTO_EASE_RATE
        resumeAutoTimeout = null;
      }, 3000);
    }

    // Mouse events (desktop drag)
    track.addEventListener('mousedown', (e) => {
      e.preventDefault();
      onDragStart(e.clientX);
    });
    window.addEventListener('mousemove', (e) => {
      if (isDragging) { e.preventDefault(); onDragMove(e.clientX); }
    });
    window.addEventListener('mouseup', () => { if (isDragging) onDragEnd(); });

    // Touch events (mobile swipe)
    track.addEventListener('touchstart', (e) => {
      onDragStart(e.touches[0].clientX);
    }, { passive: true });
    track.addEventListener('touchmove', (e) => {
      onDragMove(e.touches[0].clientX);
    }, { passive: true });
    track.addEventListener('touchend', () => { onDragEnd(); });
    track.addEventListener('touchcancel', () => { onDragEnd(); });

    // Pause on hover (desktop, no drag)
    track.addEventListener('mouseenter', () => {
      if (!isDragging && !isCoasting) {
        offersScrollPaused = true;
      }
    });
    track.addEventListener('mouseleave', () => {
      if (!isDragging) {
        offersScrollPaused = false;
      }
    });

    // Prevent accidental clicks after drag/swipe
    track.addEventListener('click', (e) => {
      if (hasDragMoved && Math.abs(computeReleaseVelocity()) > 0.3) {
        e.stopPropagation();
        e.preventDefault();
      }
    }, true);
  }

  // Offers carousel nav buttons — smooth animated jump
  document.getElementById('offers-carousel-prev')?.addEventListener('click', () => {
    const track = document.getElementById('offers-carousel-track');
    if (!track) return;
    const repeatCount = parseInt(track.dataset.repeatCount) || 3;
    const oneSetWidth = track.scrollWidth / repeatCount;
    // Smooth animated scroll left by ~350px
    const target = offersOffset - 350;
    smoothScrollOffers(target < 0 ? target + oneSetWidth : target, oneSetWidth);
  });
  document.getElementById('offers-carousel-next')?.addEventListener('click', () => {
    const track = document.getElementById('offers-carousel-track');
    if (!track) return;
    const repeatCount = parseInt(track.dataset.repeatCount) || 3;
    const oneSetWidth = track.scrollWidth / repeatCount;
    const target = offersOffset + 350;
    smoothScrollOffers(target >= oneSetWidth ? target - oneSetWidth : target, oneSetWidth);
  });

  // Animated eased scroll for nav buttons
  function smoothScrollOffers(targetOffset, oneSetWidth) {
    offersScrollPaused = true;
    const start = offersOffset;
    let diff = targetOffset - start;
    // choose shortest path (wrap-aware)
    if (Math.abs(diff) > oneSetWidth / 2) {
      diff = diff > 0 ? diff - oneSetWidth : diff + oneSetWidth;
    }
    const duration = 400;
    const startTime = performance.now();
    function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; } // cubic ease in-out
    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      offersOffset = start + diff * ease(progress);
      while (offersOffset < 0) offersOffset += oneSetWidth;
      while (offersOffset >= oneSetWidth) offersOffset -= oneSetWidth;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => { offersScrollPaused = false; }, 1500);
      }
    }
    requestAnimationFrame(animate);
  }

  // Event delegation for product grid
  function setupProductGridEvents() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.addEventListener('click', (e) => {
      // Wishlist button
      const wishBtn = e.target.closest('.product-wishlist');
      if (wishBtn) {
        e.stopPropagation();
        toggleWishlist(wishBtn.dataset.product);
        return;
      }
      // Add to cart button
      const addBtn = e.target.closest('.product-add-btn');
      if (addBtn) {
        e.stopPropagation();
        window.addToCart(addBtn);
        return;
      }
      // Product image or info click → open modal
      const imgBtn = e.target.closest('.product-image-inner[role="button"]');
      const infoBtn = e.target.closest('.product-info[role="button"]');
      if (imgBtn || infoBtn) {
        const card = (imgBtn || infoBtn).closest('.product-card');
        if (card?.dataset.id) window.openProductModal(card.dataset.id);
        return;
      }
    });

    grid.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const el = e.target.closest('.product-image-inner[role="button"], .product-info[role="button"]');
        if (el) {
          const card = el.closest('.product-card');
          if (card?.dataset.id) window.openProductModal(card.dataset.id);
        }
      }
    });
  }

  // Load products from Supabase with localStorage cache for instant loading
  function loadCachedProducts() {
    try {
      const cached = localStorage.getItem('toque_products_cache');
      if (cached) {
        const data = JSON.parse(cached);
        // Cache valid for 10 minutes as stale fallback, but we always refresh
        if (data && data.products && data.products.length > 0) {
          PRODUCTS = {};
          data.products.forEach(p => {
            PRODUCTS[p.id] = p;
          });
          searchProducts = buildSearchProducts();
          renderProductsGrid();
          return true;
        }
      }
    } catch (e) { /* ignore cache errors */ }
    return false;
  }

  async function loadProductsFromDB() {
    const hadCache = loadCachedProducts();
    try {
      if (typeof supabase !== 'undefined') {
        // Fetch products and all reviews in parallel
        const [dbProducts, allReviews] = await Promise.all([
          supabase.getProducts(),
          supabase.getAllReviews().catch(() => [])
        ]);

        // Build review stats per product
        const reviewStats = {};
        if (Array.isArray(allReviews)) {
          allReviews.forEach(r => {
            const pid = r.product_id;
            if (!reviewStats[pid]) reviewStats[pid] = { sum: 0, count: 0 };
            reviewStats[pid].sum += (r.rating || 5);
            reviewStats[pid].count++;
          });
        }

        if (dbProducts && Array.isArray(dbProducts) && dbProducts.length > 0) {
          PRODUCTS = {};
          const converted = [];
          dbProducts.filter(p => p.active !== false).forEach(p => {
            // Enrich with real review stats
            const stats = reviewStats[p.id];
            if (stats && stats.count > 0) {
              p._avgRating = Math.round((stats.sum / stats.count) * 10) / 10;
              p._reviewCount = stats.count;
            } else {
              p._avgRating = 0;
              p._reviewCount = 0;
            }
            const cp = convertDbProduct(p);
            PRODUCTS[p.id] = cp;
            converted.push(cp);
          });
          searchProducts = buildSearchProducts();
          // Save to cache for instant loading next visit
          try {
            localStorage.setItem('toque_products_cache', JSON.stringify({
              products: converted,
              timestamp: Date.now()
            }));
          } catch (e) { /* storage full, ignore */ }
        }
      }
    } catch (e) {
      console.log('Using default products:', e.message);
    }
    renderProductsGrid();
  }

  // Load site settings from Supabase with localStorage cache
  function applySiteSettings(settings) {
    // Apply contact info
    const contact = settings.contact;
    if (contact) {
      const whatsDisplay = document.getElementById('contact-whatsapp-display');
      const whatsLink = document.getElementById('contact-whatsapp-link');
      const emailDisplay = document.getElementById('contact-email-display');
      const hoursDisplay = document.getElementById('contact-hours-display');
      if (whatsDisplay && contact.whatsapp_display) whatsDisplay.textContent = contact.whatsapp_display;
      if (whatsLink && contact.whatsapp) whatsLink.href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Ola! Vim pelo site Toque de Fada e gostaria de mais informacoes.')}`;
      if (emailDisplay && contact.email) emailDisplay.textContent = contact.email;
      if (hoursDisplay && contact.hours) hoursDisplay.textContent = contact.hours;
      window._whatsappNumber = contact.whatsapp || '5511999999999';
      const floatBtn = document.getElementById('whatsapp-float-btn');
      if (floatBtn && contact.whatsapp) {
        floatBtn.href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Ola! Vim pelo site Toque de Fada e gostaria de mais informacoes.')}`;
      }
    }

    // Apply promo banner
    const promoBanner = settings.promo_banner;
    if (promoBanner) {
      const banner = document.querySelector('.promo-banner');
      const promoTextEl = document.getElementById('promo-text');
      if (banner) {
        banner.style.display = promoBanner.active ? '' : 'none';
      }
      if (promoTextEl && promoBanner.text) {
        promoTextEl.textContent = promoBanner.text;
      }
    }

    // Apply hero image
    const heroImage = settings.hero_image;
    if (heroImage && heroImage.url) {
      const heroImg = document.getElementById('hero-image');
      const heroPlaceholder = document.getElementById('hero-image-placeholder');
      if (heroImg) {
        heroImg.src = heroImage.url;
        heroImg.style.display = '';
      }
      if (heroPlaceholder) heroPlaceholder.style.display = 'none';
    } else {
      const heroImg = document.getElementById('hero-image');
      const heroPlaceholder = document.getElementById('hero-image-placeholder');
      if (heroImg) { heroImg.style.display = 'none'; heroImg.src = ''; }
      if (heroPlaceholder) heroPlaceholder.style.display = '';
    }

    // Apply hero content (texts, badge, stats)
    const heroContent = settings.hero_content;
    if (heroContent) {
      if (heroContent.badge) {
        const badgeEl = document.querySelector('.hero-badge');
        if (badgeEl) {
          const dot = badgeEl.querySelector('.dot');
          badgeEl.textContent = heroContent.badge;
          if (dot) badgeEl.prepend(dot);
        }
      }
      if (heroContent.title) {
        const titleEl = document.getElementById('hero-title');
        if (titleEl) {
          // Support "word <highlight>text</highlight>" or just plain text
          const parts = heroContent.title.match(/^(.*?),?\s*(.*)$/);
          if (parts && parts[2]) {
            titleEl.innerHTML = parts[1] + ', <span class="highlight">' + parts[2] + '</span>';
          } else {
            titleEl.textContent = heroContent.title;
          }
        }
      }
      if (heroContent.subtitle) {
        const subEl = document.getElementById('hero-subtitle');
        if (subEl) subEl.textContent = heroContent.subtitle;
      }
      if (heroContent.cta_text) {
        const ctaBtn = document.querySelector('.hero-actions .btn-primary');
        if (ctaBtn) {
          const svg = ctaBtn.querySelector('svg');
          ctaBtn.textContent = heroContent.cta_text + ' ';
          if (svg) ctaBtn.appendChild(svg);
        }
      }
      if (heroContent.cta2_text) {
        const cta2Btn = document.querySelector('.hero-actions .btn-outline');
        if (cta2Btn) cta2Btn.textContent = heroContent.cta2_text;
      }
      if (heroContent.stats && heroContent.stats.length) {
        const statEls = document.querySelectorAll('.hero-stat');
        heroContent.stats.forEach((s, i) => {
          if (statEls[i]) {
            const valEl = statEls[i].querySelector('.hero-stat-value');
            const lblEl = statEls[i].querySelector('.hero-stat-label');
            if (valEl && s.value) valEl.textContent = s.value;
            if (lblEl && s.label) lblEl.textContent = s.label;
          }
        });
      }
    }

    // Apply section titles
    const sectionTitles = settings.section_titles;
    if (sectionTitles) {
      // Products section
      if (sectionTitles.products) {
        const productsHeader = document.querySelector('#produtos .section-header');
        if (productsHeader) {
          const lbl = productsHeader.querySelector('.section-label');
          const ttl = productsHeader.querySelector('.section-title');
          const sub = productsHeader.querySelector('.section-subtitle');
          if (lbl && sectionTitles.products.label) lbl.textContent = sectionTitles.products.label;
          if (ttl && sectionTitles.products.title) ttl.textContent = sectionTitles.products.title;
          if (sub && sectionTitles.products.subtitle) sub.textContent = sectionTitles.products.subtitle;
        }
      }
      // Testimonials section
      if (sectionTitles.testimonials) {
        const testHeader = document.querySelector('#depoimentos .section-header');
        if (testHeader) {
          const lbl = testHeader.querySelector('.section-label');
          const ttl = testHeader.querySelector('.section-title');
          const sub = testHeader.querySelector('.section-subtitle');
          if (lbl && sectionTitles.testimonials.label) lbl.textContent = sectionTitles.testimonials.label;
          if (ttl && sectionTitles.testimonials.title) ttl.textContent = sectionTitles.testimonials.title;
          if (sub && sectionTitles.testimonials.subtitle) sub.textContent = sectionTitles.testimonials.subtitle;
        }
      }
      // FAQ section
      if (sectionTitles.faq) {
        const faqHeader = document.querySelector('#faq .section-header');
        if (faqHeader) {
          const lbl = faqHeader.querySelector('.section-label');
          const ttl = faqHeader.querySelector('.section-title');
          const sub = faqHeader.querySelector('.section-subtitle');
          if (lbl && sectionTitles.faq.label) lbl.textContent = sectionTitles.faq.label;
          if (ttl && sectionTitles.faq.title) ttl.textContent = sectionTitles.faq.title;
          if (sub && sectionTitles.faq.subtitle) sub.textContent = sectionTitles.faq.subtitle;
        }
      }
    }

    // Apply trust bar
    const trustBar = settings.trust_bar;
    if (Array.isArray(trustBar) && trustBar.length) {
      const trustItems = document.querySelectorAll('.trust-item');
      trustBar.forEach((t, i) => {
        if (trustItems[i]) {
          const textEl = trustItems[i].querySelector('.trust-text');
          if (textEl) {
            const spanEl = textEl.querySelector('span');
            // Get first text node (title)
            const firstText = textEl.childNodes[0];
            if (firstText && t.title) firstText.textContent = t.title;
            if (spanEl && t.subtitle) spanEl.textContent = t.subtitle;
          }
        }
      });
    }

    // Apply testimonials
    const testimonials = settings.testimonials;
    if (Array.isArray(testimonials) && testimonials.length) {
      const grid = document.querySelector('.testimonials-grid');
      if (grid) {
        grid.innerHTML = testimonials.map(t => {
          const rating = parseInt(t.rating) || 5;
          const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
          const initial = (t.name || 'A')[0].toUpperCase();
          return `<div class="testimonial-card reveal revealed">
            <div class="testimonial-stars">${stars}</div>
            <p class="testimonial-text">"${t.text || ''}"</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">${initial}</div>
              <div class="testimonial-author-info"><p class="name">${t.name || ''}</p><p class="location">${t.location || ''}</p></div>
            </div>
          </div>`;
        }).join('');
      }
    }

    // Apply FAQ items
    const faqItems = settings.faq_items;
    if (Array.isArray(faqItems) && faqItems.length) {
      const faqList = document.getElementById('faq-list');
      if (faqList) {
        faqList.innerHTML = faqItems.map(f => `<div class="faq-item reveal revealed">
          <button class="faq-question" aria-expanded="false">
            <span>${f.question || ''}</span>
            <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="faq-answer"><p>${f.answer || ''}</p></div>
        </div>`).join('');
        // Re-attach FAQ toggle listeners
        faqList.querySelectorAll('.faq-question').forEach(btn => {
          btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            faqList.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
          });
        });
      }
    }

    // Apply special offers carousel — loaded separately from offers table
    loadOffersCarousel();

    // Apply inline edit mode changes (saved via WYSIWYG editor)
    if (typeof window._applyEditModeFromSettings === 'function') {
      window._applyEditModeFromSettings(settings);
    }
  }

  async function loadSiteSettings() {
    // Load from cache first for instant display
    try {
      const cached = localStorage.getItem('toque_settings_cache');
      if (cached) {
        const data = JSON.parse(cached);
        if (data && data.settings) {
          applySiteSettings(data.settings);
        }
      }
    } catch (e) { /* ignore */ }

    // Then refresh from Supabase
    try {
      if (typeof supabase === 'undefined') return;
      const rows = await supabase.getSiteSettings();
      if (!rows || !rows.length) return;

      const settings = {};
      rows.forEach(r => {
        settings[r.key] = typeof r.value === 'string' ? JSON.parse(r.value) : r.value;
      });

      applySiteSettings(settings);

      // Save to cache
      try {
        localStorage.setItem('toque_settings_cache', JSON.stringify({
          settings: settings,
          timestamp: Date.now()
        }));
      } catch (e) { /* storage full */ }

    } catch (e) {
      console.log('Site settings load error:', e.message);
    }
  }

  // Load categories for storefront filters
  async function loadSiteCategories() {
    // Load from cache first
    try {
      const cached = localStorage.getItem('toque_categories_cache');
      if (cached) {
        const data = JSON.parse(cached);
        if (data && data.categories) {
          applySiteCategories(data.categories);
        }
      }
    } catch (e) { /* ignore */ }

    // Refresh from DB
    try {
      if (typeof supabase === 'undefined') return;
      const cats = await supabase.getCategories();
      if (cats && Array.isArray(cats)) {
        applySiteCategories(cats.filter(c => c.active !== false));
        try {
          localStorage.setItem('toque_categories_cache', JSON.stringify({
            categories: cats.filter(c => c.active !== false),
            timestamp: Date.now()
          }));
        } catch (e) { /* storage full */ }
      }
    } catch (e) {
      console.log('Categories load error:', e.message);
    }
  }

  function applySiteCategories(cats) {
    if (!cats || !cats.length) return;
    // Update color lookup
    CATEGORY_COLORS = {};
    cats.forEach(c => {
      if (c.text_color) CATEGORY_COLORS[c.slug] = c.text_color;
    });

    // Render categories carousel (the round filter)
    renderCategoriesCarousel(cats);

    // Re-render product cards to apply category colors
    renderProductsGrid();
  }

  // ============================================
  // CATEGORIES CAROUSEL
  // ============================================

  // Beauty-themed SVG icons for each category slug
  const CATEGORY_ICONS = {
    'all': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="7" r="2.5"/><circle cx="7" cy="17" r="2.5"/><circle cx="17" cy="17" r="2.5"/></svg>`,
    'prata-925': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c0-6 8-8 8-14a8 8 0 10-16 0c0 6 8 8 8 14z"/><path d="M8.5 8.5c1-.8 2.5-1 3.5-.5s1.8 1.5 1 2.5-2.5 1-3.5.5"/></svg>`,
    'maquiagem': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5l7-14a1.5 1.5 0 012.8 0l.2.5"/><path d="M4 19.5c0 1.4 1.1 2.5 2.5 2.5h0c1.4 0 2.5-1.1 2.5-2.5V18H4v1.5z"/><path d="M20 4l-6 12"/><circle cx="20" cy="4" r="2"/></svg>`,
    'cosmeticos': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v3H9z"/><path d="M7 6h10v2a1 1 0 01-1 1H8a1 1 0 01-1-1V6z"/><path d="M8 9h8l.5 12a1 1 0 01-1 1h-7a1 1 0 01-1-1L8 9z"/><path d="M12 13v4"/></svg>`,
    'acessorios': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="7"/><circle cx="12" cy="10" r="3"/><path d="M12 17v4"/><path d="M9 21h6"/><path d="M8.5 4.5L6 2M15.5 4.5L18 2"/></svg>`,
    'skincare': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H9a1 1 0 00-1 1v3h8V3a1 1 0 00-1-1z"/><rect x="7" y="6" width="10" height="16" rx="3"/><path d="M12 10v4m-2-2h4"/></svg>`,
    'perfumes': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 6V3h4v3"/><rect x="7" y="6" width="10" height="16" rx="3"/><path d="M7 11h10"/><path d="M8 2c-2-1-3 0-3 1M16 2c2-1 3 0 3 1"/><path d="M12 14v3"/></svg>`,
    'cabelos': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22c0-8 3-12 8-12s8 4 8 12"/><path d="M8 10C8 5 9 2 12 2s4 3 4 8"/><path d="M12 10v5"/><path d="M9 12c0 2 1.5 3 3 3s3-1 3-3"/></svg>`,
    'unhas': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-3 0-5 3-5 7 0 3 2 5 5 5s5-2 5-5c0-4-2-7-5-7z"/><path d="M9 14l-1 8h8l-1-8"/><path d="M10 6c.5-.5 1.5-.5 2 0"/></svg>`,
    'avon': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 5H19l-4 3.5 1.5 5.5-4.5-3-4.5 3 1.5-5.5L5 8h5.5z"/></svg>`,
    'vivara': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>`,
    'kits': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/></svg>`
  };

  // Gradient backgrounds for category circles
  const CATEGORY_GRADIENTS = {
    'all': 'linear-gradient(135deg, #FDF2F5, #FAE4EC)',
    'prata-925': 'linear-gradient(135deg, #F0EAF5, #E4DAF0)',
    'maquiagem': 'linear-gradient(135deg, #FEF0F2, #FCDDE2)',
    'cosmeticos': 'linear-gradient(135deg, #EBF4FA, #D6E8F2)',
    'acessorios': 'linear-gradient(135deg, #FEF7E0, #FDF0C4)',
    'skincare': 'linear-gradient(135deg, #E5F9EE, #C8F0DA)',
    'perfumes': 'linear-gradient(135deg, #F6F0FF, #EDE2FC)',
    'cabelos': 'linear-gradient(135deg, #FFF0F1, #FEDEE2)',
    'unhas': 'linear-gradient(135deg, #FDF0F6, #FBE2EF)',
    'avon': 'linear-gradient(135deg, #FFF5F7, #FFE8EE)',
    'vivara': 'linear-gradient(135deg, #F5F0FA, #EBE2F5)',
    'kits': 'linear-gradient(135deg, #FFF8F0, #FFEFD8)'
  };

  function renderCategoriesCarousel(cats) {
    const track = document.getElementById('cat-carousel-track');
    if (!track) return;

    // Count products per category
    const allProducts = Object.values(PRODUCTS);
    const totalCount = allProducts.length;
    const catCounts = {};
    cats.forEach(c => {
      catCounts[c.slug] = allProducts.filter(p => p.categorySlug === c.slug).length;
    });

    let html = '';

    // "Todos" item
    const allIcon = CATEGORY_ICONS['all'];
    const allGrad = CATEGORY_GRADIENTS['all'];
    html += `<div class="cat-carousel-item active" data-filter="all">
      <div class="cat-carousel-circle" style="background:${allGrad}">
        <div class="cat-carousel-circle-inner">
          <span class="cat-carousel-icon">${allIcon}</span>
        </div>
      </div>
      <span class="cat-carousel-name">Todos</span>
      <span class="cat-carousel-count">${totalCount}</span>
    </div>`;

    cats.forEach(c => {
      const slug = c.slug;
      const icon = CATEGORY_ICONS[slug] || CATEGORY_ICONS['all'];
      const grad = CATEGORY_GRADIENTS[slug] || 'linear-gradient(135deg, #FDF0F4, #F8DCE6)';
      const count = catCounts[slug] || 0;

      let innerContent;
      if (c.image_url) {
        innerContent = `<img src="${c.image_url}" alt="${c.name}" loading="lazy">`;
      } else {
        innerContent = `<span class="cat-carousel-icon">${icon}</span>`;
      }

      html += `<div class="cat-carousel-item" data-filter="${slug}">
        <div class="cat-carousel-circle" style="background:${grad}">
          <div class="cat-carousel-circle-inner">
            ${innerContent}
          </div>
        </div>
        <span class="cat-carousel-name">${c.name}</span>
        ${count > 0 ? `<span class="cat-carousel-count">${count}</span>` : ''}
      </div>`;
    });

    track.innerHTML = html;

    // Click events on carousel items
    track.querySelectorAll('.cat-carousel-item').forEach(item => {
      item.addEventListener('click', () => {
        // Update active state
        track.querySelectorAll('.cat-carousel-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const filter = item.dataset.filter;
        setActiveFilter(filter);
      });
    });

    // Setup carousel arrows
    setupCarouselArrows();
  }

  function setupCarouselArrows() {
    const track = document.getElementById('cat-carousel-track');
    const leftBtn = document.getElementById('cat-arrow-left');
    const rightBtn = document.getElementById('cat-arrow-right');
    if (!track || !leftBtn || !rightBtn) return;

    const scrollAmount = 260;

    leftBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Drag-to-scroll
    let isDragging = false, startX = 0, scrollLeft = 0;
    track.addEventListener('mousedown', (e) => {
      isDragging = true;
      track.style.cursor = 'grabbing';
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      e.preventDefault();
    });
    track.addEventListener('mouseleave', () => { isDragging = false; track.style.cursor = 'grab'; });
    track.addEventListener('mouseup', () => { isDragging = false; track.style.cursor = 'grab'; });
    track.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });
  }

  // ============================================
  // SCROLL REVEAL (must be before product grid render)
  // ============================================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Render cached/defaults immediately, then refresh from DB in parallel
  renderProductsGrid();
  setupProductGridEvents();
  Promise.all([loadProductsFromDB(), loadSiteSettings(), loadSiteCategories()]);

  // ============================================
  // SUPABASE CART INITIALIZATION
  // ============================================
  const cartBadge = document.getElementById('cart-count');
  let appliedCoupon = null;

  async function initializeCart() {
    // Always start from localStorage (Supabase sync is secondary)
    loadCartFromLocalStorage();
    updateCartBadge();
    renderCartDrawer();
  }

  function loadCartFromLocalStorage() {
    const stored = localStorage.getItem('toque_cart');
    if (stored) {
      window.cartItems = JSON.parse(stored);
    } else {
      window.cartItems = [];
    }
  }

  function saveCartToLocalStorage() {
    localStorage.setItem('toque_cart', JSON.stringify(window.cartItems || []));
  }

  initializeCart();

  // (Scroll reveal observer moved above product grid render)

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // ============================================
  // ACTIVE NAV LINK ON SCROLL
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function updateActiveNav() {
    const scrollY = window.scrollY;
    const headerOffset = 120;
    let currentId = '';

    sections.forEach(section => {
      const top = section.offsetTop - headerOffset;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        currentId = section.id;
      }
    });

    // If near the bottom of the page, activate the last section
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) currentId = lastSection.id;
    }

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // ============================================
  // HERO PARTICLES
  // ============================================
  const particlesContainer = document.getElementById('hero-particles');
  
  if (particlesContainer) {
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 4 + 's';
      particle.style.animationDuration = (3 + Math.random() * 3) + 's';
      particle.style.width = (4 + Math.random() * 6) + 'px';
      particle.style.height = particle.style.width;
      particle.style.opacity = 0.3 + Math.random() * 0.5;
      particlesContainer.appendChild(particle);
    }
  }

  // ============================================
  // SEARCH
  // ============================================
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const closeSearchBtn = document.getElementById('close-search');
  const searchResults = document.getElementById('search-results');

  function openSearch() {
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput.focus(), 100);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    searchOverlay.classList.remove('open');
    searchInput.value = '';
    searchResults.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);
  
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      if (searchOverlay && searchOverlay.classList.contains('open')) closeSearch();
      if (document.getElementById('product-modal').classList.contains('open')) closeProductModal();
      if (document.getElementById('cart-drawer').classList.contains('open')) closeCartDrawer();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      
      if (term.length === 0) {
        searchResults.innerHTML = '';
        return;
      }

      const filtered = searchProducts.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );

      if (filtered.length === 0) {
        searchResults.innerHTML = `
          <div class="search-empty">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <p>Nenhum produto encontrado para "<strong>${term}</strong>"</p>
          </div>
        `;
        return;
      }

      searchResults.innerHTML = filtered.map(p => `
        <div class="search-result-item" data-product-id="${p.id}" role="button" tabindex="0">
          <div class="search-result-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <div class="search-result-info">
            <h4>${p.name}</h4>
            <div class="search-meta">
              <span class="search-category">${p.category}</span>
              <span class="search-price">${p.price}</span>
            </div>
          </div>
        </div>
      `).join('');

      // Add click handlers to search results
      searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const pid = item.dataset.productId;
          closeSearch();
          window.openProductModal(pid);
        });
      });
    });
  }

  window.closeSearch = closeSearch;

  // ============================================
  // MOBILE MENU
  // ============================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
      
      const svg = mobileMenuBtn.querySelector('svg');
      if (!isOpen) {
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
      } else {
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const svg = mobileMenuBtn.querySelector('svg');
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      });
    });
  }

  // ============================================
  // PRODUCT DETAIL MODAL
  // ============================================
  const productModal = document.getElementById('product-modal');
  const productModalOverlay = document.getElementById('product-modal-overlay');
  const productModalClose = document.getElementById('product-modal-close');
  let currentProduct = null;
  let modalQty = 1;
  let gallerySlides = [];
  let galleryIndex = 0;

  function isImageUrl(str) {
    return str && (str.startsWith('http') || str.startsWith('data:') || str.startsWith('/'));
  }

  function setGallerySlide(index) {
    const galleryMain = document.getElementById('gallery-main');
    if (!gallerySlides.length) return;
    galleryIndex = (index + gallerySlides.length) % gallerySlides.length;
    const slide = gallerySlides[galleryIndex];
    // Preserve persistent elements
    const zoomHint = galleryMain.querySelector('.gallery-zoom-hint');
    const badgeEl = galleryMain.querySelector('.gallery-badge');
    galleryMain.innerHTML = '';
    if (isImageUrl(slide)) {
      galleryMain.style.background = currentProduct?.imageBg || 'linear-gradient(145deg, #f8f5f2 0%, #f0ece8 100%)';
      const img = document.createElement('img');
      img.src = slide;
      img.alt = currentProduct?.name || 'Produto';
      galleryMain.appendChild(img);
    } else {
      galleryMain.style.background = slide;
      if (currentProduct && PRODUCT_SVGS[currentProduct.id]) {
        const svgDiv = document.createElement('div');
        svgDiv.innerHTML = PRODUCT_SVGS[currentProduct.id];
        svgDiv.style.cssText = 'width:60%;height:60%;display:flex;align-items:center;justify-content:center;';
        galleryMain.appendChild(svgDiv);
      }
    }
    if (zoomHint) galleryMain.appendChild(zoomHint);
    if (badgeEl) galleryMain.appendChild(badgeEl);
    // Update thumbs
    document.querySelectorAll('#gallery-thumbs .gallery-thumb').forEach((th, i) => th.classList.toggle('active', i === galleryIndex));
    // Show/hide nav buttons
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    if (prevBtn) prevBtn.style.display = gallerySlides.length > 1 ? '' : 'none';
    if (nextBtn) nextBtn.style.display = gallerySlides.length > 1 ? '' : 'none';
    // Update counter
    const counterEl = document.getElementById('gallery-counter');
    if (counterEl) {
      if (gallerySlides.length > 1) {
        counterEl.textContent = `${galleryIndex + 1} / ${gallerySlides.length}`;
        counterEl.style.display = '';
      } else {
        counterEl.style.display = 'none';
      }
    }
  }

  function buildGalleryThumbs() {
    const thumbsEl = document.getElementById('gallery-thumbs');
    if (!thumbsEl) return;
    if (gallerySlides.length <= 1) { thumbsEl.innerHTML = ''; return; }
    thumbsEl.innerHTML = gallerySlides.map((slide, i) => {
      if (isImageUrl(slide)) {
        return `<button class="gallery-thumb${i === 0 ? ' active' : ''}" data-slide="${i}"><img src="${slide}" alt="Miniatura ${i+1}"></button>`;
      } else {
        return `<button class="gallery-thumb${i === 0 ? ' active' : ''}" data-slide="${i}" style="background:${slide}"></button>`;
      }
    }).join('');
  }

  // Gallery navigation
  document.getElementById('gallery-prev')?.addEventListener('click', () => setGallerySlide(galleryIndex - 1));
  document.getElementById('gallery-next')?.addEventListener('click', () => setGallerySlide(galleryIndex + 1));
  document.getElementById('gallery-thumbs')?.addEventListener('click', (e) => {
    const thumb = e.target.closest('[data-slide]');
    if (thumb) setGallerySlide(parseInt(thumb.dataset.slide));
  });

  window.openProductModal = function(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;
    currentProduct = product;
    modalQty = 1;

    document.getElementById('modal-category').textContent = product.category;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('qty-value').textContent = '1';

    // Stars — show current cached data, loadProductReviews will update with live data
    const starsContainer = document.getElementById('modal-stars');
    if (product.reviews > 0) {
      const fullStars = Math.floor(product.rating);
      const halfStar = product.rating % 1 >= 0.5;
      starsContainer.innerHTML = '★'.repeat(fullStars) + (halfStar ? '<span class="star-half">★</span>' : '') + '☆'.repeat(5 - fullStars - (halfStar ? 1 : 0));
      document.getElementById('modal-rating-text').textContent = `${product.rating} (${product.reviews} avaliação${product.reviews > 1 ? 'ões' : ''})`;
    } else {
      starsContainer.innerHTML = '☆☆☆☆☆';
      document.getElementById('modal-rating-text').textContent = 'Sem avaliações';
    }

    // Prices
    const pricesEl = document.getElementById('modal-prices');
    if (product.oldPrice) {
      const discountPct = Math.round((1 - product.price / product.oldPrice) * 100);
      pricesEl.innerHTML = `<span class="modal-old-price">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span><span class="modal-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span><span class="modal-price-discount">-${discountPct}%</span>`;
    } else {
      pricesEl.innerHTML = `<span class="modal-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>`;
    }

    // Installments
    const installmentsEl = document.getElementById('modal-installments');
    if (installmentsEl) {
      const installmentCount = product.price >= 100 ? 6 : (product.price >= 50 ? 3 : 2);
      const installmentValue = (product.price / installmentCount).toFixed(2).replace('.', ',');
      installmentsEl.innerHTML = `ou <strong>${installmentCount}x de R$ ${installmentValue}</strong> sem juros`;
    }

    // Discount badge on gallery
    const badgeEl = document.getElementById('gallery-badge');
    if (badgeEl) {
      if (product.oldPrice) {
        const discountPct = Math.round((1 - product.price / product.oldPrice) * 100);
        badgeEl.innerHTML = `<span class="badge-discount">-${discountPct}%</span>`;
      } else {
        badgeEl.innerHTML = '';
      }
    }

    document.getElementById('modal-desc').textContent = product.description;

    // Build gallery slides: main image first, then gallery images
    gallerySlides = [];
    if (product.imageUrl) {
      gallerySlides.push(product.imageUrl);
    }
    if (product.images && product.images.length > 0) {
      product.images.forEach(img => {
        if (img && !gallerySlides.includes(img)) gallerySlides.push(img);
      });
    }
    // Fallback: if no slides at all, use imageBg or default gradient
    if (!gallerySlides.length) {
      gallerySlides.push(product.imageBg || 'linear-gradient(135deg, #f0e6f6, #d4c5e0)');
    }
    galleryIndex = 0;
    buildGalleryThumbs();
    setGallerySlide(0);

    // Reviews - load from Supabase
    const reviewsEl = document.getElementById('modal-reviews');
    reviewsEl.innerHTML = '<p class="no-reviews">Carregando avaliações...</p>';
    loadProductReviews(product.id || productId);

    // Review form - show/hide based on login
    const reviewFormWrap = document.getElementById('review-form-wrap');
    const reviewForm = document.getElementById('review-form');
    const reviewLoginMsg = document.getElementById('review-login-msg');
    if (reviewFormWrap) {
      reviewFormWrap.dataset.productId = product.id || productId;
      if (currentUser) {
        reviewForm.style.display = '';
        reviewLoginMsg.style.display = 'none';
        resetReviewForm();
      } else {
        reviewForm.style.display = 'none';
        reviewLoginMsg.style.display = '';
      }
    }

    // WhatsApp link
    const whatsappMsg = encodeURIComponent(`Ola! Vim pelo site e tenho interesse no produto *${product.name}* (R$ ${product.price.toFixed(2).replace('.', ',')}). Pode me dar mais informacoes?`);
    document.getElementById('modal-whatsapp').href = `https://wa.me/${window._whatsappNumber || '5511999999999'}?text=${whatsappMsg}`;

    // Reset coupon
    document.getElementById('coupon-input').value = '';
    document.getElementById('coupon-msg').textContent = '';
    document.getElementById('coupon-msg').className = 'coupon-msg';

    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeProductModal() {
    productModal.classList.remove('open');
    document.body.style.overflow = '';
    currentProduct = null;
  }

  if (productModalClose) productModalClose.addEventListener('click', closeProductModal);
  if (productModalOverlay) productModalOverlay.addEventListener('click', closeProductModal);

  // ============================================
  // PRODUCT REVIEWS SYSTEM
  // ============================================
  let reviewFormRating = 5;

  function renderReviewsHTML(reviews) {
    if (!reviews || !reviews.length) {
      return '<p class="no-reviews">Nenhuma avaliação ainda. Seja o primeiro!</p>';
    }
    return reviews.map(r => {
      const name = r.author_name || r.author || 'Anônimo';
      const rating = r.rating || 5;
      const text = r.review_text || r.text || '';
      const date = r.created_at ? new Date(r.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : (r.date || '');
      return `
      <div class="review-item">
        <div class="review-header">
          <div class="review-avatar">${name.charAt(0).toUpperCase()}</div>
          <div>
            <p class="review-author">${name}</p>
            <div class="review-stars">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
          </div>
          <span class="review-date">${date}</span>
        </div>
        <p class="review-text">${text}</p>
      </div>`;
    }).join('');
  }

  async function loadProductReviews(productId) {
    const reviewsEl = document.getElementById('modal-reviews');
    try {
      const reviews = await supabase.getProductReviews(productId);
      reviewsEl.innerHTML = renderReviewsHTML(reviews);

      // Update rating display
      if (reviews.length) {
        const avg = reviews.reduce((sum, r) => sum + (r.rating || 5), 0) / reviews.length;
        const starsContainer = document.getElementById('modal-stars');
        const fullStars = Math.floor(avg);
        const halfStar = avg % 1 >= 0.5;
        if (starsContainer) {
          starsContainer.innerHTML = '★'.repeat(fullStars) + (halfStar ? '<span class="star-half">★</span>' : '') + '☆'.repeat(5 - fullStars - (halfStar ? 1 : 0));
        }
        const ratingText = document.getElementById('modal-rating-text');
        if (ratingText) ratingText.textContent = `${avg.toFixed(1)} (${reviews.length} avaliação${reviews.length > 1 ? 'ões' : ''})`;
      }
    } catch (err) {
      console.error('Erro ao carregar avaliações:', err);
      reviewsEl.innerHTML = '<p class="no-reviews">Nenhuma avaliação ainda. Seja o primeiro!</p>';
    }
  }

  function resetReviewForm() {
    reviewFormRating = 5;
    const textarea = document.getElementById('review-form-text');
    if (textarea) textarea.value = '';
    const msg = document.getElementById('review-form-msg');
    if (msg) { msg.textContent = ''; msg.className = 'review-form-msg'; }
    updateReviewStars();
  }

  function updateReviewStars() {
    document.querySelectorAll('#review-form-stars .review-star').forEach(star => {
      const val = parseInt(star.dataset.star);
      star.classList.toggle('active', val <= reviewFormRating);
    });
  }

  // Star click handler
  document.getElementById('review-form-stars')?.addEventListener('click', (e) => {
    const star = e.target.closest('.review-star');
    if (star) {
      reviewFormRating = parseInt(star.dataset.star);
      updateReviewStars();
    }
  });

  // Star hover effects
  document.getElementById('review-form-stars')?.addEventListener('mouseover', (e) => {
    const star = e.target.closest('.review-star');
    if (star) {
      const hoverVal = parseInt(star.dataset.star);
      document.querySelectorAll('#review-form-stars .review-star').forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.star) <= hoverVal);
      });
    }
  });
  document.getElementById('review-form-stars')?.addEventListener('mouseleave', () => {
    updateReviewStars();
  });

  // Submit review
  document.getElementById('review-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const wrap = document.getElementById('review-form-wrap');
    const productId = wrap?.dataset.productId;
    if (!productId || !currentUser) return;

    const text = document.getElementById('review-form-text')?.value?.trim();
    if (!text) return;

    const submitBtn = document.getElementById('review-form-submit');
    const msg = document.getElementById('review-form-msg');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const userEmail = currentUser.email;

      // Check if user already reviewed this product
      let existingReviews = [];
      try { existingReviews = await supabase.getProductReviews(productId); } catch(_) {}
      const alreadyReviewed = existingReviews.find(r => r.user_email === userEmail);
      if (alreadyReviewed) {
        msg.textContent = 'Você já avaliou este produto.';
        msg.className = 'review-form-msg error';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Avaliação';
        return;
      }

      await supabase.createReview({
        product_id: productId,
        user_email: userEmail,
        author_name: currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Cliente',
        rating: reviewFormRating,
        review_text: text,
      });

      msg.textContent = 'Avaliação enviada com sucesso!';
      msg.className = 'review-form-msg success';

      // Reload reviews
      loadProductReviews(productId);
      document.getElementById('review-form-text').value = '';
      reviewFormRating = 5;
      updateReviewStars();

    } catch (err) {
      msg.textContent = 'Erro ao enviar. Tente novamente.';
      msg.className = 'review-form-msg error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar Avaliação';
    }
  });
  // Qty controls
  document.getElementById('qty-minus')?.addEventListener('click', () => {
    if (modalQty > 1) {
      modalQty--;
      document.getElementById('qty-value').textContent = modalQty;
    }
  });

  document.getElementById('qty-plus')?.addEventListener('click', () => {
    if (modalQty < 10) {
      modalQty++;
      document.getElementById('qty-value').textContent = modalQty;
    }
  });

  // Modal add to cart
  document.getElementById('modal-add-cart')?.addEventListener('click', () => {
    if (!currentProduct) return;
    for (let i = 0; i < modalQty; i++) {
      const fakeBtn = { dataset: { product: currentProduct.name, price: currentProduct.price.toString(), productId: currentProduct.id }, style: {} };
      window.addToCart(fakeBtn);
    }
    closeProductModal();
  });

  // Modal add to wishlist
  document.getElementById('modal-add-wishlist')?.addEventListener('click', async () => {
    if (!currentProduct) return;
    await toggleWishlist(currentProduct.name);
  });

  // Product image click → open modal (handled by grid delegation)
  // Category carousel items are handled in renderCategoriesCarousel()

  // ============================================
  // PRODUCT FILTERS (Sort, Price Range, Category)
  // ============================================
  const productsGrid = document.getElementById('products-grid');
  const noResults = document.getElementById('products-no-results');
  let activeFilter = 'all';
  let currentSort = 'relevance';

  // Price range elements
  const priceMinSlider = document.getElementById('price-filter-min');
  const priceMaxSlider = document.getElementById('price-filter-max');
  const priceMinDisplay = document.getElementById('price-min-display');
  const priceMaxDisplay = document.getElementById('price-max-display');
  const priceRangeFill = document.getElementById('price-range-fill');
  const filterActiveCount = document.getElementById('filter-active-count');
  const filterCountNum = document.getElementById('filter-count-num');
  const filterResultsCount = document.getElementById('filter-results-count');

  function updatePriceRangeFill() {
    if (!priceMinSlider || !priceMaxSlider || !priceRangeFill) return;
    const min = parseInt(priceMinSlider.value);
    const max = parseInt(priceMaxSlider.value);
    const rangeMax = parseInt(priceMinSlider.max);
    const left = (min / rangeMax) * 100;
    const right = 100 - (max / rangeMax) * 100;
    priceRangeFill.style.left = left + '%';
    priceRangeFill.style.right = right + '%';
    if (priceMinDisplay) priceMinDisplay.textContent = `R$ ${min}`;
    if (priceMaxDisplay) priceMaxDisplay.textContent = `R$ ${max}`;
  }

  // Prevent min > max and vice versa
  if (priceMinSlider && priceMaxSlider) {
    priceMinSlider.addEventListener('input', () => {
      if (parseInt(priceMinSlider.value) > parseInt(priceMaxSlider.value)) {
        priceMinSlider.value = priceMaxSlider.value;
      }
      updatePriceRangeFill();
      updateActiveQuickBtn();
      applyFilters();
    });
    priceMaxSlider.addEventListener('input', () => {
      if (parseInt(priceMaxSlider.value) < parseInt(priceMinSlider.value)) {
        priceMaxSlider.value = priceMinSlider.value;
      }
      updatePriceRangeFill();
      updateActiveQuickBtn();
      applyFilters();
    });
    updatePriceRangeFill();
  }

  // Quick price buttons
  document.querySelectorAll('.price-quick').forEach(btn => {
    btn.addEventListener('click', () => {
      const min = btn.dataset.min;
      const max = btn.dataset.max;
      if (priceMinSlider) priceMinSlider.value = min;
      if (priceMaxSlider) priceMaxSlider.value = max;
      updatePriceRangeFill();
      updateActiveQuickBtn();
      applyFilters();
    });
  });

  function updateActiveQuickBtn() {
    if (!priceMinSlider || !priceMaxSlider) return;
    const min = priceMinSlider.value;
    const max = priceMaxSlider.value;
    document.querySelectorAll('.price-quick').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.min === min && btn.dataset.max === max);
    });
  }

  // Sort dropdown
  const sortToggle = document.getElementById('sort-toggle');
  const sortDropdown = document.getElementById('sort-dropdown');
  const sortLabel = document.getElementById('sort-label');

  if (sortToggle && sortDropdown) {
    sortToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = sortDropdown.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        sortDropdown.classList.add('open');
        sortToggle.classList.add('active');
      }
    });
    sortDropdown.querySelectorAll('.filter-dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        currentSort = item.dataset.sort;
        if (sortLabel) sortLabel.textContent = item.textContent;
        sortDropdown.querySelectorAll('.filter-dropdown-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        closeAllDropdowns();
        applyFilters();
      });
    });
  }

  // Price dropdown
  const priceToggle = document.getElementById('price-toggle');
  const priceDropdown = document.getElementById('price-dropdown');
  const priceLabel = document.getElementById('price-label');

  if (priceToggle && priceDropdown) {
    priceToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = priceDropdown.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        priceDropdown.classList.add('open');
        priceToggle.classList.add('active');
      }
    });
    // Prevent dropdown from closing when interacting with sliders
    priceDropdown.addEventListener('click', (e) => { e.stopPropagation(); });
  }

  // Close dropdowns on outside click
  function closeAllDropdowns() {
    document.querySelectorAll('.filter-dropdown').forEach(d => d.classList.remove('open'));
    if (sortToggle) sortToggle.classList.remove('active');
    if (priceToggle) priceToggle.classList.remove('active');
  }
  document.addEventListener('click', closeAllDropdowns);

  // Clear all filters
  const clearAllBtn = document.getElementById('filter-clear-all');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      if (priceMinSlider) priceMinSlider.value = 0;
      if (priceMaxSlider) priceMaxSlider.value = 500;
      updatePriceRangeFill();
      currentSort = 'relevance';
      if (sortLabel) sortLabel.textContent = 'Relevância';
      if (sortDropdown) {
        sortDropdown.querySelectorAll('.filter-dropdown-item').forEach((i, idx) => {
          i.classList.toggle('active', idx === 0);
        });
      }
      setActiveFilter('all');
      updateActiveQuickBtn();
    });
  }

  function setActiveFilter(filter) {
    activeFilter = filter;
    // Sync round carousel active state
    const track = document.getElementById('cat-carousel-track');
    if (track) {
      track.querySelectorAll('.cat-carousel-item').forEach(item => {
        item.classList.toggle('active', item.dataset.filter === filter);
      });
    }
    applyFilters();
  }

  function applyFilters() {
    const minPrice = priceMinSlider ? parseFloat(priceMinSlider.value) : 0;
    const maxPrice = priceMaxSlider ? parseFloat(priceMaxSlider.value) : 500;
    const cards = Array.from(productsGrid.querySelectorAll('.product-card'));
    let visibleCount = 0;

    // Filter
    cards.forEach(card => {
      const category = card.dataset.category;
      const price = parseFloat(card.dataset.price);
      const matchCategory = activeFilter === 'all' || category === activeFilter;
      const matchPrice = price >= minPrice && price <= maxPrice;

      if (matchCategory && matchPrice) {
        card.style.display = '';
        card.dataset.visible = '1';
        visibleCount++;
      } else {
        card.style.display = 'none';
        card.dataset.visible = '0';
      }
    });

    // Sort visible cards
    const visibleCards = cards.filter(c => c.dataset.visible === '1');
    if (currentSort !== 'relevance' && visibleCards.length > 1) {
      visibleCards.sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        const nameA = (a.dataset.name || '').toLowerCase();
        const nameB = (b.dataset.name || '').toLowerCase();
        switch (currentSort) {
          case 'price-asc': return priceA - priceB;
          case 'price-desc': return priceB - priceA;
          case 'name-asc': return nameA.localeCompare(nameB);
          case 'newest': return -1; // keep original order (newest first from DB)
          default: return 0;
        }
      });
      visibleCards.forEach(card => productsGrid.appendChild(card));
    }

    // Update results count
    if (filterResultsCount) {
      filterResultsCount.textContent = visibleCount === 1 ? '1 produto' : `${visibleCount} produtos`;
    }

    // Update active filters badge
    let activeCount = 0;
    if (activeFilter !== 'all') activeCount++;
    if (minPrice > 0 || maxPrice < 500) activeCount++;
    if (currentSort !== 'relevance') activeCount++;

    if (filterActiveCount) {
      filterActiveCount.style.display = activeCount > 0 ? '' : 'none';
      if (filterCountNum) filterCountNum.textContent = activeCount;
    }

    // Update price toggle label
    if (priceLabel) {
      if (minPrice > 0 || maxPrice < 500) {
        priceLabel.textContent = `R$${minPrice}–R$${maxPrice}`;
      } else {
        priceLabel.textContent = 'Preço';
      }
    }

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  // ============================================
  // TOAST NOTIFICATION (site-wide)
  // ============================================
  function showToast(msg, duration = 3500) {
    let container = document.getElementById('site-toast');
    if (!container) {
      container = document.createElement('div');
      container.id = 'site-toast';
      container.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:99999;pointer-events:none;';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.style.cssText = 'background:#333;color:#fff;padding:12px 24px;border-radius:8px;font-size:14px;margin-top:8px;opacity:0;transition:opacity .3s;pointer-events:auto;text-align:center;max-width:90vw;';
    toast.textContent = msg;
    container.appendChild(toast);
    requestAnimationFrame(() => { toast.style.opacity = '1'; });
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ============================================
  // CART DRAWER
  // ============================================
  const cartDrawer = document.getElementById('cart-drawer');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartDrawerClose = document.getElementById('cart-drawer-close');
  const cartBtn = document.getElementById('cart-btn');

  function openCartDrawer() {
    renderCartDrawer();
    cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (cartDrawerClose) cartDrawerClose.addEventListener('click', closeCartDrawer);
  if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);

  function renderCartDrawer() {
    const itemsContainer = document.getElementById('cart-drawer-items');
    const emptyEl = document.getElementById('cart-empty');
    const footerEl = document.getElementById('cart-drawer-footer');
    if (!itemsContainer) return;
    const items = window.cartItems || [];

    // Remove old items
    const oldItems = itemsContainer.querySelectorAll('.cart-item');
    oldItems.forEach(i => i.remove());

    if (items.length === 0) {
      if (emptyEl) emptyEl.style.display = '';
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    if (emptyEl) emptyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = '';

    items.forEach((item, index) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      const name = item.product_name || item.productName || 'Produto';
      const price = parseFloat(item.price_at_cart) || 0;
      const qty = item.quantity || 1;
      
      itemEl.innerHTML = `
        <div class="cart-item-info">
          <h4>${name}</h4>
          <p class="cart-item-price">R$ ${price.toFixed(2).replace('.', ',')}</p>
        </div>
        <div class="cart-item-controls">
          <div class="cart-item-qty">
            <button class="qty-btn-sm" data-index="${index}" data-delta="-1">−</button>
            <span>${qty}</span>
            <button class="qty-btn-sm" data-index="${index}" data-delta="1">+</button>
          </div>
          <button class="cart-item-remove" data-index="${index}" aria-label="Remover">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `;
      itemsContainer.appendChild(itemEl);
    });

    // Event delegation for cart item buttons
    itemsContainer.querySelectorAll('.qty-btn-sm').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        const delta = parseInt(btn.dataset.delta);
        changeCartQty(idx, delta);
      });
    });
    itemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeCartItem(parseInt(btn.dataset.index));
      });
    });

    updateCartSummary();
  }

  function updateCartSummary() {
    const items = window.cartItems || [];
    let subtotal = items.reduce((sum, item) => {
      return sum + (parseFloat(item.price_at_cart) || 0) * (item.quantity || 1);
    }, 0);

    const subtotalEl = document.getElementById('cart-subtotal');
    if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    let discount = 0;
    const discountRow = document.getElementById('cart-discount-row');

    if (appliedCoupon) {
      if (appliedCoupon.discount_type === 'percentage') {
        discount = subtotal * (appliedCoupon.discount_value / 100);
      } else {
        discount = appliedCoupon.discount_value;
      }
      discount = Math.min(discount, subtotal);
      if (discountRow) discountRow.style.display = '';
      const discountEl = document.getElementById('cart-discount');
      if (discountEl) discountEl.textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
    } else {
      if (discountRow) discountRow.style.display = 'none';
    }

    const total = subtotal - discount;
    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Enable/disable checkout button based on items
    const checkoutBtn = document.getElementById('cart-checkout-infinitepay');
    if (checkoutBtn) {
      checkoutBtn.disabled = items.length === 0;
    }
  }

  // ---- INFINITEPAY: GERAÇÃO DE LINK VIA SUPABASE EDGE FUNCTION (sem CORS!) ----
  const INFINITEPAY_PROXY_URL = 'https://xckuilzjkajfzzartqoy.supabase.co/functions/v1/create-infinitepay-link';

  async function createInfinitePayLink(cartItems, total, discount = 0, couponCode = null, orderId = null) {
    try {
      // Monta itens no formato exato que a InfinitePay espera (preço em centavos!)
      const items = cartItems.map(item => ({
        quantity: item.quantity || 1,
        price: Math.round((parseFloat(item.price_at_cart) || 0) * 100), // R$ 10.00 → 1000
        description: item.product_name || "Produto do Toque de Fada"
      }));

      // Descrição extra para o checkout
      const fullDescription = cartItems.map(item =>
        `${item.quantity}x ${item.product_name} - R$ ${(item.price_at_cart * item.quantity).toFixed(2)}`
      ).join('\n');

      // Identificador único pro pedido
      const referenceId = orderId ? `toque-${orderId}` : `toque_${Date.now()}`;

      const payload = {
        handle: "eric-eduardo-p78",
        items: items,
        order_nsu: referenceId,
        description: `Pedido #${orderId || 'TEMP'} - Toque de Fada\n${fullDescription}`,
        customer: {
          name: currentUser?.user_metadata?.full_name || "Cliente",
          email: currentUser?.email || "cliente@toquedefada.com.br"
        },
        redirect_url: window.location.origin + `/obrigado.html?order=${orderId || 'temp'}&ref=${referenceId}`
      };

      // Chama a Edge Function do Supabase como proxy (sem erro de CORS!)
      const response = await fetch(INFINITEPAY_PROXY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ payload })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Erro ${response.status}: Falha ao criar link`);
      }

      const data = await response.json();
      const checkoutUrl = data.checkout_url || data.url;
      if (!checkoutUrl) {
        console.error('Resposta da InfinitePay:', data);
        throw new Error('Resposta sem checkout_url/url');
      }

      return {
        checkout_url: checkoutUrl,
        reference_id: referenceId
      };
    } catch (err) {
      console.error('Erro ao gerar link InfinitePay:', err);
      throw err;
    }
  }

  // ---- CHECKOUT: CREATE ORDER + PAGAR COM INFINITEPAY ----
  async function finalizeCheckoutInfinitePay() {
    const items = window.cartItems || [];
    if (items.length === 0) {
      showToast('Seu carrinho está vazio');
      return;
    }

    // Require login before checkout
    if (!currentUser && !(supabase && supabase.getAccessToken())) {
      showToast('Faça login para finalizar a compra');
      // Close cart drawer
      const cartDrawer = document.getElementById('cart-drawer');
      if (cartDrawer) cartDrawer.classList.remove('open');
      document.body.style.overflow = '';
      // Open login modal after brief delay
      setTimeout(() => {
        const authModal = document.getElementById('auth-modal');
        const authSubtitle = document.getElementById('auth-subtitle');
        const loginForm = document.getElementById('auth-login-form');
        if (authModal) {
          if (authSubtitle) authSubtitle.textContent = 'Entre ou crie sua conta para finalizar a compra';
          document.querySelectorAll('#auth-login-form, #auth-register-form, #auth-forgot-form').forEach(f => f.style.display = 'none');
          if (loginForm) loginForm.style.display = '';
          authModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      }, 400);
      return;
    }

    const checkoutBtn = document.getElementById('cart-checkout-infinitepay');
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.textContent = 'GERANDO PAGAMENTO...';
    }

    try {
      // Calculate totals
      let subtotal = items.reduce((sum, item) => {
        return sum + (parseFloat(item.price_at_cart) || 0) * (item.quantity || 1);
      }, 0);

      let discount = 0;
      if (appliedCoupon) {
        if (appliedCoupon.discount_type === 'percentage') {
          discount = subtotal * (appliedCoupon.discount_value / 100);
        } else {
          discount = appliedCoupon.discount_value;
        }
        discount = Math.min(discount, subtotal);
      }
      const total = subtotal - discount;

      // Get user info
      const user = JSON.parse(localStorage.getItem('toque_user') || 'null');
      const sessionId = localStorage.getItem('toque_session_id') || 'unknown';

      // Create order in Supabase
      const order = await supabase.createOrder({
        session_id: sessionId,
        user_email: user ? user.email : null,
        customer_name: user ? (user.user_metadata?.full_name || user.user_metadata?.name || user.email) : null,
        status: 'pending_payment',
        total_price: total,
        discount: discount,
        coupon_code: appliedCoupon ? appliedCoupon.code : null
      });

      const orderId = order.id;

      // Create order items
      const orderItems = items.map(item => ({
        order_id: orderId,
        product_id: item.product_id || null,
        product_name: item.product_name || item.productName || 'Produto',
        price_at_order: parseFloat(item.price_at_cart) || 0,
        quantity: item.quantity || 1
      }));
      await supabase.createOrderItems(orderItems);

      // Generate InfinitePay payment link
      const { checkout_url } = await createInfinitePayLink(items, total, discount, appliedCoupon?.code, orderId);

      // Clear cart before redirecting
      window.cartItems = [];
      appliedCoupon = null;
      saveCartToLocalStorage();
      updateCartBadge();
      renderCartDrawer();
      closeCartDrawer();

      showToast('Redirecionando para pagamento seguro...');

      // Redirect to InfinitePay checkout
      setTimeout(() => {
        window.location.href = checkout_url;
      }, 500);

    } catch (err) {
      console.error('Erro no checkout InfinitePay:', err);
      showToast('Erro ao gerar link de pagamento. Tente novamente.');
    } finally {
      if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = 'PAGAR <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>';
      }
    }
  }

  // Attach checkout click handler
  document.getElementById('cart-checkout-infinitepay')?.addEventListener('click', finalizeCheckoutInfinitePay);

  function changeCartQty(index, delta) {
    if (!window.cartItems || !window.cartItems[index]) return;
    window.cartItems[index].quantity = (window.cartItems[index].quantity || 1) + delta;
    if (window.cartItems[index].quantity < 1) {
      window.cartItems.splice(index, 1);
    }
    saveCartToLocalStorage();
    updateCartBadge();
    renderCartDrawer();
  }

  function removeCartItem(index) {
    if (!window.cartItems) return;
    const removed = window.cartItems.splice(index, 1);
    saveCartToLocalStorage();
    updateCartBadge();
    renderCartDrawer();

  }

  // ============================================
  // COUPON SYSTEM
  // ============================================
  const DEMO_COUPONS = {
    'FADA10': { code: 'FADA10', discount_type: 'percentage', discount_value: 10, min_purchase: 0 },
    'DESCONTO20': { code: 'DESCONTO20', discount_type: 'percentage', discount_value: 20, min_purchase: 150 },
    'VIP50': { code: 'VIP50', discount_type: 'fixed', discount_value: 50, min_purchase: 200 }
  };

  async function validateCoupon(code) {
    const upperCode = code.toUpperCase().trim();
    
    try {
      if (typeof supabase !== 'undefined') {
        const result = await supabase.request('GET', 'coupons', {
          query: `?code=eq.${encodeURIComponent(upperCode)}&active=eq.true`
        });
        if (result && result.length > 0) {
          const c = result[0];
          // Check expiry
          if (c.expires_at && new Date(c.expires_at) < new Date()) return DEMO_COUPONS[upperCode] || null;
          // Check max uses
          if (c.max_uses && c.current_uses >= c.max_uses) return DEMO_COUPONS[upperCode] || null;
          // Map DB columns to app format
          return {
            code: c.code,
            discount_type: c.type, // 'percentage' or 'fixed'
            discount_value: parseFloat(c.value),
            min_purchase: parseFloat(c.min_purchase) || 0
          };
        }
      }
    } catch (e) {
      console.log('Supabase coupon check failed, using demo coupons');
    }

    return DEMO_COUPONS[upperCode] || null;
  }

  function setupCouponBtn(inputId, btnId, msgId, isCart) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    btn.addEventListener('click', async () => {
      const input = document.getElementById(inputId);
      const msgEl = document.getElementById(msgId);
      const code = input.value.trim();

      if (!code) {
        msgEl.textContent = 'Digite um código de cupom';
        msgEl.className = 'coupon-msg coupon-error';
        return;
      }

      btn.disabled = true;
      btn.textContent = '...';

      const coupon = await validateCoupon(code);

      if (coupon) {
        const items = window.cartItems || [];
        const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.price_at_cart) || 0) * (item.quantity || 1), 0);

        if (coupon.min_purchase && subtotal < coupon.min_purchase) {
          msgEl.textContent = `Pedido mínimo: R$ ${coupon.min_purchase.toFixed(2).replace('.', ',')}`;
          msgEl.className = 'coupon-msg coupon-error';
        } else {
          appliedCoupon = coupon;
          const desc = coupon.discount_type === 'percentage'
            ? `${coupon.discount_value}% de desconto`
            : `R$ ${coupon.discount_value.toFixed(2).replace('.', ',')} de desconto`;
          msgEl.textContent = `✓ Cupom aplicado! ${desc}`;
          msgEl.className = 'coupon-msg coupon-success';
          if (isCart) updateCartSummary();
        }
      } else {
        msgEl.textContent = 'Cupom inválido ou expirado';
        msgEl.className = 'coupon-msg coupon-error';
      }

      btn.disabled = false;
      btn.textContent = 'APLICAR';
    });
  }

  setupCouponBtn('coupon-input', 'coupon-apply', 'coupon-msg', false);
  setupCouponBtn('cart-coupon-input', 'cart-coupon-apply', 'cart-coupon-msg', true);

  // ============================================
  // CART FUNCTIONALITY (PERSISTENT)
  // ============================================
  window.addToCart = async function(button) {
    // Prevent multiple rapid clicks
    if (button.disabled) return;
    button.disabled = true;

    const productName = button.dataset.product || button.getAttribute('data-product');
    const price = button.dataset.price || button.getAttribute('data-price') || '0';
    const productDbId = button.dataset.productId || button.getAttribute('data-product-id') || '';
    const productId = `product_${productName.replace(/\s+/g, '_').toLowerCase()}`;

    try {
      if (!window.cartItems) window.cartItems = [];

      // Always check if item already exists in cart
      const existing = window.cartItems.find(item => item.product_name === productName);
      let message = '';
      
      if (existing) {
        // Item already exists - just increment quantity
        existing.quantity++;
        message = `Agora você tem ${existing.quantity}x ${productName}`;
      } else {
        // New item - add to cart
        const newItem = {
          product_name: productName,
          product_id: productDbId,
          price_at_cart: parseFloat(price),
          quantity: 1
        };
        window.cartItems.push(newItem);
        message = 'Adicionado ao carrinho!';
        
        // If Supabase available, sync to database
        if (window.cart && typeof supabase !== 'undefined') {
          try {
            await supabase.addToCart(productId, productName, price, 1);
          } catch (err) {
            console.error('Supabase sync error (non-fatal):', err);
          }
        }
      }
      
      saveCartToLocalStorage();
      updateCartBadge();
      renderCartDrawer();
      if (button.style) {
        button.style.transform = 'scale(0.85)';
        setTimeout(() => button.style.transform = '', 200);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);

    } finally {
      // Re-enable button after 400ms
      setTimeout(() => {
        button.disabled = false;
      }, 400);
    }
  };

  function updateCartBadge() {
    if (!window.cartItems) window.cartItems = [];
    const count = window.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    if (cartBadge) {
      cartBadge.textContent = count;
      cartBadge.classList.remove('bounce');
      void cartBadge.offsetWidth;
      cartBadge.classList.add('bounce');
    }
  }

  // Product card add-to-cart buttons (handled by grid delegation)

  // ============================================
  // WISHLIST (PERSISTENT)
  // ============================================
  let wishlistItems = [];

  function loadWishlistFromLocal() {
    try {
      const stored = localStorage.getItem('toque_wishlist');
      if (stored) {
        wishlistItems = JSON.parse(stored);
      }
    } catch (e) {
      wishlistItems = [];
    }
  }

  async function loadWishlist() {
    // Start with localStorage for instant UI
    loadWishlistFromLocal();
    updateWishlistBadge();
    syncWishlistButtons();

    // Then try Supabase in background
    try {
      if (typeof supabase !== 'undefined') {
        const items = await supabase.getWishlist();
        if (items && Array.isArray(items) && items.length > 0) {
          wishlistItems = items;
          saveWishlistLocal();
          updateWishlistBadge();
          syncWishlistButtons();
        }
      }
    } catch (e) {
      console.log('Wishlist Supabase sync skipped:', e.message);
    }
  }

  function saveWishlistLocal() {
    localStorage.setItem('toque_wishlist', JSON.stringify(wishlistItems));
  }

  async function toggleWishlist(productName) {
    const existing = wishlistItems.find(w => w.product_name === productName);

    if (existing) {
      // Remove from wishlist
      wishlistItems = wishlistItems.filter(w => w.product_name !== productName);
      saveWishlistLocal();
      updateWishlistBadge();
      syncWishlistButtons();

      // Sync removal with Supabase
      try {
        if (typeof supabase !== 'undefined' && existing.id) {
          await supabase.removeFromWishlist(existing.id);
        }
      } catch (e) { console.log('Wishlist remove sync error:', e); }

    } else {
      // Add to wishlist locally first (instant feedback)
      const newItem = { product_name: productName };
      wishlistItems.push(newItem);
      saveWishlistLocal();
      updateWishlistBadge();
      syncWishlistButtons();

      // Sync with Supabase
      try {
        if (typeof supabase !== 'undefined') {
          const result = await supabase.addToWishlist(productName);
          if (result && result.id) {
            // Update local item with DB id for future removal
            const idx = wishlistItems.findIndex(w => w.product_name === productName && !w.id);
            if (idx !== -1) {
              wishlistItems[idx] = result;
              saveWishlistLocal();
            }
          }
        }
      } catch (e) {
        console.log('Wishlist add sync error:', e);
      }
    }
  }

  function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-count');
    if (badge) {
      const count = wishlistItems.length;
      badge.textContent = count;
      badge.style.display = count > 0 ? '' : 'none';
    }
  }

  function syncWishlistButtons() {
    document.querySelectorAll('.product-wishlist').forEach(btn => {
      const name = btn.dataset.product;
      const isWished = wishlistItems.some(w => w.product_name === name);
      btn.classList.toggle('active', isWished);
      const svgPath = btn.querySelector('svg path');
      if (svgPath) {
        svgPath.setAttribute('fill', isWished ? 'currentColor' : 'none');
      }
    });

    // Sync modal wishlist button if modal is open
    const modalWishBtn = document.getElementById('modal-add-wishlist');
    if (modalWishBtn && currentProduct) {
      const isWished = wishlistItems.some(w => w.product_name === currentProduct.name);
      modalWishBtn.classList.toggle('active', isWished);
      const svgPath = modalWishBtn.querySelector('svg path');
      if (svgPath) {
        svgPath.setAttribute('fill', isWished ? 'currentColor' : 'none');
      }
    }
  }

  // Product wishlist buttons (handled by grid delegation)

  // Header wishlist button → scroll to products
  document.getElementById('wishlist-btn')?.addEventListener('click', () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  });

  loadWishlist();

  // ============================================
  // FAQ ACCORDION
  // ============================================
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const faqItem = btn.parentElement;
      const isOpen = faqItem.classList.contains('open');
      
      // Close all
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        faqItem.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ============================================
  // CONTACT FORM
  // ============================================
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      const whatsappMsg = encodeURIComponent(
        `Olá! Sou ${name} (${email}).\n\nAssunto: ${subject || 'Geral'}\n\n${message}\n\nEnviado pelo formulário de contato`
      );

      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';
      contactSuccess.style.animation = 'scaleIn 0.4s var(--transition-smooth)';

      setTimeout(() => {
        window.open(`https://wa.me/5511978042160?text=${whatsappMsg}`, '_blank');
      }, 500);

      setTimeout(() => {
        contactForm.style.display = '';
        contactSuccess.style.display = '';
        contactForm.reset();
      }, 5000);
    });
  }



  // ============================================
  // NEWSLETTER
  // ============================================
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      
      try {
        if (typeof supabase !== 'undefined') {
          await supabase.subscribeNewsletter(email);
        }
      } catch (err) {
        console.log('Newsletter signup error:', err);
      }

      newsletterForm.style.display = 'none';
      newsletterSuccess.classList.add('show');
      
      setTimeout(() => {
        newsletterForm.style.display = '';
        newsletterSuccess.classList.remove('show');
        newsletterForm.reset();
      }, 4000);
    });
  }

  // ============================================
  // BACK TO TOP
  // ============================================
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // SMOOTH SCROLL FOR HASH LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  // ============================================
  // PROMO BANNER ROTATION
  // ============================================
  const promoMessages = [
    'Frete grátis acima de R$199 • Parcele em até 6x sem juros',
    'Nova Coleção 2026 disponível • Peças exclusivas',
    'Ganhe 10% OFF na primeira compra • Use: FADA10',
    'Prata 925 com garantia vitalícia • Qualidade premium'
  ];

  let promoIndex = 0;
  const promoText = document.getElementById('promo-text');

  if (promoText) {
    setInterval(() => {
      promoText.style.opacity = '0';
      promoText.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        promoIndex = (promoIndex + 1) % promoMessages.length;
        promoText.textContent = promoMessages[promoIndex];
        promoText.style.opacity = '1';
        promoText.style.transform = 'translateY(0)';
      }, 300);
    }, 4000);

    promoText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  }

  // ============================================
  // AUTH SYSTEM
  // ============================================
  const authBtn = document.getElementById('auth-btn');
  const authModal = document.getElementById('auth-modal');
  const authModalOverlay = document.getElementById('auth-modal-overlay');
  const authModalClose = document.getElementById('auth-modal-close');
  const authSubtitle = document.getElementById('auth-subtitle');

  const loginForm = document.getElementById('auth-login-form');
  const registerForm = document.getElementById('auth-register-form');
  const forgotForm = document.getElementById('auth-forgot-form');

  const userDropdown = document.getElementById('user-dropdown');
  let dropdownOpen = false;
  let currentUser = null;

  // Show/hide auth forms
  function showForm(form) {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    forgotForm.style.display = 'none';
    form.style.display = '';
    // Clear errors
    document.querySelectorAll('.auth-error, .auth-success').forEach(el => el.textContent = '');
  }

  document.getElementById('show-register')?.addEventListener('click', () => {
    authSubtitle.textContent = 'Crie sua conta';
    showForm(registerForm);
  });

  document.getElementById('show-login')?.addEventListener('click', () => {
    authSubtitle.textContent = 'Entre na sua conta';
    showForm(loginForm);
  });

  document.getElementById('back-to-login')?.addEventListener('click', () => {
    authSubtitle.textContent = 'Entre na sua conta';
    showForm(loginForm);
  });

  document.getElementById('forgot-password-link')?.addEventListener('click', () => {
    authSubtitle.textContent = 'Recuperar senha';
    showForm(forgotForm);
  });

  // Password toggle buttons
  document.querySelectorAll('.password-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (input) {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        btn.classList.toggle('active', isPassword);
      }
    });
  });

  // Open auth modal
  function openAuthModal() {
    if (currentUser) {
      toggleUserDropdown();
      return;
    }
    authSubtitle.textContent = 'Entre na sua conta';
    showForm(loginForm);
    authModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAuthModal() {
    authModal.classList.remove('open');
    document.body.style.overflow = '';
    document.querySelectorAll('.auth-error, .auth-success').forEach(el => el.textContent = '');
  }

  if (authBtn) authBtn.addEventListener('click', openAuthModal);
  if (authModalClose) authModalClose.addEventListener('click', closeAuthModal);
  if (authModalOverlay) authModalOverlay.addEventListener('click', closeAuthModal);

  // Auto-open login when session expires (fired from supabase-client.js)
  window.addEventListener('session-expired', () => {
    // Close any admin panel if open
    const admPanel = document.getElementById('admin-panel');
    if (admPanel) admPanel.classList.remove('open');
    document.body.style.overflow = '';
    // Show toast + open login
    showToast('Sessão expirada', 'Faça login novamente para continuar.', 'warning');
    setTimeout(() => openAuthModal(), 600);
  });

  // User dropdown
  function toggleUserDropdown() {
    dropdownOpen = !dropdownOpen;
    if (dropdownOpen) {
      const rect = authBtn.getBoundingClientRect();
      userDropdown.style.top = (rect.bottom + 8) + 'px';
      userDropdown.style.right = (window.innerWidth - rect.right) + 'px';
      userDropdown.style.display = '';
    } else {
      userDropdown.style.display = 'none';
    }
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (dropdownOpen && !userDropdown.contains(e.target) && e.target !== authBtn && !authBtn.contains(e.target)) {
      dropdownOpen = false;
      userDropdown.style.display = 'none';
    }
  });

  // Update UI based on auth state
  function updateAuthUI(user) {
    currentUser = user;
    if (user) {
      // User is logged in - change icon to filled
      authBtn.innerHTML = `
        <svg fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" style="fill: var(--rose-gold); stroke: var(--rose-gold);">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>`;
      
      const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Usuário';
      document.getElementById('user-display-name').textContent = name;
      document.getElementById('user-display-email').textContent = user.email;
      document.getElementById('user-avatar').textContent = name.charAt(0).toUpperCase();
    } else {
      // User is logged out - outline icon
      authBtn.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>`;
      userDropdown.style.display = 'none';
      dropdownOpen = false;
    }
  }

  // Set submit button loading state
  function setLoading(btn, loading) {
    if (loading) {
      btn.disabled = true;
      btn.querySelector('span').textContent = 'Aguarde...';
    } else {
      btn.disabled = false;
      // Restore text based on which button
      if (btn.id === 'login-submit') btn.querySelector('span').textContent = 'Entrar';
      if (btn.id === 'register-submit') btn.querySelector('span').textContent = 'Criar conta';
      if (btn.id === 'forgot-submit') btn.querySelector('span').textContent = 'Enviar link';
    }
  }

  // LOGIN
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      const errorEl = document.getElementById('login-error');
      const submitBtn = document.getElementById('login-submit');
      errorEl.textContent = '';

      setLoading(submitBtn, true);

      try {
        const result = await supabase.signIn(email, password);
        const user = result.user || await supabase.getUser();
        updateAuthUI(user);
        closeAuthModal();
        loginForm.reset();
        showToast('Login realizado', 'Bem-vindo(a) de volta!', 'success');
      } catch (err) {
        console.warn('Login error:', err.message);
        const msg = err.message.toLowerCase();
        if (msg.includes('invalid') || msg.includes('credentials') || msg.includes('invalid_grant')) {
          errorEl.textContent = 'E-mail ou senha incorretos';
        } else if (msg.includes('email not confirmed') || msg.includes('not confirmed')) {
          errorEl.textContent = 'Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada e spam.';
        } else if (msg.includes('too many requests') || msg.includes('rate limit')) {
          errorEl.textContent = 'Muitas tentativas. Aguarde alguns minutos e tente novamente.';
        } else {
          errorEl.textContent = err.message || 'Erro ao fazer login. Tente novamente.';
        }
      } finally {
        setLoading(submitBtn, false);
      }
    });
  }

  // REGISTER
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('register-name').value.trim();
      const email = document.getElementById('register-email').value.trim();
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('register-password-confirm').value;
      const errorEl = document.getElementById('register-error');
      const submitBtn = document.getElementById('register-submit');
      errorEl.textContent = '';

      if (password !== confirmPassword) {
        errorEl.textContent = 'As senhas não coincidem';
        return;
      }

      if (password.length < 6) {
        errorEl.textContent = 'A senha deve ter no mínimo 6 caracteres';
        return;
      }

      setLoading(submitBtn, true);

      try {
        const result = await supabase.signUp(email, password, name);
        
        if (result.access_token) {
          // Auto-confirmed — user is logged in
          const user = result.user || await supabase.getUser();
          updateAuthUI(user);
          closeAuthModal();
          registerForm.reset();
        } else {
          // Email confirmation needed
          errorEl.style.color = '#4CAF50';
          errorEl.textContent = '✓ Conta criada! Verifique seu e-mail para confirmar.';
          registerForm.reset();
        }
      } catch (err) {
        const msg = err.message.toLowerCase();
        if (msg.includes('already registered') || msg.includes('already been registered')) {
          errorEl.textContent = 'Este e-mail já está cadastrado';
        } else {
          errorEl.textContent = err.message;
        }
      } finally {
        setLoading(submitBtn, false);
      }
    });
  }

  // FORGOT PASSWORD
  if (forgotForm) {
    forgotForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('forgot-email').value.trim();
      const errorEl = document.getElementById('forgot-error');
      const successEl = document.getElementById('forgot-success');
      const submitBtn = document.getElementById('forgot-submit');
      errorEl.textContent = '';
      successEl.textContent = '';

      setLoading(submitBtn, true);

      try {
        await supabase.resetPassword(email);
        successEl.textContent = '✓ Link enviado! Verifique seu e-mail.';
        forgotForm.reset();
      } catch (err) {
        errorEl.textContent = err.message || 'Erro ao enviar link';
      } finally {
        setLoading(submitBtn, false);
      }
    });
  }

  // LOGOUT
  document.getElementById('btn-logout')?.addEventListener('click', async () => {
    await supabase.signOut();
    updateAuthUI(null);
    // Clear cart on logout
    window.cartItems = [];
    saveCartToLocalStorage();
    updateCartBadge();
    renderCartDrawer();
  });

  // My orders
  document.getElementById('btn-my-orders')?.addEventListener('click', () => {
    toggleUserDropdown();
    openMyOrders();
  });

  // ---- MY ORDERS PAGE ----
  const myOrdersOverlay = document.getElementById('my-orders-overlay');
  const myOrdersClose = document.getElementById('my-orders-close');
  const myOrdersBody = document.getElementById('my-orders-body');
  const myOrdersList = document.getElementById('my-orders-list');
  const myOrdersLoading = document.getElementById('my-orders-loading');
  const myOrdersEmpty = document.getElementById('my-orders-empty');

  if (myOrdersClose) {
    myOrdersClose.addEventListener('click', closeMyOrders);
  }
  if (myOrdersOverlay) {
    myOrdersOverlay.addEventListener('click', (e) => {
      if (e.target === myOrdersOverlay) closeMyOrders();
    });
  }

  function openMyOrders() {
    if (!myOrdersOverlay) return;
    myOrdersOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    loadMyOrders();
  }

  function closeMyOrders() {
    if (!myOrdersOverlay) return;
    myOrdersOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  function myOrdersStatusInfo(status) {
    const map = {
      'pending_payment': { label: 'Aguardando Pagamento', cls: 'mo-status--pending', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', desc: 'Aguardando confirma\u00e7\u00e3o de pagamento' },
      'pending': { label: 'Aguardando Pagamento', cls: 'mo-status--pending', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', desc: 'Aguardando confirma\u00e7\u00e3o de pagamento' },
      'paid': { label: 'Pagamento Confirmado', cls: 'mo-status--paid', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>', desc: 'Pagamento confirmado - pedido em prepara\u00e7\u00e3o' },
      'shipped': { label: 'Pedido Enviado', cls: 'mo-status--shipped', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"/></svg>', desc: 'Seu pedido foi enviado e est\u00e1 a caminho!' },
      'delivered': { label: 'Entregue', cls: 'mo-status--delivered', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>', desc: 'Pedido entregue' },
      'canceled': { label: 'Cancelado', cls: 'mo-status--canceled', icon: '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>', desc: 'Pedido cancelado' }
    };
    return map[status] || { label: status, cls: '', icon: '', desc: '' };
  }

  function formatMyOrderDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) + ' as ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  async function loadMyOrders() {
    if (!myOrdersList || !myOrdersLoading || !myOrdersEmpty) return;

    myOrdersList.innerHTML = '';
    myOrdersLoading.style.display = 'flex';
    myOrdersEmpty.style.display = 'none';

    try {
      const user = supabase.getCachedUser();
      let orders = [];

      if (user && user.email) {
        orders = await supabase.getOrdersByEmail(user.email);
      }
      // Also try session-based orders
      const sessionId = localStorage.getItem('toque_session_id');
      if (sessionId) {
        try {
          const sessionOrders = await supabase.getOrdersBySession(sessionId);
          // Merge, avoiding duplicates
          const existingIds = new Set(orders.map(o => o.id));
          sessionOrders.forEach(o => { if (!existingIds.has(o.id)) orders.push(o); });
        } catch(e) { /* ignore */ }
      }

      // Sort by date desc
      orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      myOrdersLoading.style.display = 'none';

      if (!orders.length) {
        myOrdersEmpty.style.display = 'flex';
        return;
      }

      // Load items for each order
      for (const order of orders) {
        try {
          order._items = await supabase.getOrderItems(order.id);
        } catch(e) { order._items = []; }
      }

      myOrdersList.innerHTML = orders.map(order => {
        const status = myOrdersStatusInfo(order.status);
        const total = parseFloat(order.total_price) || 0;
        const discount = parseFloat(order.discount) || 0;
        const items = order._items || [];
        const tracking = order.tracking_code || null;
        const noTracking = order.no_tracking === true;
        const dateStr = formatMyOrderDate(order.created_at);

        let trackingHtml = '';
        if (order.status === 'shipped' || order.status === 'delivered') {
          if (tracking) {
            trackingHtml = `<div class="mo-tracking mo-tracking--available">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              <div><strong>C\u00f3digo de Rastreio</strong><span class="mo-tracking-code">${tracking}</span></div>
            </div>`;
          } else if (noTracking) {
            trackingHtml = `<div class="mo-tracking mo-tracking--pickup">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <div><strong>Retirada / Entrega local</strong><span>Sem c\u00f3digo de rastreio</span></div>
            </div>`;
          } else {
            trackingHtml = `<div class="mo-tracking mo-tracking--available">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"/></svg>
              <div><strong>Em Tr\u00e2nsito</strong><span>Seu pedido est\u00e1 a caminho!</span></div>
            </div>`;
          }
        } else if (order.status === 'paid') {
          trackingHtml = `<div class="mo-tracking mo-tracking--waiting">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"/></svg>
            <div><strong>Em Prepara\u00e7\u00e3o</strong><span>Seu pedido est\u00e1 sendo preparado para envio</span></div>
          </div>`;
        } else if (order.status === 'pending_payment' || order.status === 'pending') {
          trackingHtml = `<div class="mo-tracking mo-tracking--waiting">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div><strong>Rastreio</strong><span>Dispon\u00edvel ap\u00f3s confirma\u00e7\u00e3o do pagamento</span></div>
          </div>`;
        }

        return `<div class="mo-card">
          <div class="mo-card-header">
            <div class="mo-card-id">Pedido #${order.id}</div>
            <span class="mo-status ${status.cls}">${status.icon} ${status.label}</span>
          </div>
          <div class="mo-card-date">${dateStr}</div>
          <div class="mo-card-items">
            ${items.map(item => `<div class="mo-item">
              <span class="mo-item-name">${item.product_name}</span>
              <span class="mo-item-qty">x${item.quantity}</span>
              <span class="mo-item-price">R$ ${(item.price_at_order * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>`).join('')}
          </div>
          <div class="mo-card-footer">
            <div class="mo-card-total">
              ${discount > 0 ? `<small class="mo-discount">Desconto: -R$ ${discount.toFixed(2).replace('.', ',')}</small>` : ''}
              <strong>Total: R$ ${total.toFixed(2).replace('.', ',')}</strong>
            </div>
          </div>
          ${trackingHtml}
          <div class="mo-status-desc">${status.desc}</div>
        </div>`;
      }).join('');

    } catch (err) {
      console.error('Error loading my orders:', err);
      myOrdersLoading.style.display = 'none';
      myOrdersList.innerHTML = '<div class="my-orders-error"><p>Erro ao carregar pedidos. Tente novamente.</p></div>';
    }
  }

  // My wishlist
  document.getElementById('btn-my-wishlist')?.addEventListener('click', () => {
    toggleUserDropdown();
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Check existing session on page load
  async function checkAuthSession() {
    const cachedUser = supabase.getCachedUser();
    if (cachedUser) {
      updateAuthUI(cachedUser);
      // Verify token is still valid in background
      try {
        const user = await supabase.getUser();
        if (user) {
          updateAuthUI(user);
        } else {
          updateAuthUI(null);
        }
      } catch (e) {
        updateAuthUI(null);
      }
    }
  }

  if (typeof supabase !== 'undefined') {
    checkAuthSession();
  }

  // ============================================
  // ADMIN PANEL (integrated overlay)
  // ============================================
  (function initAdminPanel() {
    let ADM_CATEGORIES = {};
    let admCategories = [];
    let admProducts = [];
    let admCoupons = [];
    let admSettings = {};
    let admOffers = [];
    let isAdmin = false;

    const admOverlay = document.getElementById('admin-panel-overlay');
    const admBtnOpen = document.getElementById('btn-admin-panel');
    if (!admOverlay || !admBtnOpen) return;

    // ---- NOTIFICATION ----
    function admNotify(msg, type = 'success') {
      const el = document.getElementById('adm-notification');
      if (!el) return;
      el.textContent = msg;
      el.className = `adm-notification ${type} show`;
      setTimeout(() => el.classList.remove('show'), 3000);
    }

    function admFormatPrice(n) { return `R$ ${parseFloat(n).toFixed(2).replace('.', ',')}`; }

    // ---- OPEN / CLOSE ----
    function openAdminPanel() {
      admOverlay.style.display = '';
      document.body.style.overflow = 'hidden';
      admLoadAll();
      // Set user info
      if (currentUser) {
        const name = currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Admin';
        document.getElementById('adm-user-name').textContent = name;
        document.getElementById('adm-avatar').textContent = name.charAt(0).toUpperCase();
      }
    }

    function closeAdminPanel() {
      admOverlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    admBtnOpen.addEventListener('click', () => {
      if (dropdownOpen) toggleUserDropdown();
      openAdminPanel();
    });

    document.getElementById('adm-close-panel')?.addEventListener('click', closeAdminPanel);

    // ---- CHECK ADMIN ON AUTH ----
    const origUpdateAuthUI = updateAuthUI;
    updateAuthUI = async function(user) {
      origUpdateAuthUI(user);
      if (user && typeof supabase !== 'undefined') {
        try {
          isAdmin = await supabase.checkAdmin(user.email);
          admBtnOpen.style.display = isAdmin ? '' : 'none';
          const emBtn = document.getElementById('btn-edit-mode');
          if (emBtn) emBtn.style.display = isAdmin ? '' : 'none';
        } catch(e) { admBtnOpen.style.display = 'none'; }
      } else {
        isAdmin = false;
        admBtnOpen.style.display = 'none';
        const emBtn = document.getElementById('btn-edit-mode');
        if (emBtn) emBtn.style.display = 'none';
        closeAdminPanel();
      }
    };
    // Re-check if already logged in
    if (currentUser && typeof supabase !== 'undefined') {
      supabase.checkAdmin(currentUser.email).then(result => {
        isAdmin = result;
        admBtnOpen.style.display = result ? '' : 'none';
        const emBtn = document.getElementById('btn-edit-mode');
        if (emBtn) emBtn.style.display = result ? '' : 'none';
      }).catch(() => {});
    }

    // ---- NAVIGATION ----
    const admPageTitles = { 'adm-dashboard': 'Dashboard', 'adm-products': 'Produtos', 'adm-categories': 'Categorias', 'adm-coupons': 'Cupons', 'adm-offers': 'Ofertas', 'adm-orders': 'Pedidos', 'adm-reports': 'Relatórios', 'adm-settings': 'Configurações' };

    function admNavigateTo(page) {
      document.querySelectorAll('.adm-page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.adm-nav[data-adm-page]').forEach(n => n.classList.remove('active'));
      document.getElementById(page)?.classList.add('active');
      document.querySelector(`.adm-nav[data-adm-page="${page}"]`)?.classList.add('active');
      document.getElementById('adm-page-title').textContent = admPageTitles[page] || '';
      document.getElementById('adm-sidebar').classList.remove('open');
      // Refresh data when navigating to specific pages
      if (page === 'adm-orders') admLoadOrders();
      if (page === 'adm-reports') admRenderReports();
      if (page === 'adm-categories') admRenderCategories();
    }

    document.querySelectorAll('.adm-nav[data-adm-page]').forEach(btn => {
      btn.addEventListener('click', () => admNavigateTo(btn.dataset.admPage));
    });

    document.getElementById('adm-sidebar-toggle')?.addEventListener('click', () => {
      document.getElementById('adm-sidebar').classList.toggle('open');
    });

    document.getElementById('adm-qa-product')?.addEventListener('click', () => { admNavigateTo('adm-products'); admOpenProductModal(); });
    document.getElementById('adm-qa-coupon')?.addEventListener('click', () => { admNavigateTo('adm-coupons'); admOpenCouponModal(); });
    document.getElementById('adm-qa-offer')?.addEventListener('click', () => { admNavigateTo('adm-offers'); admOpenOfferModal(); });
    document.getElementById('adm-qa-orders')?.addEventListener('click', () => { admNavigateTo('adm-orders'); admLoadOrders(); });
    document.getElementById('adm-qa-reports')?.addEventListener('click', () => admNavigateTo('adm-reports'));
    document.getElementById('adm-qa-settings')?.addEventListener('click', () => admNavigateTo('adm-settings'));

    // ---- LOAD ALL ----
    let admOrders = [];

    async function admLoadAll() {
      await Promise.all([admLoadProducts(), admLoadCoupons(), admLoadSettings(), admLoadOffers(), admLoadOrders(), admLoadCategories()]);
      admUpdateDashboard();
      admLoadTestimonials();
      admLoadFaq();
      admFillHeroContent();
    }

    function admUpdateDashboard() {
      document.getElementById('adm-stat-products').textContent = admProducts.length;
      document.getElementById('adm-stat-coupons').textContent = admCoupons.filter(c => c.active).length;
      document.getElementById('adm-stat-active').textContent = admProducts.filter(p => p.active !== false).length;
      document.getElementById('adm-stat-orders').textContent = admOrders.filter(o => o.status === 'pending').length;
      // Revenue stats
      const paidOrders = admOrders.filter(o => o.status === 'delivered' || o.status === 'paid');
      const totalRevenue = paidOrders.reduce((sum, o) => sum + (parseFloat(o.total_price) || 0), 0);
      const now = new Date();
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const monthRevenue = paidOrders.filter(o => new Date(o.created_at) >= monthStart).reduce((sum, o) => sum + (parseFloat(o.total_price) || 0), 0);
      const avgTicket = paidOrders.length > 0 ? totalRevenue / paidOrders.length : 0;
      document.getElementById('adm-stat-revenue').textContent = admFormatPrice(totalRevenue);
      document.getElementById('adm-stat-month-revenue').textContent = admFormatPrice(monthRevenue);
      document.getElementById('adm-stat-total-orders').textContent = admOrders.length;
      document.getElementById('adm-stat-avg-ticket').textContent = admFormatPrice(avgTicket);
      // Check stock-deactivated products
      const oos = admProducts.filter(p => p.stock_deactivated);
      if (oos.length) console.log(`[Admin] ${oos.length} product(s) auto-deactivated by stock.`);
    }

    // ---- CATEGORIES ----
    async function admLoadCategories() {
      try { admCategories = await supabase.getCategories(); } catch(e) { admCategories = []; }
      // Build lookups
      ADM_CATEGORIES = {};
      CATEGORY_COLORS = {};
      admCategories.filter(c => c.active !== false).forEach(c => {
        ADM_CATEGORIES[c.slug] = c.name;
        if (c.text_color) CATEGORY_COLORS[c.slug] = c.text_color;
      });
      admRenderCategories();
      admPopulateCategorySelects();
      admRefreshSiteFilters();
    }

    function admPopulateCategorySelects() {
      const sel = document.getElementById('adm-pf-category');
      if (!sel) return;
      const currentVal = sel.value;
      sel.innerHTML = '<option value="">Selecione</option>';
      admCategories.filter(c => c.active !== false).forEach(c => {
        sel.innerHTML += `<option value="${c.slug}">${c.name}</option>`;
      });
      if (currentVal) sel.value = currentVal;
    }

    function admRefreshSiteFilters() {
      // Categories are filtered via the round carousel only
      // No filter buttons to rebuild
    }

    function admRenderCategories() {
      const grid = document.getElementById('adm-categories-grid');
      const empty = document.getElementById('adm-categories-empty');
      if (!grid) return;
      if (!admCategories.length) { grid.innerHTML = ''; if (empty) empty.style.display = ''; return; }
      if (empty) empty.style.display = 'none';
      grid.innerHTML = admCategories.map(c => {
        const productCount = admProducts.filter(p => p.category_slug === c.slug).length;
        const statusBadge = c.active !== false
          ? '<span class="adm-badge adm-badge--active">Ativa</span>'
          : '<span class="adm-badge adm-badge--inactive">Inativa</span>';
        return `<div class="adm-cat-card">
          <div class="adm-cat-card-header">
            <div class="adm-cat-color-dot" style="background:${c.text_color || '#1e293b'}"></div>
            <h4 style="color:${c.text_color || '#1e293b'}">${c.name}</h4>
            ${statusBadge}
          </div>
          <div class="adm-cat-card-info">
            <span class="adm-cat-slug">${c.slug}</span>
            <span>${productCount} produto(s)</span>
          </div>
          <div class="adm-cat-card-actions">
            <button class="adm-btn-sm adm-btn-edit" data-adm-edit-cat="${c.id}">Editar</button>
            <button class="adm-btn-sm adm-btn-delete" data-adm-delete-cat="${c.id}">Excluir</button>
          </div>
        </div>`;
      }).join('');
    }

    // Category grid delegation
    document.getElementById('adm-categories-grid')?.addEventListener('click', async (e) => {
      const editBtn = e.target.closest('[data-adm-edit-cat]');
      if (editBtn) {
        const cat = admCategories.find(c => c.id == editBtn.dataset.admEditCat);
        if (cat) admOpenCategoryModal(cat);
        return;
      }
      const deleteBtn = e.target.closest('[data-adm-delete-cat]');
      if (deleteBtn) {
        if (!confirm('Excluir esta categoria?')) return;
        try {
          await supabase.deleteCategory(deleteBtn.dataset.admDeleteCat);
          admNotify('Categoria excluída!');
          await admLoadCategories();
        } catch(e) { admNotify('Erro ao excluir', 'error'); }
      }
    });

    function admOpenCategoryModal(cat = null) {
      const modal = document.getElementById('adm-category-modal');
      const form = document.getElementById('adm-category-form');
      form.reset();
      document.getElementById('adm-catf-editing-id').value = '';
      document.getElementById('adm-catf-active').checked = true;
      document.getElementById('adm-catf-color').value = '#1e293b';
      document.getElementById('adm-catf-color-preview').style.color = '#1e293b';
      document.getElementById('adm-catf-color-preview').textContent = 'Preview';

      // Populate products list
      const listEl = document.getElementById('adm-catf-products-list');
      listEl.innerHTML = admProducts.map(p => {
        const checked = cat ? p.category_slug === cat.slug : false;
        return `<label class="adm-cat-product-item">
          <input type="checkbox" value="${p.id}" ${checked ? 'checked' : ''}>
          <span>${p.name}</span>
        </label>`;
      }).join('') || '<p style="color:#94a3b8;font-size:0.85rem;">Nenhum produto cadastrado.</p>';

      if (cat) {
        document.getElementById('adm-category-modal-title').textContent = 'Editar Categoria';
        document.getElementById('adm-catf-editing-id').value = cat.id;
        document.getElementById('adm-catf-name').value = cat.name || '';
        document.getElementById('adm-catf-slug').value = cat.slug || '';
        document.getElementById('adm-catf-color').value = cat.text_color || '#1e293b';
        document.getElementById('adm-catf-color-preview').style.color = cat.text_color || '#1e293b';
        document.getElementById('adm-catf-sort').value = cat.sort_order || 0;
        document.getElementById('adm-catf-active').checked = cat.active !== false;
      } else {
        document.getElementById('adm-category-modal-title').textContent = 'Nova Categoria';
      }
      modal.classList.add('open');
    }

    document.getElementById('adm-btn-add-category')?.addEventListener('click', () => admOpenCategoryModal());

    // Auto-generate slug from name
    document.getElementById('adm-catf-name')?.addEventListener('input', (e) => {
      const slugInput = document.getElementById('adm-catf-slug');
      const editingId = document.getElementById('adm-catf-editing-id').value;
      if (!editingId) {
        slugInput.value = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
    });

    // Color preview
    document.getElementById('adm-catf-color')?.addEventListener('input', (e) => {
      document.getElementById('adm-catf-color-preview').style.color = e.target.value;
    });

    // Category form submit
    document.getElementById('adm-category-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('adm-catf-submit-btn');
      submitBtn.disabled = true; submitBtn.textContent = 'Salvando...';
      const editingId = document.getElementById('adm-catf-editing-id').value;
      const slug = document.getElementById('adm-catf-slug').value.trim();
      const data = {
        name: document.getElementById('adm-catf-name').value.trim(),
        slug: slug,
        text_color: document.getElementById('adm-catf-color').value,
        sort_order: parseInt(document.getElementById('adm-catf-sort').value) || 0,
        active: document.getElementById('adm-catf-active').checked
      };

      // Get selected products
      const selectedProducts = [];
      document.querySelectorAll('#adm-catf-products-list input[type="checkbox"]:checked').forEach(cb => {
        selectedProducts.push(cb.value);
      });

      try {
        if (editingId) {
          await supabase.updateCategory(editingId, data);
        } else {
          data.id = slug;
          await supabase.createCategory(data);
        }

        // Update products category assignments
        for (const p of admProducts) {
          const shouldBelong = selectedProducts.includes(p.id);
          const currentlyBelongs = p.category_slug === slug;
          if (shouldBelong && !currentlyBelongs) {
            await supabase.updateProduct(p.id, { category: data.name, category_slug: slug });
          } else if (!shouldBelong && currentlyBelongs) {
            await supabase.updateProduct(p.id, { category: '', category_slug: '' });
          }
        }

        admNotify(editingId ? 'Categoria atualizada!' : 'Categoria criada!');
        document.getElementById('adm-category-modal').classList.remove('open');
        await Promise.all([admLoadCategories(), admLoadProducts()]);
        admUpdateDashboard();
        admRefreshSite();
      } catch(err) { admNotify('Erro: ' + (err.message || ''), 'error'); }
      finally { submitBtn.disabled = false; submitBtn.textContent = 'Salvar Categoria'; }
    });

    // ---- PRODUCTS ----
    async function admLoadProducts() {
      try { admProducts = await supabase.getProducts(); } catch(e) { admNotify('Erro ao carregar produtos', 'error'); admProducts = []; }
      admRenderProducts();
    }

    function admRenderProducts() {
      const tbody = document.getElementById('adm-products-tbody');
      const empty = document.getElementById('adm-products-empty');
      if (!admProducts.length) { tbody.innerHTML = ''; empty.style.display = ''; return; }
      empty.style.display = 'none';
      tbody.innerHTML = admProducts.map(p => {
        const imgHtml = p.image_url
          ? `<img src="${p.image_url}" class="adm-table-img" alt="${p.name}">`
          : `<div class="adm-table-img" style="background:${p.image_bg || 'linear-gradient(135deg,#f0e6f6,#d4c5e0)'}"></div>`;
        const badgeHtml = p.badge ? `<span class="adm-badge adm-badge--promo">${p.badge}</span>` : '\u2014';
        // Stock display
        const stockVal = p.stock;
        let stockHtml;
        if (stockVal === null || stockVal === undefined || stockVal === '') {
          stockHtml = '<span style="color:#94a3b8">\u221e</span>';
        } else if (parseInt(stockVal) === 0) {
          stockHtml = '<span class="adm-badge adm-badge--danger">Esgotado</span>';
        } else if (parseInt(stockVal) <= 5) {
          stockHtml = `<span class="adm-badge adm-badge--warn">${stockVal}</span>`;
        } else {
          stockHtml = `<span>${stockVal}</span>`;
        }
        // Status
        let statusHtml;
        if (p.stock_deactivated) {
          statusHtml = '<span class="adm-badge adm-badge--danger" title="Desativado automaticamente por estoque zerado">Sem estoque</span>';
        } else if (p.active !== false) {
          statusHtml = '<span class="adm-badge adm-badge--active">Ativo</span>';
        } else {
          statusHtml = '<span class="adm-badge adm-badge--inactive">Inativo</span>';
        }
        const oldPrice = p.old_price ? `<s style="color:#94a3b8;font-size:0.75rem">${admFormatPrice(p.old_price)}</s> ` : '';
        return `<tr${p.stock_deactivated ? ' style="opacity:0.6"' : ''}>
          <td>${imgHtml}</td>
          <td><strong>${p.name}</strong><br><small style="color:#94a3b8">${p.id}</small></td>
          <td>${ADM_CATEGORIES[p.category_slug] || p.category || '\u2014'}</td>
          <td>${oldPrice}${admFormatPrice(p.price)}</td>
          <td>${stockHtml}</td>
          <td>${badgeHtml}</td>
          <td>${statusHtml}</td>
          <td><div class="adm-cell-actions">
            <button class="adm-btn-sm adm-btn-edit" data-adm-edit-product="${p.id}">Editar</button>
            <button class="adm-btn-sm adm-btn-toggle" data-adm-toggle-product="${p.id}">${p.active !== false ? 'Desativar' : 'Ativar'}</button>
            <button class="adm-btn-sm adm-btn-delete" data-adm-delete-product="${p.id}">Excluir</button>
          </div></td>
        </tr>`;
      }).join('');
    }

    // Product table delegation
    document.getElementById('adm-products-tbody')?.addEventListener('click', async (e) => {
      const editBtn = e.target.closest('[data-adm-edit-product]');
      if (editBtn) { const p = admProducts.find(x => x.id === editBtn.dataset.admEditProduct); if (p) admOpenProductModal(p); return; }
      const toggleBtn = e.target.closest('[data-adm-toggle-product]');
      if (toggleBtn) {
        const p = admProducts.find(x => x.id === toggleBtn.dataset.admToggleProduct);
        if (!p) return;
        const updates = { active: p.active === false };
        // If reactivating a stock-deactivated product, clear the flag and prompt for stock
        if (p.stock_deactivated && p.active === false) {
          const newStock = prompt('Produto estava desativado por estoque zerado. Informe o novo estoque:', '10');
          if (newStock === null) return;
          updates.stock = parseInt(newStock) || 0;
          updates.stock_deactivated = false;
        } else if (p.active !== false) {
          updates.stock_deactivated = false;
        }
        try { await supabase.updateProduct(p.id, updates); admNotify(updates.active ? 'Produto ativado!' : 'Produto desativado!'); await admLoadProducts(); admUpdateDashboard(); admRefreshSite(); } catch(e) { admNotify('Erro ao atualizar', 'error'); }
        return;
      }
      const deleteBtn = e.target.closest('[data-adm-delete-product]');
      if (deleteBtn) {
        if (!confirm('Excluir este produto?')) return;
        try { await supabase.deleteProduct(deleteBtn.dataset.admDeleteProduct); admNotify('Produto excluído!'); await admLoadProducts(); admUpdateDashboard(); admRefreshSite(); } catch(e) { admNotify('Erro ao excluir', 'error'); }
      }
    });

    // Product modal
    function admOpenProductModal(product = null) {
      const modal = document.getElementById('adm-product-modal');
      const form = document.getElementById('adm-product-form');
      const idInput = document.getElementById('adm-pf-id');
      form.reset();
      document.getElementById('adm-pf-editing-id').value = '';
      document.getElementById('adm-pf-active').checked = true;
      // Reset image drop zone
      admClearImagePreview();
      // Reset bg
      document.getElementById('adm-pf-image-bg').value = '';
      document.getElementById('adm-pf-bg-preview').style.background = '';
      document.querySelectorAll('.adm-color-swatch').forEach(sw => sw.classList.remove('active'));
      document.getElementById('adm-pf-color1').value = '#E8E0F0';
      document.getElementById('adm-pf-color2').value = '#D4C6E8';
      // Reset gallery
      admGalleryUrls = [];
      admRenderGallery();

      if (product) {
        document.getElementById('adm-product-modal-title').textContent = 'Editar Produto';
        document.getElementById('adm-pf-editing-id').value = product.id;
        idInput.value = product.id; idInput.readOnly = true;
        document.getElementById('adm-pf-name').value = product.name || '';
        document.getElementById('adm-pf-category').value = product.category_slug || '';
        document.getElementById('adm-pf-badge').value = product.badge || '';
        document.getElementById('adm-pf-price').value = product.price || '';
        document.getElementById('adm-pf-old-price').value = product.old_price || '';
        document.getElementById('adm-pf-description').value = product.description || '';
        document.getElementById('adm-pf-image-url').value = product.image_url || '';
        document.getElementById('adm-pf-image-bg').value = product.image_bg || '';
        document.getElementById('adm-pf-rating').value = product.rating || 5;
        document.getElementById('adm-pf-reviews').value = product.reviews_count || 0;
        document.getElementById('adm-pf-sort').value = product.sort_order || 0;
        document.getElementById('adm-pf-stock').value = (product.stock !== null && product.stock !== undefined) ? product.stock : '';
        document.getElementById('adm-pf-active').checked = product.active !== false;
        // Populate image preview
        if (product.image_url) admShowImagePreview(product.image_url);
        // Populate bg gradient
        if (product.image_bg) admSetBg(product.image_bg);
        // Populate gallery
        admGalleryUrls = Array.isArray(product.images) ? [...product.images] : [];
        admRenderGallery();
      } else {
        document.getElementById('adm-product-modal-title').textContent = 'Novo Produto';
        idInput.readOnly = false;
      }
      modal.classList.add('open');
    }

    document.getElementById('adm-btn-add-product')?.addEventListener('click', () => admOpenProductModal());

    // Product form submit
    document.getElementById('adm-product-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('adm-pf-submit-btn');
      submitBtn.disabled = true; submitBtn.textContent = 'Salvando...';
      const editingId = document.getElementById('adm-pf-editing-id').value;
      const categorySlug = document.getElementById('adm-pf-category').value;
      const images = admGalleryUrls.filter(Boolean);
      const data = {
        id: document.getElementById('adm-pf-id').value.trim().toLowerCase(),
        name: document.getElementById('adm-pf-name').value.trim(),
        category: ADM_CATEGORIES[categorySlug] || categorySlug,
        category_slug: categorySlug,
        price: parseFloat(document.getElementById('adm-pf-price').value) || 0,
        old_price: parseFloat(document.getElementById('adm-pf-old-price').value) || null,
        description: document.getElementById('adm-pf-description').value.trim(),
        badge: document.getElementById('adm-pf-badge').value.trim() || null,
        image_url: document.getElementById('adm-pf-image-url').value.trim() || null,
        image_bg: document.getElementById('adm-pf-image-bg').value.trim() || null,
        images, rating: parseFloat(document.getElementById('adm-pf-rating').value) || 5.0,
        reviews_count: parseInt(document.getElementById('adm-pf-reviews').value) || 0,
        sort_order: parseInt(document.getElementById('adm-pf-sort').value) || 0,
        stock: document.getElementById('adm-pf-stock').value.trim() !== '' ? parseInt(document.getElementById('adm-pf-stock').value) : null,
        stock_deactivated: false,
        active: document.getElementById('adm-pf-active').checked
      };
      // Auto-deactivate when stock reaches 0
      if (data.stock !== null && data.stock <= 0) {
        data.active = false;
        data.stock_deactivated = true;
        data.stock = 0;
      }
      try {
        if (editingId) { const { id, ...upd } = data; await supabase.updateProduct(editingId, upd); admNotify('Produto atualizado!'); }
        else { await supabase.createProduct(data); admNotify('Produto criado!'); }
        document.getElementById('adm-product-modal').classList.remove('open');
        await admLoadProducts(); admUpdateDashboard(); admRefreshSite();
      } catch(err) { admNotify('Erro: ' + (err.message || ''), 'error'); }
      finally { submitBtn.disabled = false; submitBtn.textContent = 'Salvar Produto'; }
    });

    // ---- DRAG & DROP IMAGE UPLOAD ----
    const dropzone = document.getElementById('adm-pf-dropzone');
    const dropEmpty = document.getElementById('adm-pf-drop-empty');
    const dropPreview = document.getElementById('adm-pf-drop-preview');
    const dropImg = document.getElementById('adm-pf-drop-img');
    const dropLoading = document.getElementById('adm-pf-drop-loading');
    const dropRemove = document.getElementById('adm-pf-drop-remove');
    const fileInput = document.getElementById('adm-pf-image-upload');
    const urlInput = document.getElementById('adm-pf-image-url');

    function admShowImagePreview(url) {
      dropImg.src = url;
      dropEmpty.style.display = 'none';
      dropPreview.style.display = '';
      dropLoading.style.display = 'none';
      urlInput.value = url;
    }
    function admClearImagePreview() {
      dropImg.src = '';
      dropEmpty.style.display = '';
      dropPreview.style.display = 'none';
      dropLoading.style.display = 'none';
      urlInput.value = '';
    }
    async function admUploadFile(file) {
      if (!file || !file.type.startsWith('image/')) { admNotify('Selecione uma imagem válida', 'error'); return; }
      if (file.size > 5 * 1024 * 1024) { admNotify('Imagem muito grande (máx. 5MB)', 'error'); return; }
      dropEmpty.style.display = 'none';
      dropPreview.style.display = 'none';
      dropLoading.style.display = '';
      try {
        const url = await supabase.uploadImage(file);
        admShowImagePreview(url);
        admNotify('Imagem enviada!');
      } catch(err) {
        admClearImagePreview();
        admNotify('Erro no upload: ' + err.message, 'error');
      }
    }

    // Click to browse
    dropzone?.addEventListener('click', (e) => {
      if (e.target.closest('.adm-dropzone-remove')) return;
      fileInput?.click();
    });
    fileInput?.addEventListener('change', (e) => { if (e.target.files[0]) admUploadFile(e.target.files[0]); e.target.value = ''; });

    // Drag & drop events
    ['dragenter', 'dragover'].forEach(evt => dropzone?.addEventListener(evt, (e) => { e.preventDefault(); e.stopPropagation(); dropzone.classList.add('drag-over'); }));
    ['dragleave', 'drop'].forEach(evt => dropzone?.addEventListener(evt, (e) => { e.preventDefault(); e.stopPropagation(); dropzone.classList.remove('drag-over'); }));
    dropzone?.addEventListener('drop', (e) => { const file = e.dataTransfer?.files?.[0]; if (file) admUploadFile(file); });

    // Remove image
    dropRemove?.addEventListener('click', (e) => { e.stopPropagation(); admClearImagePreview(); });

    // ---- COLOR PRESETS & PICKER ----
    const bgHidden = document.getElementById('adm-pf-image-bg');
    const bgPreview = document.getElementById('adm-pf-bg-preview');
    const color1 = document.getElementById('adm-pf-color1');
    const color2 = document.getElementById('adm-pf-color2');

    function admSetBg(gradient) {
      bgHidden.value = gradient;
      bgPreview.style.background = gradient;
      // Parse colors from gradient to update pickers
      const colors = gradient.match(/#[a-fA-F0-9]{6}/g);
      if (colors && colors.length >= 2) { color1.value = colors[0]; color2.value = colors[1]; }
      // Mark active swatch
      document.querySelectorAll('.adm-color-swatch').forEach(sw => sw.classList.toggle('active', sw.dataset.gradient === gradient));
    }
    function admUpdateBgFromPickers() {
      const g = `linear-gradient(135deg, ${color1.value}, ${color2.value})`;
      bgHidden.value = g;
      bgPreview.style.background = g;
      document.querySelectorAll('.adm-color-swatch').forEach(sw => sw.classList.remove('active'));
    }

    document.querySelectorAll('.adm-color-swatch').forEach(sw => sw.addEventListener('click', () => admSetBg(sw.dataset.gradient)));
    color1?.addEventListener('input', admUpdateBgFromPickers);
    color2?.addEventListener('input', admUpdateBgFromPickers);

    // ---- GALLERY MULTI-UPLOAD ----
    let admGalleryUrls = [];
    const galleryGrid = document.getElementById('adm-pf-gallery-grid');
    const galleryAddBtn = document.getElementById('adm-pf-gallery-add');
    const galleryUpload = document.getElementById('adm-pf-gallery-upload');

    function admRenderGallery() {
      if (!galleryGrid) return;
      galleryGrid.innerHTML = admGalleryUrls.map((url, i) => `
        <div class="adm-gallery-item">
          <img src="${url}" alt="Galeria ${i+1}">
          <button type="button" class="adm-gallery-remove" data-gallery-idx="${i}">✕</button>
        </div>
      `).join('');
    }

    galleryAddBtn?.addEventListener('click', () => galleryUpload?.click());
    galleryUpload?.addEventListener('change', async (e) => {
      const files = Array.from(e.target.files);
      if (!files.length) return;
      for (const file of files) {
        if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) continue;
        try {
          admNotify('Enviando imagem da galeria...', 'info');
          const url = await supabase.uploadImage(file);
          admGalleryUrls.push(url);
          admRenderGallery();
        } catch(err) { admNotify('Erro: ' + err.message, 'error'); }
      }
      admNotify('Galeria atualizada!');
      e.target.value = '';
    });
    galleryGrid?.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('[data-gallery-idx]');
      if (removeBtn) { admGalleryUrls.splice(parseInt(removeBtn.dataset.galleryIdx), 1); admRenderGallery(); }
    });
    // Auto slug
    document.getElementById('adm-pf-name')?.addEventListener('input', (e) => {
      const idField = document.getElementById('adm-pf-id');
      if (idField.readOnly) return;
      idField.value = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    });

    // ---- COUPONS ----
    async function admLoadCoupons() {
      try { admCoupons = await supabase.getCoupons(); } catch(e) { admNotify('Erro ao carregar cupons', 'error'); admCoupons = []; }
      admRenderCoupons();
    }

    function admRenderCoupons() {
      const tbody = document.getElementById('adm-coupons-tbody');
      const empty = document.getElementById('adm-coupons-empty');
      if (!admCoupons.length) { tbody.innerHTML = ''; empty.style.display = ''; return; }
      empty.style.display = 'none';
      tbody.innerHTML = admCoupons.map(c => {
        const typeLabel = c.type === 'percentage' ? 'Percentual' : 'Valor Fixo';
        const valueLabel = c.type === 'percentage' ? `${c.value}%` : admFormatPrice(c.value);
        const minLabel = c.min_purchase > 0 ? admFormatPrice(c.min_purchase) : '—';
        const usesLabel = c.max_uses ? `${c.current_uses || 0}/${c.max_uses}` : `${c.current_uses || 0}`;
        const expiresLabel = c.expires_at ? new Date(c.expires_at).toLocaleDateString('pt-BR') : '—';
        const statusHtml = c.active ? '<span class="adm-badge adm-badge--active">Ativo</span>' : '<span class="adm-badge adm-badge--inactive">Inativo</span>';
        return `<tr>
          <td><strong>${c.code}</strong></td><td>${typeLabel}</td><td>${valueLabel}</td><td>${minLabel}</td><td>${usesLabel}</td><td>${expiresLabel}</td><td>${statusHtml}</td>
          <td><div class="adm-cell-actions"><button class="adm-btn-sm adm-btn-edit" data-adm-edit-coupon="${c.id}">Editar</button><button class="adm-btn-sm adm-btn-delete" data-adm-delete-coupon="${c.id}">Excluir</button></div></td>
        </tr>`;
      }).join('');
    }

    document.getElementById('adm-coupons-tbody')?.addEventListener('click', async (e) => {
      const editBtn = e.target.closest('[data-adm-edit-coupon]');
      if (editBtn) { const c = admCoupons.find(x => x.id === editBtn.dataset.admEditCoupon); if (c) admOpenCouponModal(c); return; }
      const deleteBtn = e.target.closest('[data-adm-delete-coupon]');
      if (deleteBtn) { if (!confirm('Excluir este cupom?')) return; try { await supabase.deleteCoupon(deleteBtn.dataset.admDeleteCoupon); admNotify('Cupom excluído!'); await admLoadCoupons(); admUpdateDashboard(); } catch(e) { admNotify('Erro ao excluir', 'error'); } }
    });

    function admOpenCouponModal(coupon = null) {
      const modal = document.getElementById('adm-coupon-modal');
      const form = document.getElementById('adm-coupon-form');
      form.reset();
      document.getElementById('adm-cf-editing-id').value = '';
      document.getElementById('adm-cf-active').checked = true;
      if (coupon) {
        document.getElementById('adm-coupon-modal-title').textContent = 'Editar Cupom';
        document.getElementById('adm-cf-editing-id').value = coupon.id;
        document.getElementById('adm-cf-code').value = coupon.code || '';
        document.getElementById('adm-cf-type').value = coupon.type || 'percentage';
        document.getElementById('adm-cf-value').value = coupon.value || '';
        document.getElementById('adm-cf-min').value = coupon.min_purchase || 0;
        document.getElementById('adm-cf-max-uses').value = coupon.max_uses || '';
        document.getElementById('adm-cf-active').checked = coupon.active !== false;
        if (coupon.expires_at) document.getElementById('adm-cf-expires').value = coupon.expires_at.slice(0, 16);
      } else {
        document.getElementById('adm-coupon-modal-title').textContent = 'Novo Cupom';
      }
      modal.classList.add('open');
    }

    document.getElementById('adm-btn-add-coupon')?.addEventListener('click', () => admOpenCouponModal());

    document.getElementById('adm-coupon-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const editingId = document.getElementById('adm-cf-editing-id').value;
      const expiresRaw = document.getElementById('adm-cf-expires').value;
      const data = {
        code: document.getElementById('adm-cf-code').value.trim().toUpperCase(),
        type: document.getElementById('adm-cf-type').value,
        value: parseFloat(document.getElementById('adm-cf-value').value) || 0,
        min_purchase: parseFloat(document.getElementById('adm-cf-min').value) || 0,
        max_uses: parseInt(document.getElementById('adm-cf-max-uses').value) || null,
        active: document.getElementById('adm-cf-active').checked,
        expires_at: expiresRaw ? new Date(expiresRaw).toISOString() : null
      };
      try {
        if (editingId) { await supabase.updateCoupon(editingId, data); admNotify('Cupom atualizado!'); }
        else { await supabase.createCoupon(data); admNotify('Cupom criado!'); }
        document.getElementById('adm-coupon-modal').classList.remove('open');
        await admLoadCoupons(); admUpdateDashboard();
      } catch(err) { admNotify('Erro: ' + (err.message || ''), 'error'); }
    });

    // ---- OFFERS ----
    async function admLoadOffers() {
      try {
        admOffers = await supabase.getOffers();
        if (!Array.isArray(admOffers)) admOffers = [];
      } catch(e) { admOffers = []; }
      admRenderOffers();
    }

    function admRenderOffers() {
      const tbody = document.getElementById('adm-offers-tbody');
      const empty = document.getElementById('adm-offers-empty');
      if (!admOffers.length) { tbody.innerHTML = ''; empty.style.display = ''; return; }
      empty.style.display = 'none';
      tbody.innerHTML = admOffers.map((o, i) => {
        const savings = (parseFloat(o.old_price) || 0) - (parseFloat(o.price) || 0);
        const savingsHtml = savings > 0 ? `R$ ${savings.toFixed(0)}` : '\u2014';
        const statusHtml = o.active !== false
          ? '<span class="adm-badge adm-badge--active">Ativa</span>'
          : '<span class="adm-badge adm-badge--inactive">Inativa</span>';
        return `<tr>
          <td><strong>${o.name || '\u2014'}</strong></td>
          <td><small>${(o.description || '').substring(0, 60)}${(o.description || '').length > 60 ? '...' : ''}</small></td>
          <td>${admFormatPrice(o.price || 0)}</td>
          <td>${o.old_price ? admFormatPrice(o.old_price) : '\u2014'}</td>
          <td>${savingsHtml}</td>
          <td>${statusHtml}</td>
          <td><div class="adm-cell-actions">
            <button class="adm-btn-sm adm-btn-edit" data-adm-edit-offer="${i}">Editar</button>
            <button class="adm-btn-sm adm-btn-toggle" data-adm-toggle-offer="${i}">${o.active !== false ? 'Desativar' : 'Ativar'}</button>
            <button class="adm-btn-sm adm-btn-delete" data-adm-delete-offer="${i}">Excluir</button>
          </div></td>
        </tr>`;
      }).join('');
    }

    async function admSaveOffer(offerData, existingId) {
      try {
        if (existingId) {
          await supabase.updateOffer(existingId, offerData);
        } else {
          await supabase.createOffer(offerData);
        }
        await admLoadOffers();
        admRefreshSettings();
      } catch(err) { admNotify('Erro ao salvar oferta', 'error'); }
    }

    function admOpenOfferModal(offer = null, index = -1) {
      const modal = document.getElementById('adm-offer-modal');
      const form = document.getElementById('adm-offer-form');
      form.reset();
      document.getElementById('adm-of-editing-idx').value = index >= 0 ? index : '';
      document.getElementById('adm-of-active').checked = true;

      // Populate product select
      const productSelect = document.getElementById('adm-of-product-id');
      if (productSelect) {
        const currentVal = offer ? (offer.product_id || '') : '';
        productSelect.innerHTML = '<option value="">Nenhum produto vinculado</option>' +
          admProducts.map(p => `<option value="${p.id}" ${p.id === currentVal ? 'selected' : ''}>${p.name}</option>`).join('');
      }

      if (offer) {
        document.getElementById('adm-offer-modal-title').textContent = 'Editar Oferta';
        document.getElementById('adm-of-active').checked = offer.active !== false;
        document.getElementById('adm-of-name').value = offer.name || '';
        document.getElementById('adm-of-desc').value = offer.description || '';
        document.getElementById('adm-of-price').value = offer.price || '';
        document.getElementById('adm-of-old-price').value = offer.old_price || '';
        document.getElementById('adm-of-product-id').value = offer.product_id || '';
        const imgEl = document.getElementById('adm-of-image');
        if (imgEl) imgEl.value = offer.image_url || '';
      } else {
        document.getElementById('adm-offer-modal-title').textContent = 'Nova Oferta';
      }
      modal.classList.add('open');
    }

    document.getElementById('adm-btn-add-offer')?.addEventListener('click', () => admOpenOfferModal());

    document.getElementById('adm-offer-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const idx = document.getElementById('adm-of-editing-idx').value;
      const offerData = {
        active: document.getElementById('adm-of-active').checked,
        name: document.getElementById('adm-of-name').value.trim(),
        description: document.getElementById('adm-of-desc').value.trim(),
        price: parseFloat(document.getElementById('adm-of-price').value) || 0,
        old_price: parseFloat(document.getElementById('adm-of-old-price').value) || 0,
        product_id: document.getElementById('adm-of-product-id').value.trim() || null,
        image_url: (document.getElementById('adm-of-image')?.value || '').trim()
      };
      const existingId = idx !== '' && admOffers[parseInt(idx)] ? admOffers[parseInt(idx)].id : null;
      await admSaveOffer(offerData, existingId);
      document.getElementById('adm-offer-modal').classList.remove('open');
      admNotify(existingId ? 'Oferta atualizada!' : 'Oferta criada!');
    });

    document.getElementById('adm-offers-tbody')?.addEventListener('click', async (e) => {
      const editBtn = e.target.closest('[data-adm-edit-offer]');
      if (editBtn) {
        const i = parseInt(editBtn.dataset.admEditOffer);
        if (admOffers[i]) admOpenOfferModal(admOffers[i], i);
        return;
      }
      const toggleBtn = e.target.closest('[data-adm-toggle-offer]');
      if (toggleBtn) {
        const i = parseInt(toggleBtn.dataset.admToggleOffer);
        if (admOffers[i]) {
          const newActive = admOffers[i].active === false;
          await supabase.updateOffer(admOffers[i].id, { active: newActive });
          await admLoadOffers();
          admNotify(newActive ? 'Oferta ativada!' : 'Oferta desativada!');
        }
        return;
      }
      const deleteBtn = e.target.closest('[data-adm-delete-offer]');
      if (deleteBtn) {
        if (!confirm('Excluir esta oferta?')) return;
        const i = parseInt(deleteBtn.dataset.admDeleteOffer);
        if (admOffers[i]) {
          await supabase.deleteOffer(admOffers[i].id);
          await admLoadOffers();
          admNotify('Oferta excluída!');
        }
      }
    });

    // ---- ORDERS ----
    async function admLoadOrders() {
      try {
        admOrders = await supabase.getOrders();
      } catch(e) {
        console.error('Error loading orders:', e);
        admOrders = [];
      }
      admRenderOrders();
      admUpdateDashboard();
    }

    function admFormatDate(dateStr) {
      if (!dateStr) return '\u2014';
      const d = new Date(dateStr);
      return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }) + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    }

    // Check if order needs admin action (pending payment or paid awaiting shipment)
    function admNeedsAction(status) {
      return status === 'pending_payment' || status === 'pending' || status === 'paid';
    }

    function admOrderStatusBadge(status) {
      const map = {
        'pending_payment': ['Pagamento Pendente', 'adm-badge--pending'],
        'pending': ['Pagamento Pendente', 'adm-badge--pending'],
        'paid': ['Pago - Aguardando Envio', 'adm-badge--paid'],
        'shipped': ['Enviado \u2708', 'adm-badge--shipped'],
        'delivered': ['Entregue \u2713', 'adm-badge--delivered'],
        'canceled': ['Cancelado', 'adm-badge--canceled']
      };
      const [label, cls] = map[status] || [status, ''];
      return `<span class="adm-badge ${cls}">${label}</span>`;
    }

    function admRenderOrders() {
      const tbody = document.getElementById('adm-orders-tbody');
      const empty = document.getElementById('adm-orders-empty');
      if (!tbody) return;

      const filter = document.getElementById('adm-orders-filter')?.value || 'all';
      let filtered;
      if (filter === 'all') {
        filtered = admOrders;
      } else if (filter === 'action_needed') {
        filtered = admOrders.filter(o => admNeedsAction(o.status));
      } else {
        filtered = admOrders.filter(o => o.status === filter);
      }
      const countEl = document.getElementById('adm-orders-count');
      if (countEl) countEl.textContent = `(${filtered.length} pedido${filtered.length !== 1 ? 's' : ''})`;

      if (!filtered.length) {
        tbody.innerHTML = '';
        if (empty) empty.style.display = '';
        return;
      }
      if (empty) empty.style.display = 'none';

      // Load item counts async
      admLoadOrderItemCounts(filtered);

      tbody.innerHTML = filtered.map(o => {
        const total = parseFloat(o.total_price) || 0;
        const customerName = o.customer_name || o.user_email || 'Visitante';
        const st = o.status;
        const isPending = st === 'pending_payment' || st === 'pending';
        const isPaid = st === 'paid';
        const isShipped = st === 'shipped';
        return `<tr style="${st === 'canceled' ? 'opacity:0.5;' : ''}">
          <td><strong>#${String(o.id).slice(0, 8).toUpperCase()}</strong></td>
          <td><small>${admFormatDate(o.created_at)}</small></td>
          <td><small>${customerName}</small></td>
          <td><small class="adm-order-items-count" data-order-id="${o.id}">...</small></td>
          <td><strong>${admFormatPrice(total)}</strong></td>
          <td>${admOrderStatusBadge(st)}</td>
          <td><div class="adm-cell-actions">
            <button class="adm-btn-sm adm-btn-edit" data-adm-view-order="${o.id}">Detalhes</button>
            ${isPending ? `<button class="adm-btn-sm" style="background:#059669;color:#fff;border:none;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.75rem;" data-adm-confirm-order="${o.id}">\u2713 Confirmar Pgto</button>` : ''}
            ${isPending ? `<button class="adm-btn-sm adm-btn-delete" data-adm-cancel-order="${o.id}">Cancelar</button>` : ''}
            ${isPaid ? `<button class="adm-btn-sm" style="background:#2563eb;color:#fff;border:none;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.75rem;" data-adm-deliver-order="${o.id}">\ud83d\udce6 Enviar</button>` : ''}
            ${isShipped ? `<span style="color:#7c3aed;font-size:0.75rem;font-weight:600;">\u2708 Enviado${o.tracking_code ? ' - ' + o.tracking_code : ''}</span>` : ''}
          </div></td>
        </tr>`;
      }).join('');
    }

    // Load item counts for each order in the table
    async function admLoadOrderItemCounts(orders) {
      for (const o of orders) {
        try {
          const items = await supabase.getOrderItems(o.id);
          const cell = document.querySelector(`.adm-order-items-count[data-order-id="${o.id}"]`);
          if (cell) {
            const count = items ? items.reduce((sum, i) => sum + (i.quantity || 1), 0) : 0;
            cell.textContent = count > 0 ? `${count} item${count !== 1 ? 's' : ''}` : '\u2014';
          }
        } catch(e) {
          const cell = document.querySelector(`.adm-order-items-count[data-order-id="${o.id}"]`);
          if (cell) cell.textContent = '\u2014';
        }
      }
    }

    // Order filter
    document.getElementById('adm-orders-filter')?.addEventListener('change', admRenderOrders);
    document.getElementById('adm-btn-refresh-orders')?.addEventListener('click', admLoadOrders);

    // Order actions (delegation on tbody)
    document.getElementById('adm-orders-tbody')?.addEventListener('click', async (e) => {
      const viewBtn = e.target.closest('[data-adm-view-order]');
      if (viewBtn) {
        const orderId = viewBtn.dataset.admViewOrder;
        await admShowOrderDetail(orderId);
        return;
      }
      const confirmBtn = e.target.closest('[data-adm-confirm-order]');
      if (confirmBtn) {
        const orderId = confirmBtn.dataset.admConfirmOrder;
        if (!confirm('Confirmar pagamento deste pedido?')) return;
        await admConfirmPayment(orderId);
        return;
      }
      const cancelBtn = e.target.closest('[data-adm-cancel-order]');
      if (cancelBtn) {
        const orderId = cancelBtn.dataset.admCancelOrder;
        if (!confirm('Cancelar este pedido?')) return;
        await admCancelOrder(orderId);
        return;
      }
      const deliverBtn = e.target.closest('[data-adm-deliver-order]');
      if (deliverBtn) {
        const orderId = deliverBtn.dataset.admDeliverOrder;
        admOpenTrackingModal(orderId);
        return;
      }
    });

    // Confirm payment (set status to 'paid')
    async function admConfirmPayment(orderId) {
      try {
        await supabase.updateOrder(orderId, { status: 'paid' });
        await admLoadOrders();
        admNotify('Pagamento confirmado com sucesso!');
      } catch (err) {
        console.error('Error confirming payment:', err);
        admNotify('Erro ao confirmar pagamento: ' + (err.message || ''), 'error');
      }
    }

    async function admShowOrderDetail(orderId) {
      const order = admOrders.find(o => String(o.id) === String(orderId));
      if (!order) return;

      // Load order items
      let items = [];
      try {
        items = await supabase.getOrderItems(orderId);
      } catch(e) {
        console.error('Error loading order items:', e);
      }

      const modal = document.getElementById('adm-order-modal');
      const body = document.getElementById('adm-order-detail-body');
      const actions = document.getElementById('adm-order-detail-actions');
      const title = document.getElementById('adm-order-modal-title');

      title.textContent = `Pedido #${String(order.id).slice(0, 8).toUpperCase()}`;

      const total = parseFloat(order.total_price) || 0;
      const discount = parseFloat(order.discount) || 0;
      const customerName = order.customer_name || order.user_email || 'Visitante';

      body.innerHTML = `
        <div class="adm-order-detail-section">
          <h4>Informacoes</h4>
          <div class="adm-order-detail-info">
            <p><strong>Status:</strong> ${admOrderStatusBadge(order.status)}</p>
            <p><strong>Data:</strong> ${admFormatDate(order.created_at)}</p>
            <p><strong>Cliente:</strong> ${customerName}</p>
            <p><strong>E-mail:</strong> ${order.user_email || '\u2014'}</p>
            ${order.coupon_code ? `<p><strong>Cupom:</strong> ${order.coupon_code}</p>` : ''}
            ${discount > 0 ? `<p><strong>Desconto:</strong> ${admFormatPrice(discount)}</p>` : ''}
            <p><strong>Total:</strong> <strong style="color:#059669;">${admFormatPrice(total)}</strong></p>
            ${order.tracking_code ? `<p><strong>Rastreio:</strong> <code style="background:#ede9fe;padding:2px 8px;border-radius:4px;">${order.tracking_code}</code></p>` : ''}
            ${order.no_tracking ? `<p><strong>Rastreio:</strong> Sem rastreio (retirada/entrega local)</p>` : ''}
          </div>
        </div>
        <div class="adm-order-detail-section">
          <h4>Itens do Pedido</h4>
          <table class="adm-order-items-list">
            <thead><tr><th>Produto</th><th>Qtd</th><th>Preco Unit.</th><th>Subtotal</th></tr></thead>
            <tbody>
              ${items.map(item => `<tr>
                <td>${item.product_name}</td>
                <td>${item.quantity}</td>
                <td>${admFormatPrice(item.price_at_order)}</td>
                <td>${admFormatPrice(item.price_at_order * item.quantity)}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        ${order.whatsapp_message ? `<div class="adm-order-detail-section">
          <h4>Mensagem WhatsApp</h4>
          <div class="adm-order-whatsapp-msg">${order.whatsapp_message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
        </div>` : ''}
      `;

      // Actions based on status
      let actionsHtml = '<button type="button" class="adm-btn-cancel" data-close-modal="adm-order-modal">Fechar</button>';
      const orderSt = order.status;
      if (orderSt === 'pending_payment' || orderSt === 'pending') {
        actionsHtml = `
          <button type="button" class="adm-btn-cancel-order" id="adm-order-cancel-btn" data-order-id="${order.id}">Cancelar Pedido</button>
          <button type="button" class="adm-btn-confirm" id="adm-order-confirm-btn" data-order-id="${order.id}">\u2713 Confirmar Pagamento</button>
          <button type="button" class="adm-btn-cancel" data-close-modal="adm-order-modal">Fechar</button>
        `;
      } else if (orderSt === 'paid') {
        actionsHtml = `
          <button type="button" class="adm-btn-confirm" id="adm-order-deliver-btn" data-order-id="${order.id}" style="background:#2563eb;">\ud83d\udce6 Enviar Pedido</button>
          <button type="button" class="adm-btn-cancel" data-close-modal="adm-order-modal">Fechar</button>
        `;
      }
      actions.innerHTML = actionsHtml;

      // Attach modal action listeners
      const confirmModalBtn = document.getElementById('adm-order-confirm-btn');
      if (confirmModalBtn) {
        confirmModalBtn.addEventListener('click', async () => {
          if (!confirm('Confirmar pagamento deste pedido?')) return;
          modal.classList.remove('open');
          await admConfirmPayment(confirmModalBtn.dataset.orderId);
        });
      }
      const cancelModalBtn = document.getElementById('adm-order-cancel-btn');
      if (cancelModalBtn) {
        cancelModalBtn.addEventListener('click', async () => {
          if (!confirm('Cancelar este pedido?')) return;
          modal.classList.remove('open');
          await admCancelOrder(cancelModalBtn.dataset.orderId);
        });
      }
      const deliverModalBtn = document.getElementById('adm-order-deliver-btn');
      if (deliverModalBtn) {
        deliverModalBtn.addEventListener('click', () => {
          modal.classList.remove('open');
          admOpenTrackingModal(deliverModalBtn.dataset.orderId);
        });
      }
      modal.classList.add('open');
    }

    async function admCancelOrder(orderId) {
      try {
        await supabase.updateOrderStatus(orderId, 'canceled');
        await admLoadOrders();
        admNotify('Pedido cancelado.');
      } catch (err) {
        console.error('Error canceling order:', err);
        admNotify('Erro ao cancelar pedido: ' + (err.message || ''), 'error');
      }
    }

    function admOpenTrackingModal(orderId) {
      const trackingModal = document.getElementById('adm-tracking-modal');
      if (trackingModal) {
        document.getElementById('adm-tracking-order-id').value = orderId;
        document.getElementById('adm-tracking-code').value = '';
        document.getElementById('adm-tracking-none').checked = false;
        document.getElementById('adm-tracking-code').disabled = false;
        trackingModal.classList.add('open');
      }
    }

    // Tracking modal logic
    document.getElementById('adm-tracking-none')?.addEventListener('change', (e) => {
      const codeInput = document.getElementById('adm-tracking-code');
      if (codeInput) codeInput.disabled = e.target.checked;
    });

    document.getElementById('adm-tracking-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const orderId = document.getElementById('adm-tracking-order-id').value;
      const trackingCode = document.getElementById('adm-tracking-code').value.trim();
      const noTracking = document.getElementById('adm-tracking-none').checked;

      if (!trackingCode && !noTracking) {
        admNotify('Informe o codigo de rastreio ou marque "Sem rastreio"', 'error');
        return;
      }

      try {
        // 1. Update order with tracking + status shipped (enviado)
        const updateData = { status: 'shipped' };
        if (noTracking) {
          updateData.no_tracking = true;
          updateData.tracking_code = null;
        } else {
          updateData.tracking_code = trackingCode;
          updateData.no_tracking = false;
        }
        await supabase.updateOrder(orderId, updateData);

        // 2. Decrement stock for each item
        const items = await supabase.getOrderItems(orderId);
        for (const item of items) {
          if (!item.product_id) continue;
          try {
            const product = await supabase.getProductById(item.product_id);
            if (!product) continue;
            if (product.stock !== null && product.stock !== undefined) {
              let newStock = (parseInt(product.stock) || 0) - (item.quantity || 1);
              if (newStock < 0) newStock = 0;
              const stockData = { stock: newStock };
              if (newStock <= 0) {
                stockData.active = false;
                stockData.stock_deactivated = true;
              }
              await supabase.updateProduct(item.product_id, stockData);
            }
          } catch (stockErr) {
            console.error(`Error updating stock for ${item.product_id}:`, stockErr);
          }
        }

        document.getElementById('adm-tracking-modal')?.classList.remove('open');
        await admLoadOrders();
        await admLoadProducts();
        admRenderProducts();
        admRefreshSite();
        admNotify('Pedido enviado! ' + (noTracking ? 'Sem rastreio.' : 'Rastreio: ' + trackingCode));
      } catch (err) {
        console.error('Error confirming payment:', err);
        admNotify('Erro: ' + (err.message || ''), 'error');
      }
    });

    // ---- SETTINGS ----
    async function admLoadSettings() {
      try {
        const rows = await supabase.getSiteSettings();
        admSettings = {};
        rows.forEach(r => { admSettings[r.key] = typeof r.value === 'string' ? JSON.parse(r.value) : r.value; });
      } catch(e) { admSettings = {}; }
      admFillSettings();
    }

    function admFillSettings() {
      const contact = admSettings.contact || {};
      document.getElementById('adm-set-whatsapp').value = contact.whatsapp || '';
      document.getElementById('adm-set-whatsapp-display').value = contact.whatsapp_display || '';
      document.getElementById('adm-set-email').value = contact.email || '';
      document.getElementById('adm-set-hours').value = contact.hours || '';
      const social = admSettings.social || {};
      document.getElementById('adm-set-instagram').value = social.instagram || '';
      document.getElementById('adm-set-facebook').value = social.facebook || '';
      document.getElementById('adm-set-tiktok').value = social.tiktok || '';
      // Hero image and Promo banner are now managed in Edit Mode
    }

    document.getElementById('adm-form-contact')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const value = { whatsapp: document.getElementById('adm-set-whatsapp').value.trim(), whatsapp_display: document.getElementById('adm-set-whatsapp-display').value.trim(), email: document.getElementById('adm-set-email').value.trim(), hours: document.getElementById('adm-set-hours').value.trim() };
      try { await supabase.upsertSiteSetting('contact', value); admSettings.contact = value; admNotify('Contato atualizado!'); admRefreshSettings(); } catch(err) { admNotify('Erro ao salvar', 'error'); }
    });

    document.getElementById('adm-form-social')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const value = { instagram: document.getElementById('adm-set-instagram').value.trim(), facebook: document.getElementById('adm-set-facebook').value.trim(), tiktok: document.getElementById('adm-set-tiktok').value.trim() };
      try { await supabase.upsertSiteSetting('social', value); admSettings.social = value; admNotify('Redes atualizadas!'); } catch(err) { admNotify('Erro ao salvar', 'error'); }
    });

    // Hero Image and Promo Banner admin forms removed — managed via Edit Mode

    // ---- HERO CONTENT, SECTION TITLES, TRUST BAR ----
    function admFillHeroContent() {
      const hero = admSettings.hero_content || {};
      document.getElementById('adm-hero-badge').value = hero.badge || '';
      document.getElementById('adm-hero-title').value = hero.title || '';
      document.getElementById('adm-hero-subtitle').value = hero.subtitle || '';
      document.getElementById('adm-hero-cta').value = hero.cta_text || '';
      document.getElementById('adm-hero-cta2').value = hero.cta2_text || '';

      const stats = hero.stats || [];
      for (let i = 1; i <= 3; i++) {
        const s = stats[i - 1] || {};
        const valEl = document.getElementById('adm-hero-stat' + i + '-val');
        const lblEl = document.getElementById('adm-hero-stat' + i + '-label');
        if (valEl) valEl.value = s.value || '';
        if (lblEl) lblEl.value = s.label || '';
      }

      const st = admSettings.section_titles || {};
      const sections = ['products', 'testimonials', 'faq'];
      sections.forEach(sec => {
        const d = st[sec] || {};
        const lbl = document.getElementById('adm-st-' + sec + '-label');
        const ttl = document.getElementById('adm-st-' + sec + '-title');
        const sub = document.getElementById('adm-st-' + sec + '-subtitle');
        if (lbl) lbl.value = d.label || '';
        if (ttl) ttl.value = d.title || '';
        if (sub) sub.value = d.subtitle || '';
      });

      const trust = admSettings.trust_bar || [];
      for (let i = 1; i <= 4; i++) {
        const t = trust[i - 1] || {};
        const ttlEl = document.getElementById('adm-trust-' + i + '-title');
        const subEl = document.getElementById('adm-trust-' + i + '-sub');
        if (ttlEl) ttlEl.value = t.title || '';
        if (subEl) subEl.value = t.subtitle || '';
      }
    }

    document.getElementById('adm-form-hero-texts')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const existing = admSettings.hero_content || {};
      const value = {
        badge: document.getElementById('adm-hero-badge').value.trim(),
        title: document.getElementById('adm-hero-title').value.trim(),
        subtitle: document.getElementById('adm-hero-subtitle').value.trim(),
        cta_text: document.getElementById('adm-hero-cta').value.trim(),
        cta2_text: document.getElementById('adm-hero-cta2').value.trim(),
        stats: existing.stats || []
      };
      try {
        await supabase.upsertSiteSetting('hero_content', value);
        admSettings.hero_content = value;
        admNotify('Textos do Hero salvos!');
        admRefreshSettings();
      } catch (err) { admNotify('Erro ao salvar', 'error'); }
    });

    document.getElementById('adm-form-hero-stats')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const existing = admSettings.hero_content || {};
      const stats = [];
      for (let i = 1; i <= 3; i++) {
        stats.push({
          value: document.getElementById('adm-hero-stat' + i + '-val').value.trim(),
          label: document.getElementById('adm-hero-stat' + i + '-label').value.trim()
        });
      }
      const value = { ...existing, stats };
      try {
        await supabase.upsertSiteSetting('hero_content', value);
        admSettings.hero_content = value;
        admNotify('Estatísticas salvas!');
        admRefreshSettings();
      } catch (err) { admNotify('Erro ao salvar', 'error'); }
    });

    document.getElementById('adm-form-section-titles')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const value = {};
      ['products', 'testimonials', 'faq'].forEach(sec => {
        value[sec] = {
          label: document.getElementById('adm-st-' + sec + '-label').value.trim(),
          title: document.getElementById('adm-st-' + sec + '-title').value.trim(),
          subtitle: document.getElementById('adm-st-' + sec + '-subtitle').value.trim()
        };
      });
      try {
        await supabase.upsertSiteSetting('section_titles', value);
        admSettings.section_titles = value;
        admNotify('Títulos das seções salvos!');
        admRefreshSettings();
      } catch (err) { admNotify('Erro ao salvar', 'error'); }
    });

    document.getElementById('adm-form-trust-bar')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const items = [];
      for (let i = 1; i <= 4; i++) {
        items.push({
          title: document.getElementById('adm-trust-' + i + '-title').value.trim(),
          subtitle: document.getElementById('adm-trust-' + i + '-sub').value.trim()
        });
      }
      try {
        await supabase.upsertSiteSetting('trust_bar', items);
        admSettings.trust_bar = items;
        admNotify('Barra de confiança salva!');
        admRefreshSettings();
      } catch (err) { admNotify('Erro ao salvar', 'error'); }
    });

    // ---- TESTIMONIALS CRUD ----
    let admTestimonials = [];

    function admLoadTestimonials() {
      admTestimonials = admSettings.testimonials || [];
      admRenderTestimonials();
    }

    function admRenderTestimonials() {
      const grid = document.getElementById('adm-testimonials-grid');
      const empty = document.getElementById('adm-testimonials-empty');
      if (!grid) return;
      if (!admTestimonials.length) {
        grid.innerHTML = '';
        if (empty) empty.style.display = '';
        return;
      }
      if (empty) empty.style.display = 'none';
      grid.innerHTML = admTestimonials.map((t, i) => {
        const stars = '★'.repeat(parseInt(t.rating) || 5) + '☆'.repeat(5 - (parseInt(t.rating) || 5));
        return `<div class="adm-content-card">
          <div class="adm-content-card-head">
            <div class="adm-content-card-avatar">${(t.name || 'A')[0].toUpperCase()}</div>
            <div>
              <strong>${t.name || 'Sem nome'}</strong>
              <small>${t.location || ''}</small>
            </div>
            <span class="adm-content-card-stars">${stars}</span>
          </div>
          <p class="adm-content-card-text">"${t.text || ''}"</p>
          <div class="adm-content-card-actions">
            <button class="adm-btn-sm adm-btn-edit" onclick="window._admEditTestimonial(${i})">Editar</button>
            <button class="adm-btn-sm adm-btn-delete" onclick="window._admDeleteTestimonial(${i})">Excluir</button>
          </div>
        </div>`;
      }).join('');
    }

    function admOpenTestimonialModal(idx) {
      const modal = document.getElementById('adm-testimonial-modal');
      const title = document.getElementById('adm-testimonial-modal-title');
      if (!modal) return;

      document.getElementById('adm-tf-editing-idx').value = idx;
      if (idx >= 0 && admTestimonials[idx]) {
        const t = admTestimonials[idx];
        title.textContent = 'Editar Depoimento';
        document.getElementById('adm-tf-name').value = t.name || '';
        document.getElementById('adm-tf-location').value = t.location || '';
        document.getElementById('adm-tf-rating').value = t.rating || '5';
        document.getElementById('adm-tf-text').value = t.text || '';
      } else {
        title.textContent = 'Novo Depoimento';
        document.getElementById('adm-tf-name').value = '';
        document.getElementById('adm-tf-location').value = '';
        document.getElementById('adm-tf-rating').value = '5';
        document.getElementById('adm-tf-text').value = '';
      }
      modal.classList.add('open');
    }

    async function admSaveTestimonials() {
      try {
        await supabase.upsertSiteSetting('testimonials', admTestimonials);
        admSettings.testimonials = admTestimonials;
        admRenderTestimonials();
        admRefreshSettings();
      } catch (err) { admNotify('Erro ao salvar depoimentos', 'error'); }
    }

    document.getElementById('adm-btn-add-testimonial')?.addEventListener('click', () => admOpenTestimonialModal(-1));

    document.getElementById('adm-testimonial-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const idx = parseInt(document.getElementById('adm-tf-editing-idx').value);
      const item = {
        name: document.getElementById('adm-tf-name').value.trim(),
        location: document.getElementById('adm-tf-location').value.trim(),
        rating: document.getElementById('adm-tf-rating').value,
        text: document.getElementById('adm-tf-text').value.trim()
      };
      if (idx >= 0 && admTestimonials[idx]) {
        admTestimonials[idx] = item;
      } else {
        admTestimonials.push(item);
      }
      await admSaveTestimonials();
      document.getElementById('adm-testimonial-modal')?.classList.remove('open');
      admNotify('Depoimento salvo!');
    });

    window._admEditTestimonial = (idx) => admOpenTestimonialModal(idx);
    window._admDeleteTestimonial = async (idx) => {
      if (!confirm('Excluir este depoimento?')) return;
      admTestimonials.splice(idx, 1);
      await admSaveTestimonials();
      admNotify('Depoimento excluído!');
    };

    // ---- FAQ CRUD ----
    let admFaqItems = [];

    function admLoadFaq() {
      admFaqItems = admSettings.faq_items || [];
      admRenderFaq();
    }

    function admRenderFaq() {
      const grid = document.getElementById('adm-faq-grid');
      const empty = document.getElementById('adm-faq-empty');
      if (!grid) return;
      if (!admFaqItems.length) {
        grid.innerHTML = '';
        if (empty) empty.style.display = '';
        return;
      }
      if (empty) empty.style.display = 'none';
      grid.innerHTML = admFaqItems.map((f, i) => {
        return `<div class="adm-content-card">
          <div class="adm-content-card-head">
            <div class="adm-content-card-num">${i + 1}</div>
            <strong class="adm-content-card-question">${f.question || ''}</strong>
          </div>
          <p class="adm-content-card-text">${f.answer || ''}</p>
          <div class="adm-content-card-actions">
            <button class="adm-btn-sm adm-btn-edit" onclick="window._admEditFaq(${i})">Editar</button>
            <button class="adm-btn-sm adm-btn-delete" onclick="window._admDeleteFaq(${i})">Excluir</button>
          </div>
        </div>`;
      }).join('');
    }

    function admOpenFaqModal(idx) {
      const modal = document.getElementById('adm-faq-modal');
      const title = document.getElementById('adm-faq-modal-title');
      if (!modal) return;

      document.getElementById('adm-faqf-editing-idx').value = idx;
      if (idx >= 0 && admFaqItems[idx]) {
        const f = admFaqItems[idx];
        title.textContent = 'Editar Pergunta';
        document.getElementById('adm-faqf-question').value = f.question || '';
        document.getElementById('adm-faqf-answer').value = f.answer || '';
      } else {
        title.textContent = 'Nova Pergunta';
        document.getElementById('adm-faqf-question').value = '';
        document.getElementById('adm-faqf-answer').value = '';
      }
      modal.classList.add('open');
    }

    async function admSaveFaq() {
      try {
        await supabase.upsertSiteSetting('faq_items', admFaqItems);
        admSettings.faq_items = admFaqItems;
        admRenderFaq();
        admRefreshSettings();
      } catch (err) { admNotify('Erro ao salvar FAQ', 'error'); }
    }

    document.getElementById('adm-btn-add-faq')?.addEventListener('click', () => admOpenFaqModal(-1));

    document.getElementById('adm-faq-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const idx = parseInt(document.getElementById('adm-faqf-editing-idx').value);
      const item = {
        question: document.getElementById('adm-faqf-question').value.trim(),
        answer: document.getElementById('adm-faqf-answer').value.trim()
      };
      if (idx >= 0 && admFaqItems[idx]) {
        admFaqItems[idx] = item;
      } else {
        admFaqItems.push(item);
      }
      await admSaveFaq();
      document.getElementById('adm-faq-modal')?.classList.remove('open');
      admNotify('Pergunta salva!');
    });

    window._admEditFaq = (idx) => admOpenFaqModal(idx);
    window._admDeleteFaq = async (idx) => {
      if (!confirm('Excluir esta pergunta?')) return;
      admFaqItems.splice(idx, 1);
      await admSaveFaq();
      admNotify('Pergunta excluída!');
    };

    // ---- REPORTS / SALES DASHBOARD (Redesigned) ----
    document.getElementById('adm-report-period')?.addEventListener('change', admRenderReports);

    // Export buttons
    document.getElementById('rpt-export-csv')?.addEventListener('click', exportReportsCSV);
    document.getElementById('rpt-export-pdf')?.addEventListener('click', exportReportsPDF);

    function admRenderReports() {
      const periodVal = document.getElementById('adm-report-period')?.value || '30';
      const now = new Date();
      let startDate = null;
      if (periodVal !== 'all') {
        const days = parseInt(periodVal);
        startDate = new Date(now.getTime() - days * 86400000);
      }

      const filtered = startDate
        ? admOrders.filter(o => new Date(o.created_at) >= startDate)
        : admOrders;

      const paid = filtered.filter(o => o.status === 'delivered' || o.status === 'paid');
      const totalRevenue = paid.reduce((s, o) => s + (parseFloat(o.total_price) || 0), 0);
      const avgTicket = paid.length ? totalRevenue / paid.length : 0;
      const delivered = filtered.filter(o => o.status === 'delivered').length;
      const canceled = filtered.filter(o => o.status === 'canceled').length;
      const conversion = filtered.length ? ((delivered + paid.length) / filtered.length * 100) : 0;

      // KPIs
      animateNumber('rpt-revenue', totalRevenue, true);
      animateNumber('rpt-orders', filtered.length);
      animateNumber('rpt-avg', avgTicket, true);
      animateNumber('rpt-delivered', delivered);
      animateNumber('rpt-canceled', canceled);
      document.getElementById('rpt-conversion').textContent = conversion.toFixed(0) + '%';

      // Revenue trend
      const trendEl = document.getElementById('rpt-revenue-trend');
      if (trendEl && startDate) {
        const prevStart = new Date(startDate.getTime() - (now.getTime() - startDate.getTime()));
        const prevPaid = admOrders.filter(o => {
          const d = new Date(o.created_at);
          return d >= prevStart && d < startDate && (o.status === 'delivered' || o.status === 'paid');
        });
        const prevRevenue = prevPaid.reduce((s, o) => s + (parseFloat(o.total_price) || 0), 0);
        if (prevRevenue > 0) {
          const pct = ((totalRevenue - prevRevenue) / prevRevenue * 100).toFixed(0);
          const isUp = totalRevenue >= prevRevenue;
          trendEl.className = 'rpt-kpi__trend ' + (isUp ? 'rpt-kpi__trend--up' : 'rpt-kpi__trend--down');
          trendEl.innerHTML = `${isUp ? '↑' : '↓'} ${Math.abs(pct)}% vs anterior`;
        } else {
          trendEl.innerHTML = '';
          trendEl.className = 'rpt-kpi__trend';
        }
      }

      // Charts
      renderRevenueLineChart(paid, startDate, now);
      renderStatusPieChart(filtered);
      renderTopProductsBarChart(paid);
      renderCategoriesPieChart(paid);
      renderWeekdayChart(filtered);
      renderRecentOrders(filtered.slice(0, 15));
    }

    // Animate KPI numbers
    function animateNumber(id, target, isCurrency = false) {
      const el = document.getElementById(id);
      if (!el) return;
      const start = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0;
      const diff = target - start;
      const duration = 600;
      const startTime = performance.now();
      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = start + diff * eased;
        el.textContent = isCurrency ? admFormatPrice(current) : Math.round(current).toString();
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    // ---- SVG LINE CHART: Revenue Over Time ----
    function renderRevenueLineChart(orders, startDate, endDate) {
      const container = document.getElementById('adm-chart-revenue');
      if (!container) return;

      const dayMap = {};
      const days = startDate ? Math.ceil((endDate - startDate) / 86400000) : 30;
      const displayDays = Math.min(days, 60);

      for (let i = displayDays - 1; i >= 0; i--) {
        const d = new Date(endDate.getTime() - i * 86400000);
        const key = d.toISOString().slice(0, 10);
        dayMap[key] = 0;
      }
      orders.forEach(o => {
        const key = new Date(o.created_at).toISOString().slice(0, 10);
        if (dayMap[key] !== undefined) dayMap[key] += parseFloat(o.total_price) || 0;
      });

      const labels = Object.keys(dayMap);
      const values = Object.values(dayMap);
      const maxVal = Math.max(...values, 1);
      const n = labels.length;

      if (!n) {
        container.innerHTML = noDataHTML('Sem dados de receita');
        return;
      }

      const pad = { top: 20, right: 20, bottom: 36, left: 60 };
      const w = container.clientWidth || 700;
      const h = container.clientHeight || 260;
      const cw = w - pad.left - pad.right;
      const ch = h - pad.top - pad.bottom;

      function x(i) { return pad.left + (i / Math.max(n - 1, 1)) * cw; }
      function y(v) { return pad.top + ch - (v / maxVal) * ch; }

      // Grid lines (5 horizontal)
      let gridLines = '';
      let yLabels = '';
      for (let j = 0; j <= 4; j++) {
        const val = (maxVal / 4) * j;
        const yy = y(val);
        gridLines += `<line x1="${pad.left}" y1="${yy}" x2="${w - pad.right}" y2="${yy}" class="rpt-grid-line"/>`;
        yLabels += `<text x="${pad.left - 8}" y="${yy + 3}" text-anchor="end" class="rpt-axis-label">${admFormatPrice(val)}</text>`;
      }

      // X-axis labels
      let xLabels = '';
      const step = Math.max(1, Math.ceil(n / 10));
      for (let i = 0; i < n; i += step) {
        const dayLabel = new Date(labels[i] + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        xLabels += `<text x="${x(i)}" y="${h - 4}" text-anchor="middle" class="rpt-axis-label">${dayLabel}</text>`;
      }

      // Line path
      const points = values.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`);
      const linePath = `M${points.join('L')}`;
      const areaPath = `${linePath}L${x(n - 1).toFixed(1)},${y(0).toFixed(1)}L${x(0).toFixed(1)},${y(0).toFixed(1)}Z`;

      // Dots
      let dots = '';
      values.forEach((v, i) => {
        const dayLabel = new Date(labels[i] + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        dots += `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="3.5" class="rpt-dot">
          <title>${dayLabel}: ${admFormatPrice(v)}</title>
        </circle>`;
      });

      container.innerHTML = `
        <svg class="rpt-line-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%">
          <defs>
            <linearGradient id="rpt-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#C4879A" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#C4879A" stop-opacity="0.02"/>
            </linearGradient>
          </defs>
          ${gridLines}
          ${yLabels}
          ${xLabels}
          <path d="${areaPath}" class="rpt-area-fill"/>
          <path d="${linePath}" class="rpt-line-path"/>
          ${dots}
        </svg>`;
    }

    // ---- DONUT/PIE CHART HELPER (SVG ring) ----
    function renderSvgDonut(container, items, centerText, centerSub) {
      if (!container) return;
      const total = items.reduce((s, i) => s + i.value, 0) || 1;

      if (!items.length || total === 0) {
        container.innerHTML = noDataHTML('Sem dados');
        return;
      }

      const r = 70, cx = 85, cy = 85, stroke = 28;
      const circumference = 2 * Math.PI * r;
      let offset = circumference * 0.25; // start at 12 o'clock

      let circles = '';
      items.forEach((item) => {
        const pct = item.value / total;
        const dashLen = circumference * pct;
        circles += `<circle cx="${cx}" cy="${cy}" r="${r}"
          fill="none" stroke="${item.color}" stroke-width="${stroke}"
          stroke-dasharray="${dashLen} ${circumference - dashLen}"
          stroke-dashoffset="${-offset}"
          style="transform-origin:${cx}px ${cy}px">
          <title>${item.label}: ${item.display || item.value} (${(pct * 100).toFixed(0)}%)</title>
        </circle>`;
        offset -= dashLen;
      });

      const legend = items.map(item => {
        const pct = (item.value / total * 100).toFixed(0);
        return `<div class="rpt-legend-row">
          <span class="rpt-legend-dot" style="background:${item.color}"></span>
          ${item.label} (${pct}%)
          <strong>${item.display || item.value}</strong>
        </div>`;
      }).join('');

      container.innerHTML = `
        <div class="rpt-pie-wrap">
          <svg class="rpt-pie-svg" viewBox="0 0 170 170" width="170" height="170">
            <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#f1f5f9" stroke-width="${stroke}"/>
            ${circles}
            <text x="${cx}" y="${cy - 4}" text-anchor="middle" font-size="14" font-weight="800" fill="#0f172a">${centerText}</text>
            <text x="${cx}" y="${cy + 12}" text-anchor="middle" font-size="9" fill="#94a3b8" font-weight="500">${centerSub}</text>
          </svg>
          <div class="rpt-pie-legend">${legend}</div>
        </div>`;
    }

    // ---- PIE CHART: Orders by Status ----
    function renderStatusPieChart(orders) {
      const container = document.getElementById('adm-chart-status');
      if (!container) return;

      const statuses = [
        { key: 'pending', label: 'Pendente', color: '#f59e0b' },
        { key: 'paid', label: 'Pago', color: '#10b981' },
        { key: 'delivered', label: 'Entregue', color: '#3b82f6' },
        { key: 'canceled', label: 'Cancelado', color: '#ef4444' },
      ];

      const counts = {};
      orders.forEach(o => { counts[o.status] = (counts[o.status] || 0) + 1; });

      const items = statuses
        .filter(s => counts[s.key])
        .map(s => ({ label: s.label, value: counts[s.key], color: s.color, display: counts[s.key].toString() }));

      renderSvgDonut(container, items, orders.length.toString(), 'pedidos');
    }

    // ---- HORIZONTAL BAR CHART: Top Products ----
    function renderTopProductsBarChart(paidOrders) {
      const container = document.getElementById('adm-chart-top-products');
      if (!container) return;

      const productCount = {};
      paidOrders.forEach(o => {
        if (o.whatsapp_message) {
          o.whatsapp_message.split('\n').forEach(line => {
            const match = line.trim().match(/^\d+\.\s\*(.+?)\*/);
            if (match) {
              const name = match[1].trim();
              productCount[name] = (productCount[name] || 0) + 1;
            }
          });
        }
      });

      const sorted = Object.entries(productCount).sort((a, b) => b[1] - a[1]).slice(0, 8);
      const maxCount = sorted.length ? sorted[0][1] : 1;

      if (!sorted.length) {
        container.innerHTML = noDataHTML('Sem dados de produtos vendidos');
        return;
      }

      container.innerHTML = `<div class="rpt-hbar-chart">${sorted.map(([name, count], i) => {
        const pct = (count / maxCount * 100).toFixed(0);
        return `<div class="rpt-hbar-row">
          <span class="rpt-hbar-label" title="${name}">${name}</span>
          <div class="rpt-hbar-track"><div class="rpt-hbar-fill rpt-hbar-fill--${i % 8}" style="width:${pct}%" data-value="${count}"></div></div>
          <span class="rpt-hbar-val">${count}</span>
        </div>`;
      }).join('')}</div>`;
    }

    // ---- DONUT: Revenue by Category ----
    function renderCategoriesPieChart(paidOrders) {
      const container = document.getElementById('adm-chart-categories');
      if (!container) return;

      const catRevenue = {};
      paidOrders.forEach(o => {
        if (o.whatsapp_message) {
          o.whatsapp_message.split('\n').forEach(line => {
            const match = line.trim().match(/^\d+\.\s\*(.+?)\*.*?R\$\s*([\d.,]+)/);
            if (match) {
              const productName = match[1].trim();
              const price = parseFloat(match[2].replace(',', '.')) || 0;
              const product = admProducts.find(p => p.name === productName);
              const catSlug = product?.category_slug || 'outros';
              const catName = ADM_CATEGORIES[catSlug] || catSlug || 'Outros';
              catRevenue[catName] = (catRevenue[catName] || 0) + price;
            }
          });
        }
      });

      const entries = Object.entries(catRevenue).sort((a, b) => b[1] - a[1]);
      const total = entries.reduce((s, [,v]) => s + v, 0) || 1;

      if (!entries.length) {
        container.innerHTML = noDataHTML('Sem dados de categorias');
        return;
      }

      const colors = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#06b6d4', '#84cc16'];
      const items = entries.map(([name, val], i) => ({
        label: name, value: val, color: colors[i % colors.length],
        display: admFormatPrice(val)
      }));

      renderSvgDonut(container, items, admFormatPrice(total), 'total');
    }

    // ---- BAR CHART: Orders by Day of Week ----
    function renderWeekdayChart(orders) {
      const container = document.getElementById('adm-chart-weekday');
      if (!container) return;

      const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
      const dayCounts = [0, 0, 0, 0, 0, 0, 0];

      orders.forEach(o => {
        const d = new Date(o.created_at).getDay();
        dayCounts[d]++;
      });

      const max = Math.max(...dayCounts, 1);

      if (!orders.length) {
        container.innerHTML = noDataHTML('Sem dados de pedidos');
        return;
      }

      container.innerHTML = `<div class="rpt-vbar-chart">${dayNames.map((name, i) => {
        const pct = (dayCounts[i] / max * 100).toFixed(0);
        return `<div class="rpt-vbar-col" title="${name}: ${dayCounts[i]} pedidos">
          <span class="rpt-vbar-val">${dayCounts[i]}</span>
          <div class="rpt-vbar" style="height:${pct}%"></div>
          <span class="rpt-vbar-lbl">${name}</span>
        </div>`;
      }).join('')}</div>`;
    }

    // ---- RECENT ORDERS TABLE ----
    function renderRecentOrders(orders) {
      const tbody = document.getElementById('adm-report-recent-tbody');
      if (!tbody) return;
      if (!orders.length) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#94a3b8;padding:30px;">Nenhum pedido no período.</td></tr>';
        return;
      }
      tbody.innerHTML = orders.map(o => {
        // Count items from whatsapp_message
        let itemCount = 0;
        if (o.whatsapp_message) {
          const matches = o.whatsapp_message.match(/^\d+\.\s\*/gm);
          itemCount = matches ? matches.length : 0;
        }
        return `<tr>
          <td><strong style="color:#C4879A">#${o.id}</strong></td>
          <td><small>${admFormatDate(o.created_at)}</small></td>
          <td>${o.customer_name || o.user_email || '<span style="color:#94a3b8">Visitante</span>'}</td>
          <td><small style="color:#64748b">${itemCount} ${itemCount === 1 ? 'item' : 'itens'}</small></td>
          <td><strong>${admFormatPrice(parseFloat(o.total_price) || 0)}</strong></td>
          <td>${admOrderStatusBadge(o.status)}</td>
        </tr>`;
      }).join('');
    }

    // ---- NO DATA STATE ----
    function noDataHTML(msg) {
      return `<div class="rpt-no-data">
        <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        <span>${msg}</span>
      </div>`;
    }

    // ============ EXPORT FUNCTIONS ============
    function exportReportsCSV() {
      const periodVal = document.getElementById('adm-report-period')?.value || '30';
      const now = new Date();
      let startDate = null;
      if (periodVal !== 'all') {
        startDate = new Date(now.getTime() - parseInt(periodVal) * 86400000);
      }

      const filtered = startDate
        ? admOrders.filter(o => new Date(o.created_at) >= startDate)
        : admOrders;

      if (!filtered.length) { admNotify('Sem dados para exportar', 'error'); return; }

      const headers = ['ID', 'Data', 'Cliente', 'Email', 'Total', 'Status'];
      const rows = filtered.map(o => [
        o.id,
        new Date(o.created_at).toLocaleDateString('pt-BR'),
        (o.customer_name || '').replace(/,/g, ';'),
        (o.user_email || '').replace(/,/g, ';'),
        (parseFloat(o.total_price) || 0).toFixed(2),
        o.status
      ]);

      let csv = '\uFEFF'; // BOM for Excel UTF-8
      csv += headers.join(',') + '\n';
      csv += rows.map(r => r.join(',')).join('\n');

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `relatorio-pedidos-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      admNotify('CSV exportado com sucesso!');
    }

    function exportReportsPDF() {
      const periodVal = document.getElementById('adm-report-period')?.value || '30';
      const now = new Date();
      let startDate = null;
      if (periodVal !== 'all') {
        startDate = new Date(now.getTime() - parseInt(periodVal) * 86400000);
      }

      const filtered = startDate
        ? admOrders.filter(o => new Date(o.created_at) >= startDate)
        : admOrders;

      if (!filtered.length) { admNotify('Sem dados para exportar', 'error'); return; }

      const paid = filtered.filter(o => o.status === 'delivered' || o.status === 'paid');
      const totalRevenue = paid.reduce((s, o) => s + (parseFloat(o.total_price) || 0), 0);
      const avgTicket = paid.length ? totalRevenue / paid.length : 0;
      const delivered = filtered.filter(o => o.status === 'delivered').length;
      const canceled = filtered.filter(o => o.status === 'canceled').length;

      const periodText = periodVal === 'all' ? 'Todo período' : `Últimos ${periodVal} dias`;

      const printContent = `
        <!DOCTYPE html>
        <html><head>
          <meta charset="UTF-8">
          <title>Relatório Toque de Fada</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; padding: 40px; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #C4879A; padding-bottom: 20px; }
            .header h1 { font-size: 22px; color: #C4879A; }
            .header p { font-size: 12px; color: #64748b; margin-top: 4px; }
            .kpis { display: flex; gap: 16px; margin-bottom: 30px; flex-wrap: wrap; }
            .kpi { flex: 1; min-width: 120px; text-align: center; padding: 16px; background: #f8fafc; border-radius: 8px; }
            .kpi-val { font-size: 20px; font-weight: 800; }
            .kpi-lbl { font-size: 10px; color: #64748b; text-transform: uppercase; margin-top: 4px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 11px; }
            th { background: #f1f5f9; padding: 8px 10px; text-align: left; font-weight: 600; border-bottom: 2px solid #e2e8f0; }
            td { padding: 7px 10px; border-bottom: 1px solid #f1f5f9; }
            tr:nth-child(even) { background: #fafbfc; }
            .footer { margin-top: 30px; text-align: center; font-size: 10px; color: #94a3b8; }
          </style>
        </head><body>
          <div class="header">
            <h1>Toque de Fada — Relatório de Vendas</h1>
            <p>${periodText} • Gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
          <div class="kpis">
            <div class="kpi"><div class="kpi-val">${admFormatPrice(totalRevenue)}</div><div class="kpi-lbl">Receita</div></div>
            <div class="kpi"><div class="kpi-val">${filtered.length}</div><div class="kpi-lbl">Pedidos</div></div>
            <div class="kpi"><div class="kpi-val">${admFormatPrice(avgTicket)}</div><div class="kpi-lbl">Ticket Médio</div></div>
            <div class="kpi"><div class="kpi-val">${delivered}</div><div class="kpi-lbl">Entregues</div></div>
            <div class="kpi"><div class="kpi-val">${canceled}</div><div class="kpi-lbl">Cancelados</div></div>
          </div>
          <h3 style="font-size:14px;margin-bottom:8px;">Detalhamento de Pedidos</h3>
          <table>
            <thead><tr><th>#</th><th>Data</th><th>Cliente</th><th>Total</th><th>Status</th></tr></thead>
            <tbody>${filtered.map(o => `<tr>
              <td>#${o.id}</td>
              <td>${new Date(o.created_at).toLocaleDateString('pt-BR')}</td>
              <td>${o.customer_name || o.user_email || 'Visitante'}</td>
              <td>${admFormatPrice(parseFloat(o.total_price) || 0)}</td>
              <td>${o.status === 'delivered' ? 'Entregue' : o.status === 'paid' ? 'Pago' : o.status === 'canceled' ? 'Cancelado' : 'Pendente'}</td>
            </tr>`).join('')}</tbody>
          </table>
          <div class="footer">Toque de Fada © ${new Date().getFullYear()} • Relatório gerado automaticamente</div>
        </body></html>`;

      const win = window.open('', '_blank');
      win.document.write(printContent);
      win.document.close();
      setTimeout(() => { win.print(); }, 500);
      admNotify('Relatório PDF aberto para impressão!');
    }

    // ---- MODAL CLOSE (delegation) ----
    admOverlay.addEventListener('click', (e) => {
      const closeTarget = e.target.closest('[data-close-modal]');
      if (closeTarget) { document.getElementById(closeTarget.dataset.closeModal)?.classList.remove('open'); return; }
      if (e.target.classList.contains('adm-modal-bg')) { e.target.closest('.adm-modal')?.classList.remove('open'); }
    });

    // ---- REAL-TIME SITE REFRESH ----
    function admRefreshSite() {
      // Reload products on the main site in real-time
      loadProductsFromDB();
    }

    function admRefreshSettings() {
      // Reload settings on the main site in real-time
      loadSiteSettings();
    }

  })();

  // ============================================================
  //  INLINE EDIT MODE — Per-Section Contextual Editor v3
  // ============================================================
  (function initEditMode() {
    'use strict';

    // --- Editable elements config ---
    const EDITABLE_ELEMS = [
      { sel: '.hero-badge', key: 'hero_badge', label: 'Badge' },
      { sel: '#hero-title', key: 'hero_title', label: 'Título Hero', rich: true },
      { sel: '#hero-subtitle', key: 'hero_subtitle', label: 'Subtítulo Hero' },
      { sel: '.hero-actions .btn-primary', key: 'hero_cta', label: 'Botão Principal' },
      { sel: '.hero-actions .btn-outline', key: 'hero_cta2', label: 'Botão Secundário' },
      { sel: '.hero-stat:nth-child(1) .hero-stat-value', key: 'stat1_val', label: 'Stat 1' },
      { sel: '.hero-stat:nth-child(1) .hero-stat-label', key: 'stat1_lbl', label: 'Label Stat 1' },
      { sel: '.hero-stat:nth-child(2) .hero-stat-value', key: 'stat2_val', label: 'Stat 2' },
      { sel: '.hero-stat:nth-child(2) .hero-stat-label', key: 'stat2_lbl', label: 'Label Stat 2' },
      { sel: '.hero-stat:nth-child(3) .hero-stat-value', key: 'stat3_val', label: 'Stat 3' },
      { sel: '.hero-stat:nth-child(3) .hero-stat-label', key: 'stat3_lbl', label: 'Label Stat 3' },
      { sel: '.hero-float-card--top .float-card-text', key: 'float_top', label: 'Card Flutuante', rich: true },
      { sel: '.hero-float-card--bottom .float-card-text', key: 'float_bottom', label: 'Card Flutuante', rich: true },
      { sel: '.trust-item:nth-child(1) .trust-text', key: 'trust1', label: 'Confiança 1', rich: true },
      { sel: '.trust-item:nth-child(2) .trust-text', key: 'trust2', label: 'Confiança 2', rich: true },
      { sel: '.trust-item:nth-child(3) .trust-text', key: 'trust3', label: 'Confiança 3', rich: true },
      { sel: '.trust-item:nth-child(4) .trust-text', key: 'trust4', label: 'Confiança 4', rich: true },
      { sel: '#produtos .section-label', key: 'prod_label', label: 'Label Produtos' },
      { sel: '#produtos .section-title', key: 'prod_title', label: 'Título Produtos' },
      { sel: '#produtos .section-subtitle', key: 'prod_sub', label: 'Subtítulo Produtos' },
      { sel: '.offer-section .offer-label', key: 'offer_label', label: 'Label Ofertas' },
      { sel: '.offer-section-title', key: 'offer_title', label: 'Título Ofertas' },
      { sel: '.offer-section-subtitle', key: 'offer_sub', label: 'Subtítulo Ofertas' },
      { sel: '#depoimentos .section-label', key: 'test_label', label: 'Label Depoimentos' },
      { sel: '#depoimentos .section-title', key: 'test_title', label: 'Título Depoimentos' },
      { sel: '#depoimentos .section-subtitle', key: 'test_sub', label: 'Subtítulo Depoimentos' },
      { sel: '#faq .section-label', key: 'faq_label', label: 'Label FAQ' },
      { sel: '#faq .section-title', key: 'faq_title', label: 'Título FAQ' },
      { sel: '#faq .section-subtitle', key: 'faq_sub', label: 'Subtítulo FAQ' },
      { sel: '#contato .section-label', key: 'contact_label', label: 'Label Contato' },
      { sel: '#contato .section-title', key: 'contact_title', label: 'Título Contato' },
      { sel: '#contato .section-subtitle', key: 'contact_sub', label: 'Subtítulo Contato' },
      { sel: '.newsletter-section .newsletter-title', key: 'news_title', label: 'Título Newsletter' },
      { sel: '.newsletter-section .newsletter-desc', key: 'news_sub', label: 'Subtítulo Newsletter' },
      { sel: '.newsletter-section .newsletter-note', key: 'news_note', label: 'Nota Newsletter' },
      { sel: '.footer-brand .footer-desc', key: 'footer_about', label: 'Sobre (Footer)' },
      { sel: '.footer-main > div:nth-child(2) .footer-heading', key: 'footer_h_links', label: 'Título Links' },
      { sel: '.footer-main > div:nth-child(3) .footer-heading', key: 'footer_h_cat', label: 'Título Categorias' },
      { sel: '.footer-main > div:nth-child(4) .footer-heading', key: 'footer_h_contact', label: 'Título Contato Footer' },
    ];

    const MULTI_EDITABLE = [
      { parentSel: '#faq-list .faq-item', children: [
        { sel: '.faq-question span', keyBase: 'faq_q', label: 'Pergunta' },
        { sel: '.faq-answer p', keyBase: 'faq_a', label: 'Resposta' },
      ]},
      { parentSel: '.testimonials-grid .testimonial-card', children: [
        { sel: '.testimonial-text', keyBase: 'testimonial_text', label: 'Depoimento' },
        { sel: '.testimonial-author-info .name', keyBase: 'testimonial_name', label: 'Nome' },
        { sel: '.testimonial-author-info .location', keyBase: 'testimonial_loc', label: 'Local' },
      ]},
    ];

    // --- Reorderable sections (based on DOM order, not static array) ---
    const SECTION_SELS = [
      { sel: '#home', label: 'Hero', fixed: true },
      { sel: '.trust-bar', label: 'Confiança' },
      { sel: '#produtos', label: 'Produtos' },
      { sel: '#ofertas', label: 'Ofertas' },
      { sel: '#depoimentos', label: 'Depoimentos' },
      { sel: '#faq', label: 'FAQ' },
      { sel: '#contato', label: 'Contato' },
      { sel: '.newsletter-section', label: 'Newsletter' },
    ];

    // Available Google Fonts for dynamic loading
    const GOOGLE_FONTS = [
      'Inter', 'Poppins', 'Montserrat', 'Lato', 'Raleway', 'Roboto',
      'Open Sans', 'Merriweather', 'Cormorant Garamond', 'Dancing Script', 'Great Vibes'
    ];

    // --- Section config (maps sections to their editable elements) ---
    // SVG icon helper (14x14 stroke icons)
    const _i = (d) => `<svg class="em-ico" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${d}"/></svg>`;
    const EM_ICONS = {
      megaphone: _i('M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'),
      home: _i('M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z'),
      star: _i('M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'),
      bag: _i('M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'),
      tag: _i('M7 7h.01M7 3h5a2 2 0 011.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A2 2 0 015 10V5a2 2 0 012-2z'),
      chat: _i('M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'),
      help: _i('M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'),
      mail: _i('M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'),
      newspaper: _i('M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'),
      footer: _i('M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z'),
      palette: _i('M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'),
      type: _i('M4 6h16M4 12h8m-8 6h16'),
      shapes: _i('M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'),
      compass: _i('M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'),
      sparkle: _i('M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3'),
      ruler: _i('M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'),
      settings: _i('M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'),
    };

    const SECTION_CONFIG = [
      { id: 'promo', sel: '.promo-banner', label: 'Banner Promocional', icon: EM_ICONS.megaphone, keys: [], special: 'promo' },
      { id: 'hero', sel: '#home', label: 'Hero', icon: EM_ICONS.home, keys: ['hero_badge','hero_title','hero_subtitle','hero_cta','hero_cta2','stat1_val','stat1_lbl','stat2_val','stat2_lbl','stat3_val','stat3_lbl','float_top','float_bottom'], special: 'hero', fixed: true },
      { id: 'trust', sel: '.trust-bar', label: 'Confiança', icon: EM_ICONS.star, keys: ['trust1','trust2','trust3','trust4'] },
      { id: 'produtos', sel: '#produtos', label: 'Produtos', icon: EM_ICONS.bag, keys: ['prod_label','prod_title','prod_sub'] },
      { id: 'ofertas', sel: '#ofertas', label: 'Ofertas', icon: EM_ICONS.tag, keys: ['offer_label','offer_title','offer_sub'] },
      { id: 'depoimentos', sel: '#depoimentos', label: 'Depoimentos', icon: EM_ICONS.chat, keys: ['test_label','test_title','test_sub'], multi: 'testimonials' },
      { id: 'faq', sel: '#faq', label: 'FAQ', icon: EM_ICONS.help, keys: ['faq_label','faq_title','faq_sub'], multi: 'faq' },
      { id: 'contato', sel: '#contato', label: 'Contato', icon: EM_ICONS.mail, keys: ['contact_label','contact_title','contact_sub'] },
      { id: 'newsletter', sel: '.newsletter-section', label: 'Newsletter', icon: EM_ICONS.newspaper, keys: ['news_title','news_sub','news_note'] },
      { id: 'footer', sel: '.site-footer', label: 'Footer', icon: EM_ICONS.footer, keys: ['footer_about','footer_h_links','footer_h_cat','footer_h_contact'], special: 'footer' },
    ];

    // Font options reusable HTML
    const FONT_OPTIONS_HTML = `
      <option value="">Padrão</option>
      <option value="'Plus Jakarta Sans', sans-serif">Jakarta Sans</option>
      <option value="'Playfair Display', serif">Playfair Display</option>
      <option value="'Inter', sans-serif">Inter</option>
      <option value="'Poppins', sans-serif">Poppins</option>
      <option value="'Montserrat', sans-serif">Montserrat</option>
      <option value="'Lato', sans-serif">Lato</option>
      <option value="'Raleway', sans-serif">Raleway</option>
      <option value="'Roboto', sans-serif">Roboto</option>
      <option value="'Open Sans', sans-serif">Open Sans</option>
      <option value="'Merriweather', serif">Merriweather</option>
      <option value="'Cormorant Garamond', serif">Cormorant</option>
      <option value="'Dancing Script', cursive">Dancing Script</option>
      <option value="'Great Vibes', cursive">Great Vibes</option>`;

    // --- State ---
    let active = false;
    let changes = {};
    let originalHTML = {};
    let originalStyles = {};
    let originalOrder = [];
    let selectedEl = null;
    let changeCount = 0;
    let bgAnimationEl = null;
    let currentPanelSection = null;

    // --- DOM refs ---
    const bar = document.getElementById('edit-mode-bar');
    const btnToggle = document.getElementById('btn-edit-mode');
    const btnSave = document.getElementById('em-save');
    const btnCancel = document.getElementById('em-cancel');
    const btnReset = document.getElementById('em-reset');
    const btnGlobal = document.getElementById('em-global-btn');
    const panel = document.getElementById('em-section-panel');
    const panelTitle = document.getElementById('em-panel-title');
    const panelBody = document.getElementById('em-panel-body');
    const panelClose = document.getElementById('em-panel-close');
    const panelSaveBtn = document.getElementById('em-panel-save');
    const panelBackdrop = document.getElementById('em-panel-backdrop');

    if (!bar || !btnToggle) return;

    // Show button for admins
    const observer = new MutationObserver(() => {
      const adminBtn = document.getElementById('btn-admin-panel');
      if (adminBtn && adminBtn.style.display !== 'none') {
        btnToggle.style.display = '';
      }
    });
    const adminBtnRef = document.getElementById('btn-admin-panel');
    if (adminBtnRef) observer.observe(adminBtnRef, { attributes: true, attributeFilter: ['style'] });

    btnToggle.addEventListener('click', () => {
      document.querySelector('.user-dropdown')?.classList.remove('show');
      enterEditMode();
    });

    // ===================== ENTER EDIT MODE =====================
    function enterEditMode() {
      if (active) return;
      active = true;
      changes = {};
      changeCount = 0;
      document.body.classList.add('em-active');
      bar.style.display = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Always show promo banner in edit mode (with inactive indicator if hidden)
      const promoBanner = document.querySelector('.promo-banner');
      if (promoBanner) {
        promoBanner._wasHidden = promoBanner.style.display === 'none';
        if (promoBanner._wasHidden) {
          promoBanner.style.display = '';
          promoBanner.classList.add('em-promo-inactive');
        }
      }

      // Save original state
      originalHTML = {};
      const rootCs = getComputedStyle(document.documentElement);
      originalStyles = {
        bodyBg: document.body.style.background || '',
        bodyColor: document.body.style.color || '',
        bodyFontSize: document.body.style.fontSize || '',
        footerBg: '',
        footerColor: '',
        globalFont: document.body.style.fontFamily || '',
        primaryColor: rootCs.getPropertyValue('--primary').trim(),
        accentColor: rootCs.getPropertyValue('--accent').trim(),
        bgColor: rootCs.getPropertyValue('--bg').trim(),
        bgAltColor: rootCs.getPropertyValue('--bg-alt').trim(),
        surfaceColor: rootCs.getPropertyValue('--surface').trim(),
        textDarkColor: rootCs.getPropertyValue('--text-dark').trim(),
        textColor: rootCs.getPropertyValue('--text').trim(),
        textMutedColor: rootCs.getPropertyValue('--text-muted').trim(),
        borderColor: rootCs.getPropertyValue('--border').trim(),
        radiusSm: rootCs.getPropertyValue('--radius-sm').trim(),
        radiusMd: rootCs.getPropertyValue('--radius-md').trim(),
        radiusLg: rootCs.getPropertyValue('--radius-lg').trim(),
        radiusXl: rootCs.getPropertyValue('--radius-xl').trim(),
      };
      const footer = document.querySelector('.site-footer');
      if (footer) {
        originalStyles.footerBg = footer.style.background || '';
        originalStyles.footerColor = footer.style.color || '';
      }

      getAllEditableEls().forEach(({ el, key }) => {
        originalHTML[key] = { html: el.innerHTML, fontSize: el.style.fontSize, color: el.style.color, fontWeight: el.style.fontWeight, fontStyle: el.style.fontStyle, fontFamily: el.style.fontFamily };
        el.setAttribute('contenteditable', 'true');
        el.classList.add('em-editable');
        el.addEventListener('focus', onElFocus);
        el.addEventListener('blur', onElBlur);
        el.addEventListener('input', onElInput);
      });

      // Save section order
      originalOrder = getCurrentSectionOrder();

      // Add section edit buttons
      addSectionEditButtons();

      // Add section reorder controls
      addSectionControls();

      // Add CRUD controls
      addCrudControls();

      // Prevent link clicks / button actions
      document.addEventListener('click', preventActions, true);
    }

    // ===================== EXIT EDIT MODE =====================
    function exitEditMode(revert) {
      if (!active) return;
      active = false;
      closeSectionPanel();
      document.body.classList.remove('em-active');
      bar.style.display = 'none';
      selectedEl = null;
      currentPanelSection = null;

      // Restore promo banner hidden state if it was inactive
      const promoBanner = document.querySelector('.promo-banner');
      if (promoBanner) {
        promoBanner.classList.remove('em-promo-inactive');
        if (promoBanner._wasHidden && !revert) {
          // Check actual saved state
          const checkbox = document.getElementById('em-p-promo-active');
          if (!checkbox || !checkbox.checked) {
            promoBanner.style.display = 'none';
          }
        } else if (promoBanner._wasHidden && revert) {
          promoBanner.style.display = 'none';
        }
        delete promoBanner._wasHidden;
      }

      getAllEditableEls().forEach(({ el }) => {
        el.removeAttribute('contenteditable');
        el.classList.remove('em-editable', 'em-selected');
        el.removeEventListener('focus', onElFocus);
        el.removeEventListener('blur', onElBlur);
        el.removeEventListener('input', onElInput);
      });

      if (revert) {
        // Revert text content
        Object.keys(originalHTML).forEach(key => {
          const info = findByKey(key);
          if (!info || !info.el) return;
          const orig = originalHTML[key];
          info.el.innerHTML = orig.html;
          info.el.style.fontSize = orig.fontSize || '';
          info.el.style.color = orig.color || '';
          info.el.style.fontWeight = orig.fontWeight || '';
          info.el.style.fontStyle = orig.fontStyle || '';
          info.el.style.fontFamily = orig.fontFamily || '';
        });
        // Revert global styles
        document.body.style.background = originalStyles.bodyBg;
        document.body.style.color = originalStyles.bodyColor;
        document.body.style.fontSize = originalStyles.bodyFontSize;
        document.body.style.fontFamily = originalStyles.globalFont;
        const footer = document.querySelector('.site-footer');
        if (footer) {
          footer.style.background = originalStyles.footerBg;
          footer.style.color = originalStyles.footerColor;
        }
        const setV = (p, v) => { if (v) document.documentElement.style.setProperty(p, v); };
        setV('--primary', originalStyles.primaryColor);
        setV('--accent', originalStyles.accentColor);
        setV('--bg', originalStyles.bgColor);
        setV('--bg-alt', originalStyles.bgAltColor);
        setV('--surface', originalStyles.surfaceColor);
        setV('--text-dark', originalStyles.textDarkColor);
        setV('--text', originalStyles.textColor);
        setV('--text-muted', originalStyles.textMutedColor);
        setV('--border', originalStyles.borderColor);
        setV('--radius-sm', originalStyles.radiusSm);
        setV('--radius-md', originalStyles.radiusMd);
        setV('--radius-lg', originalStyles.radiusLg);
        setV('--radius-xl', originalStyles.radiusXl);
        // Revert titles
        document.querySelectorAll('.section-title, .hero-title, .newsletter-title, h1, h2, h3').forEach(el => {
          el.style.fontFamily = ''; el.style.fontWeight = '';
        });
        // Revert buttons
        document.querySelectorAll('.btn').forEach(btn => {
          btn.style.borderRadius = '';
          btn.classList.remove('btn--gradient', 'btn--outline', 'btn--soft');
        });
        // Revert header
        const headerEl = document.querySelector('.site-header');
        if (headerEl) { headerEl.style.background = ''; headerEl.style.boxShadow = ''; }
        document.querySelectorAll('.site-header .nav-link, .site-header .logo-text').forEach(el => { el.style.color = ''; });
        // Revert icon colors
        document.querySelectorAll('.trust-icon svg, .benefit-icon svg, .newsletter-icon svg, .feature-icon svg, .contact-icon svg, .faq-icon svg, .section-label svg').forEach(svg => {
          svg.style.color = '';
        });
        // Revert section spacing & width
        document.querySelectorAll('section').forEach(sec => { sec.style.paddingTop = ''; sec.style.paddingBottom = ''; });
        document.querySelectorAll('.section-container').forEach(c => { c.style.maxWidth = ''; });
        // Revert section order
        revertSectionOrder();
        // Remove animation
        removeBgAnimation();
      }

      removeSectionEditButtons();
      removeSectionControls();
      removeCrudControls();
      document.removeEventListener('click', preventActions, true);
    }

    // ===================== SAVE =====================
    async function saveChanges(shouldExit = true) {
      btnSave.disabled = true;
      btnSave.textContent = 'Salvando...';

      try {
        const content = {};
        getAllEditableEls().forEach(({ el, key }) => {
          content[key] = {
            html: el.innerHTML,
            text: el.textContent.trim(),
            fontSize: el.style.fontSize || '',
            color: el.style.color || '',
            fontWeight: el.style.fontWeight || '',
            fontStyle: el.style.fontStyle || '',
            fontFamily: el.style.fontFamily || '',
          };
        });

        // Section order by selector
        const sectionOrder = getCurrentSectionOrder();

        // Get current bg animation value from the global panel or existing state
        let currentAnimation = 'none';
        const animSelect = document.getElementById('em-g-animation');
        if (animSelect) currentAnimation = animSelect.value;
        else if (bgAnimationEl) {
          const cls = bgAnimationEl.className;
          const match = cls.match(/em-bg-anim--(\S+)/);
          if (match) currentAnimation = match[1];
        }

        // Global styles
        const rootCs = getComputedStyle(document.documentElement);
        const getV = (v) => rootCs.getPropertyValue(v).trim();
        const globalStyles = {
          bodyBg: document.body.style.background || '',
          bodyColor: document.body.style.color || '',
          bodyFontSize: document.body.style.fontSize || '',
          globalFont: document.body.style.fontFamily || '',
          titleFont: document.querySelector('.section-title')?.style.fontFamily || '',
          titleWeight: document.querySelector('.section-title')?.style.fontWeight || '',
          footerBg: document.querySelector('.site-footer')?.style.background || '',
          footerColor: document.querySelector('.site-footer')?.style.color || '',
          footerLinkColor: document.querySelector('.footer-links a')?.style.color || document.querySelector('.footer-link')?.style.color || '',
          headerBg: document.querySelector('.site-header')?.style.background || '',
          headerTextColor: document.querySelector('.site-header .nav-link')?.style.color || document.querySelector('.site-header .logo-text h1')?.style.color || '',
          primaryColor: getV('--primary'),
          accentColor: getV('--accent'),
          bgColor: getV('--bg'),
          bgAltColor: getV('--bg-alt'),
          surfaceColor: getV('--surface'),
          textDarkColor: getV('--text-dark'),
          textColor: getV('--text'),
          textMutedColor: getV('--text-muted'),
          borderColor: getV('--border'),
          iconColor: getV('--icon-color') || '',
          radiusMd: getV('--radius-md'),
          btnRadius: document.querySelector('.btn')?.style.borderRadius || '',
          shadowLevel: '',
          bgAnimation: currentAnimation,
          btnStyle: '',
          sectionSpacing: '',
          contentWidth: '',
        };
        // Save select values if panel is open
        const gBtnStyle = document.getElementById('em-g-btn-style');
        if (gBtnStyle) globalStyles.btnStyle = gBtnStyle.value;
        const gShadow = document.getElementById('em-g-shadow');
        if (gShadow) globalStyles.shadowLevel = gShadow.value;
        const gSpacing = document.getElementById('em-g-section-spacing');
        if (gSpacing) globalStyles.sectionSpacing = gSpacing.value;
        const gWidth = document.getElementById('em-g-content-width');
        if (gWidth) globalStyles.contentWidth = gWidth.value;

        const payload = { content, sectionOrder, globalStyles, savedAt: new Date().toISOString() };
        await supabase.upsertSiteSetting('edit_mode', payload);

        if (shouldExit) {
          showNotification('Alterações salvas com sucesso!');
          exitEditMode(false);
        }
      } catch (err) {
        showNotification('Erro ao salvar: ' + (err.message || ''), true);
        throw err;
      } finally {
        btnSave.disabled = false;
        btnSave.innerHTML = '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Salvar Tudo';
      }
    }

    // ===================== APPLY ON PAGE LOAD =====================
    function applyEditModeSettings(settings) {
      const editData = settings.edit_mode;
      if (!editData) return;

      const { content, sectionOrder, globalStyles } = editData;

      // Apply content
      if (content) {
        Object.keys(content).forEach(key => {
          const info = findByKey(key);
          if (!info || !info.el) return;
          const data = content[key];
          if (data.html) info.el.innerHTML = data.html;
          if (data.fontSize) info.el.style.fontSize = data.fontSize;
          if (data.color) info.el.style.color = data.color;
          if (data.fontWeight) info.el.style.fontWeight = data.fontWeight;
          if (data.fontStyle) info.el.style.fontStyle = data.fontStyle;
          if (data.fontFamily) {
            info.el.style.fontFamily = data.fontFamily;
            loadGoogleFont(data.fontFamily);
          }
        });
      }

      // Apply section order
      if (sectionOrder && sectionOrder.length) {
        applySectionOrder(sectionOrder);
      }

      // Apply global styles
      if (globalStyles) {
        if (globalStyles.bodyBg) document.body.style.background = globalStyles.bodyBg;
        if (globalStyles.bodyColor) document.body.style.color = globalStyles.bodyColor;
        if (globalStyles.bodyFontSize) document.body.style.fontSize = globalStyles.bodyFontSize;
        if (globalStyles.globalFont) {
          document.body.style.fontFamily = globalStyles.globalFont;
          loadGoogleFont(globalStyles.globalFont);
        }
        if (globalStyles.titleFont) {
          document.querySelectorAll('.section-title, .hero-title, .newsletter-title, h1, h2, h3').forEach(el => {
            el.style.fontFamily = globalStyles.titleFont;
          });
          loadGoogleFont(globalStyles.titleFont);
        }
        if (globalStyles.titleWeight) {
          document.querySelectorAll('.section-title, .hero-title, .newsletter-title, h1, h2, h3').forEach(el => {
            el.style.fontWeight = globalStyles.titleWeight;
          });
        }

        const footer = document.querySelector('.site-footer');
        if (footer) {
          if (globalStyles.footerBg) footer.style.background = globalStyles.footerBg;
          if (globalStyles.footerColor) {
            footer.style.color = globalStyles.footerColor;
            footer.querySelectorAll('.footer-heading, .footer-brand .logo-text h1').forEach(el => {
              el.style.color = globalStyles.footerColor;
            });
          }
        }
        if (globalStyles.footerLinkColor) {
          const ftr = document.querySelector('.site-footer');
          if (ftr) {
            ftr.querySelectorAll('.footer-links a, .footer-link').forEach(a => { a.style.color = globalStyles.footerLinkColor; });
            ftr.querySelectorAll('.footer-desc, .footer-badge, .footer-bottom p, .footer-bottom-links a').forEach(el => {
              el.style.color = globalStyles.footerLinkColor;
            });
            ftr.querySelectorAll('.social-icon').forEach(el => {
              el.style.color = globalStyles.footerLinkColor;
              el.style.borderColor = globalStyles.footerLinkColor;
            });
          }
        }

        const headerEl = document.querySelector('.site-header');
        if (headerEl && globalStyles.headerBg) headerEl.style.background = globalStyles.headerBg;
        if (globalStyles.headerTextColor) {
          document.querySelectorAll('.site-header .nav-link, .site-header .logo-text, .site-header .logo-text h1').forEach(el => {
            el.style.color = globalStyles.headerTextColor;
          });
        }

        // CSS custom properties
        const setV = (prop, val) => { if (val) document.documentElement.style.setProperty(prop, val); };
        setV('--primary', globalStyles.primaryColor);
        if (globalStyles.primaryColor) {
          setV('--primary-mid', adjustBrightness(globalStyles.primaryColor, -15));
          setV('--primary-light', adjustBrightness(globalStyles.primaryColor, 30));
          setV('--primary-soft', adjustBrightness(globalStyles.primaryColor, 50));
          setV('--primary-pale', adjustBrightness(globalStyles.primaryColor, 70));
        }
        setV('--accent', globalStyles.accentColor);
        if (globalStyles.accentColor) {
          setV('--accent-light', adjustBrightness(globalStyles.accentColor, 20));
          setV('--accent-pale', adjustBrightness(globalStyles.accentColor, 50));
        }
        setV('--bg', globalStyles.bgColor);
        setV('--bg-alt', globalStyles.bgAltColor);
        setV('--surface', globalStyles.surfaceColor);
        setV('--text-dark', globalStyles.textDarkColor);
        setV('--text', globalStyles.textColor);
        setV('--text-muted', globalStyles.textMutedColor);
        setV('--border', globalStyles.borderColor);
        if (globalStyles.borderColor) setV('--border-light', adjustBrightness(globalStyles.borderColor, 10));
        if (globalStyles.iconColor) {
          setV('--icon-color', globalStyles.iconColor);
          document.querySelectorAll('.trust-icon svg, .benefit-icon svg, .newsletter-icon svg, .feature-icon svg, .contact-icon svg, .faq-icon svg, .section-label svg').forEach(svg => {
            svg.style.color = globalStyles.iconColor;
          });
        }
        if (globalStyles.radiusMd) {
          const r = parseInt(globalStyles.radiusMd);
          setV('--radius-sm', Math.max(0, r - 4) + 'px');
          setV('--radius-md', r + 'px');
          setV('--radius-lg', (r + 4) + 'px');
          setV('--radius-xl', (r + 12) + 'px');
        }
        if (globalStyles.btnRadius) {
          document.querySelectorAll('.btn').forEach(btn => { btn.style.borderRadius = globalStyles.btnRadius; });
        }
        if (globalStyles.btnStyle) {
          document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.classList.remove('btn--gradient', 'btn--outline', 'btn--soft');
            btn.classList.add('btn--' + globalStyles.btnStyle);
          });
        }
        if (globalStyles.shadowLevel) {
          const shadows = { 'none': '0 0 0 transparent', 'soft': '0 2px 10px rgba(59,34,24,0.04)', 'medium': '0 4px 20px rgba(59,34,24,0.07)', 'strong': '0 8px 40px rgba(59,34,24,0.12)' };
          if (shadows[globalStyles.shadowLevel]) {
            setV('--shadow-sm', shadows[globalStyles.shadowLevel]);
            setV('--shadow-md', shadows[globalStyles.shadowLevel]);
            setV('--shadow-lg', shadows[globalStyles.shadowLevel]);
          }
        }
        if (globalStyles.sectionSpacing) {
          const vals = { compact: '40px', normal: '70px', comfortable: '100px', spacious: '130px' };
          if (vals[globalStyles.sectionSpacing]) {
            document.querySelectorAll('section').forEach(sec => {
              sec.style.paddingTop = vals[globalStyles.sectionSpacing];
              sec.style.paddingBottom = vals[globalStyles.sectionSpacing];
            });
          }
        }
        if (globalStyles.contentWidth) {
          document.querySelectorAll('.section-container').forEach(c => { c.style.maxWidth = globalStyles.contentWidth; });
        }
        if (globalStyles.bgAnimation && globalStyles.bgAnimation !== 'none') {
          createBgAnimation(globalStyles.bgAnimation);
        }
      }
    }

    window._applyEditModeFromSettings = applyEditModeSettings;

    // ===================== ELEMENT EVENT HANDLERS =====================
    function onElFocus(e) {
      if (selectedEl) selectedEl.classList.remove('em-selected');
      selectedEl = e.target;
      selectedEl.classList.add('em-selected');
    }

    function onElBlur() {
      // keep selected state
    }

    function onElInput(e) {
      const key = e.target.dataset.emKey;
      if (key) { changes[key] = true; changeCount = Object.keys(changes).length; }
    }

    function preventActions(e) {
      const target = e.target;
      if (target.closest('.em-bar') || target.closest('.em-section-ctrl')) return;
      if (target.closest('.em-section-edit-btn') || target.closest('.em-section-panel') || target.closest('.em-panel-backdrop')) return;
      if (target.closest('.em-crud-bar') || target.closest('.em-crud-item-actions') || target.closest('.em-crud-overlay')) return;
      if (target.closest('.em-hero-img-overlay') || target.closest('.em-promo-overlay')) return;
      if (target.closest('.em-editable')) {
        if (target.closest('a') || target.closest('button')) { e.preventDefault(); e.stopPropagation(); }
        return;
      }
      if (target.closest('a[href]') || target.closest('button')) { e.preventDefault(); e.stopPropagation(); }
    }

    // ===================== SECTION EDIT BUTTONS =====================
    function addSectionEditButtons() {
      SECTION_CONFIG.forEach(cfg => {
        const section = document.querySelector(cfg.sel);
        if (!section) return;
        section.style.position = 'relative';
        const btn = document.createElement('button');
        btn.className = 'em-section-edit-btn';
        btn.dataset.sectionId = cfg.id;
        btn.innerHTML = `
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          ${cfg.icon} <span class="em-edit-label">Editar ${cfg.label}</span>`;
        btn.addEventListener('click', (e) => {
          e.preventDefault(); e.stopPropagation();
          openSectionPanel(cfg.id);
        });
        section.appendChild(btn);
      });
    }

    function removeSectionEditButtons() {
      document.querySelectorAll('.em-section-edit-btn').forEach(b => b.remove());
    }

    // ===================== SECTION PANEL =====================
    function openSectionPanel(sectionId) {
      const cfg = SECTION_CONFIG.find(c => c.id === sectionId);
      if (!cfg) return;
      currentPanelSection = sectionId;
      panelTitle.innerHTML = cfg.icon + ' Editar ' + cfg.label;
      panelBody.innerHTML = '';

      buildPanelContent(cfg);

      panel.style.display = '';
      panelBackdrop.style.display = '';
      requestAnimationFrame(() => {
        panel.classList.add('em-panel--open');
        panelBackdrop.classList.add('em-panel-backdrop--open');
      });

      // Highlight section
      const sectionEl = document.querySelector(cfg.sel);
      document.querySelectorAll('.em-section-highlight').forEach(el => el.classList.remove('em-section-highlight'));
      if (sectionEl) {
        sectionEl.classList.add('em-section-highlight');
        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function closeSectionPanel() {
      panel.classList.remove('em-panel--open');
      panelBackdrop.classList.remove('em-panel-backdrop--open');
      document.querySelectorAll('.em-section-highlight').forEach(el => el.classList.remove('em-section-highlight'));
      setTimeout(() => {
        panel.style.display = 'none';
        panelBackdrop.style.display = 'none';
      }, 300);
      currentPanelSection = null;
    }

    function buildPanelContent(cfg) {
      const allEls = getAllEditableEls();
      const sectionEls = allEls.filter(e => cfg.keys.includes(e.key));

      // Special controls at top
      if (cfg.special === 'promo') buildPromoPanelControls();
      if (cfg.special === 'hero') buildHeroImagePanelControls();
      if (cfg.special === 'footer') buildFooterPanelControls();

      // Editable elements list
      if (sectionEls.length > 0 || cfg.multi) {
        const sec = document.createElement('div');
        sec.className = 'em-panel-section';
        sec.innerHTML = '<h4 class="em-panel-section-title">Textos Editáveis</h4>';

        sectionEls.forEach(({ el, key, label }) => {
          sec.appendChild(buildElementItem(el, key, label, sec));
        });

        // Multi-editable (FAQ items, testimonials)
        if (cfg.multi === 'faq') {
          const multiCfg = MULTI_EDITABLE[0];
          const parents = document.querySelectorAll(multiCfg.parentSel);
          parents.forEach((parent, pi) => {
            multiCfg.children.forEach(child => {
              const el = parent.querySelector(child.sel);
              if (!el) return;
              const key = child.keyBase + '_' + pi;
              sec.appendChild(buildElementItem(el, key, child.label + ' ' + (pi + 1), sec));
            });
          });
        }
        if (cfg.multi === 'testimonials') {
          const multiCfg = MULTI_EDITABLE[1];
          const parents = document.querySelectorAll(multiCfg.parentSel);
          parents.forEach((parent, pi) => {
            multiCfg.children.forEach(child => {
              const el = parent.querySelector(child.sel);
              if (!el) return;
              const key = child.keyBase + '_' + pi;
              sec.appendChild(buildElementItem(el, key, child.label + ' ' + (pi + 1), sec));
            });
          });
        }

        panelBody.appendChild(sec);
      }
    }

    function buildElementItem(el, key, label, container) {
      const item = document.createElement('div');
      item.className = 'em-panel-elem-item';
      item.dataset.emKey = key;

      const preview = el.textContent.trim().substring(0, 40) + (el.textContent.trim().length > 40 ? '...' : '');
      const cs = getComputedStyle(el);
      const currentSize = Math.round(parseFloat(cs.fontSize));
      const currentColor = rgbToHex(cs.color);
      const currentFont = el.style.fontFamily || '';

      item.innerHTML = `
        <div class="em-panel-elem-header">
          <span class="em-panel-elem-label">${label}</span>
          <span class="em-panel-elem-preview">${preview}</span>
        </div>
        <div class="em-panel-elem-tools" style="display:none;">
          <div class="em-panel-tool-row">
            <label>Tamanho</label>
            <input type="range" class="em-panel-range" min="10" max="72" value="${currentSize}" data-tool="fontSize">
            <span class="em-panel-range-val">${currentSize}px</span>
          </div>
          <div class="em-panel-tool-row">
            <label>Cor</label>
            <input type="color" class="em-panel-color" value="${currentColor}" data-tool="color">
          </div>
          <div class="em-panel-tool-row">
            <label>Fonte</label>
            <select class="em-panel-select" data-tool="fontFamily">${FONT_OPTIONS_HTML}</select>
          </div>
          <div class="em-panel-tool-row em-panel-tool-row--btns">
            <button class="em-panel-tool-btn" data-tool="bold" title="Negrito"><strong>B</strong></button>
            <button class="em-panel-tool-btn" data-tool="italic" title="Itálico"><em>I</em></button>
            <button class="em-panel-tool-btn em-panel-tool-btn--reset" data-tool="reset" title="Resetar este elemento">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H16"/></svg>
            </button>
          </div>
        </div>
      `;

      // Sync font select with current element
      const fontSelect = item.querySelector('[data-tool="fontFamily"]');
      if (fontSelect && currentFont) {
        for (const opt of fontSelect.options) {
          if (opt.value && currentFont.includes(opt.value.split(',')[0].replace(/'/g, ''))) {
            fontSelect.value = opt.value; break;
          }
        }
      }

      // Header toggle
      const header = item.querySelector('.em-panel-elem-header');
      const tools = item.querySelector('.em-panel-elem-tools');
      header.addEventListener('click', () => {
        container.querySelectorAll('.em-panel-elem-tools').forEach(t => { if (t !== tools) t.style.display = 'none'; });
        container.querySelectorAll('.em-panel-elem-item').forEach(it => { if (it !== item) it.classList.remove('em-panel-elem-item--active'); });
        const isOpen = tools.style.display !== 'none';
        tools.style.display = isOpen ? 'none' : '';
        item.classList.toggle('em-panel-elem-item--active', !isOpen);
        if (!isOpen) {
          selectElement(el);
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });

      // Tool handlers
      setupPanelToolHandlers(item, el);
      return item;
    }

    function setupPanelToolHandlers(item, el) {
      const rangeInput = item.querySelector('[data-tool="fontSize"]');
      const rangeVal = item.querySelector('.em-panel-range-val');
      const colorInput = item.querySelector('[data-tool="color"]');
      const fontSelect = item.querySelector('[data-tool="fontFamily"]');
      const boldBtn = item.querySelector('[data-tool="bold"]');
      const italicBtn = item.querySelector('[data-tool="italic"]');

      rangeInput?.addEventListener('input', () => {
        el.style.fontSize = rangeInput.value + 'px';
        rangeVal.textContent = rangeInput.value + 'px';
        markChanged(el);
      });
      colorInput?.addEventListener('input', () => {
        el.style.color = colorInput.value;
        markChanged(el);
      });
      fontSelect?.addEventListener('change', () => {
        el.style.fontFamily = fontSelect.value;
        if (fontSelect.value) loadGoogleFont(fontSelect.value);
        markChanged(el);
      });
      boldBtn?.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const isBold = getComputedStyle(el).fontWeight >= 700;
        el.style.fontWeight = isBold ? '400' : '700';
        markChanged(el);
      });
      italicBtn?.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const isItalic = getComputedStyle(el).fontStyle === 'italic';
        el.style.fontStyle = isItalic ? 'normal' : 'italic';
        markChanged(el);
      });

      const resetBtn = item.querySelector('[data-tool="reset"]');
      resetBtn?.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const key = item.dataset.emKey;
        // Reset styles to defaults (remove all inline styles)
        el.style.fontSize = '';
        el.style.color = '';
        el.style.fontWeight = '';
        el.style.fontStyle = '';
        el.style.fontFamily = '';
        // Reset HTML to original if available
        if (originalHTML[key]) {
          el.innerHTML = originalHTML[key].html;
        }
        // Update panel controls
        const cs = getComputedStyle(el);
        const sz = Math.round(parseFloat(cs.fontSize));
        if (rangeInput) { rangeInput.value = sz; rangeVal.textContent = sz + 'px'; }
        if (colorInput) colorInput.value = rgbToHex(cs.color);
        if (fontSelect) fontSelect.value = '';
        markChanged(el);
        showNotification('Elemento resetado ao padrão');
      });
    }

    function selectElement(el) {
      if (selectedEl) selectedEl.classList.remove('em-selected');
      selectedEl = el;
      el.classList.add('em-selected');
      el.focus();
    }

    // ===================== SPECIAL PANEL BUILDERS =====================
    function buildPromoPanelControls() {
      const banner = document.querySelector('.promo-banner');
      const promoText = document.getElementById('promo-text');
      if (!banner) return;
      // In edit mode, banner is always visible; check the inactive class to determine actual state
      const isActive = !banner.classList.contains('em-promo-inactive');
      const sec = document.createElement('div');
      sec.className = 'em-panel-section';
      sec.innerHTML = `
        <h4 class="em-panel-section-title">Configurações do Banner</h4>
        <div class="em-panel-special">
          <div class="em-panel-tool-row">
            <label>Ativo</label>
            <label class="em-panel-check-label"><input type="checkbox" id="em-p-promo-active" ${isActive ? 'checked' : ''}> Banner visível</label>
          </div>
          <div class="em-panel-tool-row" style="margin-top:8px;">
            <label>Texto</label>
            <input type="text" id="em-p-promo-text" class="em-panel-select" style="flex:1;" value="${promoText?.textContent?.trim() || ''}" placeholder="Texto do banner">
          </div>
        </div>`;
      panelBody.appendChild(sec);

      document.getElementById('em-p-promo-active')?.addEventListener('change', async (e) => {
        const active = e.target.checked;
        if (active) {
          banner.style.display = '';
          banner.classList.remove('em-promo-inactive');
          banner._wasHidden = false;
        } else {
          // In edit mode, keep visible but show as inactive
          banner.classList.add('em-promo-inactive');
          banner._wasHidden = true;
        }
        const text = document.getElementById('em-p-promo-text')?.value || promoText?.textContent?.trim() || '';
        try {
          await supabase.upsertSiteSetting('promo_banner', { active, text });
          showNotification(active ? 'Banner ativado!' : 'Banner desativado!');
          markGlobalChanged('promo');
        } catch (err) { showNotification('Erro: ' + (err.message || ''), true); }
      });
      document.getElementById('em-p-promo-text')?.addEventListener('change', async (e) => {
        const text = e.target.value;
        const isActive = document.getElementById('em-p-promo-active')?.checked;
        if (promoText) promoText.textContent = text;
        try {
          await supabase.upsertSiteSetting('promo_banner', { active: isActive, text });
          showNotification('Banner atualizado!');
          markGlobalChanged('promo');
        } catch (err) { showNotification('Erro: ' + (err.message || ''), true); }
      });
    }

    function buildHeroImagePanelControls() {
      const heroImg = document.getElementById('hero-image');
      const sec = document.createElement('div');
      sec.className = 'em-panel-section';
      sec.innerHTML = `
        <h4 class="em-panel-section-title">Imagem do Hero</h4>
        <div class="em-panel-special">
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="em-panel-tool-btn" id="em-p-hero-upload" style="width:auto;padding:6px 14px;gap:6px;height:auto;">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"/></svg>
              Alterar Imagem
            </button>
            <button class="em-panel-tool-btn" id="em-p-hero-remove" style="width:auto;padding:6px 14px;height:auto;color:#f87171;">
              Remover
            </button>
            <input type="file" id="em-p-hero-file" accept="image/*" style="display:none">
          </div>
          ${heroImg?.src ? '<img src="'+heroImg.src+'" style="width:100%;border-radius:8px;margin-top:10px;max-height:150px;object-fit:cover;">' : ''}
        </div>`;
      panelBody.appendChild(sec);

      document.getElementById('em-p-hero-upload')?.addEventListener('click', () => {
        document.getElementById('em-p-hero-file')?.click();
      });
      document.getElementById('em-p-hero-file')?.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) { showNotification('Imagem muito grande (máx. 5MB)', true); return; }
        const btn = document.getElementById('em-p-hero-upload');
        btn.textContent = 'Enviando...'; btn.disabled = true;
        try {
          const url = await supabase.uploadImage(file);
          await supabase.upsertSiteSetting('hero_image', { url });
          if (heroImg) { heroImg.src = url; heroImg.style.display = ''; }
          const placeholder = document.getElementById('hero-image-placeholder');
          if (placeholder) placeholder.style.display = 'none';
          showNotification('Imagem do hero atualizada!');
          markGlobalChanged('heroImg');
        } catch (err) { showNotification('Erro: ' + (err.message || ''), true); }
        finally { btn.textContent = 'Alterar Imagem'; btn.disabled = false; e.target.value = ''; }
      });
      document.getElementById('em-p-hero-remove')?.addEventListener('click', async () => {
        if (!confirm('Remover a imagem do hero?')) return;
        try {
          await supabase.upsertSiteSetting('hero_image', { url: '' });
          if (heroImg) { heroImg.src = ''; heroImg.style.display = 'none'; }
          const placeholder = document.getElementById('hero-image-placeholder');
          if (placeholder) placeholder.style.display = '';
          showNotification('Imagem removida!');
          markGlobalChanged('heroImg');
        } catch (err) { showNotification('Erro: ' + (err.message || ''), true); }
      });
    }

    function buildFooterPanelControls() {
      const footer = document.querySelector('.site-footer');
      if (!footer) return;
      const cs = getComputedStyle(footer);
      const sec = document.createElement('div');
      sec.className = 'em-panel-section';
      sec.innerHTML = `
        <h4 class="em-panel-section-title">Cores do Footer</h4>
        <div class="em-panel-special">
          <div class="em-panel-tool-row">
            <label>Fundo</label>
            <input type="color" class="em-panel-color" id="em-p-footer-bg" value="${rgbToHex(cs.backgroundColor)}">
          </div>
          <div class="em-panel-tool-row">
            <label>Texto</label>
            <input type="color" class="em-panel-color" id="em-p-footer-color" value="${rgbToHex(cs.color)}">
          </div>
        </div>`;
      panelBody.appendChild(sec);

      document.getElementById('em-p-footer-bg')?.addEventListener('input', (e) => {
        footer.style.background = e.target.value;
        markGlobalChanged('footer');
      });
      document.getElementById('em-p-footer-color')?.addEventListener('input', (e) => {
        footer.style.color = e.target.value;
        markGlobalChanged('footer');
      });
    }

    // ===================== GLOBAL SETTINGS PANEL =====================
    function openGlobalPanel() {
      currentPanelSection = 'global';
      panelTitle.innerHTML = EM_ICONS.settings + ' Configurações Globais';
      panelBody.innerHTML = '';

      const rootCs = getComputedStyle(document.documentElement);
      const getVar = (v, fb) => rgbToHex(rootCs.getPropertyValue(v).trim() || fb);

      const currentPrimary  = getVar('--primary', '#C4879A');
      const currentAccent   = getVar('--accent', '#8B5A2B');
      const currentBg       = getVar('--bg', '#FDF9F8');
      const currentBgAlt    = getVar('--bg-alt', '#F9F3F0');
      const currentSurface  = getVar('--surface', '#FFFFFF');
      const currentTextDark = getVar('--text-dark', '#3B2218');
      const currentText     = getVar('--text', '#5E4438');
      const currentTextMuted= getVar('--text-muted', '#9A857B');
      const currentBorder   = getVar('--border', '#F0E4DE');
      const currentAnim     = bgAnimationEl ? (bgAnimationEl.className.match(/em-bg-anim--(\S+)/)?.[1] || 'none') : 'none';

      const curFont = document.body.style.fontFamily || '';
      const curTitleFont = document.querySelector('.section-title')?.style.fontFamily || '';
      const curBodyRadius = rootCs.getPropertyValue('--radius-md').trim() || '12px';
      const curBtnRadius = rootCs.getPropertyValue('--radius-sm').trim() || '8px';

      // Helper for collapsible section
      const collapsible = (id, icon, title, content, open) => `
        <div class="em-gpanel-group ${open ? 'em-gpanel-group--open' : ''}" id="em-ggroup-${id}">
          <button type="button" class="em-gpanel-group-header" data-group="${id}">
            <span class="em-gpanel-group-icon">${icon}</span>
            <span class="em-gpanel-group-title">${title}</span>
            <svg class="em-gpanel-chevron" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="em-gpanel-group-body">${content}</div>
        </div>`;

      const colorRow = (id, label, value, desc) => `
        <div class="em-gpanel-color-row">
          <div class="em-gpanel-color-info">
            <label for="${id}">${label}</label>
            ${desc ? `<small>${desc}</small>` : ''}
          </div>
          <div class="em-gpanel-color-ctrl">
            <input type="color" id="${id}" value="${value}">
            <span class="em-gpanel-color-hex">${value}</span>
          </div>
        </div>`;

      // ── Section 1: Color Palette ──
      const colorsHTML = `
        <div class="em-gpanel-subsection">
          <h5 class="em-gpanel-sub-title">${_i('M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01')} Cores Principais</h5>
          ${colorRow('em-g-primary', 'Cor Primária', currentPrimary, 'Botões, links, ícones e destaques')}
          ${colorRow('em-g-accent', 'Cor de Destaque', currentAccent, 'Badges, elementos de ênfase')}
        </div>
        <div class="em-gpanel-subsection">
          <h5 class="em-gpanel-sub-title">${_i('M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z')} Fundos</h5>
          ${colorRow('em-g-bg', 'Fundo Principal', currentBg, 'Cor de fundo geral do site')}
          ${colorRow('em-g-bg-alt', 'Fundo Alternativo', currentBgAlt, 'Seções alternadas e cards')}
          ${colorRow('em-g-surface', 'Superfície (Cards)', currentSurface, 'Fundo de cards e modais')}
        </div>
        <div class="em-gpanel-subsection">
          <h5 class="em-gpanel-sub-title">${_i('M4 6h16M4 12h8m-8 6h16')} Textos</h5>
          ${colorRow('em-g-text-dark', 'Títulos', currentTextDark, 'Cor dos títulos e textos fortes')}
          ${colorRow('em-g-text', 'Corpo', currentText, 'Cor do texto geral do site')}
          ${colorRow('em-g-text-muted', 'Secundário', currentTextMuted, 'Labels, notas e texto sutil')}
        </div>
        <div class="em-gpanel-subsection">
          <h5 class="em-gpanel-sub-title">${_i('M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z')} Bordas & Ícones</h5>
          ${colorRow('em-g-border', 'Bordas', currentBorder, 'Linhas divisórias e bordas de inputs')}
          ${colorRow('em-g-icon-color', 'Ícones Gerais', currentPrimary, 'Cor padrão dos ícones SVG do site')}
        </div>
        <div class="em-gpanel-preset-bar">
          <small>Paletas prontas:</small>
          <button class="em-gpanel-preset" data-preset="rose" title="Rose Gold (Padrão)"><span style="background:linear-gradient(135deg,#C4879A,#8B5A2B)"></span></button>
          <button class="em-gpanel-preset" data-preset="lavender" title="Lavanda Elegante"><span style="background:linear-gradient(135deg,#9B8EC4,#6B5B95)"></span></button>
          <button class="em-gpanel-preset" data-preset="ocean" title="Oceano Suave"><span style="background:linear-gradient(135deg,#5B9BD5,#2E75B6)"></span></button>
          <button class="em-gpanel-preset" data-preset="forest" title="Floresta Verde"><span style="background:linear-gradient(135deg,#6BAF6E,#3D7A3F)"></span></button>
          <button class="em-gpanel-preset" data-preset="sunset" title="Pôr do Sol"><span style="background:linear-gradient(135deg,#E8846B,#C0392B)"></span></button>
          <button class="em-gpanel-preset" data-preset="midnight" title="Midnight Premium"><span style="background:linear-gradient(135deg,#2C3E50,#BDC3C7)"></span></button>
        </div>`;

      // ── Section 2: Typography ──
      const typoHTML = `
        <div class="em-gpanel-subsection">
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Fonte do Corpo</label>
              <small>Textos, descrições e parágrafos</small>
            </div>
            <select class="em-gpanel-select" id="em-g-font">${FONT_OPTIONS_HTML}</select>
          </div>
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Fonte dos Títulos</label>
              <small>Títulos de seção e headings</small>
            </div>
            <select class="em-gpanel-select" id="em-g-title-font">${FONT_OPTIONS_HTML}</select>
          </div>
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Tamanho Base</label>
              <small>Tamanho padrão do texto geral</small>
            </div>
            <div class="em-gpanel-range-wrap">
              <input type="range" id="em-g-font-size" min="13" max="20" value="16" step="1">
              <span class="em-gpanel-range-val" id="em-g-font-size-val">16px</span>
            </div>
          </div>
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Peso dos Títulos</label>
              <small>Bold ou extra-bold</small>
            </div>
            <select class="em-gpanel-select" id="em-g-title-weight">
              <option value="">Padrão</option>
              <option value="500">Medium (500)</option>
              <option value="600">Semibold (600)</option>
              <option value="700">Bold (700)</option>
              <option value="800">Extra Bold (800)</option>
            </select>
          </div>
        </div>`;

      // ── Section 3: Buttons & Cards (Border Radius) ──
      const shapeHTML = `
        <div class="em-gpanel-subsection">
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Arredondamento Geral</label>
              <small>Cantos de cards, inputs e contêineres</small>
            </div>
            <div class="em-gpanel-range-wrap">
              <input type="range" id="em-g-radius" min="0" max="30" value="${parseInt(curBodyRadius)}" step="1">
              <span class="em-gpanel-range-val" id="em-g-radius-val">${parseInt(curBodyRadius)}px</span>
            </div>
          </div>
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Arredondamento de Botões</label>
              <small>Cantos dos botões e badges</small>
            </div>
            <div class="em-gpanel-range-wrap">
              <input type="range" id="em-g-btn-radius" min="0" max="50" value="${parseInt(curBtnRadius)}" step="1">
              <span class="em-gpanel-range-val" id="em-g-btn-radius-val">${parseInt(curBtnRadius)}px</span>
            </div>
          </div>
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Estilo dos Botões</label>
              <small>Aparência dos botões de ação</small>
            </div>
            <select class="em-gpanel-select" id="em-g-btn-style">
              <option value="">Padrão (Sólido)</option>
              <option value="gradient">Gradiente</option>
              <option value="outline">Contorno</option>
              <option value="soft">Suave</option>
            </select>
          </div>
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Sombras</label>
              <small>Intensidade das sombras nos cards</small>
            </div>
            <select class="em-gpanel-select" id="em-g-shadow">
              <option value="">Padrão</option>
              <option value="none">Sem Sombra</option>
              <option value="soft">Suave</option>
              <option value="medium">Média</option>
              <option value="strong">Forte</option>
            </select>
          </div>
        </div>`;

      // ── Section 4: Header & Navigation ──
      const headerHTML = `
        <div class="em-gpanel-subsection">
          ${colorRow('em-g-header-bg', 'Fundo do Header', rgbToHex(getComputedStyle(document.querySelector('.site-header') || document.body).backgroundColor || '#FFFFFF'), 'Cor de fundo do menu superior')}
          ${colorRow('em-g-header-text', 'Texto do Header', rgbToHex(getComputedStyle(document.querySelector('.site-header .nav-link') || document.body).color || '#5E4438'), 'Cor dos links de navegação')}
          <div class="em-gpanel-color-row">
            <div class="em-gpanel-color-info">
              <label>Header Transparente</label>
              <small>Header com fundo transparente no topo</small>
            </div>
            <label class="em-gpanel-toggle">
              <input type="checkbox" id="em-g-header-transparent">
              <span class="em-gpanel-toggle-slider"></span>
            </label>
          </div>
        </div>`;

      // ── Section 5: Footer ──
      const footerEl = document.querySelector('.site-footer');
      const footerHTML = `
        <div class="em-gpanel-subsection">
          ${colorRow('em-g-footer-bg', 'Fundo do Footer', rgbToHex(getComputedStyle(footerEl || document.body).backgroundColor || '#1a1a2e'), 'Cor de fundo do rodapé')}
          ${colorRow('em-g-footer-text', 'Texto do Footer', rgbToHex(getComputedStyle(footerEl || document.body).color || '#FFFFFF'), 'Cor do texto do rodapé')}
          ${colorRow('em-g-footer-link', 'Links do Footer', rgbToHex(getComputedStyle(document.querySelector('.footer-link') || footerEl || document.body).color || '#DAADB8'), 'Cor dos links no rodapé')}
        </div>`;

      // ── Section 6: Animations ──
      const animHTML = `
        <div class="em-gpanel-subsection">
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Animação de Fundo</label>
              <small>Efeito decorativo sutil no fundo do site</small>
            </div>
            <select class="em-gpanel-select" id="em-g-animation">
              <option value="none" ${currentAnim==='none'?'selected':''}>Nenhuma</option>
              <option value="particles" ${currentAnim==='particles'?'selected':''}>Partículas</option>
              <option value="gradient-flow" ${currentAnim==='gradient-flow'?'selected':''}>Degradê Fluido</option>
              <option value="sparkles" ${currentAnim==='sparkles'?'selected':''}>Brilhos</option>
              <option value="bubbles" ${currentAnim==='bubbles'?'selected':''}>Bolhas</option>
              <option value="waves" ${currentAnim==='waves'?'selected':''}>Ondas</option>
            </select>
          </div>
          <div class="em-gpanel-color-row">
            <div class="em-gpanel-color-info">
              <label>Scroll Suave</label>
              <small>Rolagem suave ao clicar em links</small>
            </div>
            <label class="em-gpanel-toggle">
              <input type="checkbox" id="em-g-smooth-scroll" checked>
              <span class="em-gpanel-toggle-slider"></span>
            </label>
          </div>
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Animações de Entrada</label>
              <small>Como as seções aparecem ao rolar</small>
            </div>
            <select class="em-gpanel-select" id="em-g-reveal-style">
              <option value="">Padrão (Fade Up)</option>
              <option value="fade">Apenas Fade</option>
              <option value="slide-left">Deslizar da Esquerda</option>
              <option value="slide-right">Deslizar da Direita</option>
              <option value="zoom">Zoom In</option>
              <option value="none">Sem Animação</option>
            </select>
          </div>
        </div>`;

      // ── Section 7: Spacing ──
      const spacingHTML = `
        <div class="em-gpanel-subsection">
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Espaçamento entre Seções</label>
              <small>Distância vertical entre blocos</small>
            </div>
            <select class="em-gpanel-select" id="em-g-section-spacing">
              <option value="">Padrão</option>
              <option value="compact">Compacto</option>
              <option value="normal">Normal</option>
              <option value="comfortable">Confortável</option>
              <option value="spacious">Espaçoso</option>
            </select>
          </div>
          <div class="em-gpanel-select-row">
            <div class="em-gpanel-select-info">
              <label>Largura do Conteúdo</label>
              <small>Largura máxima da área de conteúdo</small>
            </div>
            <select class="em-gpanel-select" id="em-g-content-width">
              <option value="">Padrão (1280px)</option>
              <option value="1100px">Compacto (1100px)</option>
              <option value="1280px">Normal (1280px)</option>
              <option value="1440px">Largo (1440px)</option>
              <option value="100%">Full Width</option>
            </select>
          </div>
        </div>`;

      // Assemble panel
      panelBody.innerHTML = `
        <div class="em-gpanel-wrapper">
          ${collapsible('colors', EM_ICONS.palette, 'Paleta de Cores', colorsHTML, true)}
          ${collapsible('typography', EM_ICONS.type, 'Tipografia', typoHTML, false)}
          ${collapsible('shapes', EM_ICONS.shapes, 'Formas & Botões', shapeHTML, false)}
          ${collapsible('header', EM_ICONS.compass, 'Header & Navegação', headerHTML, false)}
          ${collapsible('footer', EM_ICONS.footer, 'Rodapé', footerHTML, false)}
          ${collapsible('animations', EM_ICONS.sparkle, 'Animações & Efeitos', animHTML, false)}
          ${collapsible('spacing', EM_ICONS.ruler, 'Espaçamento & Layout', spacingHTML, false)}
        </div>`;

      // ── Initialize collapsible groups ──
      panelBody.querySelectorAll('.em-gpanel-group-header').forEach(header => {
        header.addEventListener('click', () => {
          const group = header.closest('.em-gpanel-group');
          group.classList.toggle('em-gpanel-group--open');
        });
      });

      // ── Sync select values ──
      const syncFont = (selectId, curValue) => {
        const sel = document.getElementById(selectId);
        if (sel && curValue) {
          for (const opt of sel.options) {
            if (opt.value && curValue.includes(opt.value.split(',')[0].replace(/'/g, ''))) {
              sel.value = opt.value; break;
            }
          }
        }
      };
      syncFont('em-g-font', curFont);
      syncFont('em-g-title-font', curTitleFont);

      // Sync hex labels on load
      panelBody.querySelectorAll('input[type="color"]').forEach(inp => {
        const hexSpan = inp.parentElement?.querySelector('.em-gpanel-color-hex');
        if (hexSpan) inp.addEventListener('input', () => { hexSpan.textContent = inp.value; });
      });

      // ── Color event handlers ──
      const applyPrimary = (hex) => {
        document.documentElement.style.setProperty('--primary', hex);
        document.documentElement.style.setProperty('--primary-mid', adjustBrightness(hex, -15));
        document.documentElement.style.setProperty('--primary-light', adjustBrightness(hex, 30));
        document.documentElement.style.setProperty('--primary-soft', adjustBrightness(hex, 50));
        document.documentElement.style.setProperty('--primary-pale', adjustBrightness(hex, 70));
        markGlobalChanged('primary');
      };
      const applyAccent = (hex) => {
        document.documentElement.style.setProperty('--accent', hex);
        document.documentElement.style.setProperty('--accent-light', adjustBrightness(hex, 20));
        document.documentElement.style.setProperty('--accent-pale', adjustBrightness(hex, 50));
        markGlobalChanged('accent');
      };

      document.getElementById('em-g-primary')?.addEventListener('input', e => applyPrimary(e.target.value));
      document.getElementById('em-g-accent')?.addEventListener('input', e => applyAccent(e.target.value));

      document.getElementById('em-g-bg')?.addEventListener('input', e => {
        document.documentElement.style.setProperty('--bg', e.target.value);
        applyGlobalBg();
      });
      document.getElementById('em-g-bg-alt')?.addEventListener('input', e => {
        document.documentElement.style.setProperty('--bg-alt', e.target.value);
        applyGlobalBg();
      });
      document.getElementById('em-g-surface')?.addEventListener('input', e => {
        document.documentElement.style.setProperty('--surface', e.target.value);
        markGlobalChanged('surface');
      });

      document.getElementById('em-g-text-dark')?.addEventListener('input', e => {
        document.documentElement.style.setProperty('--text-dark', e.target.value);
        markGlobalChanged('textDark');
      });
      document.getElementById('em-g-text')?.addEventListener('input', e => {
        document.documentElement.style.setProperty('--text', e.target.value);
        document.body.style.color = e.target.value;
        markGlobalChanged('text');
      });
      document.getElementById('em-g-text-muted')?.addEventListener('input', e => {
        document.documentElement.style.setProperty('--text-muted', e.target.value);
        markGlobalChanged('textMuted');
      });
      document.getElementById('em-g-border')?.addEventListener('input', e => {
        document.documentElement.style.setProperty('--border', e.target.value);
        document.documentElement.style.setProperty('--border-light', adjustBrightness(e.target.value, 10));
        markGlobalChanged('border');
      });
      document.getElementById('em-g-icon-color')?.addEventListener('input', e => {
        document.documentElement.style.setProperty('--icon-color', e.target.value);
        document.querySelectorAll('.trust-icon svg, .benefit-icon svg, .newsletter-icon svg, .feature-icon svg, .contact-icon svg, .faq-icon svg, .section-label svg').forEach(svg => {
          svg.style.color = e.target.value;
        });
        markGlobalChanged('iconColor');
      });

      // ── Typography handlers ──
      document.getElementById('em-g-font')?.addEventListener('change', e => {
        document.body.style.fontFamily = e.target.value || '';
        if (e.target.value) loadGoogleFont(e.target.value);
        markGlobalChanged('font');
      });
      document.getElementById('em-g-title-font')?.addEventListener('change', e => {
        const val = e.target.value || '';
        document.querySelectorAll('.section-title, .hero-title, .newsletter-title, h1, h2, h3').forEach(el => {
          el.style.fontFamily = val;
        });
        if (val) loadGoogleFont(val);
        markGlobalChanged('titleFont');
      });
      document.getElementById('em-g-font-size')?.addEventListener('input', e => {
        const v = e.target.value;
        document.getElementById('em-g-font-size-val').textContent = v + 'px';
        document.body.style.fontSize = v + 'px';
        markGlobalChanged('fontSize');
      });
      document.getElementById('em-g-title-weight')?.addEventListener('change', e => {
        const val = e.target.value || '';
        document.querySelectorAll('.section-title, .hero-title, .newsletter-title, h1, h2, h3').forEach(el => {
          el.style.fontWeight = val;
        });
        markGlobalChanged('titleWeight');
      });

      // ── Shape handlers ──
      document.getElementById('em-g-radius')?.addEventListener('input', e => {
        const v = e.target.value;
        document.getElementById('em-g-radius-val').textContent = v + 'px';
        document.documentElement.style.setProperty('--radius-sm', Math.max(0, v - 4) + 'px');
        document.documentElement.style.setProperty('--radius-md', v + 'px');
        document.documentElement.style.setProperty('--radius-lg', (parseInt(v) + 4) + 'px');
        document.documentElement.style.setProperty('--radius-xl', (parseInt(v) + 12) + 'px');
        markGlobalChanged('radius');
      });
      document.getElementById('em-g-btn-radius')?.addEventListener('input', e => {
        const v = e.target.value;
        document.getElementById('em-g-btn-radius-val').textContent = v + 'px';
        document.querySelectorAll('.btn').forEach(btn => { btn.style.borderRadius = v + 'px'; });
        markGlobalChanged('btnRadius');
      });
      document.getElementById('em-g-btn-style')?.addEventListener('change', e => {
        const style = e.target.value;
        document.querySelectorAll('.btn-primary').forEach(btn => {
          btn.classList.remove('btn--gradient', 'btn--outline', 'btn--soft');
          if (style) btn.classList.add('btn--' + style);
        });
        markGlobalChanged('btnStyle');
      });
      document.getElementById('em-g-shadow')?.addEventListener('change', e => {
        const v = e.target.value;
        const shadows = {
          'none': '0 0 0 transparent',
          'soft': '0 2px 10px rgba(59,34,24,0.04)',
          'medium': '0 4px 20px rgba(59,34,24,0.07)',
          'strong': '0 8px 40px rgba(59,34,24,0.12)',
        };
        if (v && shadows[v]) {
          document.documentElement.style.setProperty('--shadow-sm', shadows[v]);
          document.documentElement.style.setProperty('--shadow-md', shadows[v]);
          document.documentElement.style.setProperty('--shadow-lg', shadows[v]);
        }
        markGlobalChanged('shadow');
      });

      // ── Header handlers ──
      document.getElementById('em-g-header-bg')?.addEventListener('input', e => {
        const header = document.querySelector('.site-header');
        if (header) header.style.background = e.target.value;
        markGlobalChanged('headerBg');
      });
      document.getElementById('em-g-header-text')?.addEventListener('input', e => {
        document.querySelectorAll('.site-header .nav-link, .site-header .logo-text').forEach(el => {
          el.style.color = e.target.value;
        });
        markGlobalChanged('headerText');
      });
      document.getElementById('em-g-header-transparent')?.addEventListener('change', e => {
        const header = document.querySelector('.site-header');
        if (header) {
          if (e.target.checked) { header.style.background = 'transparent'; header.style.boxShadow = 'none'; }
          else { header.style.background = ''; header.style.boxShadow = ''; }
        }
        markGlobalChanged('headerTransparent');
      });

      // ── Footer handlers ──
      document.getElementById('em-g-footer-bg')?.addEventListener('input', e => {
        if (footerEl) footerEl.style.background = e.target.value;
        markGlobalChanged('footerBg');
      });
      document.getElementById('em-g-footer-text')?.addEventListener('input', e => {
        if (footerEl) {
          footerEl.style.color = e.target.value;
          footerEl.querySelectorAll('.footer-heading, .footer-brand .logo-text h1').forEach(el => {
            el.style.color = e.target.value;
          });
        }
        markGlobalChanged('footerColor');
      });
      document.getElementById('em-g-footer-link')?.addEventListener('input', e => {
        const ftr = document.querySelector('.site-footer');
        if (ftr) {
          ftr.querySelectorAll('.footer-links a, .footer-link').forEach(a => { a.style.color = e.target.value; });
          ftr.querySelectorAll('.footer-desc, .footer-badge, .footer-bottom p, .footer-bottom-links a').forEach(el => {
            el.style.color = e.target.value;
          });
          ftr.querySelectorAll('.social-icon').forEach(el => {
            el.style.color = e.target.value;
            el.style.borderColor = e.target.value;
          });
        }
        markGlobalChanged('footerLink');
      });

      // ── Animation handlers ──
      document.getElementById('em-g-animation')?.addEventListener('change', e => {
        removeBgAnimation();
        if (e.target.value !== 'none') createBgAnimation(e.target.value);
        markGlobalChanged('animation');
      });
      document.getElementById('em-g-smooth-scroll')?.addEventListener('change', e => {
        document.documentElement.style.scrollBehavior = e.target.checked ? 'smooth' : 'auto';
        markGlobalChanged('smoothScroll');
      });

      // ── Spacing handlers ──
      document.getElementById('em-g-section-spacing')?.addEventListener('change', e => {
        const v = e.target.value;
        const vals = { compact: '40px', normal: '70px', comfortable: '100px', spacious: '130px' };
        document.querySelectorAll('section').forEach(sec => {
          sec.style.paddingTop = vals[v] || '';
          sec.style.paddingBottom = vals[v] || '';
        });
        markGlobalChanged('sectionSpacing');
      });
      document.getElementById('em-g-content-width')?.addEventListener('change', e => {
        document.querySelectorAll('.section-container').forEach(c => {
          c.style.maxWidth = e.target.value || '';
        });
        markGlobalChanged('contentWidth');
      });

      // ── Preset palettes ──
      const PRESETS = {
        rose:     { primary:'#C4879A', accent:'#8B5A2B', bg:'#FDF9F8', bgAlt:'#F9F3F0', textDark:'#3B2218', text:'#5E4438', muted:'#9A857B', border:'#F0E4DE', surface:'#FFFFFF',
                    headerBg:'#FFFFFF', headerText:'#5E4438', footerBg:'#F9F0F0', footerText:'#3B2218', footerLink:'#9A857B' },
        lavender: { primary:'#9B8EC4', accent:'#6B5B95', bg:'#F8F6FD', bgAlt:'#F0EDF8', textDark:'#2D2445', text:'#4A3F6B', muted:'#8E85A5', border:'#E5E0F0', surface:'#FFFFFF',
                    headerBg:'#FFFFFF', headerText:'#4A3F6B', footerBg:'#2D2445', footerText:'#FFFFFF', footerLink:'#C4B8E0' },
        ocean:    { primary:'#5B9BD5', accent:'#2E75B6', bg:'#F5F9FD', bgAlt:'#EBF3FA', textDark:'#1B3A5C', text:'#34628D', muted:'#7FA5C4', border:'#D6E6F5', surface:'#FFFFFF',
                    headerBg:'#FFFFFF', headerText:'#34628D', footerBg:'#1B3A5C', footerText:'#FFFFFF', footerLink:'#8FBEE8' },
        forest:   { primary:'#6BAF6E', accent:'#3D7A3F', bg:'#F5FAF5', bgAlt:'#EDF5ED', textDark:'#1C3D1E', text:'#3A6A3C', muted:'#82A884', border:'#D4E8D4', surface:'#FFFFFF',
                    headerBg:'#FFFFFF', headerText:'#3A6A3C', footerBg:'#1C3D1E', footerText:'#FFFFFF', footerLink:'#8FCC91' },
        sunset:   { primary:'#E8846B', accent:'#C0392B', bg:'#FEF7F5', bgAlt:'#FCEEE9', textDark:'#4A1A10', text:'#7A3322', muted:'#B08070', border:'#F5DDD5', surface:'#FFFFFF',
                    headerBg:'#FFFFFF', headerText:'#7A3322', footerBg:'#4A1A10', footerText:'#FFFFFF', footerLink:'#F0A896' },
        midnight: { primary:'#7F8C9B', accent:'#BDC3C7', bg:'#1A1A2E', bgAlt:'#16213E', textDark:'#ECEFF4', text:'#D8DEE9', muted:'#8B95A5', border:'#2C3E50', surface:'#232640',
                    headerBg:'#0F0F1E', headerText:'#D8DEE9', footerBg:'#0D0D1A', footerText:'#ECEFF4', footerLink:'#BDC3C7' },
      };

      panelBody.querySelectorAll('.em-gpanel-preset').forEach(btn => {
        btn.addEventListener('click', () => {
          const p = PRESETS[btn.dataset.preset];
          if (!p) return;
          // Apply all colors
          applyPrimary(p.primary);
          applyAccent(p.accent);
          document.documentElement.style.setProperty('--bg', p.bg);
          document.documentElement.style.setProperty('--bg-alt', p.bgAlt);
          document.documentElement.style.setProperty('--surface', p.surface);
          document.documentElement.style.setProperty('--text-dark', p.textDark);
          document.documentElement.style.setProperty('--text', p.text);
          document.documentElement.style.setProperty('--text-muted', p.muted);
          document.documentElement.style.setProperty('--border', p.border);
          document.documentElement.style.setProperty('--border-light', adjustBrightness(p.border, 10));
          document.body.style.background = p.bg;
          document.body.style.color = p.text;

          // ── Apply Header colors ──
          const headerEl = document.querySelector('.site-header');
          if (headerEl && p.headerBg) {
            headerEl.style.background = p.headerBg;
            document.querySelectorAll('.site-header .nav-link, .site-header .logo-text, .site-header .logo-text h1').forEach(el => {
              el.style.color = p.headerText;
            });
          }

          // ── Apply Footer colors ──
          const fEl = document.querySelector('.site-footer');
          if (fEl && p.footerBg) {
            fEl.style.background = p.footerBg;
            fEl.style.color = p.footerText;
            // Footer headings
            fEl.querySelectorAll('.footer-heading, .footer-brand .logo-text h1').forEach(el => {
              el.style.color = p.footerText;
            });
            // Footer description & muted text
            fEl.querySelectorAll('.footer-desc, .footer-badge, .footer-bottom p, .footer-bottom-links a').forEach(el => {
              el.style.color = p.footerLink;
            });
            // Footer links
            fEl.querySelectorAll('.footer-links a, .footer-link').forEach(el => {
              el.style.color = p.footerLink;
            });
            // Social icons
            fEl.querySelectorAll('.social-icon').forEach(el => {
              el.style.color = p.footerLink;
              el.style.borderColor = p.footerLink;
            });
          }

          // Update all color inputs in the panel
          const updates = {
            'em-g-primary': p.primary, 'em-g-accent': p.accent, 'em-g-bg': p.bg,
            'em-g-bg-alt': p.bgAlt, 'em-g-surface': p.surface, 'em-g-text-dark': p.textDark,
            'em-g-text': p.text, 'em-g-text-muted': p.muted, 'em-g-border': p.border,
            'em-g-header-bg': p.headerBg, 'em-g-header-text': p.headerText,
            'em-g-footer-bg': p.footerBg, 'em-g-footer-text': p.footerText, 'em-g-footer-link': p.footerLink,
          };
          Object.entries(updates).forEach(([id, val]) => {
            const inp = document.getElementById(id);
            if (inp) {
              inp.value = val;
              const hex = inp.parentElement?.querySelector('.em-gpanel-color-hex');
              if (hex) hex.textContent = val;
            }
          });
          markGlobalChanged('preset');
          showNotification('Paleta \"' + btn.title + '\" aplicada!');
        });
      });

      // Show panel
      panel.style.display = '';
      panelBackdrop.style.display = '';
      requestAnimationFrame(() => {
        panel.classList.add('em-panel--open');
        panelBackdrop.classList.add('em-panel-backdrop--open');
      });
      document.querySelectorAll('.em-section-highlight').forEach(el => el.classList.remove('em-section-highlight'));
    }

    function applyGlobalBg() {
      const c1 = document.getElementById('em-g-bg')?.value || getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
      if (c1) {
        document.body.style.background = c1;
        document.documentElement.style.setProperty('--bg', c1);
      }
      const c2 = document.getElementById('em-g-bg-alt')?.value;
      if (c2) document.documentElement.style.setProperty('--bg-alt', c2);
      markGlobalChanged('bg');
    }

    // Panel event handlers
    panelClose?.addEventListener('click', closeSectionPanel);
    panelBackdrop?.addEventListener('click', closeSectionPanel);
    panelSaveBtn?.addEventListener('click', async () => {
      panelSaveBtn.disabled = true;
      panelSaveBtn.textContent = 'Salvando...';
      try {
        await saveChanges(false);
        showNotification('Seção salva com sucesso!');
      } catch (err) {
        showNotification('Erro ao salvar: ' + (err.message || ''), true);
      } finally {
        panelSaveBtn.disabled = false;
        panelSaveBtn.innerHTML = '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Salvar Seção';
      }
    });
    btnGlobal?.addEventListener('click', () => openGlobalPanel());
    btnSave?.addEventListener('click', () => saveChanges(true));
    btnCancel?.addEventListener('click', () => exitEditMode(true));
    btnReset?.addEventListener('click', async () => {
      if (!confirm('Resetar TODAS as edições visuais ao padrão original?\nIsso remove cores, fontes, tamanhos e animações customizados.')) return;
      btnReset.disabled = true;
      btnReset.textContent = 'Resetando...';
      try {
        // Clear edit_mode setting in DB
        await supabase.upsertSiteSetting('edit_mode', {});
        showNotification('Resetado ao padrão! Recarregando...');
        setTimeout(() => location.reload(), 800);
      } catch (err) {
        showNotification('Erro ao resetar: ' + (err.message || ''), true);
        btnReset.disabled = false;
        btnReset.innerHTML = '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H16"/></svg> Resetar';
      }
    });

    function markChanged(el) {
      const key = el?.dataset?.emKey;
      if (key) { changes[key] = true; changeCount = Object.keys(changes).length; }
    }

    function markGlobalChanged(name) {
      changes['_global_' + name] = true;
      changeCount = Object.keys(changes).length;
    }

    // ===================== SECTION REORDER (FIXED) =====================
    function getCurrentSectionOrder() {
      // Get sections in their current DOM order
      const result = [];
      SECTION_SELS.forEach(s => {
        const el = document.querySelector(s.sel);
        if (el) result.push({ sel: s.sel, label: s.label, fixed: !!s.fixed });
      });
      // Sort by actual DOM position
      result.sort((a, b) => {
        const elA = document.querySelector(a.sel);
        const elB = document.querySelector(b.sel);
        if (!elA || !elB) return 0;
        return elA.compareDocumentPosition(elB) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
      return result;
    }

    function getLiveSections() {
      // Return section elements in current DOM order
      const all = SECTION_SELS.map(s => document.querySelector(s.sel)).filter(Boolean);
      all.sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
      return all;
    }

    function getSectionInfo(el) {
      for (const s of SECTION_SELS) {
        if (el.matches(s.sel) || el.id === s.sel.replace('#', '') || el.matches(s.sel)) return s;
      }
      return null;
    }

    function addSectionControls() {
      const sections = getLiveSections();
      sections.forEach((el, i) => {
        const info = getSectionInfo(el);
        if (!info || info.fixed) return;
        el.style.position = 'relative';
        const ctrl = document.createElement('div');
        ctrl.className = 'em-section-ctrl';
        const isFirst = i <= 1; // can't go above fixed hero
        const isLast = i >= sections.length - 1;
        ctrl.innerHTML = `
          <span class="em-section-label">${info.label}</span>
          <div class="em-section-btns">
            <button class="em-section-btn em-section-up" title="Mover para cima" ${isFirst ? 'disabled' : ''}>▲</button>
            <button class="em-section-btn em-section-down" title="Mover para baixo" ${isLast ? 'disabled' : ''}>▼</button>
          </div>`;
        el.appendChild(ctrl);

        ctrl.querySelector('.em-section-up')?.addEventListener('click', (e) => {
          e.preventDefault(); e.stopPropagation();
          swapSection(el, -1);
        });
        ctrl.querySelector('.em-section-down')?.addEventListener('click', (e) => {
          e.preventDefault(); e.stopPropagation();
          swapSection(el, 1);
        });
      });
    }

    function removeSectionControls() {
      document.querySelectorAll('.em-section-ctrl').forEach(c => c.remove());
    }

    function swapSection(sectionEl, dir) {
      // Get LIVE dom-ordered sections
      const sections = getLiveSections();
      const idx = sections.indexOf(sectionEl);
      if (idx === -1) return;
      const targetIdx = idx + dir;
      if (targetIdx < 0 || targetIdx >= sections.length) return;

      const targetEl = sections[targetIdx];
      const targetInfo = getSectionInfo(targetEl);
      if (targetInfo && targetInfo.fixed) return;

      // True swap: put sectionEl before/after targetEl
      const parent = sectionEl.parentElement;
      if (dir === -1) {
        // Move sectionEl before targetEl
        parent.insertBefore(sectionEl, targetEl);
      } else {
        // Move sectionEl after targetEl — insert targetEl before sectionEl
        parent.insertBefore(targetEl, sectionEl);
      }

      // Refresh controls with new order
      removeSectionControls();
      addSectionControls();

      changes['_section_order'] = true;
      changeCount = Object.keys(changes).length;

      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function revertSectionOrder() {
      if (!originalOrder.length) return;
      const footer = document.querySelector('.site-footer');
      const parent = footer?.parentElement;
      if (!parent) return;
      // Re-insert in original order before footer
      originalOrder.forEach(info => {
        const el = document.querySelector(info.sel);
        if (el) parent.insertBefore(el, footer);
      });
    }

    function applySectionOrder(order) {
      const footer = document.querySelector('.site-footer');
      const parent = footer?.parentElement;
      if (!parent) return;
      order.forEach(info => {
        const el = document.querySelector(info.sel);
        if (el) parent.insertBefore(el, footer);
      });
    }

    // ===================== BACKGROUND ANIMATIONS =====================
    function createBgAnimation(type) {
      removeBgAnimation();
      const container = document.createElement('div');
      container.id = 'em-bg-anim-container';
      container.className = 'em-bg-anim em-bg-anim--' + type;
      container.setAttribute('aria-hidden', 'true');

      switch (type) {
        case 'particles':
          for (let i = 0; i < 30; i++) {
            const p = document.createElement('span');
            p.className = 'em-particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 6 + 's';
            p.style.animationDuration = (4 + Math.random() * 6) + 's';
            p.style.width = p.style.height = (3 + Math.random() * 6) + 'px';
            p.style.opacity = 0.1 + Math.random() * 0.3;
            container.appendChild(p);
          }
          break;
        case 'gradient-flow':
          container.innerHTML = '<div class="em-gradient-blob em-gradient-blob--1"></div><div class="em-gradient-blob em-gradient-blob--2"></div><div class="em-gradient-blob em-gradient-blob--3"></div>';
          break;
        case 'sparkles':
          for (let i = 0; i < 20; i++) {
            const s = document.createElement('span');
            s.className = 'em-sparkle';
            s.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2 8 14 2 9.2h7.6z"/></svg>';
            s.style.left = Math.random() * 100 + '%';
            s.style.top = Math.random() * 100 + '%';
            s.style.animationDelay = Math.random() * 5 + 's';
            s.style.animationDuration = (2 + Math.random() * 4) + 's';
            s.style.fontSize = (8 + Math.random() * 14) + 'px';
            container.appendChild(s);
          }
          break;
        case 'bubbles':
          for (let i = 0; i < 15; i++) {
            const b = document.createElement('span');
            b.className = 'em-bubble';
            b.style.left = Math.random() * 100 + '%';
            b.style.animationDelay = Math.random() * 8 + 's';
            b.style.animationDuration = (6 + Math.random() * 8) + 's';
            b.style.width = b.style.height = (10 + Math.random() * 30) + 'px';
            container.appendChild(b);
          }
          break;
        case 'waves':
          container.innerHTML = '<svg class="em-wave" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--primary)" fill-opacity="0.05" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,250.7C672,256,768,224,864,213.3C960,203,1056,213,1152,218.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg><svg class="em-wave em-wave--2" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="var(--primary)" fill-opacity="0.03" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,234.7C672,256,768,288,864,282.7C960,277,1056,235,1152,213.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>';
          break;
      }
      document.body.appendChild(container);
      bgAnimationEl = container;
    }

    function removeBgAnimation() {
      if (bgAnimationEl) { bgAnimationEl.remove(); bgAnimationEl = null; }
      document.getElementById('em-bg-anim-container')?.remove();
    }

    // ===================== FONT LOADING =====================
    const loadedFonts = new Set();
    function loadGoogleFont(fontVal) {
      // Extract font name from CSS value like "'Poppins', sans-serif"
      const name = fontVal.split(',')[0].replace(/'/g, '').trim();
      if (!name || loadedFonts.has(name)) return;
      // Skip already available fonts
      if (name === 'Plus Jakarta Sans' || name === 'Playfair Display') return;
      loadedFonts.add(name);
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${name.replace(/ /g, '+')}:wght@300;400;500;600;700&display=swap`;
      document.head.appendChild(link);
    }

    // ===================== HELPERS =====================
    function getAllEditableEls() {
      const result = [];
      EDITABLE_ELEMS.forEach(cfg => {
        const el = document.querySelector(cfg.sel);
        if (el) {
          el.dataset.emKey = cfg.key;
          el.dataset.emLabel = cfg.label;
          result.push({ el, key: cfg.key, rich: cfg.rich, label: cfg.label });
        }
      });
      MULTI_EDITABLE.forEach(group => {
        const parents = document.querySelectorAll(group.parentSel);
        parents.forEach((parent, pi) => {
          group.children.forEach(child => {
            const el = parent.querySelector(child.sel);
            if (el) {
              const key = child.keyBase + '_' + pi;
              el.dataset.emKey = key;
              el.dataset.emLabel = child.label;
              result.push({ el, key, label: child.label });
            }
          });
        });
      });
      return result;
    }

    function findByKey(key) {
      return getAllEditableEls().find(e => e.key === key) || null;
    }

    function rgbToHex(rgb) {
      if (!rgb) return '#000000';
      if (rgb.startsWith('#')) return rgb.length === 4 ? '#' + rgb[1]+rgb[1]+rgb[2]+rgb[2]+rgb[3]+rgb[3] : rgb;
      const match = rgb.match(/(\d+)/g);
      if (!match || match.length < 3) return '#000000';
      return '#' + match.slice(0, 3).map(c => parseInt(c).toString(16).padStart(2, '0')).join('');
    }

    function adjustBrightness(hex, percent) {
      hex = hex.replace('#', '');
      let r = parseInt(hex.substring(0, 2), 16);
      let g = parseInt(hex.substring(2, 4), 16);
      let b = parseInt(hex.substring(4, 6), 16);
      r = Math.min(255, Math.max(0, r + Math.round(255 * percent / 100)));
      g = Math.min(255, Math.max(0, g + Math.round(255 * percent / 100)));
      b = Math.min(255, Math.max(0, b + Math.round(255 * percent / 100)));
      return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
    }

    function showNotification(msg, isError) {
      const notif = document.createElement('div');
      notif.className = 'em-notification' + (isError ? ' em-notification--error' : '');
      notif.textContent = msg;
      document.body.appendChild(notif);
      requestAnimationFrame(() => notif.classList.add('show'));
      setTimeout(() => { notif.classList.remove('show'); setTimeout(() => notif.remove(), 400); }, 3000);
    }

    // --- APPLY ON PAGE LOAD ---
    // ===================== VISUAL CRUD MODULE =====================
    const crudOverlay = document.getElementById('em-crud-overlay');
    const crudForm = document.getElementById('em-crud-form');
    const crudFields = document.getElementById('em-crud-fields');
    const crudTitle = document.getElementById('em-crud-title');
    const crudSaveBtn = document.getElementById('em-crud-save-btn');
    let crudCallback = null;
    let crudFileInput = null;

    // Close modal
    document.getElementById('em-crud-close')?.addEventListener('click', closeCrudModal);
    document.getElementById('em-crud-cancel-btn')?.addEventListener('click', closeCrudModal);
    crudOverlay?.addEventListener('click', (e) => { if (e.target === crudOverlay) closeCrudModal(); });

    function closeCrudModal() {
      if (crudOverlay) crudOverlay.style.display = 'none';
      if (crudForm) crudForm.reset();
      if (crudSaveBtn) crudSaveBtn.style.display = '';
      crudCallback = null;
    }

    function openCrudModal(title, fields, data, onSave) {
      if (!crudOverlay || !crudFields) return;
      crudTitle.textContent = title;
      crudCallback = onSave;
      crudSaveBtn.disabled = false;
      crudSaveBtn.textContent = 'Salvar';
      crudFields.innerHTML = '';

      fields.forEach(f => {
        const div = document.createElement('div');
        div.className = f.half ? 'em-crud-field' : 'em-crud-field';
        const value = data && data[f.name] !== undefined ? data[f.name] : (f.default || '');

        if (f.type === 'checkbox') {
          div.innerHTML = `<div class="em-crud-checkbox">
            <input type="checkbox" id="em-cf-${f.name}" name="${f.name}" ${value ? 'checked' : ''}>
            <label for="em-cf-${f.name}">${f.label}</label>
          </div>`;
        } else if (f.type === 'textarea') {
          div.innerHTML = `<label>${f.label}</label>
            <textarea id="em-cf-${f.name}" name="${f.name}" rows="${f.rows || 3}" placeholder="${f.placeholder || ''}">${value}</textarea>`;
        } else if (f.type === 'select') {
          div.innerHTML = `<label>${f.label}</label>
            <select id="em-cf-${f.name}" name="${f.name}">
              ${f.options.map(o => `<option value="${o.value}" ${o.value == value ? 'selected' : ''}>${o.label}</option>`).join('')}
            </select>`;
        } else if (f.type === 'image') {
          const previewHtml = value ? `<img src="${value}" class="em-crud-img-preview" id="em-cf-${f.name}-preview">` : '';
          div.innerHTML = `<label>${f.label}</label>
            <input type="text" id="em-cf-${f.name}" name="${f.name}" value="${value}" placeholder="URL da imagem">
            ${previewHtml}
            <div class="em-crud-img-upload-row">
              <button type="button" class="em-crud-img-upload-btn" id="em-cf-${f.name}-upload-btn"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg> Upload Imagem</button>
              <input type="file" id="em-cf-${f.name}-file" accept="image/*" style="display:none">
            </div>`;
        } else {
          div.innerHTML = `<label>${f.label}</label>
            <input type="${f.type || 'text'}" id="em-cf-${f.name}" name="${f.name}" value="${value}" placeholder="${f.placeholder || ''}" ${f.required ? 'required' : ''} ${f.readonly ? 'readonly' : ''} ${f.step ? `step="${f.step}"` : ''}>`;
        }
        crudFields.appendChild(div);
      });

      // Wrap half-width fields in rows
      const halfFields = crudFields.querySelectorAll('.em-crud-field');
      const halves = [];
      fields.forEach((f, i) => {
        if (f.half) halves.push(i);
      });
      for (let i = 0; i < halves.length; i += 2) {
        if (i + 1 < halves.length) {
          const row = document.createElement('div');
          row.className = 'em-crud-field-row';
          const f1 = halfFields[halves[i]];
          const f2 = halfFields[halves[i + 1]];
          if (f1 && f2) {
            f1.parentNode.insertBefore(row, f1);
            row.appendChild(f1);
            row.appendChild(f2);
          }
        }
      }

      // Setup image upload listeners
      fields.filter(f => f.type === 'image').forEach(f => {
        const uploadBtn = document.getElementById(`em-cf-${f.name}-upload-btn`);
        const fileInp = document.getElementById(`em-cf-${f.name}-file`);
        const urlInp = document.getElementById(`em-cf-${f.name}`);
        uploadBtn?.addEventListener('click', () => fileInp?.click());
        fileInp?.addEventListener('change', async (e) => {
          const file = e.target.files[0];
          if (!file) return;
          uploadBtn.textContent = 'Enviando...';
          try {
            const url = await supabase.uploadImage(file);
            urlInp.value = url;
            let preview = document.getElementById(`em-cf-${f.name}-preview`);
            if (!preview) {
              preview = document.createElement('img');
              preview.className = 'em-crud-img-preview';
              preview.id = `em-cf-${f.name}-preview`;
              urlInp.parentNode.insertBefore(preview, urlInp.nextSibling);
            }
            preview.src = url;
            showNotification('Imagem enviada!');
          } catch (err) {
            showNotification('Erro no upload: ' + err.message, true);
          } finally {
            uploadBtn.innerHTML = '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg> Upload Imagem';
            fileInp.value = '';
          }
        });
        urlInp?.addEventListener('input', () => {
          const preview = document.getElementById(`em-cf-${f.name}-preview`);
          if (preview) preview.src = urlInp.value;
        });
      });

      crudOverlay.style.display = '';
    }

    // Form submission
    crudForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!crudCallback) return;
      crudSaveBtn.disabled = true;
      crudSaveBtn.textContent = 'Salvando...';
      try {
        const formData = {};
        crudFields.querySelectorAll('input, select, textarea').forEach(inp => {
          if (inp.type === 'checkbox') formData[inp.name] = inp.checked;
          else if (inp.type === 'number') formData[inp.name] = inp.value !== '' ? parseFloat(inp.value) : null;
          else if (inp.type === 'file') { /* skip */ }
          else formData[inp.name] = inp.value;
        });
        await crudCallback(formData);
        closeCrudModal();
      } catch (err) {
        showNotification('Erro ao salvar: ' + (err.message || ''), true);
      } finally {
        crudSaveBtn.disabled = false;
        crudSaveBtn.textContent = 'Salvar';
      }
    });

    // ---- CRUD DATA HELPERS ----
    let crudProducts = [];
    let crudCategories = [];
    let crudOffers = [];
    let crudTestimonials = [];
    let crudFaqItems = [];
    let CRUD_CATEGORY_MAP = {};

    async function crudLoadData() {
      try {
        [crudProducts, crudCategories] = await Promise.all([
          supabase.getProducts(),
          supabase.getCategories()
        ]);
        CRUD_CATEGORY_MAP = {};
        crudCategories.filter(c => c.active !== false).forEach(c => {
          CRUD_CATEGORY_MAP[c.slug] = c.name;
        });
        // Load settings-based data
        const settings = await supabase.getSiteSettings();
        const settingsMap = {};
        settings.forEach(r => { settingsMap[r.key] = typeof r.value === 'string' ? JSON.parse(r.value) : r.value; });
        try { crudOffers = await supabase.getOffers(); } catch(_) { crudOffers = []; }
        if (!Array.isArray(crudOffers)) crudOffers = [];
        crudTestimonials = settingsMap.testimonials || [];
        crudFaqItems = settingsMap.faq_items || [];
      } catch (e) {
        console.error('[EditMode CRUD] Load error:', e);
      }
    }

    // ---- SECTION CRUD CONTROLS ----
    function addCrudControls() {
      crudLoadData().then(() => {
        addProductCrud();
        addOfferCrud();
        addTestimonialCrud();
        addFaqCrud();
        addCategoryCrud();
        // Hero image and promo banner are now handled by section panels
      });
    }

    function removeCrudControls() {
      document.querySelectorAll('.em-crud-bar, .em-crud-item-actions, .em-hero-img-overlay, .em-promo-overlay').forEach(el => el.remove());
      // Clean up promo text editable state
      const promoText = document.getElementById('promo-text');
      if (promoText) {
        promoText.removeAttribute('contenteditable');
        promoText.classList.remove('em-editable');
      }
    }

    // ---- PRODUCT CRUD ----
    function addProductCrud() {
      const section = document.querySelector('#produtos');
      if (!section) return;
      section.style.position = 'relative';

      const bar = document.createElement('div');
      bar.className = 'em-crud-bar';
      bar.innerHTML = `<span class="em-crud-bar__label">Produtos</span>
        <button class="em-crud-fab em-crud-fab--add" id="em-crud-add-product">＋ Novo Produto</button>
        <button class="em-crud-fab" style="background:rgba(59,130,246,0.2);color:#93c5fd;" id="em-crud-manage-cats"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg> Categorias</button>`;
      section.appendChild(bar);

      document.getElementById('em-crud-add-product')?.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        openProductForm();
      });
      document.getElementById('em-crud-manage-cats')?.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        openCategoryList();
      });

      // Add edit/delete buttons to each product card
      document.querySelectorAll('.product-card').forEach(card => {
        const productId = card.dataset.id;
        if (!productId) return;
        card.style.position = 'relative';
        const actions = document.createElement('div');
        actions.className = 'em-crud-item-actions';
        actions.innerHTML = `<button class="em-crud-item-btn em-crud-item-btn--edit" title="Editar" data-crud-edit-product="${productId}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
          <button class="em-crud-item-btn em-crud-item-btn--delete" title="Excluir" data-crud-del-product="${productId}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>`;
        card.appendChild(actions);
      });

      // Delegation for edit/delete
      section.addEventListener('click', async (e) => {
        const editBtn = e.target.closest('[data-crud-edit-product]');
        if (editBtn) {
          e.preventDefault(); e.stopPropagation();
          const p = crudProducts.find(x => x.id === editBtn.dataset.crudEditProduct);
          if (p) openProductForm(p);
          return;
        }
        const delBtn = e.target.closest('[data-crud-del-product]');
        if (delBtn) {
          e.preventDefault(); e.stopPropagation();
          if (!confirm('Excluir este produto?')) return;
          try {
            await supabase.deleteProduct(delBtn.dataset.crudDelProduct);
            showNotification('Produto excluído!');
            await refreshProducts();
          } catch (err) { showNotification('Erro ao excluir: ' + err.message, true); }
        }
      }, true);
    }

    function openProductForm(product = null) {
      const catOptions = [{ value: '', label: 'Selecione' }].concat(
        crudCategories.filter(c => c.active !== false).map(c => ({ value: c.slug, label: c.name }))
      );
      const fields = [
        { name: 'name', label: 'Nome do Produto', required: true },
        { name: 'id', label: 'ID (slug)', placeholder: 'auto-gerado', readonly: !!product },
        { name: 'category_slug', label: 'Categoria', type: 'select', options: catOptions },
        { name: 'price', label: 'Preço (R$)', type: 'number', step: '0.01', half: true, required: true },
        { name: 'old_price', label: 'Preço Antigo', type: 'number', step: '0.01', half: true },
        { name: 'badge', label: 'Badge', placeholder: 'NOVO, PROMO, etc.', half: true },
        { name: 'stock', label: 'Estoque', type: 'number', half: true },
        { name: 'description', label: 'Descrição', type: 'textarea' },
        { name: 'image_url', label: 'Imagem Principal', type: 'image' },
        { name: 'sort_order', label: 'Ordem', type: 'number', default: '0', half: true },
        { name: 'active', label: 'Ativo', type: 'checkbox', default: true, half: true },
      ];

      const data = product ? {
        ...product,
        active: product.active !== false,
        stock: product.stock !== null && product.stock !== undefined ? product.stock : '',
      } : { active: true, rating: '5.0', reviews_count: '0', sort_order: '0' };

      openCrudModal(
        product ? 'Editar Produto' : 'Novo Produto',
        fields,
        data,
        async (formData) => {
          // Auto-generate ID from name if new
          if (!product && !formData.id) {
            formData.id = formData.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          }
          formData.category = CRUD_CATEGORY_MAP[formData.category_slug] || formData.category_slug || '';
          formData.price = parseFloat(formData.price) || 0;
          formData.old_price = formData.old_price ? parseFloat(formData.old_price) : null;
          formData.rating = parseFloat(formData.rating) || 5.0;
          formData.reviews_count = parseInt(formData.reviews_count) || 0;
          formData.sort_order = parseInt(formData.sort_order) || 0;
          formData.stock = formData.stock !== '' && formData.stock !== null ? parseInt(formData.stock) : null;
          formData.stock_deactivated = false;
          if (formData.stock !== null && formData.stock <= 0) {
            formData.active = false;
            formData.stock_deactivated = true;
            formData.stock = 0;
          }

          if (product) {
            const { id, ...upd } = formData;
            await supabase.updateProduct(product.id, upd);
            showNotification('Produto atualizado!');
          } else {
            await supabase.createProduct(formData);
            showNotification('Produto criado!');
          }
          await refreshProducts();
        }
      );

      // Auto-slug from name (for new products)
      if (!product) {
        const nameInput = document.getElementById('em-cf-name');
        const idInput = document.getElementById('em-cf-id');
        nameInput?.addEventListener('input', () => {
          if (!idInput.readOnly) {
            idInput.value = nameInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          }
        });
      }
    }

    async function refreshProducts() {
      crudProducts = await supabase.getProducts();
      if (typeof loadProductsFromDB === 'function') loadProductsFromDB();
      // Re-add CRUD item buttons after grid re-renders
      setTimeout(() => {
        document.querySelectorAll('.product-card .em-crud-item-actions').forEach(el => el.remove());
        document.querySelectorAll('.product-card').forEach(card => {
          const productId = card.dataset.id;
          if (!productId) return;
          card.style.position = 'relative';
          const actions = document.createElement('div');
          actions.className = 'em-crud-item-actions';
          actions.innerHTML = `<button class="em-crud-item-btn em-crud-item-btn--edit" title="Editar" data-crud-edit-product="${productId}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
            <button class="em-crud-item-btn em-crud-item-btn--delete" title="Excluir" data-crud-del-product="${productId}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>`;
          card.appendChild(actions);
        });
      }, 800);
    }

    // ---- CATEGORY CRUD ----
    function addCategoryCrud() {
      // Category management is accessible from the product section bar
    }

    function openCategoryList() {
      let listHtml = '<div style="margin-bottom:12px;">';
      crudCategories.forEach((c, i) => {
        const statusBadge = c.active !== false ? '🟢' : '🔴';
        listHtml += `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="color:${c.text_color || '#8b5cf6'};font-weight:700;">${c.name}</span>
            <small style="color:#64748b;">(${c.slug})</small>
            <span>${statusBadge}</span>
          </div>
          <div style="display:flex;gap:4px;">
            <button class="em-crud-item-btn em-crud-item-btn--edit" data-crud-edit-cat="${i}" style="width:26px;height:26px;"><svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
            <button class="em-crud-item-btn em-crud-item-btn--delete" data-crud-del-cat="${i}" style="width:26px;height:26px;"><svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
          </div>
        </div>`;
      });
      listHtml += '</div>';

      openCrudModal('Gerenciar Categorias', [], null, null);
      crudFields.innerHTML = listHtml + `<button type="button" class="em-crud-fab em-crud-fab--add" id="em-crud-add-cat-btn" style="width:100%;justify-content:center;margin-top:8px;">＋ Nova Categoria</button>`;
      crudSaveBtn.style.display = 'none';

      // Delegation
      crudFields.addEventListener('click', async (e) => {
        const editBtn = e.target.closest('[data-crud-edit-cat]');
        if (editBtn) {
          const cat = crudCategories[parseInt(editBtn.dataset.crudEditCat)];
          if (cat) { closeCrudModal(); openCategoryForm(cat); }
          return;
        }
        const delBtn = e.target.closest('[data-crud-del-cat]');
        if (delBtn) {
          const cat = crudCategories[parseInt(delBtn.dataset.crudDelCat)];
          if (!cat || !confirm(`Excluir categoria "${cat.name}"?`)) return;
          try {
            await supabase.deleteCategory(cat.id);
            showNotification('Categoria excluída!');
            await crudLoadData();
            closeCrudModal();
            openCategoryList();
          } catch (err) { showNotification('Erro: ' + err.message, true); }
          return;
        }
        if (e.target.closest('#em-crud-add-cat-btn')) {
          closeCrudModal();
          openCategoryForm();
        }
      });

      // ensure save btn shows again
    }

    function openCategoryForm(cat = null) {
      const fields = [
        { name: 'name', label: 'Nome', required: true },
        { name: 'slug', label: 'Slug', placeholder: 'auto-gerado', readonly: !!cat },
        { name: 'text_color', label: 'Cor', type: 'color', default: '#1e293b', half: true },
        { name: 'sort_order', label: 'Ordem', type: 'number', default: '0', half: true },
        { name: 'active', label: 'Ativa', type: 'checkbox', default: true },
      ];
      const data = cat ? { ...cat, active: cat.active !== false } : { active: true, text_color: '#1e293b', sort_order: '0' };

      openCrudModal(
        cat ? 'Editar Categoria' : 'Nova Categoria',
        fields,
        data,
        async (formData) => {
          formData.sort_order = parseInt(formData.sort_order) || 0;
          if (cat) {
            await supabase.updateCategory(cat.id, formData);
            showNotification('Categoria atualizada!');
          } else {
            if (!formData.slug) {
              formData.slug = formData.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            }
            formData.id = formData.slug;
            await supabase.createCategory(formData);
            showNotification('Categoria criada!');
          }
          await crudLoadData();
          await refreshProducts();
        }
      );

      // Auto-slug
      if (!cat) {
        const nameInput = document.getElementById('em-cf-name');
        const slugInput = document.getElementById('em-cf-slug');
        nameInput?.addEventListener('input', () => {
          if (!slugInput.readOnly) {
            slugInput.value = nameInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          }
        });
      }
    }

    // ---- OFFER CRUD ----
    function addOfferCrud() {
      const section = document.querySelector('#ofertas');
      if (!section) return;
      section.style.position = 'relative';

      const bar = document.createElement('div');
      bar.className = 'em-crud-bar';
      bar.innerHTML = `<span class="em-crud-bar__label">Ofertas</span>
        <button class="em-crud-fab em-crud-fab--add" id="em-crud-add-offer">＋ Nova Oferta</button>`;
      section.appendChild(bar);

      document.getElementById('em-crud-add-offer')?.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        openOfferForm();
      });

      // Add edit/delete to offer cards
      document.querySelectorAll('.offer-carousel-card').forEach(card => {
        const idx = card.dataset.offerIdx;
        card.style.position = 'relative';
        const actions = document.createElement('div');
        actions.className = 'em-crud-item-actions';
        actions.innerHTML = `<button class="em-crud-item-btn em-crud-item-btn--edit" title="Editar" data-crud-edit-offer="${idx}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
          <button class="em-crud-item-btn em-crud-item-btn--delete" title="Excluir" data-crud-del-offer="${idx}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>`;
        card.appendChild(actions);
      });

      section.addEventListener('click', async (e) => {
        const editBtn = e.target.closest('[data-crud-edit-offer]');
        if (editBtn) {
          e.preventDefault(); e.stopPropagation();
          // Map the carousel index back to the actual offer index
          const cardIdx = parseInt(editBtn.dataset.crudEditOffer);
          const realIdx = cardIdx % crudOffers.length;
          if (crudOffers[realIdx]) openOfferForm(crudOffers[realIdx], realIdx);
          return;
        }
        const delBtn = e.target.closest('[data-crud-del-offer]');
        if (delBtn) {
          e.preventDefault(); e.stopPropagation();
          const cardIdx = parseInt(delBtn.dataset.crudDelOffer);
          const realIdx = cardIdx % crudOffers.length;
          if (!confirm('Excluir esta oferta?')) return;
          try {
            await supabase.deleteOffer(crudOffers[realIdx].id);
            crudOffers.splice(realIdx, 1);
            showNotification('Oferta excluída!');
            if (typeof loadSiteSettings === 'function') loadSiteSettings();
          } catch (err) { showNotification('Erro: ' + err.message, true); }
        }
      }, true);
    }

    function openOfferForm(offer = null, index = -1) {
      const productOptions = [{ value: '', label: 'Nenhum produto vinculado' }].concat(
        crudProducts.map(p => ({ value: p.id, label: p.name }))
      );
      const fields = [
        { name: 'name', label: 'Nome da Oferta', required: true },
        { name: 'description', label: 'Descrição', type: 'textarea' },
        { name: 'price', label: 'Preço (R$)', type: 'number', step: '0.01', half: true, required: true },
        { name: 'old_price', label: 'Preço Antigo', type: 'number', step: '0.01', half: true },
        { name: 'image_url', label: 'Imagem', type: 'image' },
        { name: 'product_id', label: 'Produto Vinculado', type: 'select', options: productOptions },
        { name: 'active', label: 'Ativa', type: 'checkbox', default: true },
      ];
      const data = offer ? { ...offer, active: offer.active !== false } : { active: true };

      openCrudModal(
        offer ? 'Editar Oferta' : 'Nova Oferta',
        fields,
        data,
        async (formData) => {
          formData.price = parseFloat(formData.price) || 0;
          formData.old_price = formData.old_price ? parseFloat(formData.old_price) : 0;
          formData.product_id = formData.product_id || null;
          if (index >= 0 && crudOffers[index] && crudOffers[index].id) {
            await supabase.updateOffer(crudOffers[index].id, formData);
          } else {
            await supabase.createOffer(formData);
          }
          try { crudOffers = await supabase.getOffers(); } catch(_) {}
          showNotification(index >= 0 ? 'Oferta atualizada!' : 'Oferta criada!');
          if (typeof loadSiteSettings === 'function') loadSiteSettings();
        }
      );
    }

    // ---- TESTIMONIAL CRUD ----
    function addTestimonialCrud() {
      const section = document.querySelector('#depoimentos');
      if (!section) return;
      section.style.position = 'relative';

      const bar = document.createElement('div');
      bar.className = 'em-crud-bar';
      bar.innerHTML = `<span class="em-crud-bar__label">Depoimentos</span>
        <button class="em-crud-fab em-crud-fab--add" id="em-crud-add-testimonial">＋ Novo Depoimento</button>`;
      section.appendChild(bar);

      document.getElementById('em-crud-add-testimonial')?.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        openTestimonialForm();
      });

      // Add edit/delete to each testimonial card
      document.querySelectorAll('.testimonial-card').forEach((card, i) => {
        card.style.position = 'relative';
        const actions = document.createElement('div');
        actions.className = 'em-crud-item-actions';
        actions.innerHTML = `<button class="em-crud-item-btn em-crud-item-btn--edit" title="Editar" data-crud-edit-test="${i}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
          <button class="em-crud-item-btn em-crud-item-btn--delete" title="Excluir" data-crud-del-test="${i}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>`;
        card.appendChild(actions);
      });

      section.addEventListener('click', async (e) => {
        const editBtn = e.target.closest('[data-crud-edit-test]');
        if (editBtn) {
          e.preventDefault(); e.stopPropagation();
          const idx = parseInt(editBtn.dataset.crudEditTest);
          if (crudTestimonials[idx]) openTestimonialForm(crudTestimonials[idx], idx);
          return;
        }
        const delBtn = e.target.closest('[data-crud-del-test]');
        if (delBtn) {
          e.preventDefault(); e.stopPropagation();
          const idx = parseInt(delBtn.dataset.crudDelTest);
          if (!confirm('Excluir este depoimento?')) return;
          try {
            crudTestimonials.splice(idx, 1);
            await supabase.upsertSiteSetting('testimonials', crudTestimonials);
            showNotification('Depoimento excluído!');
            if (typeof loadSiteSettings === 'function') loadSiteSettings();
          } catch (err) { showNotification('Erro: ' + err.message, true); }
        }
      }, true);
    }

    function openTestimonialForm(testimonial = null, index = -1) {
      const fields = [
        { name: 'name', label: 'Nome', required: true, half: true },
        { name: 'location', label: 'Localização', placeholder: 'São Paulo, SP', half: true },
        { name: 'rating', label: 'Avaliação (1-5)', type: 'select', options: [
          { value: '5', label: '★★★★★ (5)' },
          { value: '4', label: '★★★★☆ (4)' },
          { value: '3', label: '★★★☆☆ (3)' },
          { value: '2', label: '★★☆☆☆ (2)' },
          { value: '1', label: '★☆☆☆☆ (1)' },
        ]},
        { name: 'text', label: 'Depoimento', type: 'textarea', rows: 4, required: true },
      ];
      const data = testimonial || { rating: '5' };

      openCrudModal(
        testimonial ? 'Editar Depoimento' : 'Novo Depoimento',
        fields,
        data,
        async (formData) => {
          if (index >= 0) {
            crudTestimonials[index] = formData;
          } else {
            crudTestimonials.push(formData);
          }
          await supabase.upsertSiteSetting('testimonials', crudTestimonials);
          showNotification(index >= 0 ? 'Depoimento atualizado!' : 'Depoimento adicionado!');
          if (typeof loadSiteSettings === 'function') loadSiteSettings();
        }
      );
    }

    // ---- FAQ CRUD ----
    function addFaqCrud() {
      const section = document.querySelector('#faq');
      if (!section) return;
      section.style.position = 'relative';

      const bar = document.createElement('div');
      bar.className = 'em-crud-bar';
      bar.innerHTML = `<span class="em-crud-bar__label">FAQ</span>
        <button class="em-crud-fab em-crud-fab--add" id="em-crud-add-faq">＋ Nova Pergunta</button>`;
      section.appendChild(bar);

      document.getElementById('em-crud-add-faq')?.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        openFaqForm();
      });

      // Add edit/delete to each FAQ item
      document.querySelectorAll('.faq-item').forEach((item, i) => {
        item.style.position = 'relative';
        const actions = document.createElement('div');
        actions.className = 'em-crud-item-actions';
        actions.innerHTML = `<button class="em-crud-item-btn em-crud-item-btn--edit" title="Editar" data-crud-edit-faq="${i}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
          <button class="em-crud-item-btn em-crud-item-btn--delete" title="Excluir" data-crud-del-faq="${i}"><svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>`;
        item.appendChild(actions);
      });

      section.addEventListener('click', async (e) => {
        const editBtn = e.target.closest('[data-crud-edit-faq]');
        if (editBtn) {
          e.preventDefault(); e.stopPropagation();
          const idx = parseInt(editBtn.dataset.crudEditFaq);
          if (crudFaqItems[idx]) openFaqForm(crudFaqItems[idx], idx);
          return;
        }
        const delBtn = e.target.closest('[data-crud-del-faq]');
        if (delBtn) {
          e.preventDefault(); e.stopPropagation();
          const idx = parseInt(delBtn.dataset.crudDelFaq);
          if (!confirm('Excluir esta pergunta?')) return;
          try {
            crudFaqItems.splice(idx, 1);
            await supabase.upsertSiteSetting('faq_items', crudFaqItems);
            showNotification('Pergunta excluída!');
            if (typeof loadSiteSettings === 'function') loadSiteSettings();
          } catch (err) { showNotification('Erro: ' + err.message, true); }
        }
      }, true);
    }

    function openFaqForm(faqItem = null, index = -1) {
      const fields = [
        { name: 'question', label: 'Pergunta', required: true },
        { name: 'answer', label: 'Resposta', type: 'textarea', rows: 4, required: true },
      ];
      const data = faqItem || {};

      openCrudModal(
        faqItem ? 'Editar Pergunta' : 'Nova Pergunta',
        fields,
        data,
        async (formData) => {
          if (index >= 0) {
            crudFaqItems[index] = formData;
          } else {
            crudFaqItems.push(formData);
          }
          await supabase.upsertSiteSetting('faq_items', crudFaqItems);
          showNotification(index >= 0 ? 'Pergunta atualizada!' : 'Pergunta adicionada!');
          if (typeof loadSiteSettings === 'function') loadSiteSettings();
        }
      );
    }

    // --- APPLY ON PAGE LOAD ---
    const _waitAndApply = setInterval(() => {
      try {
        const cached = localStorage.getItem('toque_settings_cache');
        if (cached) {
          const data = JSON.parse(cached);
          if (data && data.settings && data.settings.edit_mode) {
            applyEditModeSettings(data.settings);
            clearInterval(_waitAndApply);
          }
        }
      } catch (e) {}
    }, 500);
    setTimeout(() => clearInterval(_waitAndApply), 5000);

  })();

});
