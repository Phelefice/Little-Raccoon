from PIL import Image, ImageDraw, ImageFont
import os

# Dimensões OG padrão
width, height = 1200, 630

# Cores do site
bg_color = (11, 20, 17)  # #0B1411
accent_color = (237, 230, 214)  # #EDE6D6
gold_color = (196, 168, 64)  # #C4A840
dark_accent = (47, 93, 58)  # #2F5D3A

# Criar imagem
img = Image.new('RGB', (width, height), bg_color)
draw = ImageDraw.Draw(img)

# Desenhar padrão de fundo simples (blocos minecraft-like)
block_size = 120
for y in range(0, height, block_size):
    for x in range(0, width, block_size):
        if (x // block_size + y // block_size) % 2 == 0:
            draw.rectangle([x, y, x + block_size, y + block_size], 
                          outline=dark_accent, width=2)

# Adicionar retângulo central (onde ficaria o logo)
center_x = width // 2
center_y = height // 2
box_width = 800
box_height = 400

# Desenhar caixa com borda
draw.rectangle(
    [center_x - box_width//2, center_y - box_height//2, 
     center_x + box_width//2, center_y + box_height//2],
    outline=gold_color, width=3, fill=(20, 30, 25)
)

# Adicionar texto
try:
    # Tentar usar fonte padrão
    title_font = ImageFont.load_default()
except:
    title_font = ImageFont.load_default()

# Título
text = "The Little Raccoon"
bbox = draw.textbbox((0, 0), text, font=title_font)
text_width = bbox[2] - bbox[0]
text_x = (width - text_width) // 2
draw.text((text_x, center_y - 80), text, fill=gold_color, font=title_font)

# Subtítulo
subtext = "Minecraft Guides & Cozy Adventures"
bbox2 = draw.textbbox((0, 0), subtext, font=title_font)
text_width2 = bbox2[2] - bbox2[0]
text_x2 = (width - text_width2) // 2
draw.text((text_x2, center_y + 60), subtext, fill=accent_color, font=title_font)

# Salvar
output_path = '/sessions/relaxed-laughing-brown/mnt/little-raccoon/public/images/og-default.png'
img.save(output_path)
print(f"✅ Imagem OG criada: {output_path}")
print(f"Tamanho: {width}x{height}px")

