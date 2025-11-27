import re

# Read the HTML file
with open(r'C:\Users\33589\.gemini\antigravity\scratch\ai_course_site\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Pattern to match lesson links that don't already have a lock
# Only match links in Chapter 2 and Chapter 3 sections
pattern = r'(<section class="chapter-card" id="chapter[23]">.*?</section>)'

def add_locks_to_chapter(match):
    chapter_html = match.group(1)
    # Add locks and locked class to all lessons that don't have them
    # Match: <li><a href="#">LESSON_TEXT</a></li> (without 🔒 and without class="locked")
    lesson_pattern = r'(<li><a href="#">(?!.*🔒)([^<]+)</a></li>)'
    
    def add_lock(lesson_match):
        lesson_text = lesson_match.group(2)
        return f'<li><a href="#" class="locked">{lesson_text} 🔒</a></li>'
    
    return re.sub(lesson_pattern, add_lock, chapter_html)

# Apply the transformation
html_with_locks = re.sub(pattern, add_locks_to_chapter, html, flags=re.DOTALL)

# Write back
with open(r'C:\Users\33589\.gemini\antigravity\scratch\ai_course_site\index.html', 'w', encoding='utf-8') as f:
    f.write(html_with_locks)

print("✅ Successfully added locks to all Chapter 2 and 3 lessons!")

# Count total locked lessons
total_locks = len(re.findall(r'🔒', html_with_locks))
print(f"📊 Total lessons with locks: {total_locks}")
