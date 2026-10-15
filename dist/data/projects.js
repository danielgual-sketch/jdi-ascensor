/* Contenido del edificio JDI: una planta por disciplina y sus proyectos.
   ⚠️ PROVISIONAL: títulos, clientes, años y vídeos de ejemplo hasta tener los reales.
   video: ruta a un .mp4 (p. ej. "dist/videos/brand_01.mp4"); vacío = se muestra un marcador de posición. */
window.JDI_DATA = {
    floors: [
        { n: 1, id: 'brand', name: 'Brand Design', desc: 'Diseño de marca e identidad visual', projects: [
            { title: 'Naw', client: 'Identidad de marca', year: '', video: 'dist/videos/brand_naw.mp4', cover: 'naw' },                       // ⚠️ falta año y descripción
            { title: 'Suklab', client: 'Identidad de marca', year: '', video: 'dist/videos/brand_suklab.mp4', cover: 'suklab' },              // ⚠️ falta año y descripción
            { title: 'Kutxa Fundazioa', client: 'Identidad de marca', year: '', video: 'dist/videos/brand_kutxa_fundazioa.mp4', cover: 'kutxa' }, // ⚠️ falta año y descripción
            // 04–06: de momento duplican los tres reales para que se encuentren fácil (⚠️ PROVISIONAL, luego se rellenan)
            { title: 'Suklab', client: 'Identidad de marca', year: '', video: 'dist/videos/brand_suklab.mp4', cover: 'suklab' },
            { title: 'Kutxa Fundazioa', client: 'Identidad de marca', year: '', video: 'dist/videos/brand_kutxa_fundazioa.mp4', cover: 'kutxa' },
            { title: 'Naw', client: 'Identidad de marca', year: '', video: 'dist/videos/brand_naw.mp4', cover: 'naw' }
        ] },
        { n: 2, id: 'digital', name: 'Digital Design', desc: 'Diseño digital, UX/UI y experiencias digitales', projects: [
            { title: 'Proyecto 01', client: 'Cliente', year: 2026, video: '' },
            { title: 'Proyecto 02', client: 'Cliente', year: 2025, video: '' },
            { title: 'Proyecto 03', client: 'Cliente', year: 2025, video: '' },
            { title: 'Proyecto 04', client: 'Cliente', year: 2024, video: '' },
            { title: 'Proyecto 05', client: 'Cliente', year: 2024, video: '' },
            { title: 'Proyecto 06', client: 'Cliente', year: 2023, video: '' }
        ] },
        { n: 3, id: 'product', name: 'Product Design', desc: 'Diseño de productos y servicios', projects: [
            { title: 'Proyecto 01', client: 'Cliente', year: 2026, video: '' },
            { title: 'Proyecto 02', client: 'Cliente', year: 2025, video: '' },
            { title: 'Proyecto 03', client: 'Cliente', year: 2025, video: '' },
            { title: 'Proyecto 04', client: 'Cliente', year: 2024, video: '' },
            { title: 'Proyecto 05', client: 'Cliente', year: 2024, video: '' },
            { title: 'Proyecto 06', client: 'Cliente', year: 2023, video: '' }
        ] },
        { n: 4, id: 'industrial', name: 'Industrial Design', desc: 'Diseño industrial de productos físicos', projects: [
            { title: 'Proyecto 01', client: 'Cliente', year: 2026, video: '' },
            { title: 'Proyecto 02', client: 'Cliente', year: 2025, video: '' },
            { title: 'Proyecto 03', client: 'Cliente', year: 2025, video: '' },
            { title: 'Proyecto 04', client: 'Cliente', year: 2024, video: '' },
            { title: 'Proyecto 05', client: 'Cliente', year: 2024, video: '' },
            { title: 'Proyecto 06', client: 'Cliente', year: 2023, video: '' }
        ] }
    ]
};
