#!/usr/bin/env python3
"""
Generate the FitoPlantaMed e-book:
"10 Plantas Medicinais Essenciais — Guia Gratuito de Fitoterapia"
By Marta Leni, Farmacêutica Clínica, Mestre em Farmácia
"""

from fpdf import FPDF
import os

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PATH = os.path.join(OUTPUT_DIR, "10-plantas-medicinais-essenciais.pdf")

# Brand colors
GREEN_DARK = (30, 80, 50)
GREEN_MID = (45, 120, 70)
GREEN_LIGHT = (220, 240, 225)
GOLD = (180, 140, 50)
TEXT_DARK = (40, 40, 40)
TEXT_MID = (80, 80, 80)
WHITE = (255, 255, 255)


class EbookPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=25)
        font_dir = "/System/Library/Fonts/Supplemental/"
        self.add_font("ArialUni", "", os.path.join(font_dir, "Arial.ttf"))
        self.add_font("ArialUni", "B", os.path.join(font_dir, "Arial Bold.ttf"))
        self.add_font("ArialUni", "I", os.path.join(font_dir, "Arial Italic.ttf"))
        self.add_font("ArialUni", "BI", os.path.join(font_dir, "Arial Bold Italic.ttf"))

    def header(self):
        if self.page_no() > 1:
            self.set_font("ArialUni", "I", 8)
            self.set_text_color(*TEXT_MID)
            self.cell(0, 10, "FitoPlantaMed | 10 Plantas Medicinais Essenciais", align="C")
            self.ln(5)
            self.set_draw_color(*GREEN_MID)
            self.set_line_width(0.3)
            self.line(15, 15, 195, 15)
            self.ln(8)

    def footer(self):
        if self.page_no() > 1:
            self.set_y(-20)
            self.set_draw_color(*GREEN_MID)
            self.set_line_width(0.3)
            self.line(15, self.get_y(), 195, self.get_y())
            self.ln(3)
            self.set_font("ArialUni", "I", 8)
            self.set_text_color(*TEXT_MID)
            self.cell(0, 10, f"fitoplantamed.com  |  Página {self.page_no()}", align="C")

    def cover_page(self):
        self.add_page()
        self.set_fill_color(*GREEN_DARK)
        self.rect(0, 0, 210, 297, "F")
        self.set_fill_color(*GREEN_MID)
        self.rect(0, 100, 210, 4, "F")
        self.rect(0, 193, 210, 4, "F")

        self.set_y(50)
        self.set_font("ArialUni", "B", 14)
        self.set_text_color(*GOLD)
        self.cell(0, 10, "GUIA GRATUITO DE FITOTERAPIA", align="C")
        self.ln(25)

        self.set_font("ArialUni", "B", 32)
        self.set_text_color(*WHITE)
        self.cell(0, 15, "10 Plantas", align="C")
        self.ln(15)
        self.cell(0, 15, "Medicinais", align="C")
        self.ln(15)
        self.cell(0, 15, "Essenciais", align="C")
        self.ln(25)

        self.set_font("ArialUni", "", 14)
        self.set_text_color(200, 220, 200)
        self.cell(0, 8, "Benefícios, formas de uso e dicas de", align="C")
        self.ln(8)
        self.cell(0, 8, "segurança baseadas em evidências científicas", align="C")

        self.set_y(210)
        self.set_font("ArialUni", "B", 13)
        self.set_text_color(*GOLD)
        self.cell(0, 8, "Marta Leni", align="C")
        self.ln(8)
        self.set_font("ArialUni", "", 11)
        self.set_text_color(200, 220, 200)
        self.cell(0, 7, "Farmacêutica Clínica | Mestre em Farmácia", align="C")
        self.ln(7)
        self.cell(0, 7, "CRF-SP 93119", align="C")

        self.set_y(260)
        self.set_font("ArialUni", "B", 12)
        self.set_text_color(*WHITE)
        self.cell(0, 10, "fitoplantamed.com", align="C")

    def intro_page(self):
        self.add_page()
        self.set_y(30)
        self.section_title("Introdução")
        self.body_text(
            "Você sabia que o Brasil abriga cerca de 20% de toda a biodiversidade do planeta? "
            "Entre essa riqueza natural, encontramos dezenas de plantas medicinais com benefícios "
            "comprovados pela ciência moderna."
        )
        self.ln(3)
        self.body_text(
            "Neste guia, selecionamos as 10 plantas medicinais mais importantes e acessíveis, "
            "com informações baseadas em evidências científicas. Para cada planta, você encontrará:"
        )
        self.ln(3)
        self.bullet_list([
            "Principais benefícios comprovados",
            "Formas de uso recomendadas",
            "Dosagem segura",
            "Contraindicações e cuidados",
            "Dica prática de uso no dia a dia",
        ])
        self.ln(5)
        self.highlight_box(
            "IMPORTANTE: Este guia tem caráter educativo e informativo. "
            "Não substitui a orientação de um profissional de saúde. "
            "Antes de iniciar qualquer tratamento com plantas medicinais, "
            "consulte seu médico, nutricionista ou farmacêutico."
        )
        self.ln(5)
        self.body_text("Boa leitura!")
        self.ln(3)
        self.set_font("ArialUni", "BI", 11)
        self.set_text_color(*GREEN_DARK)
        self.cell(0, 7, "Marta Leni")
        self.ln(5)
        self.set_font("ArialUni", "I", 9)
        self.set_text_color(*TEXT_MID)
        self.cell(0, 5, "Farmacêutica Clínica | Mestre em Farmácia | CRF-SP 93119")

    def section_title(self, text):
        self.set_font("ArialUni", "B", 20)
        self.set_text_color(*GREEN_DARK)
        self.cell(0, 12, text)
        self.ln(5)
        self.set_draw_color(*GOLD)
        self.set_line_width(0.8)
        self.line(15, self.get_y(), 80, self.get_y())
        self.ln(10)

    def plant_title(self, number, name, scientific):
        self.set_fill_color(*GREEN_DARK)
        self.rect(15, self.get_y(), 180, 22, "F")
        y = self.get_y()
        self.set_xy(20, y + 3)
        self.set_font("ArialUni", "B", 18)
        self.set_text_color(*WHITE)
        self.cell(0, 8, f"{number}. {name}")
        self.set_xy(20, y + 12)
        self.set_font("ArialUni", "I", 10)
        self.set_text_color(200, 220, 200)
        self.cell(0, 7, scientific)
        self.set_y(y + 28)

    def subsection(self, text):
        self.set_font("ArialUni", "B", 12)
        self.set_text_color(*GREEN_MID)
        self.cell(0, 8, text)
        self.ln(7)

    def body_text(self, text):
        self.set_font("ArialUni", "", 10.5)
        self.set_text_color(*TEXT_DARK)
        self.multi_cell(0, 6, text)

    def bullet_list(self, items):
        self.set_font("ArialUni", "", 10.5)
        self.set_text_color(*TEXT_DARK)
        for item in items:
            self.cell(8)
            self.cell(5, 6, "•")
            self.multi_cell(0, 6, f" {item}")
            self.ln(1)

    def highlight_box(self, text):
        self.set_fill_color(*GREEN_LIGHT)
        self.set_font("ArialUni", "I", 10)
        self.set_text_color(*GREEN_DARK)
        self.multi_cell(180, 6, text, fill=True)

    def tip_box(self, text):
        self.set_fill_color(255, 248, 220)
        self.set_font("ArialUni", "B", 10)
        self.set_text_color(*GOLD)
        self.cell(180, 7, "  > DICA PRÁTICA", fill=True, new_x="LMARGIN", new_y="NEXT")
        self.set_font("ArialUni", "", 10)
        self.set_text_color(*TEXT_DARK)
        self.set_fill_color(255, 252, 240)
        self.multi_cell(180, 6, text, fill=True)

    def dosage_box(self, text):
        self.set_fill_color(235, 245, 255)
        self.set_font("ArialUni", "B", 10)
        self.set_text_color(50, 80, 120)
        self.cell(180, 7, "  > DOSAGEM RECOMENDADA", fill=True, new_x="LMARGIN", new_y="NEXT")
        self.set_font("ArialUni", "", 10)
        self.set_text_color(*TEXT_DARK)
        self.set_fill_color(245, 250, 255)
        self.multi_cell(180, 6, text, fill=True)

    def plant_page(self, number, name, scientific, intro, benefits, how_to_use, dosage, warnings, tip):
        self.add_page()
        self.set_y(25)
        self.plant_title(number, name, scientific)
        self.body_text(intro)
        self.ln(5)
        self.subsection("Benefícios Comprovados")
        self.bullet_list(benefits)
        self.ln(4)
        self.subsection("Como Usar")
        self.body_text(how_to_use)
        self.ln(4)
        self.dosage_box(dosage)
        self.ln(4)
        self.subsection("Contraindicações e Cuidados")
        self.bullet_list(warnings)
        self.ln(4)
        self.tip_box(tip)


