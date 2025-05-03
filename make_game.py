def generate_markdown(title, image_path, tags, game_url, rating, description, layout="game"):
    # Convert numeric rating to ion-icons
    full_stars = int(rating)
    half_star = rating - full_stars >= 0.5
    empty_stars = 5 - full_stars - (1 if half_star else 0)

    stars_html = (
        "<ion-icon name=\"star\"></ion-icon>" * full_stars +
        ("<ion-icon name=\"star-half\"></ion-icon>" if half_star else "") +
        "<ion-icon name=\"star-outline\"></ion-icon>" * empty_stars
    )

    # Bold the title in the description
    bolded_description = description.replace(title, f"**{title}**")

    markdown_content = f"""---
title: {title}
image: {image_path}
tags: {tags}
game_url: {game_url}
rating: {stars_html}
layout: {layout}
---

{bolded_description}
"""

    # Save to file
    filename = title.lower().replace(" ", "-") + ".md"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(markdown_content)

    print(f"Markdown file '{filename}' created successfully.")


if __name__ == "__main__":
    print("Enter game details below:")
    title = input("Game Title: ").strip()
    image_path = input("Image Path (e.g., /images/game.jpg): ").strip()
    tags = input("Tags (comma-separated or single tag): ").strip()
    game_url = input("Game URL: ").strip()
    rating = float(input("Rating (0 to 5, can be decimal): ").strip())
    description = input("Game Description (include the game title once for bolding): ").strip()

    generate_markdown(title, image_path, tags, game_url, rating, description)