def build_ebook():
    pdf = EbookPDF()

    # Cover
    pdf.cover_page()

    # Intro
    pdf.intro_page()

    # Table of Contents
    pdf.add_page()
    pdf.set_y(30)
    pdf.section_title("Sumário")
    plants_list = [
        "Camomila", "Valeriana", "Gengibre", "Cúrcuma",
        "Boldo", "Espinheira-Santa", "Melissa", "Maracujá (Passiflora)",
        "Equinácea", "Ashwagandha"
    ]
    for i, name in enumerate(plants_list, 1):
        pdf.set_font("ArialUni", "", 12)
        pdf.set_text_color(*TEXT_DARK)
        pdf.cell(10, 10, f"{i}.")
        pdf.set_font("ArialUni", "B", 12)
        pdf.set_text_color(*GREEN_DARK)
        pdf.cell(0, 10, name)
        pdf.ln(8)

    pdf.ln(10)
    pdf.set_font("ArialUni", "", 12)
    pdf.set_text_color(*TEXT_DARK)
    pdf.cell(0, 10, "Considerações Finais")
    pdf.ln(8)
    pdf.cell(0, 10, "Sobre a Autora")
    pdf.ln(8)
    pdf.cell(0, 10, "Referências Científicas")

    # === PLANT 1: CAMOMILA ===
    pdf.plant_page(
        1, "Camomila", "Matricaria chamomilla",
        "A camomila é uma das plantas medicinais mais populares e consumidas no mundo. "
        "Seu uso remonta a civilizações antigas, e hoje possui ampla documentação científica "
        "sobre seus efeitos calmantes, digestivos e anti-inflamatórios.",
        [
            "Redução da ansiedade e promoção do relaxamento",
            "Melhora da qualidade do sono",
            "Alívio de desconfortos gastrointestinais (cólicas, gases)",
            "Propriedades anti-inflamatórias para pele e mucosas",
            "Auxílio no controle de açúcar no sangue (estudos preliminares)",
        ],
        "A forma mais tradicional é o chá, preparado por infusão: despeje água quente "
        "(não fervente) sobre 1 a 2 colheres de chá de flores secas. Abafe por 5 a 10 minutos. "
        "Também disponível em cápsulas de extrato padronizado e óleo essencial para uso tópico.",
        "Chá: 1 a 4 xícaras por dia\nExtrato: 200–400 mg de extrato padronizado, 1 a 3 vezes ao dia\n"
        "Para sono: tomar 30 a 45 minutos antes de dormir",
        [
            "Pode causar reação alérgica em pessoas sensíveis a plantas da família Asteraceae",
            "Evitar uso concomitante com anticoagulantes",
            "Gestantes devem consultar o médico antes do uso regular",
            "Pode potencializar o efeito de sedativos",
        ],
        "Prepare um chá de camomila 30 minutos antes de dormir como parte da sua "
        "rotina noturna. Adicione uma colher de mel para potencializar o efeito relaxante. "
        "Evite telas e luzes fortes enquanto toma o seu chá."
    )

    # === PLANT 2: VALERIANA ===
    pdf.plant_page(
        2, "Valeriana", "Valeriana officinalis",
        "A valeriana é considerada o \"sonífero natural\" por excelência. Utilizada há séculos "
        "na Europa para tratar insônia e ansiedade, é hoje uma das plantas medicinais mais "
        "estudadas em ensaios clínicos randomizados.",
        [
            "Melhora significativa na qualidade do sono",
            "Redução do tempo para adormecer (latência do sono)",
            "Alívio de ansiedade leve a moderada",
            "Relaxamento muscular",
            "Sem efeito de \"ressaca\" no dia seguinte (diferente de fármacos)",
        ],
        "A valeriana é mais eficaz em cápsulas de extrato padronizado, pois o chá tem sabor "
        "e aroma fortes que muitos consideram desagradáveis. O efeito é cumulativo: os melhores "
        "resultados aparecem após 2 a 4 semanas de uso regular.",
        "Cápsulas: 300–600 mg de extrato padronizado, 30 a 60 min antes de dormir\n"
        "Chá: 2–3 g de raiz seca por xícara (sabor forte)\n"
        "Para ansiedade: 120–200 mg, 3 vezes ao dia",
        [
            "Não combinar com álcool ou sedativos",
            "Pode causar sonolência — evitar dirigir após o uso",
            "Suspender 2 semanas antes de cirurgias",
            "Não recomendada para crianças menores de 12 anos",
            "Uso contínuo por mais de 4 a 6 semanas deve ser avaliado por profissional",
        ],
        "A valeriana funciona melhor com uso regular. Tome todas as noites por pelo menos "
        "2 semanas antes de avaliar os resultados. Combine com higiene do sono: quarto escuro, "
        "temperatura agradável e horário regular para dormir."
    )

    # === PLANT 3: GENGIBRE ===
    pdf.plant_page(
        3, "Gengibre", "Zingiber officinale",
        "O gengibre é uma das plantas medicinais mais versáteis do mundo, com mais de 5.000 anos "
        "de uso na medicina tradicional. Rico em gingeróis e shogaóis, possui propriedades "
        "anti-inflamatórias, digestivas e antieméticas amplamente comprovadas.",
        [
            "Alívio de náuseas (gravidez, enjoo de movimento, pós-operatório)",
            "Potente ação anti-inflamatória (osteoartrite, dores musculares)",
            "Melhora da digestão e alívio de dispepsia",
            "Suporte ao sistema imunológico",
            "Auxílio no controle glicêmico (diabetes tipo 2)",
        ],
        "Pode ser consumido fresco (ralado em chás, sucos e pratos), em pó (cápsulas ou tempero), "
        "cristalizado ou como extrato padronizado. O gengibre fresco contém mais gingeróis, "
        "enquanto o desidratado tem maior concentração de shogaóis.",
        "Chá: 1–2 g de gengibre fresco por xícara, 2 a 3 vezes ao dia\n"
        "Cápsulas: 250 mg a 1 g de extrato, 2 a 3 vezes ao dia\n"
        "Fresco: até 4 g por dia\n"
        "Não exceder 5 g/dia",
        [
            "Pode interagir com anticoagulantes (varfarina, aspirina)",
            "Doses acima de 5 g/dia podem causar azia",
            "Gestantes: consultar profissional para uso prolongado",
            "Pessoas com cálculos biliares devem evitar doses elevadas",
            "Suspender o uso 2 semanas antes de cirurgias",
        ],
        "Para náuseas, mantenha balas de gengibre cristalizado na bolsa — são práticas e "
        "eficazes. Para efeito anti-inflamatório, combine gengibre com cúrcuma e uma pitada "
        "de pimenta-preta no chá."
    )

    # === PLANT 4: CÚRCUMA ===
    pdf.plant_page(
        4, "Cúrcuma", "Curcuma longa",
        "A cúrcuma, também conhecida como açafrão-da-terra, é o anti-inflamatório natural mais "
        "estudado da atualidade. Seu princípio ativo, a curcumina, possui mais de 12.000 "
        "publicações científicas documentando os seus benefícios.",
        [
            "Potente ação anti-inflamatória (comparável a fármacos em alguns estudos)",
            "Forte atividade antioxidante",
            "Suporte à saúde articular (osteoartrite)",
            "Melhora da função cerebral e memória",
            "Potencial protetor contra doenças crônicas",
        ],
        "A curcumina pura tem baixa biodisponibilidade. Para otimizar a absorção, sempre "
        "combine com piperina (pimenta-preta), que aumenta a absorção em até 2.000%. "
        "Cápsulas padronizadas já incluem essa combinação.",
        "Cápsulas: 500–1.000 mg de curcumina + piperina, 1 a 2 vezes ao dia\n"
        "Pó de cúrcuma: 1–3 g por dia na alimentação\n"
        "Sempre com gordura ou pimenta-preta para melhor absorção",
        [
            "Pode interagir com anticoagulantes e antidiabéticos",
            "Contraindicada para pessoas com obstrução biliar",
            "Doses elevadas podem causar desconforto gástrico",
            "Gestantes devem evitar suplementação (uso culinário é seguro)",
        ],
        "Adicione 1 colher de chá de cúrcuma em pó ao leite vegetal aquecido com uma pitada "
        "de pimenta-preta e mel — o famoso \"golden milk\". Além de delicioso, é uma forma "
        "prática de consumir curcumina diariamente."
    )

    # === PLANT 5: BOLDO ===
    pdf.plant_page(
        5, "Boldo", "Peumus boldus",
        "O boldo é a planta medicinal mais associada à saúde digestiva no Brasil. "
        "Tradicionalmente usado após refeições pesadas, possui propriedades hepatoprotetoras "
        "e coleréticas comprovadas.",
        [
            "Estimula a produção e liberação de bile (efeito colerético)",
            "Proteção hepática (hepatoprotetor)",
            "Alívio de má digestão e sensação de peso",
            "Ação antiespasmódica (cólicas intestinais)",
            "Propriedades antioxidantes (boldina)",
        ],
        "O chá de boldo é a forma mais comum de uso. Utilize SEMPRE folhas secas, nunca em "
        "excesso. O boldo deve ser usado pontualmente, não como hábito diário prolongado. "
        "Prepare por infusão curta (5 minutos, no máximo).",
        "Chá: 1–2 g de folhas secas por xícara, até 2 vezes ao dia\n"
        "Uso pontual: após refeições pesadas ou desconforto digestivo\n"
        "Não usar por mais de 7 dias consecutivos sem orientação",
        [
            "CONTRAINDICADO para gestantes (pode causar contrações uterinas)",
            "Não usar em caso de obstrução biliar ou doenças hepáticas graves",
            "Evitar uso prolongado sem supervisão profissional",
            "Não combinar com anticoagulantes",
            "Crianças não devem consumir",
        ],
        "Use o chá de boldo apenas quando sentir aquele desconforto após uma refeição "
        "pesada. Não faça uso diário prolongado. Uma xícara após o almoço de domingo "
        "é suficiente."
    )

    # === PLANT 6: ESPINHEIRA-SANTA ===
    pdf.plant_page(
        6, "Espinheira-Santa", "Maytenus ilicifolia",
        "A espinheira-santa é uma planta nativa do Brasil e uma das poucas plantas medicinais "
        "aprovadas pela ANVISA para uso terapêutico. Seu principal uso é na proteção gástrica, "
        "sendo estudada como alternativa natural aos inibidores de bomba de prótons.",
        [
            "Proteção da mucosa gástrica contra acidez",
            "Alívio de sintomas de gastrite e úlcera",
            "Ação antiácida natural",
            "Redução da produção excessiva de ácido clorídrico",
            "Cicatrização de lesões gástricas (estudos em animais)",
        ],
        "O chá é a forma mais estudada. Prepare por infusão com folhas secas. "
        "Também disponível em cápsulas de extrato padronizado. Para melhor efeito "
        "protetor gástrico, tome entre as refeições.",
        "Chá: 1–2 g de folhas secas por xícara, 2 a 3 vezes ao dia\n"
        "Cápsulas: conforme orientação do fabricante\n"
        "Tomar entre as refeições ou quando sentir desconforto",
        [
            "Não usar durante a gravidez e a amamentação",
            "Pode reduzir a produção de leite materno",
            "Consultar o médico se os sintomas gástricos persistirem",
            "Não substitui tratamento médico para úlceras diagnosticadas",
        ],
        "Se você sofre com queimação após as refeições, experimente tomar uma xícara "
        "de chá de espinheira-santa 30 minutos antes do almoço e do jantar por uma semana. "
        "Muitas pessoas relatam alívio significativo."
    )

    # === PLANT 7: MELISSA ===
    pdf.plant_page(
        7, "Melissa", "Melissa officinalis",
        "Conhecida também como erva-cidreira verdadeira, a melissa é uma planta com aroma "
        "cítrico delicado e propriedades calmantes bem documentadas. É uma excelente opção "
        "para quem busca relaxamento sem sonolência excessiva.",
        [
            "Efeito calmante e ansiolítico sem sonolência excessiva",
            "Melhora do humor e da função cognitiva",
            "Alívio de cólicas e desconforto digestivo",
            "Propriedades antivirais (herpes labial — uso tópico)",
            "Auxílio na qualidade do sono quando combinada com valeriana",
        ],
        "O chá de melissa é delicioso e pode ser consumido ao longo do dia. "
        "Também disponível em cápsulas e tintura. Para herpes labial, utilizar "
        "creme tópico com extrato concentrado.",
        "Chá: 1,5–4 g de folhas secas por xícara, 2 a 3 vezes ao dia\n"
        "Cápsulas: 300–600 mg de extrato, 2 vezes ao dia\n"
        "Tintura: conforme orientação do fabricante",
        [
            "Pode interagir com sedativos e medicamentos para tireoide",
            "Pessoas com hipotireoidismo devem usar com cautela",
            "Doses muito altas podem causar sonolência",
            "Gestantes e lactantes: consultar profissional",
        ],
        "A melissa é perfeita para um chá da tarde relaxante. Cultive um vaso na janela "
        "da cozinha — folhas frescas fazem o chá mais aromático e você terá acesso "
        "imediato sempre que precisar."
    )

    # === PLANT 8: MARACUJÁ (PASSIFLORA) ===
    pdf.plant_page(
        8, "Maracujá (Passiflora)", "Passiflora incarnata",
        "A passiflora, planta que dá origem ao maracujá, é um dos fitoterápicos mais prescritos "
        "no Brasil para ansiedade. Suas folhas contêm flavonoides como a crisina, que atuam "
        "nos receptores GABA do cérebro, promovendo relaxamento.",
        [
            "Redução da ansiedade (eficácia comparável ao oxazepam em estudos)",
            "Melhora da qualidade do sono",
            "Efeito ansiolítico sem dependência química",
            "Alívio de sintomas da menopausa (estudos preliminares)",
            "Redução de espasmos musculares",
        ],
        "Disponível em cápsulas, tintura e chá. As cápsulas de extrato padronizado "
        "oferecem dosagem mais controlada. O chá das folhas (não do fruto) é a forma "
        "tradicional. Efeito percebido em 30 a 60 minutos.",
        "Cápsulas: 200–400 mg de extrato, 1 a 2 vezes ao dia\n"
        "Chá: 1–2 g de folhas secas por xícara, até 3 vezes ao dia\n"
        "Tintura: 0,5–2 ml, até 3 vezes ao dia\n"
        "Para sono: tomar 30 a 60 minutos antes de dormir",
        [
            "Não combinar com sedativos ou ansiolíticos sintéticos",
            "Pode potencializar o efeito de anticoagulantes",
            "Gestantes e lactantes devem evitar",
            "Pode causar sonolência — cuidado ao dirigir",
            "Não usar em crianças sem orientação profissional",
        ],
        "Para momentos de ansiedade aguda, tenha cápsulas de passiflora na bolsa. "
        "Tome uma cápsula e pratique respiração profunda por 5 minutos. A combinação "
        "do efeito farmacológico com a técnica de respiração é muito eficaz."
    )

    # === PLANT 9: EQUINÁCEA ===
    pdf.plant_page(
        9, "Equinácea", "Echinacea purpurea",
        "A equinácea é a planta medicinal mais associada ao fortalecimento do sistema "
        "imunológico. Originária da América do Norte, era usada pelos nativos americanos "
        "para tratar infecções. Hoje, é um dos fitoterápicos mais vendidos no mundo.",
        [
            "Estimulação do sistema imunológico",
            "Redução da duração e gravidade de resfriados",
            "Prevenção de infecções respiratórias superiores",
            "Propriedades anti-inflamatórias",
            "Atividade antiviral comprovada in vitro",
        ],
        "Mais eficaz quando iniciada nos primeiros sinais de resfriado. Disponível "
        "em cápsulas, tintura e chá. O extrato da parte aérea (flores e folhas) da "
        "Echinacea purpurea é o mais estudado.",
        "Cápsulas: 300–500 mg de extrato, 3 vezes ao dia\n"
        "Tintura: 2,5 ml, 3 vezes ao dia\n"
        "Iniciar ao primeiro sinal de resfriado\n"
        "Usar por 7 a 10 dias (não usar continuamente por mais de 8 semanas)",
        [
            "Não usar em doenças autoimunes (lúpus, artrite reumatoide, esclerose múltipla)",
            "Evitar uso contínuo por mais de 8 semanas",
            "Pode interagir com imunossupressores",
            "Alergia possível em pessoas sensíveis a plantas da família Asteraceae",
            "Não recomendada para crianças menores de 2 anos",
        ],
        "Mantenha um frasco de equinácea em casa durante o inverno. Ao primeiro sinal "
        "de garganta arranhando ou nariz escorrendo, inicie imediatamente. A eficácia "
        "é muito maior quando o uso começa nas primeiras 24 horas."
    )

    # === PLANT 10: ASHWAGANDHA ===
    pdf.plant_page(
        10, "Ashwagandha", "Withania somnifera",
        "A ashwagandha é o adaptógeno mais popular da medicina ayurvédica indiana, "
        "com mais de 3.000 anos de uso. Classificada como adaptógeno, ajuda o corpo "
        "a lidar com estresse físico e mental. Tem ganhado enorme popularidade no Ocidente "
        "nos últimos anos, com crescente base científica.",
        [
            "Redução significativa de cortisol (hormônio do estresse)",
            "Melhora da resistência ao estresse e à fadiga",
            "Aumento de energia e vitalidade",
            "Suporte à função cognitiva e à memória",
            "Melhora da qualidade do sono",
            "Suporte à função tireoidiana (hipotireoidismo subclínico)",
        ],
        "A forma mais estudada é o extrato padronizado KSM-66 ou Sensoril, em cápsulas. "
        "O efeito é cumulativo e se manifesta após 4 a 8 semanas de uso regular. "
        "Pode ser tomada de manhã (para energia) ou à noite (para sono).",
        "Cápsulas KSM-66: 300–600 mg, 1 a 2 vezes ao dia\n"
        "Extrato Sensoril: 125–250 mg, 1 a 2 vezes ao dia\n"
        "Pó: 1–2 g misturado em leite ou smoothie\n"
        "Efeitos ótimos após 4 a 8 semanas de uso regular",
        [
            "Pode interagir com medicamentos para tireoide",
            "Evitar em doenças autoimunes (pode estimular o sistema imunológico)",
            "Gestantes e lactantes não devem usar",
            "Pode aumentar o efeito de sedativos e ansiolíticos",
            "Pessoas com intolerância a solanáceas devem ter cautela",
        ],
        "Comece com 300 mg de KSM-66 por dia e aumente para 600 mg após uma semana. "
        "Tome pela manhã com o café da manhã. Se o objetivo principal for o sono, "
        "tome à noite. Dê pelo menos 6 semanas para avaliar os resultados completos."
    )

    # === CONSIDERAÇÕES FINAIS ===
    pdf.add_page()
    pdf.set_y(30)
    pdf.section_title("Considerações Finais")
    pdf.body_text(
        "As plantas medicinais representam uma ferramenta valiosa para a promoção da saúde "
        "e do bem-estar, mas seu uso deve ser sempre consciente e responsável."
    )
    pdf.ln(5)
    pdf.body_text("Lembre-se sempre:")
    pdf.ln(3)
    pdf.bullet_list([
        "Natural não significa automaticamente seguro — respeite dosagens e contraindicações",
        "Informe o seu médico sobre qualquer planta medicinal que esteja usando",
        "Compre produtos de fontes confiáveis com certificação de qualidade",
        "Não substitua tratamentos médicos por fitoterápicos sem orientação profissional",
        "Dê tempo para os efeitos — muitas plantas levam semanas para mostrar resultados",
        "Cada organismo é único — o que funciona para um pode não funcionar para outro",
    ])
    pdf.ln(8)
    pdf.highlight_box(
        "Quer se aprofundar? Visite fitoplantamed.com para artigos detalhados sobre cada "
        "planta, guias de compra de suplementos e informações atualizadas sobre fitoterapia "
        "baseada em evidências."
    )

    # === SOBRE A AUTORA ===
    pdf.ln(15)
    pdf.section_title("Sobre a Autora")
    pdf.set_font("ArialUni", "B", 14)
    pdf.set_text_color(*GREEN_DARK)
    pdf.cell(0, 8, "Marta Leni")
    pdf.ln(8)
    pdf.body_text(
        "Farmacêutica Clínica registrada no CRF-SP (93119), Mestre em Farmácia, "
        "com especialização em Fitoterapia Clínica e Prescrição de Fitoterápicos. "
        "Formada pela Universidade Anhanguera com Mestrado em Biotecnologia pela "
        "Universidade Federal de São Carlos (UFSCar)."
    )
    pdf.ln(3)
    pdf.body_text(
        "Com mais de 20 anos de experiência na área da saúde, incluindo trabalho "
        "voluntário em terapias integrativas, Marta dedica-se à produção de conteúdo "
        "educativo sobre fitoterapia baseada em evidências científicas."
    )
    pdf.ln(3)
    pdf.body_text(
        "Formação complementar em instituições como FIOCRUZ, IBPM e Racine. "
        "Experiência em farmácia de manipulação e docência em cursos de fitoterapia."
    )

    # === REFERÊNCIAS ===
    pdf.add_page()
    pdf.set_y(30)
    pdf.section_title("Referências Científicas")
    refs = [
        "Srivastava, J.K. et al. (2010). Chamomile: A herbal medicine of the past with bright future. Molecular Medicine Reports.",
        "Bent, S. et al. (2006). Valerian for sleep: a systematic review and meta-analysis. American Journal of Medicine.",
        "Bodagh, M.N. et al. (2019). Ginger in gastrointestinal disorders: a systematic review. Food Science & Nutrition.",
        "Hewlings, S.J. & Kalman, D.S. (2017). Curcumin: A Review of Its Effects on Human Health. Foods.",
        "Ruiz, A.L. et al. (2008). Farmacologia e toxicologia de Peumus boldus e da boldina. Revista Brasileira de Farmacognosia.",
        "Cipriani, T.R. et al. (2006). Gastroprotective effect of a type I arabinogalactan from Maytenus ilicifolia. Journal of Ethnopharmacology.",
        "Cases, J. et al. (2011). Pilot trial of Melissa officinalis L. leaf extract in the treatment of volunteers suffering from mild-to-moderate anxiety. Nutrients.",
        "Appel, K. et al. (2011). Modulation of the γ-aminobutyric acid (GABA) system by Passiflora incarnata L. Phytotherapy Research.",
        "Shah, S.A. et al. (2007). Evaluation of Echinacea for the prevention and treatment of the common cold. The Lancet Infectious Diseases.",
        "Chandrasekhar, K. et al. (2012). A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of Ashwagandha root. Indian Journal of Psychological Medicine.",
        "Salve, J. et al. (2019). Adaptogenic and anxiolytic effects of Ashwagandha root extract. Cureus.",
        "Anh, N.H. et al. (2020). Ginger on Human Health: A Comprehensive Systematic Review. Nutrients.",
    ]
    pdf.set_font("ArialUni", "", 9)
    pdf.set_text_color(*TEXT_MID)
    for i, ref in enumerate(refs, 1):
        pdf.multi_cell(0, 5, f"{i}. {ref}")
        pdf.ln(2)

    # === BACK COVER ===
    pdf.add_page()
    pdf.set_fill_color(*GREEN_DARK)
    pdf.rect(0, 0, 210, 297, "F")

    pdf.set_y(100)
    pdf.set_font("ArialUni", "B", 24)
    pdf.set_text_color(*WHITE)
    pdf.cell(0, 12, "FitoPlantaMed", align="C")
    pdf.ln(15)
    pdf.set_font("ArialUni", "", 14)
    pdf.set_text_color(200, 220, 200)
    pdf.cell(0, 8, "Fitoterapia Baseada em Evidências", align="C")
    pdf.ln(30)
    pdf.set_font("ArialUni", "B", 16)
    pdf.set_text_color(*GOLD)
    pdf.cell(0, 10, "fitoplantamed.com", align="C")
    pdf.ln(20)
    pdf.set_font("ArialUni", "", 11)
    pdf.set_text_color(200, 220, 200)
    pdf.cell(0, 7, "Siga-nos nas redes sociais", align="C")
    pdf.ln(7)
    pdf.cell(0, 7, "@fitoplantamed", align="C")

    # Save
    pdf.output(OUTPUT_PATH)
    print(f"✅ E-book salvo em: {OUTPUT_PATH}")
    file_size = os.path.getsize(OUTPUT_PATH) / 1024
    print(f"   Tamanho: {file_size:.0f} KB")
    print(f"   Páginas: {pdf.page_no()}")


if __name__ == "__main__":
    build_ebook()
